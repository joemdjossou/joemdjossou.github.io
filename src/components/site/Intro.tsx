import { githubData } from "@/data/feed";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Intro = () => (
  <section className="pt-10 pb-8 sm:pt-16 sm:pb-10">
    <img
      src={githubData.avatarUrl}
      alt="Emmanuel Josué Djossou"
      width={56}
      height={56}
      className="animate-enter mb-6 size-14 rounded-full object-cover ring-1 ring-border"
      style={{ "--enter-delay": "0ms" } as React.CSSProperties}
    />

    <h1
      className="animate-enter text-3xl font-semibold tracking-tight sm:text-4xl"
      style={{ "--enter-delay": "60ms" } as React.CSSProperties}
    >
      I build, ship, and scale software people actually use.
    </h1>

    <p
      className="animate-enter mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
      style={{ "--enter-delay": "120ms" } as React.CSSProperties}
    >
      Hey, I&apos;m Josué — a senior engineer who ships the whole thing: Flutter apps
      live on both stores, the Java and Node services behind them, and the data
      pipelines that keep the numbers honest. Six years, 200K+ downloads, and a
      habit of owning features end to end.
    </p>

    <p
      className="animate-enter mt-4 text-sm text-muted-foreground"
      style={{ "--enter-delay": "160ms" } as React.CSSProperties}
    >
      Currently building at{" "}
      <a
        href="https://github.com/VaultSplit"
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline font-medium text-foreground"
      >
        VaultSplit
      </a>{" "}
      and on{" "}
      <a href="/hymnes-app" className="link-underline font-medium text-foreground">
        Hymnes et Louanges
      </a>
      . Based in Lomé, Togo — remote worldwide.
    </p>

    <div
      className="animate-enter mt-7 flex flex-wrap items-center gap-2.5"
      style={{ "--enter-delay": "200ms" } as React.CSSProperties}
    >
      <a
        href="mailto:joemdjossou@outlook.com"
        className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Start a conversation <ArrowRight className="size-4" />
      </a>
      <a
        href="#work"
        className="inline-flex h-10 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors hover:bg-muted"
      >
        See the work
      </a>
      <a
        href="/resume.pdf"
        download="Yaovi_Emmanuel_Josue_Djossou_Resume.pdf"
        className="inline-flex h-10 items-center gap-1.5 px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        Résumé <ArrowUpRight className="size-3.5" />
      </a>
    </div>
  </section>
);

export default Intro;
