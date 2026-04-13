import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    title: "Lead Mobile Engineer",
    company: "EdoMatch",
    logo: "https://www.edomatch.com/images/logo/logo.png?image_process=quality,Q_80",
    location: "Hybrid",
    period: "02/2025 – Present",
    description:
      "Leading mobile engineering team to develop high-performance, user-centric mobile applications using Flutter & Dart.",
    highlights: [
      "Improved user retention by 104% and grew to 70,000+ users",
      "Design and build high-performance cross-platform apps",
      "Research and integrate AI-powered features",
      "Mentor junior developers",
    ],
    skills: ["Flutter", "Dart", "AWS", "AI Integration", "Team Leadership"],
    url: "https://edomatch.com",
  },
  {
    title: "Senior Mobile Engineer",
    company: "01Supplies",
    logo: "https://01supplies.s3.eu-north-1.amazonaws.com/live/01supplies/store/642929bc6677c8f59009d5a0/site_logo.png",
    location: "Remote",
    period: "10/2024 – 02/2025",
    description:
      "Led development and deployment of 3 mobile applications across iOS and Android.",
    highlights: [
      "53% increase in user engagement on store launch",
      "CI/CD pipeline reduced deploy time from 3 days → 4 hours",
      "78% code coverage, 43% fewer production issues",
    ],
    skills: ["Flutter", "Dart", "CI/CD", "iOS", "Android"],
    url: "https://01supplies.com",
  },
  {
    title: "Mobile Developer (Freelance)",
    company: "Upwork",
    logo: "https://i0.wp.com/www.jenmatos.com/wp-content/uploads/2025/01/upwork-square-black.png",
    location: "Remote",
    period: "11/2020 – 10/2024",
    description:
      "High-performance cross-platform mobile apps for clients worldwide using Flutter and Dart.",
    highlights: [
      "Responsive layouts and high-quality UI components",
      "Complex backend API integration",
      "Debugging, testing, and code quality audits",
    ],
    skills: ["Flutter", "Dart", "API Integration", "UI/UX"],
    url: "https://upwork.com",
  },
  {
    title: "Mobile Developer",
    company: "Babcock University Computer Club",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQE5iQFVan0Rfw/company-logo_200_200/company-logo_200_200/0/1630611374757",
    location: "Ilishan-Remo, Nigeria",
    period: "11/2023 – 05/2024",
    description:
      "Reviewed and contributed to multiple student-focused mobile applications from the BUCC GitHub.",
    highlights: [
      "BUCC Companion App for student information",
      "BUCC ME App for personalized university hub",
      "BUCC Ballot App for departmental elections",
    ],
    skills: ["Flutter", "Dart", "Code Review"],
    url: "",
  },
  {
    title: "Mobile Developer",
    company: "Google Developer Student Clubs Babcock",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEOP2zOrjI63g/company-logo_200_200/company-logo_200_200/0/1663074680407",
    location: "Ilishan-Remo, Nigeria",
    period: "09/2023 – 05/2024",
    description:
      "Workshops and training for students in mobile app development with Flutter and Dart.",
    highlights: [
      "Delivered workshops on mobile app development",
      "Trained beginners in the Flutter framework",
    ],
    skills: ["Flutter", "Dart", "Mentoring"],
    url: "",
  },
  {
    title: "Mobile Developer",
    company: "CENTECH-TOGO",
    logo: "https://www.centech-togo.com/assets/images/logo.jpg",
    location: "Lomé, Togo",
    period: "01/2023 – 07/2023",
    description:
      "Cross-platform mobile applications with Flutter and Dart for CENTECH's client projects.",
    highlights: [
      "Collaborated with product, design, and backend teams",
      "Integrated backend APIs for complex functionalities",
    ],
    skills: ["Flutter", "Dart", "API Integration"],
    url: "",
  },
];

const Experience = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  return (
    <section id="experience" className="px-6 md:px-10 lg:px-14 py-20 md:py-28 bg-secondary/10">

      <div className="mb-14">
        <p className="section-label mb-4">Career</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          Experience
        </h2>
      </div>

      {/* Timeline list */}
      <div className="divide-y divide-border border-t border-border">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="group py-8 md:py-10 flex flex-col md:flex-row gap-6"
          >
            {/* Logo + period */}
            <div className="shrink-0 md:w-52 flex md:flex-col gap-4 md:gap-3">
              <div className="w-10 h-10 rounded-sm overflow-hidden bg-muted flex items-center justify-center shrink-0">
                {imageErrors[i] ? (
                  <span className="text-sm font-bold text-muted-foreground">
                    {exp.company.charAt(0)}
                  </span>
                ) : (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain p-1"
                    onError={() => setImageErrors((p) => ({ ...p, [i]: true }))}
                  />
                )}
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground/60 tracking-[0.08em]">
                  {exp.period}
                </p>
                <p className="text-xs text-muted-foreground/50 mt-0.5">{exp.location}</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-1">
                  {exp.company}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug">
                  {exp.title}
                  {exp.url && (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block ml-2 align-middle text-muted-foreground/30 hover:text-foreground transition-smooth"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-1.5">
                {exp.highlights.map((h, hi) => (
                  <li key={hi} className="text-sm text-muted-foreground/70 flex items-start gap-2">
                    <span className="text-muted-foreground/30 mt-1 shrink-0 text-[10px]">—</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
                {exp.skills.map((skill, si) => (
                  <Badge
                    key={si}
                    variant="outline"
                    className="text-[10px] font-semibold uppercase tracking-[0.12em] rounded-none border-border text-muted-foreground/60 hover:text-foreground transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
