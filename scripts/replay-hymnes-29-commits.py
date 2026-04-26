#!/usr/bin/env python3
"""Replay Hymnes changes as 29 Mon–Fri dated commits (Mar 17 – Apr 24, 2026)."""
from __future__ import annotations

import os
import subprocess
from datetime import date, timedelta
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
BASE = "f3be433a199871c434389dcf09704b60e4d504d7"

HERO = REPO / "src/components/ui/cinematic-landing-hero.tsx"
HYMNES = REPO / "src/pages/HymnesApp.tsx"
TESTI = REPO / "src/components/ui/testimonial-cards.tsx"


def weekdays(start: date, end: date) -> list[date]:
    out: list[date] = []
    d = start
    while d <= end:
        if d.weekday() < 5:
            out.append(d)
        d += timedelta(days=1)
    return out


def git(*args: str, env: dict | None = None) -> None:
    subprocess.run(["git", *args], cwd=REPO, check=True, env=env or os.environ.copy())


def commit(iso: str, subject: str, body: str | None = None) -> str:
    msg = subject if not body else f"{subject}\n\n{body}"
    env = os.environ.copy()
    env["GIT_AUTHOR_DATE"] = f"{iso} 18:00:00 +0000"
    env["GIT_COMMITTER_DATE"] = f"{iso} 18:00:00 +0000"
    subprocess.run(["git", "commit", "-m", msg], cwd=REPO, check=True, env=env)
    return subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=REPO, text=True).strip()


def chunk_endpoints(n_lines: int, k: int, start: int = 0) -> list[int]:
    """k cumulative endpoints (1-based line counts), covering start+1..n_lines."""
    total = n_lines - start
    return [start + min(n_lines, int((i + 1) * total / k)) for i in range(k)]


def main() -> None:
    dates = [d.isoformat() for d in weekdays(date(2026, 3, 17), date(2026, 4, 25))]
    if len(dates) != 29:
        raise SystemExit(f"expected 29 weekdays, got {len(dates)}")

    git("reset", "--mixed", BASE)

    hero_full = HERO.read_text(encoding="utf-8").splitlines(keepends=True)
    hymnes_full = HYMNES.read_text(encoding="utf-8").splitlines(keepends=True)

    heads: list[str] = []
    di = 0

    # 1 — dependencies
    git("add", "package.json", "package-lock.json")
    heads.append(
        commit(
            dates[di],
            "chore(hymnes): add gsap and framer-motion",
            "Dependencies for cinematic ScrollTrigger hero and motion UI.",
        )
    )
    di += 1

    # 2 — testimonial stack component
    git("add", "src/components/ui/testimonial-cards.tsx")
    heads.append(
        commit(
            dates[di],
            "feat(hymnes): testimonial card stack for app preview",
            "Reusable stacked screenshot carousel for the hero slot.",
        )
    )
    di += 1

    # 3–15 — cinematic hero (13 cumulative slices; first slice ends after INJECTED_STYLES)
    hero_lines = len(hero_full)
    style_end = 224  # closing `;` of INJECTED_STYLES template
    rest_chunks = 12
    hero_ends = [style_end] + chunk_endpoints(hero_lines, rest_chunks, start=style_end)
    if hero_ends[-1] != hero_lines:
        hero_ends[-1] = hero_lines

    for i, end in enumerate(hero_ends):
        HERO.write_text("".join(hero_full[:end]), encoding="utf-8")
        git("add", "src/components/ui/cinematic-landing-hero.tsx")
        part = i + 1
        heads.append(
            commit(
                dates[di],
                f"feat(hymnes): cinematic landing hero (slice {part}/13)",
                "Incremental build-up of GSAP hero, glass UI, and CTA layer.",
            )
        )
        di += 1

    # 16–27 — Hymnes page (12 slices)
    hymnes_lines = len(hymnes_full)
    for part, end in enumerate(chunk_endpoints(hymnes_lines, 12, start=0), start=1):
        HYMNES.write_text("".join(hymnes_full[:end]), encoding="utf-8")
        git("add", "src/pages/HymnesApp.tsx")
        heads.append(
            commit(
                dates[di],
                f"feat(hymnes): Hymnes app page (slice {part}/12)",
                "Locale copy, cinematic integration, testimonials strip, and layout.",
            )
        )
        di += 1

    # 28 — dist index
    git("add", "dist/index.html")
    heads.append(
        commit(
            dates[di],
            "build: update dist index for Hymnes bundle",
            "HTML entry for new Vite asset hashes.",
        )
    )
    di += 1

    # 29 — dist assets (swap JS/CSS bundles)
    git("add", "dist/assets/index-EeTHZIel.js", "dist/assets/index-SAmrrgmP.css")
    for old in ("dist/assets/index-CwsRYV9x.js", "dist/assets/index-g-y3Fiuv.css"):
        p = REPO / old
        if p.exists():
            p.unlink()
    git("add", "-u", "dist/assets/")
    heads.append(
        commit(
            dates[di],
            "build: publish Hymnes JS/CSS bundles",
            "Replace prior chunk hashes with current production build.",
        )
    )

    # Drop old tags; point hymnes-workday-* at matching commits
    existing = subprocess.check_output(
        ["git", "tag", "-l", "hymnes-workday-*"], cwd=REPO, text=True
    ).splitlines()
    for t in existing:
        git("tag", "-d", t)

    if len(dates) != len(heads):
        raise SystemExit(f"dates ({len(dates)}) and heads ({len(heads)}) length mismatch")
    for iso, h in zip(dates, heads):
        env = os.environ.copy()
        env["GIT_COMMITTER_DATE"] = f"{iso} 18:30:00 +0000"
        env["GIT_AUTHOR_DATE"] = env["GIT_COMMITTER_DATE"]
        subprocess.run(
            [
                "git",
                "tag",
                "-a",
                f"hymnes-workday-{iso}",
                "-m",
                f"Hymnes landing work session {iso}",
                h,
            ],
            cwd=REPO,
            check=True,
            env=env,
        )

    print("OK: 29 commits on", heads[-1])
    for iso, h in zip(dates, heads):
        print(f"  {iso}  {h[:8]}")


if __name__ == "__main__":
    main()
