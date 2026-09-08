import type { Card } from "@/data/feed";
import { githubData } from "@/data/feed";
import { useCountUp } from "@/hooks/use-reveal";
import { ArrowUpRight, Github, Star } from "lucide-react";

const isExternal = (href: string) => !href.startsWith("/") && !href.startsWith("#");

const linkAttrs = (href: string) =>
  isExternal(href) ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};

const Tags = ({ tags }: { tags: string[] }) =>
  tags.length === 0 ? null : (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <span key={t} className="text-xs text-muted-foreground/70">
          #{t}
        </span>
      ))}
    </div>
  );

/** Relative "3 days ago" style stamp, kept short enough for a card footer. */
function ago(iso: string) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  const months = Math.round(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.round(days / 365)}y ago`;
}

const dateLabel = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });

/**
 * Counts a stat like "200K+" up from zero on scroll. The numeric part is
 * animated and the surrounding characters ("K+", "$") are preserved, so the
 * card never shows a value that isn't the real one at rest.
 */
const CountUpValue = ({ value }: { value: string }) => {
  const match = value.match(/^(\D*)(\d[\d,.]*)(.*)$/);
  const target = match ? Number(match[2].replace(/[,.]/g, "")) : 0;
  const { ref, value: n } = useCountUp(target);

  if (!match) return <>{value}</>;
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {match[1]}
      {n.toLocaleString()}
      {match[3]}
    </span>
  );
};

/** Row of store icons for the apps shipped under a role. */
const AppsRow = ({ apps }: { apps: NonNullable<Extract<Card, { kind: "role" }>["apps"]> }) => (
  <div className="mt-4 flex flex-wrap items-center gap-2">
    {apps.map((app) =>
      app.url ? (
        <a
          key={app.name}
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          title={app.name}
          className="relative z-10 transition-transform hover:-translate-y-0.5"
        >
          <img
            src={app.icon}
            alt={app.name}
            loading="lazy"
            className="size-9 rounded-[22%] object-cover ring-1 ring-border"
          />
        </a>
      ) : (
        <img
          key={app.name}
          src={app.icon}
          alt={app.name}
          title={app.name}
          loading="lazy"
          className="size-9 rounded-[22%] object-cover ring-1 ring-border"
        />
      )
    )}
  </div>
);

/* -------------------------------------------------------------------------- */

const Pitch = () => (
  <article className="card-surface bg-primary text-primary-foreground">
    <div className="flex flex-col gap-4 p-4 sm:p-5">
      <span className="flex size-9 items-center justify-center rounded-lg bg-white/15 text-xs font-semibold ring-1 ring-white/25">
        EJ
      </span>
      <div>
        <h2 className="text-lg font-semibold tracking-tight">
          Hire me to build the thing, not just spec it
        </h2>
        <p className="mt-2 text-sm text-primary-foreground/85">
          I join your team and own a surface end to end — a web app, a mobile app,
          the API behind either, or the pipeline feeding your reporting.
        </p>
      </div>

      <div>
        <p className="text-xs font-medium text-primary-foreground/70">Who this is for</p>
        <ul className="mt-2 space-y-1.5 text-sm text-primary-foreground/90">
          {[
            "You need a real product shipped — on the web or on both stores",
            "Your data is in five places and nobody trusts the dashboard",
            "You need a senior IC who can also mentor the team",
            "You're not ready for a full-time hire yet",
          ].map((line) => (
            <li key={line} className="flex gap-2">
              <span aria-hidden className="mt-[7px] size-1 shrink-0 rounded-full bg-current" />
              {line}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="mailto:joemdjossou@outlook.com"
        className="inline-flex h-9 w-fit items-center gap-1.5 rounded-full bg-white px-4 text-sm font-medium text-primary transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Let&apos;s talk <ArrowUpRight className="size-3.5" />
      </a>
    </div>
  </article>
);

/* -------------------------------------------------------------------------- */

const FeedCard = ({ card }: { card: Card }) => {
  switch (card.kind) {
    case "pitch":
      return <Pitch />;

    case "project": {
      const primary = card.links[0];
      return (
        <article className="card-surface card-hover group">
          <div
            className="relative flex h-40 items-center justify-center overflow-hidden"
            style={{ background: card.tint ?? "hsl(var(--muted))" }}
          >
            {card.cover ? (
              <img
                src={card.cover}
                alt={card.name}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            ) : card.icon ? (
              <img
                src={card.icon}
                alt={`${card.name} app icon`}
                loading="lazy"
                className="size-20 rounded-[22%] object-cover shadow-2xl ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-[1.06]"
              />
            ) : (
              <span className="text-5xl font-semibold text-white/90">{card.name.charAt(0)}</span>
            )}

            {card.status && (
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                {card.status === "Live" && (
                  <span className="status-dot bg-emerald-400 text-emerald-400" />
                )}
                {card.status}
              </span>
            )}
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-semibold tracking-tight">{card.name}</h3>
              {card.date && <span className="meta shrink-0">{dateLabel(card.date)}</span>}
            </div>
            <p className="mt-0.5 text-sm text-muted-foreground">{card.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.blurb}</p>

            <div
              className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm ${
                card.links.length ? "mt-4" : ""
              }`}
            >
              {card.links.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...linkAttrs(l.href)}
                  className={`inline-flex items-center gap-1 ${
                    i === 0
                      ? "font-medium text-foreground link-underline"
                      : "text-muted-foreground link-underline"
                  }`}
                >
                  {l.label} <ArrowUpRight className="size-3.5" />
                </a>
              ))}
            </div>

            <Tags tags={card.tags} />
          </div>
          {/* Whole-card click target for the primary link. */}
          {primary && (
            <a
              href={primary.href}
              {...linkAttrs(primary.href)}
              aria-label={`${card.name} — ${primary.label}`}
              className="absolute inset-0 -z-0"
              tabIndex={-1}
            />
          )}
        </article>
      );
    }

    case "note":
      return (
        <article className="card-surface card-hover p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <img
              src={githubData.avatarUrl}
              alt=""
              loading="lazy"
              className="size-9 rounded-full object-cover ring-1 ring-border"
            />
            <div className="min-w-0 leading-tight">
              <p className="truncate text-sm font-semibold">Josué Djossou</p>
              <p className="truncate text-xs text-muted-foreground">Build note</p>
            </div>
          </div>

          <h3 className="mt-3.5 font-semibold tracking-tight">{card.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>

          {card.metric && (
            <div className="mt-4 flex items-baseline gap-2 rounded-xl bg-muted px-3 py-2.5">
              <span className="text-xl font-semibold tabular-nums tracking-tight">
                {card.metric.value}
              </span>
              <span className="text-xs text-muted-foreground">{card.metric.label}</span>
            </div>
          )}

          {card.date && <p className="meta mt-3">{dateLabel(card.date)}</p>}
          <Tags tags={card.tags} />
        </article>
      );

    case "role":
      return (
        <article className="card-surface card-hover p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <span className="meta">{card.period}</span>
            {card.current && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                <span className="status-dot bg-current" />
                Current
              </span>
            )}
          </div>
          <div className="mt-2 flex items-start gap-3">
            {card.logo && (
              <img
                src={card.logo}
                alt=""
                loading="lazy"
                className="size-9 shrink-0 rounded-[22%] object-cover ring-1 ring-border"
              />
            )}
            <div className="min-w-0">
              <h3 className="font-semibold tracking-tight">{card.title}</h3>
              <p className="text-sm text-muted-foreground">
                {card.company} · {card.location}
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
          {card.links?.length ? (
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              {card.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...linkAttrs(l.href)}
                  className="link-underline relative z-10 inline-flex items-center gap-1 font-medium text-foreground"
                >
                  {l.label} <ArrowUpRight className="size-3.5" />
                </a>
              ))}
            </div>
          ) : null}
          {card.apps && <AppsRow apps={card.apps} />}
          <Tags tags={card.tags} />
        </article>
      );

    case "stat":
      return (
        <article className="card-surface card-hover p-4 sm:p-5">
          <p className="text-4xl font-semibold tracking-tight tabular-nums">
            <CountUpValue value={card.value} />
          </p>
          <p className="mt-1 text-sm font-medium">{card.label}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.caption}</p>
        </article>
      );

    case "repo":
      return (
        <article className="card-surface card-hover group p-4 sm:p-5">
          <a
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0"
          >
            <div className="flex items-center gap-2">
              <Github className="size-4 shrink-0 text-muted-foreground" />
              <h3 className="truncate font-mono text-sm font-medium">{card.name}</h3>
              <ArrowUpRight className="ml-auto size-3.5 shrink-0 text-muted-foreground/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {card.description}
            </p>
          </a>

          <div className="mt-3.5 flex flex-wrap items-center gap-x-3.5 gap-y-1 text-xs text-muted-foreground">
            {card.language && (
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="size-2.5 rounded-full"
                  style={{ background: card.languageColor ?? "hsl(var(--muted-foreground))" }}
                />
                {card.language}
              </span>
            )}
            {card.stars > 0 && (
              <span className="inline-flex items-center gap-1 tabular-nums">
                <Star className="size-3" /> {card.stars}
              </span>
            )}
            <span className="tabular-nums">{ago(card.pushedAt)}</span>
          </div>

          <Tags tags={card.tags} />
        </article>
      );

    case "stack":
      return (
        <article className="card-surface p-4 sm:p-5">
          <h3 className="font-semibold tracking-tight">The toolbox</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            What I reach for, from the pipeline to the pixel.
          </p>
          <div className="mt-4 space-y-3.5">
            {card.groups.map((g) => (
              <div key={g.label}>
                <p className="meta mb-1.5">{g.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      );

    case "education":
      return (
        <article className="card-surface card-hover p-4 sm:p-5">
          <span className="meta">{card.period}</span>
          <h3 className="mt-2 font-semibold tracking-tight">{card.degree}</h3>
          <p className="text-sm text-muted-foreground">{card.institution}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.detail}</p>
        </article>
      );

    default:
      return null;
  }
};

export default FeedCard;
