import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Play } from "lucide-react";

// Type definitions
interface ProjectLinks {
  github?: string;
  playstore?: string;
  appstore?: string;
  demo?: string;
  website?: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  period: string;
  technologies: string[];
  links: ProjectLinks;
  featured: boolean;
  status: string;
}

const projects: Project[] = [
  {
    title: "Hymnes et Louanges",
    description:
      "A beautiful application for hymns with MIDI audio playback capabilities, featuring a modern clean architecture and elegant Forest Green, Gold, and White design theme.",
    image: "https://github.com/joemdjossou/hymnes/raw/joemfixings/hymnes.png",
    period: "Jan 2025 - Nov 2025",
    technologies: ["Flutter", "Dart", "Clean Architecture", "Code Test"],
    links: {
      github: "https://github.com/joemdjossou/hymnms",
      website: "#hymnes-app",
      appstore:
        "https://apps.apple.com/us/app/hymnes-et-louanges-adventiste/id6753330258",
      playstore:
        "https://play.google.com/store/apps/details?id=com.joemdjossou.hymnes&pcampaignid=web_share",
    },
    featured: true,
    status: "1 Star",
  },
  {
    title: "StudyStats",
    description:
      "A group project that maximizes the students potential and simplify GPA tracking with the premier GPA analysis tool. From comprehensive GPA tracking to in-depth performance analysis and goal setting, Study Stats does the job.",
    image:
      "https://play-lh.googleusercontent.com/uoaCqnfC2BdfKZScxrWxIg_g4MJBPNiyP-wEJ4pUtP7FCqLB4xLYnlwPIDSTg-1kxQ=w2560-h1440-rw",
    period: "Nov 2023 - Mar 2024",
    technologies: [
      "Flutter",
      "Dart",
      "AI Integration",
      "Study Progress",
      "Personalized Study Recommendations",
    ],
    links: {
      appstore: "https://apps.apple.com/ng/app/study-stats-app/id6477740443",
      playstore:
        "https://play.google.com/store/apps/details?id=com.GDSC.StudyStats",
    },
    featured: true,
    status: "",
  },
  {
    title: "Affection Alerts",
    description:
      "From AI to Local Love - A beautiful mobile app that transforms your WhatsApp chat history into a curated collection of the sweetest, most heartwarming messages using AI.",
    image: "https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png",
    period: "Still in Development",
    technologies: [
      "Flutter",
      "Dart",
      "AI Integration",
      "WhatsApp API",
      "Natural Language Processing",
    ],
    links: {
      github: "https://github.com/joemdjossou/affection_alerts",
    },
    featured: true,
    status: "AI-Powered",
  },
  {
    title: "Shoesly Flutter",
    description:
      "A mobile application that allows you to find the best shoes for your feet, while showcasing clean architecture and modern Flutter development practices.",
    image:
      "https://github.com/joemdjossou/shoesly_flutter/raw/main/assets/app/discoverPage.png",
    period: "Jan 2025",
    technologies: ["Flutter", "Dart", "Clean Architecture", "Code Test"],
    links: {
      github: "https://github.com/joemdjossou/shoesly_flutter",
    },
    featured: true,
    status: "1 Star",
  },
  {
    title: "ShopNow Mobile",
    description:
      "A smart mobile platform designed for global shopping solutions. Built using agile methodology with weekly sprints focused on implementing use cases efficiently.",
    image: "https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png",
    period: "Mar 2025",
    technologies: [
      "Flutter",
      "Dart",
      "E-commerce",
      "Global Shopping",
      "Agile Development",
    ],
    links: {
      github: "https://github.com/joemdjossou/shop_now_mobile",
    },
    featured: true,
    status: "Production Ready",
  },

  {
    title: "Clima Weather App",
    description:
      "A minimalist weather app built with Flutter that offers real-time weather updates sourced from OpenWeatherMap.org with beautiful UI design.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
    period: "Jan 2024",
    technologies: ["Flutter", "Dart", "Weather API", "Real-time Data"],
    links: {
      github: "https://github.com/joemdjossou/flutter_clima",
    },
    featured: true,
    status: "2 Stars",
  },
  {
    title: "French Bakery Restaurant",
    description:
      "An e-commerce mobile app UI built with Flutter showcasing French breads with elegant design and smooth user experience.",
    image:
      "https://github.com/joemdjossou/french_bakery_restaurant/assets/123335804/601fa6b9-0db4-4897-a1c7-761eff4249a1",
    period: "Feb 2025",
    technologies: ["Flutter", "Objective-C", "UI/UX Design", "E-commerce"],
    links: {
      github: "https://github.com/joemdjossou/french_bakery_restaurant",
    },
    featured: false,
    status: "1 Star",
  },

  {
    title: "Tic Tac Toe Game",
    description:
      "A classic Tic Tac Toe game app using Flutter/Dart that supports both light mode and dark mode with smooth animations.",
    image: "https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png",
    period: "Feb 2024",
    technologies: ["Flutter", "Dart", "Game Development", "Dark/Light Mode"],
    links: {
      github: "https://github.com/joemdjossou/tic_tac_toe_game",
    },
    featured: false,
    status: "1 Star",
  },
  {
    title: "Flutter Chess Game",
    description:
      "Building a chess game interface with Dart & Flutter featuring clean design and interactive gameplay mechanics.",
    image:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=300&fit=crop",
    period: "Feb 2024",
    technologies: ["Flutter", "Dart", "Game Logic", "Interactive UI"],
    links: {
      github: "https://github.com/joemdjossou/flutter_chess_game",
    },
    featured: false,
    status: "In Development",
  },
  {
    title: "Business Directory App",
    description:
      "A Flutter mini-app displaying businesses with search functionality, detail screens, offline persistence, and robust state management using Provider and Dio.",
    image:
      "https://github.com/joemdjossou/business_directory_app/raw/main/screenshot_2.png",
    period: "Sep 2025",
    technologies: ["Flutter", "Dart", "Provider", "Dio", "Offline Storage"],
    links: {
      github: "https://github.com/joemdjossou/business_directory_app",
    },
    featured: false,
    status: "Recently Updated",
  },
];

const featuredList = projects.filter((p) => p.featured);
const heroProject = featuredList[0];
const restFeatured = featuredList.slice(1, 6);

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16 animate-fade-in">
          <p className="section-label mb-2">Work</p>
          <h2 className="section-heading mb-4">Selected projects</h2>
          <p className="text-muted-foreground max-w-xl">
            Mobile, AI, and web applications built with Flutter, React, and
            modern tools.
          </p>
        </div>

        {/* Hero project */}
        {heroProject &&
          (() => {
            const heroHref =
              heroProject.links.website ||
              heroProject.links.playstore ||
              heroProject.links.github ||
              "#";
            const isExternal =
              typeof heroHref === "string" && !heroHref.startsWith("#");
            return (
              <a
                href={heroHref}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block group mb-12 md:mb-16 animate-slide-up rounded-2xl overflow-hidden bg-card border border-border card-shadow hover-lift"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={heroProject.image}
                    alt={heroProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{heroProject.period}</span>
                    {heroProject.technologies.slice(0, 3).map((t, i) => (
                      <span key={i}>· {t}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {heroProject.title}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    {heroProject.description}
                  </p>
                </div>
              </a>
            );
          })()}

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {restFeatured.map((project, index) => (
            <Card
              key={index}
              className="card-shadow hover-lift transition-smooth animate-slide-up overflow-hidden border border-border rounded-xl"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {project.title}
                  </CardTitle>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {project.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.links.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 rounded-lg"
                      asChild
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-1" /> Code
                      </a>
                    </Button>
                  )}
                  {project.links.playstore && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 rounded-lg"
                      asChild
                    >
                      <a
                        href={project.links.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="w-4 h-4 mr-1" /> Play
                      </a>
                    </Button>
                  )}
                  {project.links.appstore && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 rounded-lg"
                      asChild
                    >
                      <a
                        href={project.links.appstore}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" /> App Store
                      </a>
                    </Button>
                  )}
                  {project.links.website && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 rounded-lg"
                      asChild
                    >
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" /> Site
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other projects - compact list */}
        <div className="space-y-4 w-full">
          <p className="section-label">More</p>
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover-lift transition-smooth"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  {project.links.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 rounded-lg"
                      asChild
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="rounded-lg hover-lift" asChild>
            <a
              href="https://github.com/joemdjossou?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              All repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
