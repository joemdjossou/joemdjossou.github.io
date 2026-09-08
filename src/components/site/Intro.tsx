import { githubData } from "@/data/feed";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/**
 * The hero sits on top of the setup footage, so its colours are fixed light —
 * theme tokens would make it unreadable in light mode.
 */
const Intro = () => (
  <section className="py-6">
    <img
      src={githubData.avatarUrl}
      alt="Emmanuel Josué Djossou"
      width={56}
      height={56}
      className="animate-enter mb-6 size-14 rounded-full object-cover ring-1 ring-white/25"
      style={{ "--enter-delay": "0ms" } as React.CSSProperties}
    />

    <h1
      className="animate-enter max-w-3xl text-3xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-5xl"
      style={{ "--enter-delay": "60ms" } as React.CSSProperties}
    >
      I build, ship, and scale software people actually use.
    </h1>

    <p
      className="animate-enter mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
      style={{ "--enter-delay": "120ms" } as React.CSSProperties}
    >
      Hey, I&apos;m Josué — a senior engineer who ships the whole thing: web apps in
      React and Angular, Flutter apps live on both stores, the Java, Node and Go
      services behind them, and the data pipelines that keep the numbers honest.
      Six years, 200K+ downloads, and a habit of owning features end to end.
    </p>

    <p
      className="animate-enter mt-4 text-sm text-white/65"
      style={{ "--enter-delay": "160ms" } as React.CSSProperties}
    >
      Currently building at{" "}
      <a
        href="https://github.com/VaultSplit"
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline font-medium text-white hover:text-white"
      >
        VaultSplit
      </a>{" "}
      and on{" "}
      <a href="/hymnes-app" className="link-underline font-medium text-white hover:text-white">
        Hymnes et Louanges
      </a>
      . Based in Lomé, Togo — remote worldwide.
    </p>

    <div
      className="animate-enter mt-8 flex flex-wrap items-center gap-2.5"
      style={{ "--enter-delay": "200ms" } as React.CSSProperties}
    >
      <a
        href="mailto:joemdjossou@outlook.com"
        className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-neutral-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Start a conversation <ArrowRight className="size-4" />
      </a>
      <a
        href="#work"
        className="inline-flex h-10 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
      >
        See the work
      </a>
      <a
        href="/resume.pdf"
        download="Yaovi_Emmanuel_Josue_Djossou_Resume.pdf"
        className="inline-flex h-10 items-center gap-1.5 px-3 text-sm text-white/70 transition-colors hover:text-white"
      >
        Résumé <ArrowUpRight className="size-3.5" />
      </a>
    </div>
  </section>
);

export default Intro;
