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
    <section id="skills" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16 animate-fade-in">
          <p className="section-label mb-2">Expertise</p>
          <h2 className="section-heading mb-4">Skills</h2>
          <p className="text-muted-foreground max-w-xl">
            Technical and leadership capabilities across mobile, backend, and tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="card-shadow hover-lift transition-smooth animate-slide-up border border-border rounded-xl"
              style={{ animationDelay: `${categoryIndex * 0.05}s` }}
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

        {/* Skills highlights - compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10">
          {[
            { label: "Flutter", value: "95%", cls: "gradient-primary" },
            { label: "Leadership", value: "88%", cls: "gradient-accent" },
            { label: "CI/CD & DevOps", value: "85%", cls: "bg-primary/80" },
            { label: "AI Integration", value: "78%", cls: "bg-accent/80" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-xl border border-border bg-card card-shadow hover-lift transition-smooth"
            >
              <div className={`w-10 h-10 mx-auto mb-2 ${item.cls} rounded-lg flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">{item.value}</span>
              </div>
              <p className="text-sm font-medium text-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
