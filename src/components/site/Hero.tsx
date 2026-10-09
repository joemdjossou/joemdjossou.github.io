import { ArrowDown, ArrowRight, ArrowUpRight, Globe, Languages, MapPin } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Based in", value: "Lomé, Togo" },
  { icon: Globe, label: "Works", value: "Remote, worldwide" },
  { icon: Languages, label: "Speaks", value: "English, French" },
];

const numbers = [
  { value: "6", label: "years" },
  { value: "200K+", label: "downloads" },
  { value: "100K+", label: "people reached" },
];

const delay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as React.CSSProperties;

/**
 * The hero is a poster on the cobalt blueprint field. Its colours are fixed
 * rather than themed: it reads the same in light and dark mode, and the page
 * below it is what changes.
 */
const Hero = () => (
  <section
    aria-label="Introduction"
    /* Pulled up under the transparent header so the field starts at the very
       top of the page, the way the header's own scroll state expects. */
    className="blueprint relative isolate -mt-16 overflow-hidden text-white"
  >
    <div className="container-page grid gap-x-10 gap-y-14 pb-16 pt-24 lg:grid-cols-12 lg:pb-20 lg:pt-28">
      <div className="lg:col-span-7">
        <p
          className="animate-enter inline-flex items-center gap-2.5 rounded-[3px] border border-white/25 bg-night px-3 py-1.5 text-sm font-medium"
          style={delay(0)}
        >
          <span className="status-dot bg-emerald-400 text-emerald-400" />
          Open to remote contracts and full-time roles
        </p>

        <div className="relative mt-7 w-fit">
          <h1
            className="display animate-enter text-[clamp(4.25rem,13vw,9.5rem)] leading-[0.82]"
            style={delay(60)}
          >
            Josué
            <br />
            Djossou
          </h1>
          <span
            className="sticker animate-enter mt-3 bg-pop text-sm text-pop-foreground [rotate:-3deg] sm:absolute sm:-right-10 sm:top-[42%] sm:mt-0 sm:text-base"
            style={delay(260)}
          >
            Senior software &amp; data engineer
          </span>
        </div>

        <p
          className="display animate-enter mt-7 text-[clamp(1.9rem,4.2vw,3.25rem)]"
          style={delay(120)}
        >
          I build, ship and scale
          <br />
          <span className="text-pop">software people actually use.</span>
        </p>

        <p
          className="animate-enter mt-5 max-w-xl text-base leading-relaxed text-periwinkle sm:text-lg"
          style={delay(160)}
        >
          Web apps in React and Angular, Flutter apps live on both stores, the Java, Node
          and Go services behind them, and the data pipelines that keep the numbers honest.
          I own features end to end.
        </p>

        <p className="animate-enter mt-4 text-sm text-periwinkle/85" style={delay(190)}>
          Currently building at{" "}
          <a
            href="https://vaultsplit.co"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-semibold text-white hover:text-white"
          >
            VaultSplit
          </a>{" "}
          and on{" "}
          <a
            href="/hymnes-app"
            className="link-underline font-semibold text-white hover:text-white"
          >
            Hymnes et Louanges
          </a>
          .
        </p>

        <div
          className="animate-enter mt-8 flex flex-wrap items-center gap-x-7 gap-y-5"
          style={{ ...delay(230), "--btn-shadow": "var(--night)" } as React.CSSProperties}
        >
          <a href="mailto:joemdjossou@outlook.com" className="btn-pop h-14 px-7 text-lg">
            Start a conversation <ArrowRight className="size-5" strokeWidth={2.5} />
          </a>
          <a
            href="#work"
            className="link-underline inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white hover:text-white"
          >
            See the work <ArrowDown className="size-4" />
          </a>
          <a
            href="/resume.pdf"
            download="Yaovi_Emmanuel_Josue_Djossou_Resume.pdf"
            className="link-underline inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-periwinkle hover:text-white"
          >
            Résumé <ArrowUpRight className="size-4" />
          </a>
        </div>

        <dl
          className="animate-enter mt-12 grid max-w-2xl divide-y divide-night/15 rounded-[3px] bg-periwinkle text-night shadow-[5px_5px_0_hsl(var(--night))] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          style={delay(280)}
        >
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 px-4 py-3.5">
              <Icon className="size-5 shrink-0 text-cobalt" />
              <div className="min-w-0 leading-tight">
                <dt className="text-xs font-medium text-night/65">{label}</dt>
                <dd className="font-display text-lg font-extrabold uppercase tracking-wide">
                  {value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      {/* The collage: the desk as the big poster, the portrait pinned over its
          corner, and the numbers on a white tile. */}
      <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:mx-0 lg:mt-10 lg:max-w-none">
        <figure
          className="animate-enter relative ml-auto w-[80%] border-[6px] [rotate:3deg] border-white bg-white shadow-[10px_10px_0_hsl(var(--night))]"
          style={delay(200)}
        >
          <img
            src="/setup.jpg"
            alt="Josué's desk: an ultrawide monitor full of code, a second screen, and a cutting mat under the keyboard"
            className="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="sticker absolute -right-4 top-6 bg-night [rotate:6deg] text-white">
            Where it gets built
          </figcaption>
        </figure>

        <img
          src="/profile-about.jpg"
          alt="Portrait of Emmanuel Josué Djossou"
          className="animate-enter absolute left-0 top-[26%] aspect-[4/5] w-[42%] border-[6px] border-white object-cover object-top [rotate:-6deg] shadow-[8px_8px_0_hsl(var(--hot))]"
          style={delay(300)}
        />

        <div
          className="animate-enter relative z-10 -mt-10 ml-auto w-fit max-w-full rounded-[3px] bg-white p-4 text-night shadow-[8px_8px_0_hsl(var(--pop))] sm:mr-4"
          style={delay(380)}
        >
          <p className="text-xs font-semibold text-hot">So far</p>
          <dl className="mt-2 flex gap-2">
            {numbers.map(({ value, label }) => (
              <div
                key={label}
                className="flex min-w-[4.75rem] flex-col items-center rounded-[3px] bg-periwinkle/45 px-3 py-2.5"
              >
                <dd className="display text-4xl text-cobalt sm:text-5xl">{value}</dd>
                <dt className="mt-1.5 text-[11px] font-medium text-night/70">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>

    <Ticker />
  </section>
);

const disciplines = [
  "React",
  "Flutter",
  "TypeScript",
  "Angular",
  "Java",
  "Go",
  "Node",
  "Data pipelines",
  "Applied AI",
];

/** The band that closes the poster. Doubled so the loop has no seam. */
const Ticker = () => (
  <div className="overflow-hidden border-y-2 border-night bg-pop py-2.5 text-pop-foreground">
    <div className="animate-marquee flex w-max" aria-hidden>
      {[0, 1].map((copy) => (
        <ul key={copy} className="flex shrink-0">
          {disciplines.map((d) => (
            <li key={d} className="display flex items-center text-2xl sm:text-3xl">
              <span className="px-5">{d}</span>
              <span className="size-2.5 rotate-45 bg-night" />
            </li>
          ))}
        </ul>
      ))}
    </div>
    <p className="sr-only">Works with {disciplines.join(", ")}.</p>
  </div>
);

export default Hero;
