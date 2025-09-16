import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ExternalLink, Github, Play } from "lucide-react";

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
    title: "Hymnes et Louanges",
    description:
      "A beautiful application for hymns with MIDI audio playback capabilities, featuring a modern clean architecture and elegant Forest Green, Gold, and White design theme.",
    image: "https://github.com/joemdjossou/hymnes/raw/joemfixings/hymnes.png",
    period: "Jan 2025",
    technologies: ["Flutter", "Dart", "Clean Architecture", "Code Test"],
    links: {
      github: "https://github.com/joemdjossou/hymnms",
    },
    featured: true,
    status: "1 Star",
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
    image:
      "https://private-user-images.githubusercontent.com/123335804/489339419-212ffbe8-e016-4393-acea-1c9b94dc762c.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTgwNjE0MjgsIm5iZiI6MTc1ODA2MTEyOCwicGF0aCI6Ii8xMjMzMzU4MDQvNDg5MzM5NDE5LTIxMmZmYmU4LWUwMTYtNDM5My1hY2VhLTFjOWI5NGRjNzYyYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkxNlQyMjE4NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MWIzZGU3OTY4ODIwNGNiN2JhMzQyN2E4ZTEwOGEwNWI1ZjE5NzNhY2UzZjg3YjZjZTAyMmUyM2E0NmI3M2I3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.3imoeMY3_Jt1BNpR5SkpVCIVZ7nNByLuVOSEGluddWE",
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
    image:
      "https://private-user-images.githubusercontent.com/123335804/489351129-2e6dc72c-3be8-43b5-b17b-605b55d0a7c3.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTgwNjE1NDksIm5iZiI6MTc1ODA2MTI0OSwicGF0aCI6Ii8xMjMzMzU4MDQvNDg5MzUxMTI5LTJlNmRjNzJjLTNiZTgtNDNiNS1iMTdiLTYwNWI1NWQwYTdjMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkxNlQyMjIwNDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01YTYwZmZlODBlODQ3MTc2NTc1MjJiNTkxNTFkNWM2M2U1Njk5YjZiMGE4MTE4MmI4MjFhMDVjOWIyOWM1YTQ0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.oK82WxoxQdLVo3hTo4Y2bMXdhmG0EPwyd4XryLyBHdQ",
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

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">GitHub & Live Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects from my GitHub repositories showcasing Mobile, AI,
            Data Science, and Web applications built with Flutter, React,
            Python, and modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <Card
                key={index}
                className="card-shadow hover-lift transition-smooth animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-xl lg:text-2xl text-foreground">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="hover-lift"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.links.github && (
                      <Button
                        variant="default"
                        size="sm"
                        className="gradient-primary text-white hover-lift"
                        asChild
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {project.links.playstore && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover-lift"
                        asChild
                      >
                        <a
                          href={project.links.playstore}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Play Store
                        </a>
                      </Button>
                    )}
                    {project.links.appstore && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover-lift"
                        asChild
                      >
                        <a
                          href={project.links.appstore}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          App Store
                        </a>
                      </Button>
                    )}
                    {project.links.website && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover-lift"
                        asChild
                      >
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Website
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Non-featured projects */}
        <div className="max-w-4xl mx-auto space-y-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <Card
                key={index}
                className="card-shadow hover-lift transition-smooth animate-slide-up"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <CardTitle className="text-xl text-foreground">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="hover-lift"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {project.links.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover-lift"
                        asChild
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.links.website && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover-lift"
                        asChild
                      >
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Other projects section */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="card-shadow hover-lift transition-smooth max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Github className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                More Projects Available
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Explore my GitHub repositories for additional projects including
                both mobile and web-based applications. My goal is to build as
                many end-to-end Flutter projects as possible to learn and
                contribute to society.
              </p>
              <Button
                className="gradient-primary text-white hover-lift"
                asChild
              >
                <a
                  href="https://github.com/joemdjossou?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View All Repositories
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
