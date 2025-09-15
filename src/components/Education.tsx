import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science - BSc, Computer Science",
    specialization: "Information Systems",
    institution: "Babcock University",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFD9GnW8bjfHQ/company-logo_100_100/company-logo_100_100/0/1635719862173?e=1760572800&v=beta&t=a4WgM-yLzyznYTZHpV53G6THFdRTlhQUo6krSTC8ag8",
    location: "Ilishan-Remo, Nigeria",
    period: "2020 - 2024",
    description:
      "Knowledge and methods to a broad base of computer information technologies to meet the digital information needs of organizations",
    achievements: [
      "Computer Science Major",
      "Information Systems Minor",
      "Mobile Application Development Focus",
      "Final Year Project: Mental Health Application",
    ],
  },
  {
    degree: "Continuous Learning & Certifications",
    specialization: "Tech and Non-Tech Certifications",
    institution: "OpenClassrooms",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGGjlGUHa2png/company-logo_100_100/company-logo_100_100/0/1665412802239/openclassrooms_logo?e=1760572800&v=beta&t=GXAUtDDwj9UCwk7c6BBXV9L7sG_qLTRMuzxzG4OdUds",
    location: "Online - France",
    period: "Since 2021",
    description:
      "Ongoing professional development through online learning platforms and certification programs",
    achievements: [
      "Tech Certifications",
      "Professional Development",
      "Online Learning",
      "Skill Enhancement",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic background and continuous learning journey in computer
            science and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="card-shadow hover-lift transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-border flex items-center justify-center flex-shrink-0">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-xl lg:text-2xl text-foreground">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary">
                      {edu.specialization}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">
                    Key Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <Badge
                        key={achIndex}
                        variant="outline"
                        className="hover-lift"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education image and additional info */}
        <div className="mt-16 text-center animate-scale-in">
          <div className="relative inline-block mb-8">
            <img
              src="https://joemdjossou.github.io/images/education.png"
              alt="Education background"
              className="w-full max-w-md h-auto rounded-2xl card-shadow hover-lift transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
          </div>

          <Card className="max-w-2xl mx-auto card-shadow hover-lift transition-smooth">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Academic Excellence & Continuous Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My educational journey combines formal computer science
                education with continuous professional development. I believe in
                lifelong learning and stay updated with the latest technologies
                and industry best practices.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">
                    Academic Focus:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Mobile Application Development</li>
                    <li>• Information Systems Design</li>
                    <li>• Software Engineering</li>
                    <li>• Database Management</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">
                    Continuous Learning:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Online Certifications</li>
                    <li>• Tech Workshops</li>
                    <li>• Industry Best Practices</li>
                    <li>• Professional Development</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
