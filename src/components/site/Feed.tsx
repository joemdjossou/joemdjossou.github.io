import FeedCard from "@/components/site/FeedCard";
import type { Card } from "@/data/feed";
import { cards, leadCardIds, tagCounts } from "@/data/feed";
import { useEffect, useMemo, useRef, useState } from "react";

const PAGE = 12;

/** Column count from viewport width, matching Tailwind's sm/lg breakpoints. */
function useColumnCount() {
  const [cols, setCols] = useState(() =>
    typeof window === "undefined"
      ? 3
      : window.innerWidth >= 1024
        ? 3
        : window.innerWidth >= 640
          ? 2
          : 1
  );

  useEffect(() => {
    const update = () =>
      setCols(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cols;
}

/**
 * Packs cards into columns using their `weight` height hint, so the layout is
 * balanced on first paint instead of reflowing once images load.
 *
 * Two passes, because balance alone doesn't respect editorial order:
 *
 * 1. The lead cards go in first, dealt across the columns left to right. That
 *    makes them read 1-2-3 along the top rows, which is what "put these first"
 *    means on a multi-column layout — placing them by height instead would
 *    scatter the order.
 * 2. Everything else is placed longest-first (LPT). Assigning the tallest
 *    remaining card to the shortest column is what keeps the columns even;
 *    doing it in feed order instead leaves a tall card arriving last with
 *    nowhere good to go.
 *
 * Each column is then sorted by feed position. Lead cards sort above the rest
 * automatically, since they occupy the lowest indices.
 */
function balance(items: Card[], cols: number, leadCount: number): Card[][] {
  const columns: number[][] = Array.from({ length: cols }, () => []);
  const heights: number[] = new Array(cols).fill(0);

  const place = (index: number, weight: number, column?: number) => {
    let target = column ?? 0;
    if (column === undefined) {
      for (let i = 1; i < cols; i++) if (heights[i] < heights[target]) target = i;
    }
    columns[target].push(index);
    heights[target] += weight;
  };

  // Pass 1 — the lead block, dealt round-robin so row order matches feed order.
  items.slice(0, leadCount).forEach((item, index) => {
    place(index, item.weight, index % cols);
  });

  // Pass 2 — everything else, tallest first.
  items
    .slice(leadCount)
    .map((item, i) => ({ item, index: leadCount + i }))
    .sort((a, b) => b.item.weight - a.item.weight)
    .forEach(({ item, index }) => place(index, item.weight));

  return columns.map((column) => column.sort((a, b) => a - b).map((i) => items[i]));
}

const Feed = () => {
  const [active, setActive] = useState<string | null>(null);
  const [limit, setLimit] = useState(PAGE);
  const cols = useColumnCount();
  const railRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (active ? cards.filter((c) => c.tags.includes(active)) : cards),
    [active]
  );

  const visible = filtered.slice(0, limit);
  // Lead cards sit at the front of the feed, so filtering preserves the block —
  // count how many survived rather than assuming a fixed size.
  const leadCount = useMemo(() => {
    let n = 0;
    while (n < visible.length && leadCardIds.has(visible[n].id)) n++;
    return n;
  }, [visible]);
  const columns = useMemo(() => balance(visible, cols, leadCount), [visible, cols, leadCount]);

  const selectTag = (tag: string | null) => {
    setActive(tag);
    setLimit(PAGE);
  };

  // Centre the selected pill in the rail. This adjusts the rail's own
  // scrollLeft rather than calling scrollIntoView, which would also scroll the
  // window — on mount that dragged the whole page past the hero.
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const rail = railRef.current;
    const pill = rail?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (!rail || !pill) return;
    rail.scrollTo({
      left: pill.offsetLeft - rail.clientWidth / 2 + pill.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  const pill = (selected: boolean) =>
    `pill ${
      selected
        ? "border-foreground bg-foreground text-background"
        : "border-border bg-card/70 text-muted-foreground hover:bg-muted hover:text-foreground"
    }`;

  return (
    <section id="work" className="scroll-mt-28">
      {/* Full-bleed filter rail. It spans the viewport and scrolls horizontally
          on its own, then sticks under the header so the filter stays reachable
          while you're deep in the feed. */}
      <div className="full-bleed sticky top-14 z-40 border-y border-border/60 bg-background/80 backdrop-blur-xl">
        <nav
          ref={railRef}
          aria-label="Filter by tag"
          className="no-scrollbar edge-fade flex gap-2 overflow-x-auto px-9 py-3"
        >
          <button
            onClick={() => selectTag(null)}
            aria-pressed={active === null}
            className={pill(active === null)}
          >
            All
            <span className="text-xs tabular-nums opacity-70">{cards.length}</span>
          </button>

          {tagCounts.map(({ tag, count }) => (
            <button
              key={tag}
              onClick={() => selectTag(active === tag ? null : tag)}
              aria-pressed={active === tag}
              className={pill(active === tag)}
            >
              #{tag}
              <span className="text-xs tabular-nums opacity-70">{count}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Balanced masonry. Keying on the active tag remounts the columns so a
          filter change replays the reveal instead of snapping. */}
      <div key={active ?? "all"} className="flex items-start gap-[var(--card-gap)] pt-6">
        {columns.map((column, ci) => (
          <div key={ci} className="flex min-w-0 flex-1 flex-col gap-[var(--card-gap)]">
            {column.map((card, i) => (
              <div
                key={card.id}
                className="reveal"
                style={
                  { "--reveal-delay": `${Math.min(i * 60 + ci * 40, 420)}ms` } as React.CSSProperties
                }
              >
                <FeedCard card={card} />
              </div>
            ))}
          </div>
        ))}
      </div>

      {filtered.length > limit && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setLimit((n) => n + PAGE)}
            className="inline-flex h-10 items-center rounded-full border px-5 text-sm font-medium transition-colors hover:bg-muted"
          >
            Load more
            <span className="ml-2 text-xs tabular-nums text-muted-foreground">
              {filtered.length - limit}
            </span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Feed;
