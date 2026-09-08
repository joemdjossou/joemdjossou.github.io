#!/usr/bin/env node
/**
 * Regenerates src/data/github.json from the live GitHub API.
 *
 * Run locally with `gh` logged in (the script borrows its token), or in CI with
 * GITHUB_TOKEN / GH_TOKEN in the environment. The generated file is committed so
 * the site always builds — with or without network access — and the daily
 * workflow keeps the numbers fresh.
 *
 *   node scripts/fetch-github.mjs
 */
import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const LOGIN = "joemdjossou";
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../src/data/github.json");

/** Repos that are noise on a portfolio (course work, forks of templates, scratch). */
const EXCLUDE = new Set([
  "joemdjossou",
  "joemdjossou.github.io",
  "privacy_policy",
  "react-app",
  "login_ui_app",
  "chat_bee_app",
  "flask_backend_db",
  "bumentalhealth",
  "joes-digital-glow-up",
]);

function token() {
  const fromEnv = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (fromEnv) return fromEnv;
  try {
    return execSync("gh auth token", { encoding: "utf8" }).trim();
  } catch {
    throw new Error("No GitHub token: set GITHUB_TOKEN or log in with `gh auth login`.");
  }
}

async function graphql(query, auth) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { authorization: `bearer ${auth}`, "content-type": "application/json" },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) throw new Error(`GitHub GraphQL ${res.status}: ${await res.text()}`);
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

const QUERY = `{
  user(login: "${LOGIN}") {
    login name avatarUrl bio location company
    followers { totalCount }
    contributionsCollection {
      totalCommitContributions
      totalPullRequestContributions
      restrictedContributionsCount
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount } }
      }
    }
    repositories(first: 100, privacy: PUBLIC, ownerAffiliations: OWNER, isFork: false,
                 orderBy: { field: PUSHED_AT, direction: DESC }) {
      totalCount
      nodes {
        name description url homepageUrl stargazerCount forkCount pushedAt isArchived
        primaryLanguage { name color }
        repositoryTopics(first: 8) { nodes { topic { name } } }
      }
    }
  }
}`;

const data = await graphql(QUERY, token());
const u = data.user;
const cal = u.contributionsCollection.contributionCalendar;
const days = cal.weeks.flatMap((w) => w.contributionDays);

const payload = {
  generatedAt: new Date().toISOString(),
  login: u.login,
  name: u.name,
  avatarUrl: u.avatarUrl,
  bio: u.bio,
  followers: u.followers.totalCount,
  publicRepos: u.repositories.totalCount,
  contributions: {
    total: cal.totalContributions,
    commits: u.contributionsCollection.totalCommitContributions,
    pullRequests: u.contributionsCollection.totalPullRequestContributions,
    private: u.contributionsCollection.restrictedContributionsCount,
    activeDays: days.filter((d) => d.contributionCount > 0).length,
    max: Math.max(...days.map((d) => d.contributionCount)),
    start: days[0].date,
    end: days[days.length - 1].date,
    // One array per week (Sun→Sat) so the heatmap renders as plain columns.
    weeks: cal.weeks.map((w) => w.contributionDays.map((d) => d.contributionCount)),
  },
  repos: u.repositories.nodes
    .filter((r) => !EXCLUDE.has(r.name) && !r.isArchived)
    .map((r) => ({
      name: r.name,
      description: r.description,
      url: r.url,
      homepage: r.homepageUrl || null,
      language: r.primaryLanguage?.name ?? null,
      languageColor: r.primaryLanguage?.color ?? null,
      stars: r.stargazerCount,
      forks: r.forkCount,
      pushedAt: r.pushedAt,
      topics: r.repositoryTopics.nodes.map((n) => n.topic.name),
    })),
};

writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n");
console.log(
  `✓ ${OUT}\n  ${payload.contributions.total} contributions · ${payload.repos.length} repos · ${payload.contributions.activeDays} active days`
);
