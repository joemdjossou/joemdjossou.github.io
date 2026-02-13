import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science - BSc, Computer Science",
    specialization: "Information Systems",
    institution: "Babcock University",
    logo: "https://babcock.edu.ng/curator/media/5f733795-3e87-4c9b-87cd-65567a41fc34.png?h=62&w=194&s=12b683a5409becc7bc92ee933c6e75ef",
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
];

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16 animate-fade-in">
          <p className="section-label mb-2">Background</p>
          <h2 className="section-heading mb-4">Education</h2>
          <p className="text-muted-foreground max-w-xl">
            Academic and continuous learning in computer science and tech.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="card-shadow hover-lift transition-smooth animate-slide-up border border-border rounded-xl"
              style={{ animationDelay: `${index * 0.05}s` }}
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
      </div>
    </section>
  );
};

export default Education;
