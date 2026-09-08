import github from "./github.json";

/**
 * Everything on the home page is one card in one feed. A card declares its kind,
 * its tags and a `weight` — a rough height hint the masonry balancer uses to keep
 * the columns even without measuring the DOM.
 */
export type CardKind =
  | "pitch"
  | "project"
  | "repo"
  | "note"
  | "role"
  | "stat"
  | "stack"
  | "education";

export interface BaseCard {
  id: string;
  kind: CardKind;
  tags: string[];
  /** Relative height hint for the column balancer. ~1 unit ≈ 100px. */
  weight: number;
  /** Sort key — newest first. */
  date?: string;
}

export interface ProjectCard extends BaseCard {
  kind: "project";
  name: string;
  title: string;
  blurb: string;
  /** Square app icon, rendered on a tinted plate. */
  icon?: string;
  /** Full-bleed cover image. */
  cover?: string;
  /** Accent used behind the icon plate. */
  tint?: string;
  status?: string;
  links: { label: string; href: string }[];
}

export interface NoteCard extends BaseCard {
  kind: "note";
  title: string;
  body: string;
  metric?: { value: string; label: string };
}

export interface RoleCard extends BaseCard {
  kind: "role";
  title: string;
  company: string;
  period: string;
  location: string;
  body: string;
  current?: boolean;
  /** Company mark, shown beside the role title. */
  logo?: string;
  /** Apps that shipped under this role — rendered as a row of store icons. */
  apps?: { name: string; icon: string; url?: string }[];
  /** Optional outbound links, e.g. the company's product site. */
  links?: { label: string; href: string }[];
}

export interface StatCard extends BaseCard {
  kind: "stat";
  value: string;
  label: string;
  caption: string;
}

export interface RepoCard extends BaseCard {
  kind: "repo";
  name: string;
  description: string;
  url: string;
  language: string | null;
  languageColor: string | null;
  stars: number;
  pushedAt: string;
}

export interface StackCard extends BaseCard {
  kind: "stack";
  groups: { label: string; items: string[] }[];
}

export interface EducationCard extends BaseCard {
  kind: "education";
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

export interface PitchCard extends BaseCard {
  kind: "pitch";
}

export type Card =
  | ProjectCard
  | NoteCard
  | RoleCard
  | StatCard
  | RepoCard
  | StackCard
  | EducationCard
  | PitchCard;

/* -------------------------------------------------------------------------- */
/* Hand-written cards                                                          */
/* -------------------------------------------------------------------------- */

const projects: ProjectCard[] = [
  {
    id: "hymnes",
    kind: "project",
    date: "2025-12-01",
    tags: ["flutter", "mobile", "shipped"],
    weight: 4.9,
    name: "Hymnes et Louanges",
    title: "A five-language worship app, live on both stores",
    blurb:
      "SATB audio, musical scores, offline library, cloud sync and full-text search across French, Ewe, Spanish, Portuguese and English. Shipped solo — design, Flutter app, Firebase backend and both store listings.",
    icon: "/hymnes-app-icon.jpg",
    tint: "linear-gradient(140deg, #1e3a8a, #0f172a)",
    status: "Live",
    links: [
      { label: "Case study", href: "/hymnes-app" },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/hymnes-et-louanges-adventiste/id6753330258",
      },
    ],
  },
  {
    id: "studystats",
    kind: "project",
    date: "2024-03-01",
    tags: ["flutter", "mobile", "shipped"],
    weight: 4.4,
    name: "StudyStats",
    title: "GPA analytics for students, on iOS and Android",
    blurb:
      "Grade tracking, performance analysis and goal setting with study recommendations. Co-built and launched with the GDSC Babcock team.",
    icon: "/logos/studystats.png",
    tint: "linear-gradient(140deg, #1d4ed8, #0f172a)",
    status: "Live",
    links: [
      { label: "App Store", href: "https://apps.apple.com/ng/app/study-stats-app/id6477740443" },
    ],
  },
  {
    id: "zovu-kanban",
    kind: "project",
    date: "2026-09-07",
    tags: ["web", "backend"],
    weight: 4.9,
    name: "Zovu Kanban",
    title: "A real-time collaborative board, built in six days",
    blurb:
      "Angular 22 and NgRx over a NestJS 11 + Firebase backend: drag-and-drop across four columns, live multi-user updates, per-task discussion threads, role-based access enforced at three layers, an offline queue and push for mentions and due dates.",
    cover: "/covers/zovu.jpg",
    tint: "linear-gradient(140deg, #1e293b, #020617)",
    status: "Live",
    links: [
      { label: "Live app", href: "https://zovu-kanban-dev.web.app" },
      { label: "API docs", href: "https://zovu-kanban-api.onrender.com/api/docs" },
    ],
  },
  {
    id: "artisan-connect",
    kind: "project",
    date: "2026-05-07",
    tags: ["web", "backend"],
    weight: 4.6,
    name: "Artisan Connect",
    title: "A marketplace for skilled trades",
    blurb:
      "React and TypeScript on Supabase — Postgres with row-level security, role-aware auth for clients, artisans and admins, and the vetting and dispute workflows that keep a two-sided marketplace honest.",
    cover: "/covers/artisan.jpg",
    tint: "linear-gradient(140deg, #7c2d12, #1c0a05)",
    status: "Live",
    links: [{ label: "Live app", href: "https://artisan-connect-blush.vercel.app" }],
  },
  {
    id: "isdi-dictee",
    kind: "project",
    date: "2026-07-24",
    tags: ["web"],
    weight: 4.3,
    name: "Concours de Dictée ISDI",
    title: "Registration for a national dictation contest",
    blurb:
      "A multi-step French signup — identity, proof of eligibility, then payment declared over T-Money or Flooz — with document upload, on React + Vite over a Node and Express API.",
    cover: "/covers/isdi.jpg",
    tint: "linear-gradient(140deg, #7f1d1d, #180404)",
    status: "Live",
    links: [{ label: "Live app", href: "https://isdi-competition-de-dictee.vercel.app" }],
  },
  {
    id: "ai-fitness",
    kind: "project",
    date: "2026-08-20",
    tags: ["ai", "mobile", "flutter", "go"],
    weight: 3.8,
    name: "AI Fitness & Health",
    title: "Coaching that reads the whole picture",
    blurb:
      "A Flutter app over a Go API that turns workout, sleep and nutrition signals into adaptive training plans — with an Apple Watch companion feeding it live.",
    icon: "/logos/ai-fitness.png",
    tint: "linear-gradient(140deg, #0b1f14, #050807)",
    status: "In progress",
    links: [],
  },
  {
    id: "affection",
    kind: "project",
    date: "2025-08-01",
    tags: ["ai", "mobile", "flutter"],
    weight: 4.4,
    name: "Affection Alerts",
    title: "On-device NLP over your chat history",
    blurb:
      "Turns a WhatsApp export into a curated archive of the warmest messages, using a multi-weighted keyword model that runs entirely on the phone — nothing leaves the device.",
    tint: "linear-gradient(140deg, #be123c, #4c0519)",
    status: "In progress",
    links: [{ label: "Code", href: "https://github.com/joemdjossou/affection_alerts" }],
  },
];

const notes: NoteCard[] = [
  {
    id: "note-retention",
    kind: "note",
    date: "2026-06-18",
    tags: ["mobile", "flutter", "leadership"],
    weight: 4.1,
    title: "Retention more than doubled at EdoMatch",
    body: "Eighteen months leading mobile: rebuilt the onboarding path, moved analytics onto PostHog so we could actually see where people dropped, and shipped against what the funnel said instead of what we assumed.",
    metric: { value: "+107%", label: "retention" },
  },
  {
    id: "note-cicd",
    kind: "note",
    date: "2025-01-20",
    tags: ["backend", "leadership"],
    weight: 3.2,
    title: "Three days of release work, down to four hours",
    body: "Automated the whole path from merge to store at 01Supplies — build, sign, test, upload. Test coverage landed at 78% and production incidents dropped 43% over the following quarter.",
    metric: { value: "3d → 4h", label: "deploy time" },
  },
  {
    id: "note-teaching",
    kind: "note",
    date: "2026-02-10",
    tags: ["ai", "teaching"],
    weight: 3.9,
    title: "Teaching AI as an engineering practice, not a demo",
    body: "Built and ran TDEV's applied AI track for working developers in Lomé — prompt design through evaluation, deployment and cost. Every session ended with something running, not a slide.",
  },
  {
    id: "note-pipelines",
    kind: "note",
    date: "2026-04-05",
    tags: ["data-engineering", "backend"],
    weight: 3.5,
    title: "Pipelines that survive the source changing",
    body: "Most freelance data work fails at the seams: an API adds a field, a sheet gets renamed, and reporting quietly goes wrong. Schema versioning and contract tests at ingest turn that from an outage into a diff.",
  },
];

const roles: RoleCard[] = [
  {
    id: "role-vaultsplit",
    kind: "role",
    date: "2026-09-01",
    tags: ["fintech", "mobile", "flutter"],
    weight: 3.2,
    title: "Senior Mobile Engineer",
    company: "VaultSplit",
    period: "2026 — Present",
    location: "Remote",
    body: "Autonomous finance for founders — revenue split into vaults on arrival, reconciled in a double-entry ledger, with an AI CFO on top. I ship the mobile surface: release pipeline, accessibility and payments.",
    current: true,
    links: [{ label: "vaultsplit.co", href: "https://vaultsplit.co" }],
  },
  {
    id: "role-upwork",
    kind: "role",
    date: "2020-09-01",
    tags: ["data-engineering", "backend"],
    weight: 2.4,
    title: "Senior Full-Stack & Data Engineer",
    company: "Independent",
    period: "2020 — Present",
    location: "Remote",
    body: "ETL/ELT pipelines from REST, webhook and Apps Script feeds into MongoDB and SQL, plus Java (Spring Boot) and Node.js services behind them.",
    current: true,
  },
  {
    id: "role-edomatch",
    kind: "role",
    date: "2025-02-01",
    tags: ["mobile", "flutter", "leadership"],
    weight: 2.9,
    title: "Lead Mobile Engineer",
    company: "EdoMatch",
    period: "2025 — 2026",
    location: "Lomé, Togo",
    body: "Led mobile to 100K+ downloads and 70K+ users. AWS integration, PostHog analytics, AI features, and mentoring the junior engineers.",
    logo: "/logos/edomatch.png",
    apps: [
      {
        name: "EdoMatch",
        icon: "/logos/edomatch.png",
        url: "https://apps.apple.com/us/app/edomatch-ai-job-search/id6498934535",
      },
    ],
  },
  {
    id: "role-01supplies",
    kind: "role",
    date: "2024-10-01",
    tags: ["mobile", "flutter"],
    weight: 2.7,
    title: "Senior Mobile Engineer",
    company: "01Supplies",
    period: "2024 — 2025",
    location: "Cotonou, Benin",
    body: "Three apps released across iOS and Android, engagement up 53%, and the CI/CD pipeline that made it repeatable.",
    logo: "/logos/01supplies.png",
    apps: [
      {
        name: "01 Supplies",
        icon: "/logos/01supplies.png",
        url: "https://apps.apple.com/us/app/01-supplies/id6476608761",
      },
      {
        name: "01 Vendors",
        icon: "/logos/01vendors.png",
        url: "https://apps.apple.com/us/app/01-vendors/id6477450302",
      },
      {
        name: "01 Driver",
        icon: "/logos/01driver.png",
        url: "https://apps.apple.com/us/app/01-driver/id6473236113",
      },
    ],
  },
];

const stats: StatCard[] = [
  {
    id: "stat-downloads",
    kind: "stat",
    date: "2026-09-01",
    tags: ["shipped", "mobile"],
    weight: 1.6,
    value: "200K+",
    label: "app downloads",
    caption: "Across the apps I've shipped to the App Store and Google Play.",
  },
  {
    id: "stat-users",
    kind: "stat",
    date: "2026-09-01",
    tags: ["shipped", "mobile"],
    weight: 1.6,
    value: "100K+",
    label: "people reached",
    caption: "Monthly users across products I've built or led.",
  },
];

const stack: StackCard = {
  id: "stack",
  kind: "stack",
  date: "2026-09-01",
  tags: ["web", "backend", "mobile", "data-engineering", "ai"],
  weight: 6.9,
  groups: [
    { label: "Web", items: ["React", "TypeScript", "Angular", "NgRx", "Vue / Nuxt", "Vite", "Tailwind"] },
    { label: "Mobile", items: ["Flutter", "Dart", "iOS", "Android", "Clean Architecture"] },
    { label: "Backend", items: ["Java", "Spring Boot", "Node.js", "Go", "NestJS", "REST"] },
    { label: "Data", items: ["ETL / ELT", "PostgreSQL", "MongoDB", "Redis", "BI dashboards"] },
    { label: "AI", items: ["NLP", "On-device ML", "Prompt engineering", "Evals"] },
    { label: "Platform", items: ["AWS", "Docker", "Kubernetes", "Firebase", "GitHub Actions"] },
  ],
};

const education: EducationCard = {
  id: "education",
  kind: "education",
  date: "2024-05-01",
  tags: ["teaching"],
  weight: 2.0,
  degree: "BSc Computer Science",
  institution: "Babcock University",
  period: "2020 — 2024",
  detail: "Information Systems minor · 3.39/4.0 · final year project on a mental health application.",
};

const pitch: PitchCard = {
  id: "pitch",
  kind: "pitch",
  tags: [],
  weight: 4.7,
};

/* -------------------------------------------------------------------------- */
/* GitHub-derived cards                                                        */
/* -------------------------------------------------------------------------- */

/** Maps a repo's primary language onto the feed's tag vocabulary. */
const LANGUAGE_TAGS: Record<string, string[]> = {
  Dart: ["flutter", "mobile"],
  Go: ["backend", "go"],
  Python: ["data-engineering", "backend"],
  TypeScript: ["web"],
  JavaScript: ["web"],
  "Objective-C": ["mobile"],
  "C++": ["mobile"],
};

const repos: RepoCard[] = github.repos
  .filter((r) => r.description)
  .slice(0, 10)
  .map((r) => ({
    id: `repo-${r.name}`,
    kind: "repo" as const,
    date: r.pushedAt,
    tags: ["open-source", ...(LANGUAGE_TAGS[r.language ?? ""] ?? [])],
    // Fitted to measured repo-card heights: a fixed chrome plus wrapped
    // description text, capped so a long README blurb can't dominate a column.
    weight: 1.4 + Math.min((r.description?.length ?? 0) / 169, 2.0),
    name: r.name,
    description: r.description as string,
    url: r.url,
    language: r.language,
    languageColor: r.languageColor,
    stars: r.stars,
    pushedAt: r.pushedAt,
  }));

/* -------------------------------------------------------------------------- */

/**
 * The lead of the feed is hand-ordered rather than sorted — these are the cards
 * that should be seen first, in this sequence, regardless of date. Everything
 * not named here falls through to the chronological tail below.
 */
const LEAD_ORDER = [
  "hymnes",
  "role-edomatch",
  "studystats",
  "ai-fitness",
  "role-01supplies",
  "isdi-dictee",
  "education",
];

const everything: Card[] = [
  ...projects,
  ...notes,
  ...roles,
  ...stats,
  stack,
  education,
  ...repos,
];

const byId = new Map(everything.map((c) => [c.id, c]));

const lead: Card[] = LEAD_ORDER.map((id) => byId.get(id)).filter(
  (c): c is Card => Boolean(c)
);
const leadIds = new Set(lead.map((c) => c.id));

const rest: Card[] = everything
  .filter((c) => !leadIds.has(c.id))
  .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

// The pitch stays pinned at the very top: it's the call to action, not an
// entry in the work list.
export const cards: Card[] = [pitch, ...lead, ...rest];

/**
 * Ids that must stay at the top of the feed. The masonry packer uses this to
 * fill the first rows with them before it balances anything else in.
 */
export const leadCardIds = new Set<string>([pitch.id, ...lead.map((c) => c.id)]);

export const TAG_LABELS: Record<string, string> = {
  flutter: "flutter",
  mobile: "mobile",
  ai: "ai",
  "data-engineering": "data",
  backend: "backend",
  shipped: "shipped",
  "open-source": "open-source",
  go: "go",
  web: "web",
  leadership: "leadership",
  fintech: "fintech",
  teaching: "teaching",
};

/** Tags ordered by how many cards carry them — the filter rail's order. */
export const tagCounts: { tag: string; count: number }[] = Object.entries(
  cards.reduce<Record<string, number>>((acc, card) => {
    for (const tag of card.tags) acc[tag] = (acc[tag] ?? 0) + 1;
    return acc;
  }, {})
)
  .map(([tag, count]) => ({ tag, count }))
  .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));

export const githubData = github;
