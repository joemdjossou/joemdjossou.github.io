import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectLinks {
  github?: string;
  playstore?: string;
  appstore?: string;
  demo?: string;
  website?: string;
}

interface Project {
  quarter: string;
  year: string;
  type: string;
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLinks;
  featured: boolean;
}

const projects: Project[] = [
  {
    quarter: "Q1",
    year: "2025",
    type: "/ Flutter App",
    title: "Hymnes et Louanges",
    description:
      "A hymnal app with MIDI audio playback, clean architecture, and Forest Green & Gold design. Now live on both app stores.",
    technologies: ["Flutter", "Dart", "Clean Architecture"],
    links: {
      github: "https://github.com/joemdjossou/hymnms",
      website: "#hymnes-app",
      appstore: "https://apps.apple.com/us/app/hymnes-et-louanges-adventiste/id6753330258",
      playstore: "https://play.google.com/store/apps/details?id=com.joemdjossou.hymnes&pcampaignid=web_share",
    },
    featured: true,
  },
  {
    quarter: "Q4",
    year: "2023",
    type: "/ AI-Powered App",
    title: "StudyStats",
    description:
      "GPA analysis tool with AI-powered study recommendations. Simplifies academic tracking for students — shipped on iOS & Android.",
    technologies: ["Flutter", "Dart", "AI Integration"],
    links: {
      appstore: "https://apps.apple.com/ng/app/study-stats-app/id6477740443",
      playstore: "https://play.google.com/store/apps/details?id=com.GDSC.StudyStats",
    },
    featured: true,
  },
  {
    quarter: "—",
    year: "Ongoing",
    type: "/ AI-Powered App",
    title: "Affection Alerts",
    description:
      "Turns WhatsApp chat history into curated, heartwarming moments using on-device AI and natural language processing.",
    technologies: ["Flutter", "Dart", "NLP", "WhatsApp API"],
    links: {
      github: "https://github.com/joemdjossou/affection_alerts",
    },
    featured: true,
  },
  {
    quarter: "Q1",
    year: "2025",
    type: "/ Code Challenge",
    title: "Shoesly Flutter",
    description:
      "A showcase of clean architecture and modern Flutter patterns through a polished shoe e-commerce experience.",
    technologies: ["Flutter", "Dart", "Clean Architecture"],
    links: {
      github: "https://github.com/joemdjossou/shoesly_flutter",
    },
    featured: true,
  },
  {
    quarter: "Q1",
    year: "2025",
    type: "/ E-Commerce",
    title: "ShopNow Mobile",
    description:
      "A global mobile shopping platform built in weekly sprints using agile methodology and Flutter.",
    technologies: ["Flutter", "Dart", "E-commerce"],
    links: {
      github: "https://github.com/joemdjossou/shop_now_mobile",
    },
    featured: true,
  },
  {
    quarter: "Q1",
    year: "2024",
    type: "/ Weather App",
    title: "Clima Weather App",
    description:
      "Minimalist real-time weather app using OpenWeatherMap API with beautiful Flutter UI.",
    technologies: ["Flutter", "Dart", "Weather API"],
    links: {
      github: "https://github.com/joemdjossou/flutter_clima",
    },
    featured: false,
  },
  {
    quarter: "Q1",
    year: "2025",
    type: "/ UI Design",
    title: "French Bakery Restaurant",
    description:
      "E-commerce mobile app UI showcasing French breads with elegant design.",
    technologies: ["Flutter", "Objective-C", "UI/UX"],
    links: {
      github: "https://github.com/joemdjossou/french_bakery_restaurant",
    },
    featured: false,
  },
  {
    quarter: "Q1",
    year: "2024",
    type: "/ Game",
    title: "Tic Tac Toe Game",
    description:
      "Classic game with both light and dark mode support and smooth animations.",
    technologies: ["Flutter", "Dart", "Game Dev"],
    links: {
      github: "https://github.com/joemdjossou/tic_tac_toe_game",
    },
    featured: false,
  },
  {
    quarter: "Q3",
    year: "2025",
    type: "/ Business Tool",
    title: "Business Directory App",
    description:
      "Flutter app with search, offline persistence, and state management via Provider and Dio.",
    technologies: ["Flutter", "Dart", "Provider", "Dio"],
    links: {
      github: "https://github.com/joemdjossou/business_directory_app",
    },
    featured: false,
  },
];

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const getProjectLink = (p: Project) =>
    p.links.website || p.links.appstore || p.links.playstore || p.links.github || "#";

  const isExternal = (href: string) => !href.startsWith("#");

  return (
    <section id="projects" className="px-6 md:px-10 lg:px-14 py-20 md:py-28">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
        <div>
          <p className="section-label mb-4">Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Selected works,
            <br />
            client projects.
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs sm:text-right leading-relaxed">
          My goal is to ship apps that users actually love.
        </p>
      </div>

      {/* Featured list */}
      <div className="divide-y divide-border border-t border-border">
        {featured.map((project, i) => {
          const href = getProjectLink(project);
          const external = isExternal(href);
          return (
            <a
              key={i}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex flex-col md:flex-row md:items-start gap-6 py-8 md:py-10 hover:bg-secondary/30 -mx-6 md:-mx-10 lg:-mx-14 px-6 md:px-10 lg:px-14 transition-smooth"
            >
              {/* Quarter/Year */}
              <div className="shrink-0 md:w-28">
                <div className="text-2xl font-bold text-foreground leading-none">
                  {project.quarter}
                </div>
                <div className="text-xs font-medium text-muted-foreground tracking-[0.1em] mt-1">
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  {project.type}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-muted-foreground transition-smooth leading-snug mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((t, ti) => (
                    <span
                      key={ti}
                      className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/60 border border-border px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="shrink-0 flex items-start gap-2 pt-1">
                {project.links.github && !project.links.website && !project.links.appstore && (
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground group-hover:text-foreground transition-smooth flex items-center gap-1">
                    Code <Github className="w-3.5 h-3.5" />
                  </span>
                )}
                {(project.links.website || project.links.appstore || project.links.playstore) && (
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground group-hover:text-foreground transition-smooth flex items-center gap-1">
                    View project <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>

      {/* More projects — compact */}
      <div className="mt-16">
        <p className="section-label mb-8">More</p>
        <div className="divide-y divide-border border-t border-border">
          {rest.map((project, i) => (
            <a
              key={i}
              href={project.links.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-5 hover:bg-secondary/20 -mx-6 md:-mx-10 lg:-mx-14 px-6 md:px-10 lg:px-14 transition-smooth"
            >
              <div className="flex items-center gap-6 min-w-0">
                <span className="text-xs font-medium text-muted-foreground/50 tracking-[0.1em] shrink-0 w-16">
                  {project.quarter} {project.year}
                </span>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground group-hover:text-muted-foreground transition-smooth truncate">
                    {project.title}
                  </h4>
                  <p className="text-xs text-muted-foreground/60 truncate mt-0.5">
                    {project.type}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-foreground transition-smooth shrink-0" />
            </a>
          ))}
        </div>
      </div>

      {/* All repos link */}
      <div className="mt-12">
        <Button variant="outline" className="rounded-none border-foreground/20 text-xs font-semibold uppercase tracking-[0.14em] hover-lift" asChild>
          <a
            href="https://github.com/joemdjossou?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            All repositories
            <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
