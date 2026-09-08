import { githubData } from "@/data/feed";
import { useEffect, useMemo, useRef } from "react";

const { contributions: c, login } = githubData;

/**
 * Bucket edges are derived from the data rather than hard-coded, so the ramp
 * stays meaningful as the daily volume changes over the years.
 */
function useLevels() {
  return useMemo(() => {
    const active = c.weeks.flat().filter((n) => n > 0).sort((a, b) => a - b);
    const q = (p: number) => active[Math.floor(active.length * p)] ?? 1;
    const edges = [q(0.25), q(0.5), q(0.75)];
    return (n: number) => {
      if (n === 0) return 0;
      if (n <= edges[0]) return 1;
      if (n <= edges[1]) return 2;
      if (n <= edges[2]) return 3;
      return 4;
    };
  }, []);
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Month label per week column, emitted only when the month changes. */
function monthLabels(startISO: string, weekCount: number) {
  const start = new Date(startISO + "T00:00:00Z");
  const out: (string | null)[] = [];
  let last = -1;
  for (let i = 0; i < weekCount; i++) {
    const d = new Date(start);
    d.setUTCDate(d.getUTCDate() + i * 7);
    const m = d.getUTCMonth();
    // Skip the first column so a label never gets clipped at the left edge.
    out.push(m !== last && i > 0 ? MONTHS[m] : null);
    last = m;
  }
  return out;
}

const Contributions = () => {
  const level = useLevels();
  const scroller = useRef<HTMLDivElement>(null);
  const labels = useMemo(() => monthLabels(c.start, c.weeks.length), []);

  // On narrow screens the year overflows; open on the most recent weeks.
  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);

  return (
    <section
      id="github"
      className="reveal card-surface mt-10 p-4 sm:p-5"
    >
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <p className="text-sm">
          <span className="font-semibold tabular-nums">{c.total.toLocaleString()}</span>{" "}
          <span className="text-muted-foreground">contributions in the last year</span>
        </p>
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-sm text-muted-foreground"
        >
          @{login} on GitHub
        </a>
      </div>

      <div ref={scroller} className="no-scrollbar -mx-1 overflow-x-auto px-1 pb-1">
        <div className="w-max">
          <div className="mb-1 flex gap-[3px]">
            {labels.map((m, i) => (
              <div key={i} className="w-[10px] shrink-0">
                {m && (
                  <span className="block -translate-x-px text-[9px] leading-none text-muted-foreground/70">
                    {m}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div
            className="flex gap-[3px]"
            role="img"
            aria-label={`${c.total} GitHub contributions between ${c.start} and ${c.end}`}
          >
            {c.weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((count, di) => (
                  <span
                    key={di}
                    title={`${count} contribution${count === 1 ? "" : "s"}`}
                    className="size-[10px] rounded-[2px]"
                    style={{ background: `hsl(var(--heat-${level(count)}))` }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <p className="text-xs text-muted-foreground">
          <span className="tabular-nums">{c.activeDays}</span> active days ·{" "}
          <span className="tabular-nums">{c.private.toLocaleString()}</span> in private repos
        </p>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground/70">
          Less
          {[0, 1, 2, 3, 4].map((l) => (
            <span
              key={l}
              className="size-[10px] rounded-[2px]"
              style={{ background: `hsl(var(--heat-${l}))` }}
            />
          ))}
          More
        </div>
      </div>
    </section>
  );
};

export default Contributions;
