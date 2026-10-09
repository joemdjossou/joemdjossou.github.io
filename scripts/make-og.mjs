#!/usr/bin/env node
/**
 * Renders public/og.png, the 1200×630 card social platforms show when the site
 * is shared. It is the home page's hero in miniature: same palette, same
 * photos, same numbers.
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
const dataUri = (file, type) =>
  `data:${type};base64,${readFileSync(resolve(root, file)).toString("base64")}`;
const portrait = dataUri("public/profile-about.jpg", "image/jpeg");
const desk = dataUri("public/setup.jpg", "image/jpeg");

// Same palette as the home page's poster tokens in src/index.css.
const html = `<!doctype html><meta charset="utf-8"><style>
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800;900&family=Geist:wght@500;600&display=swap');
  :root{--night:#06103c;--cobalt:#122fb0;--bright:#3d6dff;--peri:#c6d3fb;--pop:#ffc22e;--hot:#ff476b}
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1200px;height:630px;color:#fff;font-family:Geist,system-ui,sans-serif;
       overflow:hidden;position:relative;background-color:var(--cobalt);
       background-image:
         radial-gradient(900px 560px at 92% -10%,rgba(61,109,255,.6),transparent 62%),
         radial-gradient(700px 460px at -6% 100%,rgba(6,16,60,.6),transparent 65%),
         linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),
         linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px),
         linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),
         linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);
       background-size:auto,auto,200px 200px,200px 200px,40px 40px,40px 40px}
  .display{font-family:"Big Shoulders Display",Impact,sans-serif;font-weight:900;
           text-transform:uppercase;line-height:.9}
  .left{position:absolute;left:60px;top:52px;width:700px}
  .brand{display:flex;align-items:center;gap:14px}
  .mark{width:46px;height:46px;border-radius:3px;background:var(--pop);color:var(--night);
        display:flex;align-items:center;justify-content:center;font-size:26px;
        box-shadow:4px 4px 0 var(--night)}
  .site{font-size:22px;font-weight:600;color:var(--peri)}
  .site b{color:#fff;font-weight:600}
  h1{font-size:150px;line-height:.82;margin-top:30px;position:relative;width:fit-content}
  .sticker{position:absolute;left:292px;top:22px;rotate:-3deg;background:var(--pop);
           color:var(--night);font:600 20px Geist,sans-serif;text-transform:none;line-height:1;
           padding:10px 14px;border-radius:3px;box-shadow:4px 4px 0 rgba(6,16,60,.55);
           white-space:nowrap}
  h2{font-size:46px;margin-top:38px}
  h2 em{font-style:normal;color:var(--pop)}
  .desk{position:absolute;right:56px;top:44px;width:330px;height:412px;object-fit:cover;
        rotate:3deg;border:7px solid #fff;box-shadow:11px 11px 0 var(--night)}
  .me{position:absolute;right:296px;top:176px;width:196px;height:245px;object-fit:cover;
      object-position:top;rotate:-6deg;border:7px solid #fff;box-shadow:9px 9px 0 var(--hot)}
  .tile{position:absolute;right:50px;bottom:44px;background:#fff;color:var(--night);
        padding:16px;border-radius:3px;box-shadow:9px 9px 0 var(--pop);display:flex;gap:10px}
  .cell{background:rgba(198,211,251,.5);border-radius:3px;padding:12px 16px 10px;
        text-align:center;min-width:92px}
  .cell b{display:block;font-size:56px;color:var(--cobalt)}
  .cell span{display:block;font-size:15px;font-weight:500;margin-top:8px;opacity:.75}
</style>
<img class="desk" src="${desk}">
<img class="me" src="${portrait}">
<div class="tile">
  <div class="cell"><b class="display">6</b><span>years</span></div>
  <div class="cell"><b class="display">200K+</b><span>downloads</span></div>
  <div class="cell"><b class="display">100K+</b><span>people reached</span></div>
</div>
<div class="left">
  <div class="brand"><div class="mark display">EJ</div>
    <div class="site"><b>joemdjossou</b>.com</div></div>
  <h1 class="display">Josué<br>Djossou
    <span class="sticker">Senior software &amp; data engineer</span></h1>
  <h2 class="display">I build, ship and scale<br><em>software people actually use.</em></h2>
</div>`;

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(600); // let the webfont settle before capture
const png = await page.screenshot({ type: "png" });
await browser.close();

const out = resolve(root, "public/og.png");
writeFileSync(out, png);
console.log(`✓ ${out} (${(png.length / 1024).toFixed(0)} kB)`);
