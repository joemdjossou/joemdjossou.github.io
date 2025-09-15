import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Programming & Development",
    skills: [
      { name: "Flutter", level: 95, color: "bg-blue-500" },
      { name: "Dart", level: 90, color: "bg-blue-600" },
      { name: "JavaScript", level: 82, color: "bg-yellow-500" },
      { name: "C++", level: 75, color: "bg-red-500" },
      { name: "Python", level: 79, color: "bg-green-600" },
      { name: "TypeScript", level: 78, color: "bg-blue-700" },
      { name: "React", level: 75, color: "bg-cyan-500" },
      {
        name: "OOP (Object Oriented Programming)",
        level: 96,
        color: "bg-purple-500",
      },
      { name: "Clean Architecture", level: 88, color: "bg-indigo-600" },
      { name: "Cross-platform Development", level: 92, color: "bg-purple-600" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "iOS Development", level: 90, color: "bg-gray-600" },
      { name: "Android Development", level: 86, color: "bg-green-500" },
      { name: "Mobile App Architecture", level: 90, color: "bg-blue-500" },
      { name: "App Store Deployment", level: 85, color: "bg-blue-600" },
      { name: "Mobile UI/UX Design", level: 83, color: "bg-pink-500" },
      { name: "Responsive Design", level: 87, color: "bg-purple-400" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Firebase", level: 90, color: "bg-orange-500" },
      { name: "Cloud Firestore", level: 93, color: "bg-orange-600" },
      { name: "REST APIs", level: 91, color: "bg-teal-500" },
      { name: "AWS", level: 76, color: "bg-orange-400" },
      { name: "API Integration", level: 92, color: "bg-green-500" },
      { name: "Database Design", level: 82, color: "bg-indigo-500" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "CI/CD Pipelines", level: 85, color: "bg-blue-500" },
      { name: "Git & GitHub", level: 92, color: "bg-gray-700" },
      { name: "Automated Testing", level: 78, color: "bg-green-600" },
      { name: "Code Review", level: 88, color: "bg-purple-500" },
      { name: "Agile Development", level: 85, color: "bg-blue-400" },
      { name: "Performance Optimization", level: 82, color: "bg-red-500" },
    ],
  },
  {
    title: "Emerging Technologies",
    skills: [
      { name: "Artificial Intelligence (AI)", level: 78, color: "bg-pink-500" },
      { name: "Natural Language Processing", level: 65, color: "bg-pink-600" },
      { name: "AI Integration", level: 78, color: "bg-purple-500" },
      { name: "E-Commerce Solutions", level: 85, color: "bg-yellow-500" },
      { name: "WhatsApp API", level: 70, color: "bg-green-400" },
    ],
  },
  {
    title: "Soft Skills & Leadership",
    skills: [
      { name: "Team Leadership", level: 88, color: "bg-red-500" },
      { name: "Mentoring", level: 85, color: "bg-blue-400" },
      { name: "Communication", level: 94, color: "bg-blue-400" },
      { name: "Problem Solving", level: 90, color: "bg-green-400" },
      { name: "Workshop Facilitation", level: 80, color: "bg-purple-400" },
      { name: "Attention to Detail", level: 85, color: "bg-red-400" },
      { name: "Bilingual Communications", level: 88, color: "bg-cyan-400" },
      { name: "Client Relations", level: 82, color: "bg-orange-400" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and professional capabilities across various
            domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="card-shadow hover-lift transition-smooth animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress
                        value={skill.level}
                        className="h-2 bg-secondary"
                      />
                      <div
                        className="absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ease-out gradient-primary"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${
                            categoryIndex * 0.1 + skillIndex * 0.05
                          }s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills illustration */}
        <div className="text-center animate-scale-in">
          <div className="relative inline-block">
            <img
              src="https://joemdjossou.github.io/images/skills1.png"
              alt="Skills illustration"
              className="w-full max-w-md h-auto rounded-2xl card-shadow hover-lift transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
          </div>
        </div>

        {/* Skills highlights */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
          <Card className="text-center card-shadow hover-lift transition-smooth animate-fade-in">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">95%</span>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                Flutter Expertise
              </h3>
              <p className="text-muted-foreground text-sm">
                Advanced proficiency in Flutter framework for cross-platform
                mobile development
              </p>
            </CardContent>
          </Card>

          <Card
            className="text-center card-shadow hover-lift transition-smooth animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 gradient-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">88%</span>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                Team Leadership
              </h3>
              <p className="text-muted-foreground text-sm">
                Leading mobile engineering teams and mentoring junior developers
              </p>
            </CardContent>
          </Card>

          <Card
            className="text-center card-shadow hover-lift transition-smooth animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">85%</span>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                CI/CD & DevOps
              </h3>
              <p className="text-muted-foreground text-sm">
                Expert in automated deployment pipelines and development
                operations
              </p>
            </CardContent>
          </Card>

          <Card
            className="text-center card-shadow hover-lift transition-smooth animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">78%</span>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                AI Integration
              </h3>
              <p className="text-muted-foreground text-sm">
                Implementing AI-powered features and natural language processing
                in apps
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
