import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    title: "Lead Mobile Engineer",
    company: "EdoMatch",
    logo: "https://www.edomatch.com/images/logo/logo.png?image_process=quality,Q_80",
    location: "Hybrid",
    period: "02/2025 - Present",
    description:
      "Leading mobile engineering team to develop high-performance, user-centric mobile applications using Flutter & Dart.",
    tasks: [
      "Improved user retention by 104% and gained 107% more users on the mobile application with a total of 70,000+ users",
      "Design and develop high-performance, user-centric mobile applications using Flutter & Dart",
      "Optimize apps for speed, scalability, and accessibility while implementing modern UI/UX designs",
      "Research and integrate AI-powered features to enhance user experience and innovation",
      "Mentor junior developers, fostering team growth and technical excellence",
    ],
    skills: [
      "Flutter",
      "Dart",
      "AWS",
      "API Integration",
      "AI Integration",
      "Team Leadership",
    ],
  },
  {
    title: "Senior Mobile Engineer",
    company: "01Supplies",
    logo: "https://01supplies.s3.eu-north-1.amazonaws.com/live/01supplies/store/642929bc6677c8f59009d5a0/site_logo.png",
    location: "Remote",
    period: "10/2024 - 02/2025",
    description:
      "Led the development, testing, and deployment of 3 high-performance mobile applications, ensuring seamless functionality across iOS and Android platforms.",
    tasks: [
      "Spearheaded successful release on Google Play Store and Apple App Store with 53% increase in user engagement",
      "Created CI/CD pipeline that reduced time-to-deployment from 3 days to 4 hours",
      "Implemented automated testing that increased code coverage to 78%, reducing production issues by 43%",
    ],
    skills: ["Flutter", "Dart", "CI/CD", "iOS", "Android", "Automated Testing"],
  },
  {
    title: "Mobile Application Developer (Freelance)",
    company: "Upwork",
    logo: "https://i0.wp.com/www.jenmatos.com/wp-content/uploads/2025/01/upwork-square-black.png",
    location: "Remote",
    period: "11/2020 - 10/2024",
    description:
      "Developed high-performance cross-platform mobile applications using Flutter and Dart, enhancing user engagement and satisfaction.",
    tasks: [
      "Implemented responsive layouts and high-quality UI components",
      "Integrated complex backend APIs to optimize app functionality and performance",
      "Conducted debugging and testing to ensure code quality and optimal performance",
    ],
    skills: [
      "Flutter",
      "Dart",
      "API Integration",
      "UI/UX",
      "Cross-platform Development",
    ],
  },
  {
    title: "Mobile Developer",
    company: "Babcock University Computer Club",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQE5iQFVan0Rfw/company-logo_200_200/company-logo_200_200/0/1630611374757?e=1772668800&v=beta&t=8KbL9cC-e0chxgPVcRHBLunwuoG9rA_5NAEWTrTcANk",
    location: "Ilishan-Remo, Nigeria",
    period: "11/2023 - 05/2024",
    description:
      "Worked and reviewed repositories from the BUCC GitHub page and contributed to multiple student-focused mobile applications.",
    tasks: [
      "Reviewed the BUCC companion mobile application for student information access",
      "Worked on the BUCC ME App for personalized university hub features",
      "Reviewed the BUCC Ballot App used for departmental elections",
    ],
    skills: ["Flutter", "Dart", "Code Review", "Mobile App Architecture"],
  },
  {
    title: "Mobile Application Developer",
    company: "Google Developer Student Clubs Babcock",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEOP2zOrjI63g/company-logo_200_200/company-logo_200_200/0/1663074680407?e=1772668800&v=beta&t=XWQ3p6gWecl-6_GerNof41vSM2istQxoQ7MHq1L0NXQ",
    location: "Ilishan-Remo, Nigeria",
    period: "09/2023 - 05/2024",
    description:
      "Participated in workshops and trained students in mobile applications development with Flutter and Dart.",
    tasks: [
      "Participated in workshops and talks about mobile applications development",
      "Trained students and beginners to develop mobile applications with Flutter framework",
    ],
    skills: ["Flutter", "Dart", "Mentoring", "Workshop Facilitation"],
  },
  {
    title: "Mobile Application Developer",
    company: "CENTECH-TOGO",
    logo: "https://www.centech-togo.com/assets/images/logo.jpg",
    location: "Lomé, Togo",
    period: "01/2023 - 07/2023",
    description:
      "Developed high-performance cross-platform mobile applications using Flutter and Dart, enhancing user engagement and satisfaction.",
    tasks: [
      "Collaborated with product managers, designers, and backend engineers to create seamless user experiences",
      "Integrated backend APIs to implement complex functionalities, ensuring stability and efficiency",
    ],
    skills: ["Flutter", "Dart", "API Integration", "Team Collaboration"],
  },
];

const Experience = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="experience" className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16 animate-fade-in">
          <p className="section-label mb-2">Career</p>
          <h2 className="section-heading mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-xl">
            Mobile engineering and leadership across startups and teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="card-shadow hover-lift transition-smooth animate-slide-up border border-border rounded-xl flex flex-col h-full"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="pb-2">
                <div className="flex gap-3 items-start">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0 flex items-center justify-center">
                    {imageErrors[index] ? (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm font-semibold">
                        {exp.company.charAt(0)}
                      </div>
                    ) : (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain p-1.5"
                        onError={() => handleImageError(index)}
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate font-medium">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 flex-1 flex flex-col pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {exp.description}
                </p>

                {exp.tasks && exp.tasks.length > 0 && (
                  <div className="space-y-1.5 flex-1">
                    <h4 className="font-semibold text-foreground text-sm">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      {exp.tasks.slice(0, 3).map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1 text-xs shrink-0">
                            ▪
                          </span>
                          <span className="line-clamp-2">{task}</span>
                        </li>
                      ))}
                      {exp.tasks.length > 3 && (
                        <li className="text-muted-foreground/80 text-xs">
                          +{exp.tasks.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skills.slice(0, 5).map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover-lift"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {exp.skills.length > 5 && (
                    <Badge variant="secondary" className="text-xs">
                      +{exp.skills.length - 5}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
