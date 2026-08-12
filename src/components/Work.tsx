import Reveal from "@/components/Reveal";
import { ArrowUpRight, Github } from "lucide-react";

interface Build {
  year: string;
  status: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  iconImage?: string; // square app icon — shown centered, not full-bleed
  caseStudy?: string; // internal clean route or external
  live?: string;
  code?: string;
}

const flagship: Build[] = [
  {
    year: "2025",
    status: "Live · App Store & Play Store",
    title: "Hymnes et Louanges",
    description:
      "Multilingual worship app (FR · Ewe · ES · PT · EN) with SATB audio, musical scores, cloud sync and search — 20K+ downloads and 15K+ users in 9 months. Live on both stores.",
    tech: ["Flutter", "Dart", "Firebase", "i18n"],
    iconImage: "/hymnes-app-icon.jpg",
    caseStudy: "/hymnes-app",
    live: "https://apps.apple.com/us/app/hymnes-et-louanges-adventiste/id6753330258",
  },
  {
    year: "2023",
    status: "Live · iOS & Android",
    title: "StudyStats",
    description:
      "GPA analysis tool with study recommendations — comprehensive tracking, performance analysis and goal setting. A GDSC Babcock team project, shipped on both platforms.",
    tech: ["Flutter", "Dart", "Analytics"],
    live: "https://apps.apple.com/ng/app/study-stats-app/id6477740443",
  },
  {
    year: "Ongoing",
    status: "On-device AI",
    title: "Affection Alerts",
    description:
      "Turns WhatsApp chat history into curated, heartwarming moments using on-device AI and natural language processing.",
    tech: ["Flutter", "Dart", "NLP"],
    code: "https://github.com/joemdjossou/affection_alerts",
  },
];

const archive: Build[] = [
  {
    year: "2025",
    status: "Clean Architecture",
    title: "Shoesly Flutter",
    description: "Polished shoe e-commerce showcasing modern Flutter patterns.",
    tech: ["Flutter", "Dart"],
    code: "https://github.com/joemdjossou/shoesly_flutter",
  },
  {
    year: "2025",
    status: "E-Commerce",
    title: "ShopNow Mobile",
    description: "Global mobile shopping platform built in weekly agile sprints.",
    tech: ["Flutter", "Dart"],
    code: "https://github.com/joemdjossou/shop_now_mobile",
  },
  {
    year: "2024",
    status: "Weather App",
    title: "Clima Weather",
    description: "Minimalist real-time weather via the OpenWeatherMap API.",
    tech: ["Flutter", "Dart"],
    code: "https://github.com/joemdjossou/flutter_clima",
  },
  {
    year: "2025",
    status: "UI Design",
    title: "French Bakery",
    description: "E-commerce UI showcasing French breads with elegant design.",
    tech: ["Flutter", "UI/UX"],
    code: "https://github.com/joemdjossou/french_bakery_restaurant",
  },
  {
    year: "2024",
    status: "Game",
    title: "Tic Tac Toe",
    description: "Classic game with light/dark mode and smooth animations.",
    tech: ["Flutter", "Dart"],
    code: "https://github.com/joemdjossou/tic_tac_toe_game",
  },
  {
    year: "2025",
    status: "Business Tool",
    title: "Business Directory",
    description: "Search, offline persistence, and state management via Provider + Dio.",
    tech: ["Flutter", "Provider"],
    code: "https://github.com/joemdjossou/business_directory_app",
  },
];

const linkProps = (href: string) =>
  href.startsWith("/")
    ? {}
    : { target: "_blank" as const, rel: "noopener noreferrer" };

const PreviewTile = ({ build }: { build: Build }) => (
  <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[220px] overflow-hidden border-b md:border-b-0 md:border-r border-border bg-secondary/40">
    {build.iconImage ? (
      <div className="w-full h-full flex items-center justify-center gradient-primary p-8">
        <img
          src={build.iconImage}
          alt={`${build.title} app icon`}
          loading="lazy"
          className="w-28 h-28 rounded-[22%] object-cover shadow-2xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </div>
    ) : build.image ? (
      <img
        src={build.image}
        alt={build.title}
        loading="lazy"
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center gradient-primary transition-transform duration-500 group-hover:scale-[1.04]">
        <span className="text-6xl font-bold text-primary-foreground/90">
          {build.title.charAt(0)}
        </span>
      </div>
    )}
    <span className="absolute top-3 left-3 text-[10px] font-mono font-semibold uppercase tracking-[0.14em] bg-background/85 backdrop-blur px-2 py-1 border border-border">
      {build.year} · {build.status}
    </span>
  </div>
);

const Work = () => {
  return (
    <section id="work" className="relative px-6 md:px-10 lg:px-14 py-20 md:py-28 overflow-hidden">
      {/* Giant watermark */}
      <span className="giant-word absolute -top-2 right-4 hidden md:block">Works</span>

      {/* Header */}
      <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
        <div>
          <p className="section-label mb-4">Works</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Flagship builds
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs sm:text-right leading-relaxed">
          Production apps that set the bar — open a case study or jump straight to
          the store listing.
        </p>
      </div>

      {/* Flagship cards */}
      <div className="space-y-5">
        {flagship.map((build, i) => (
          <Reveal key={i} delay={i * 0.06}>
          <article
            className="group grid md:grid-cols-[38%_1fr] border border-border bg-card overflow-hidden transition-smooth hover:card-shadow-hover"
          >
            <PreviewTile build={build} />

            <div className="p-6 md:p-8 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {build.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">
                  {build.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {build.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono font-semibold uppercase tracking-[0.12em] text-muted-foreground/70 border border-border px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-5 mt-7 pt-5 border-t border-border text-xs font-mono font-semibold uppercase tracking-[0.12em]">
                {build.caseStudy && (
                  <a href={build.caseStudy} {...linkProps(build.caseStudy)} className="accent-link inline-flex items-center gap-1">
                    Case study <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {build.live && (
                  <a href={build.live} {...linkProps(build.live)} className="accent-link inline-flex items-center gap-1">
                    Live site <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {build.code && (
                  <a href={build.code} {...linkProps(build.code)} className="accent-link inline-flex items-center gap-1">
                    Code <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
          </Reveal>
        ))}
      </div>

      {/* Archive */}
      <div className="mt-16">
        <p className="section-label mb-2">Archive</p>
        <p className="text-sm text-muted-foreground mb-8">
          More builds — each with source on GitHub.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {archive.map((build, i) => (
            <a
              key={i}
              href={build.code || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border bg-card p-5 transition-smooth hover:border-primary/40 hover:card-shadow-hover"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-bold text-foreground group-hover:text-primary transition-smooth">
                  {build.title}
                </h4>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-smooth shrink-0" />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground/60 mt-1">
                {build.year} · {build.status}
              </p>
              <p className="text-xs text-muted-foreground/80 mt-3 leading-relaxed">
                {build.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {build.tech.map((t) => (
                  <span key={t} className="text-[9px] font-mono uppercase tracking-[0.1em] text-muted-foreground/50">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 border border-border bg-card p-8 md:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Start a conversation</h3>
          <p className="text-sm text-muted-foreground mt-1">Open to mobile & Flutter roles and collaborations.</p>
        </div>
        <a
          href="https://github.com/joemdjossou?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-[0.14em] px-6 py-4 hover:opacity-90 hover-lift shrink-0"
        >
          GitHub archive <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};

export default Work;
