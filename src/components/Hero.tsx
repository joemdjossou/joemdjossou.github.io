import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Linkedin, MapPin } from "lucide-react";

const stats = [
  { value: "120K+", label: "Downloads" },
  { value: "80K+", label: "Users reached" },
  { value: "10+", label: "Apps shipped" },
  { value: "23+", label: "Projects" },
];

const Hero = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Main hero ── */}
      <div className="flex-1 px-6 md:px-10 lg:px-14 pt-32 pb-12 flex items-center">
        <div className="w-full max-w-5xl">
          {/* Location badge */}
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] border border-border rounded-full px-3.5 py-1.5 text-muted-foreground font-mono">
            <MapPin className="w-3 h-3 text-primary" />
            Remote · Worldwide 🌍
          </span>

          {/* Kicker */}
          <p className="mt-8 section-label">Lead Mobile Engineer</p>

          {/* Name */}
          <h1
            className="mt-4 font-bold leading-[0.9] tracking-tight text-foreground"
            style={{ fontSize: "clamp(2.75rem, 8vw, 7.5rem)" }}
          >
            Emmanuel Josué
            <br />
            <span className="text-muted-foreground">Djossou</span>
            <span className="text-primary">.</span>
          </h1>

          {/* Tagline */}
          <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I build production mobile apps with{" "}
            <span className="text-foreground font-medium">Flutter</span> — trusted by{" "}
            <span className="text-foreground font-medium">80K+ users</span> across iOS
            and Android, from on-device AI to polished app-store launches.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              className="bg-primary text-primary-foreground rounded-none text-xs font-bold uppercase tracking-[0.14em] px-6 py-5 hover:opacity-90 hover-lift"
              onClick={() => scrollTo("#work")}
            >
              View Work
              <ArrowDown className="w-3.5 h-3.5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="rounded-none border-border text-xs font-bold uppercase tracking-[0.14em] px-6 py-5 hover:border-primary hover:text-primary hover-lift"
              onClick={() => scrollTo("#contact")}
            >
              Contact
            </Button>

            <div className="flex items-center gap-4 pl-2 text-[11px] font-mono">
              <a
                href="https://www.linkedin.com/in/joemdjossou"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link inline-flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span className="text-border">/</span>
              <a
                href="/resume.pdf"
                download="Yaovi_Emmanuel_Josue_Djossou_Resume.pdf"
                className="accent-link inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" /> Resume
              </a>
            </div>
          </div>

          {/* scroll hint */}
          <button
            onClick={() => scrollTo("#work")}
            className="hidden lg:flex items-center gap-2 mt-14 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/40 hover:text-primary transition-smooth group font-mono"
          >
            scroll for more
            <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-smooth" />
          </button>
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="px-6 md:px-10 lg:px-14 py-12 border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-border">
          {stats.map((stat, i) => (
            <div key={i} className="md:px-8 first:pl-0 last:pr-0">
              <div
                className="font-bold leading-none text-foreground"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mt-2 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
