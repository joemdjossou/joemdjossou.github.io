import FeedCard from "@/components/site/FeedCard";
import type { Card } from "@/data/feed";
import { cards, tagCounts } from "@/data/feed";
import { useEffect, useMemo, useState } from "react";

const PAGE = 12;

/** Column count from viewport width, matching Tailwind's sm/lg breakpoints. */
function useColumnCount() {
  const [cols, setCols] = useState(() =>
    typeof window === "undefined" ? 3 : window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1
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
 * Greedy shortest-column packing. Each card carries a `weight` height hint, so
 * columns end up near-even without measuring the DOM — which keeps the layout
 * stable on first paint instead of reflowing once images load.
 */
function balance(items: Card[], cols: number): Card[][] {
  const columns: Card[][] = Array.from({ length: cols }, () => []);
  const heights = new Array(cols).fill(0);

  for (const item of items) {
    let shortest = 0;
    for (let i = 1; i < cols; i++) if (heights[i] < heights[shortest]) shortest = i;
    columns[shortest].push(item);
    heights[shortest] += item.weight;
  }

  return columns;
}

const Feed = () => {
  const [active, setActive] = useState<string | null>(null);
  const [limit, setLimit] = useState(PAGE);
  const cols = useColumnCount();

  const filtered = useMemo(
    () => (active ? cards.filter((c) => c.tags.includes(active)) : cards),
    [active]
  );

  const visible = filtered.slice(0, limit);
  const columns = useMemo(() => balance(visible, cols), [visible, cols]);

  const selectTag = (tag: string | null) => {
    setActive(tag);
    setLimit(PAGE);
  };

  return (
    <section id="work" className="scroll-mt-20">
      {/* Filter rail */}
      <nav
        aria-label="Filter by tag"
        className="no-scrollbar animate-enter -mx-4 flex gap-2 overflow-x-auto px-4 py-6 sm:mx-0 sm:flex-wrap sm:px-0"
        style={{ "--enter-delay": "320ms" } as React.CSSProperties}
      >
        <button
          onClick={() => selectTag(null)}
          aria-pressed={active === null}
          className={`pill ${
            active === null
              ? "border-foreground bg-foreground text-background"
              : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          All
          <span className="text-xs tabular-nums opacity-70">{cards.length}</span>
        </button>

        {tagCounts.map(({ tag, count }) => (
          <button
            key={tag}
            onClick={() => selectTag(active === tag ? null : tag)}
            aria-pressed={active === tag}
            className={`pill ${
              active === tag
                ? "border-foreground bg-foreground text-background"
                : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            #{tag}
            <span className="text-xs tabular-nums opacity-70">{count}</span>
          </button>
        ))}
      </nav>

      {/* Balanced masonry */}
      <div className="flex items-start gap-[var(--card-gap)]">
        {columns.map((column, ci) => (
          <div
            key={ci}
            className="flex min-w-0 flex-1 flex-col gap-[var(--card-gap)]"
          >
            {column.map((card, i) => (
              <div
                key={card.id}
                className="animate-enter"
                style={{ "--enter-delay": `${Math.min(i * 45 + ci * 25, 500)}ms` } as React.CSSProperties}
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
