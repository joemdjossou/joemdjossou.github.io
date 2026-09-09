# Josué Djossou, Portfolio

Personal site of Yaovi Emmanuel Josué Djossou, Senior Software & Data Engineer.

## 🚀 Live

[joemdjossou.com](https://joemdjossou.com)

## 📋 About

The home page is a single editorial card feed: shipped products, build notes,
roles, the stack, and live GitHub repositories, all filterable by tag. It also
hosts the Hymnes et Louanges case study and the legal pages the app stores link
to (see **Routing** below).

## 🛠️ Technologies Used

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Package Manager**: Bun (recommended) or npm
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## ✨ Features

- 🗂️ Tag-filterable card feed with a weight-balanced masonry layout
- 📊 Live GitHub contribution graph and repo cards, refreshed daily
- 🎨 Light/dark theme, warm paper vs. true near-black
- 📱 Responsive from 390px up, with reduced-motion support throughout
- 🖼️ Auto-generated Open Graph card built from the same data as the page
- 📄 Hymnes et Louanges case study + multilingual legal pages on clean URLs

## 🔌 Live data

`src/data/github.json` is generated from the GitHub GraphQL API and committed, so
the site always builds; the checked-in copy is the fallback if a refresh fails.

```bash
npm run data:github   # regenerate from the API (needs `gh auth login` or GITHUB_TOKEN)
```

The deploy workflow re-runs this on every push and on a daily cron, so the
contribution graph and repo cards stay current without anyone pushing a commit.

`public/og.png` is rendered from the same JSON. Regenerate it when the headline
or the stats change:

```bash
npm i --no-save playwright && npm run og
```

## 🎬 Hero footage

The hero runs on `public/setup.jpg` with a slow drift and a live Lomé clock.
To switch it to video, drop web-encoded files in `public/` and point
`VIDEO_SRC` in `src/components/site/SetupScene.tsx` at them (e.g. `"/setup"`
loads `setup.webm` then `setup.mp4`). While it's `null` the scene issues no
video requests at all. A reasonable encode:

```bash
ffmpeg -i raw.MOV -t 20 -an -vf "scale=1920:-2,fps=24" -crf 30 public/setup.mp4
ffmpeg -i public/setup.mp4 -c:v libvpx-vp9 -b:v 0 -crf 38 -an public/setup.webm
```

## 🧭 Routing

Hash-free client-side routing lives in `src/App.tsx`. Deep links survive GitHub
Pages via the SPA fallback in `public/404.html` plus the decoder at the top of
`index.html`. The `/hymnes-app/...` paths are the URLs declared to Apple App
Review and Google Play, so **do not rename them**.

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js (v18 or higher) OR Bun (recommended)
- npm, yarn, or bun package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/joemdjossou/joemdjossou.github.io.git
```

2. Navigate to project directory

```bash
cd joemdjossou.github.io
```

3. Install dependencies

**Using Bun (recommended):**

```bash
bun install
```

**Using npm:**

```bash
npm install
```

4. Start development server

**Using Bun:**

```bash
bun run dev
```

**Using npm:**

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:8080`

## 📝 Available Scripts

**With Bun:**

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint
- `bun run data:github` - Refresh the GitHub data snapshot
- `bun run og` - Re-render the Open Graph card
- `bun run deploy` - Deploy to GitHub Pages

**With npm:**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run data:github` - Refresh the GitHub data snapshot
- `npm run og` - Re-render the Open Graph card
- `npm run deploy` - Deploy to GitHub Pages

## 🗂️ Editing the content

Everything in the feed is a card in `src/data/feed.ts`: projects, build notes,
roles, stats, the stack and education. Repo cards are generated from
`github.json`, so pushing a described repo is enough to put it on the site.

Each card carries a `weight`, a height hint (1 unit ≈ 100px) the masonry
balancer uses to keep columns even without measuring the DOM. If a card renders
much taller or shorter than its neighbours suggest, adjust its weight.

Page structure lives in `src/components/site/`:

| File | Role |
| --- | --- |
| `Header.tsx` | Sticky nav, socials, theme toggle |
| `Intro.tsx` | Avatar, headline, CTAs |
| `Contributions.tsx` | GitHub heatmap |
| `Feed.tsx` | Tag rail, masonry balancer, load-more |
| `FeedCard.tsx` | One renderer per card kind |
| `SetupScene.tsx` | Hero backdrop, live clock, video hooks |
| `PageHeader.tsx` | Banner for every routed sub-page |
| `About.tsx` / `Footer.tsx` | Long-form bio and site footer |

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions with Bun for faster builds and better dependency resolution.

### Automatic Deployment

- Push to `main` or `master` branch triggers automatic deployment
- Built with Bun for optimal performance
- Deployed to `https://joemdjossou.github.io`

### Manual Deployment

```bash
bun run deploy
```

## 📧 Contact

- **Email**: joemdjossou@gmail.com
- **Phone**: +228 93 14 27 33
- **GitHub**: [github.com/joemdjossou](https://github.com/joemdjossou)
- **LinkedIn**: [linkedin.com/in/joemdjossou](https://linkedin.com/in/joemdjossou)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built by Josué Djossou with React, TypeScript, Tailwind CSS & Bun
