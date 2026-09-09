#!/usr/bin/env node
/**
 * Renders public/og.png, the 1200×630 card social platforms show when the site
 * is shared. Built from the same data as the home page, so the contribution
 * strip on the card is the real one.
 *
 * Playwright isn't a project dependency; this is a manual, occasional script.
 * Run it after the headline or the stats change:
 *   npm i --no-save playwright && node scripts/make-og.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const gh = JSON.parse(readFileSync(resolve(root, "src/data/github.json"), "utf8"));

const active = gh.contributions.weeks.flat().filter((n) => n > 0).sort((a, b) => a - b);
const q = (p) => active[Math.floor(active.length * p)] ?? 1;
const edges = [q(0.25), q(0.5), q(0.75)];
const level = (n) => (n === 0 ? 0 : n <= edges[0] ? 1 : n <= edges[1] ? 2 : n <= edges[2] ? 3 : 4);
const HEAT = ["#1e1e1e", "#123a63", "#1668b8", "#2b8bfa", "#7ab8ff"];

const avatar = `data:image/jpeg;base64,${Buffer.from(
  await (await fetch(`${gh.avatarUrl}&s=240`)).arrayBuffer()
).toString("base64")}`;

const heatmap = gh.contributions.weeks
  .map(
    (week) =>
      `<div class="col">${week
        .map((n) => `<i style="background:${HEAT[level(n)]}"></i>`)
        .join("")}</div>`
  )
  .join("");

const html = `<!doctype html><meta charset="utf-8"><style>
  @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:#0a0a0a;color:#f5f5f5;
       font-family:Geist,system-ui,sans-serif;display:flex;flex-direction:column;
       justify-content:space-between;padding:64px;overflow:hidden;position:relative}
  .glow{position:absolute;top:-320px;right:-220px;width:760px;height:760px;border-radius:50%;
        background:radial-gradient(circle,rgba(43,139,250,.28),transparent 68%);filter:blur(20px)}
  .top{display:flex;align-items:center;gap:20px;position:relative}
  img{width:76px;height:76px;border-radius:50%;object-fit:cover;border:1px solid #2a2a2a}
  .who{font-size:26px;font-weight:600;letter-spacing:-.02em}
  .where{font-size:18px;color:#8a8a8a;margin-top:3px}
  h1{font-size:62px;line-height:1.06;font-weight:600;letter-spacing:-.035em;
     max-width:940px;position:relative}
  h1 em{font-style:normal;color:#2b8bfa}
  .stats{display:flex;gap:56px;position:relative}
  .stat b{display:block;font-size:34px;font-weight:600;letter-spacing:-.02em}
  .stat span{font-size:16px;color:#8a8a8a}
  .foot{display:flex;align-items:flex-end;justify-content:space-between;gap:40px;position:relative}
  .heat{display:flex;gap:3px;opacity:.85}
  .col{display:flex;flex-direction:column;gap:3px}
  .col i{width:8px;height:8px;border-radius:2px;display:block}
  .url{font-size:19px;color:#8a8a8a;white-space:nowrap}
  .url b{color:#f5f5f5;font-weight:500}
</style>
<div class="glow"></div>
<div class="top">
  <img src="${avatar}">
  <div><div class="who">Emmanuel Josué Djossou</div>
  <div class="where">Senior Software &amp; Data Engineer · Lomé, Togo · Remote</div></div>
</div>

<h1>I build, ship, and scale<br>software people <em>actually use</em>.</h1>

<div class="stats">
  <div class="stat"><b>200K+</b><span>app downloads</span></div>
  <div class="stat"><b>100K+</b><span>people reached</span></div>
  <div class="stat"><b>${gh.contributions.total.toLocaleString()}</b><span>contributions / year</span></div>
</div>

<div class="foot">
  <div class="heat">${heatmap}</div>
  <div class="url"><b>joemdjossou</b>.com</div>
</div>`;

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle" });
await page.waitForTimeout(600); // let the webfont settle before capture
const png = await page.screenshot({ type: "png" });
await browser.close();

const out = resolve(root, "public/og.png");
writeFileSync(out, png);
console.log(`✓ ${out} (${(png.length / 1024).toFixed(0)} kB)`);
