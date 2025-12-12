import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ExternalLink, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Lead Mobile Engineer",
    company: "EdoMatch",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQF8Nxsq-_LbkA/company-logo_200_200/B4DZpJsHzmG8AI-/0/1762172898892/edomatch_logo?e=1764201600&v=beta&t=xUUAfxkvW9EtpLZpDbEmBCdaMQuzDkJvB0QcM_iW4-A",
    location: "Remote",
    period: "02/2025 - Present",
    description:
      "Leading mobile engineering team to develop high-performance, user-centric mobile applications using Flutter & Dart.",
    tasks: [
      "Improved user retention by 39% and gained 73% more users on the mobile application with a total of 50,000+ users",
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
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHBngAJQ7hd4A/company-logo_100_100/company-logo_100_100/0/1733267444196?e=1764201600&v=beta&t=Pf7ASyDs4BHEximmtkuW1foi0mksv0XdO5hGHVe7m1o",
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
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFHVb6ZSCipCw/company-logo_200_200/company-logo_200_200/0/1727104517379/upwork_logo?e=1764201600&v=beta&t=7EH22LJHWOAg4TcBdMtM32XTAUG7o80mrzkdGPcCqys",
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
    logo: "https://media.licdn.com/dms/image/v2/C560BAQE5iQFVan0Rfw/company-logo_200_200/company-logo_200_200/0/1630611374757?e=1764201600&v=beta&t=evidodas8bA8oOsUgGf0XyWr581DAR3G5fSQTRwQmik",
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
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEOP2zOrjI63g/company-logo_200_200/company-logo_200_200/0/1663074680407?e=1764201600&v=beta&t=mQQxTW8xwkyyCvZuP432LC3udd9JNsS0wPK4c2TirQ0",
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
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and work experiences in mobile application
            development
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="card-shadow hover-lift transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-xl lg:text-2xl text-foreground">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {exp.tasks && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-1 text-muted-foreground">
                      {exp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 text-xs">▪</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover-lift"
                    >
                      {skill}
                    </Badge>
                  ))}
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
