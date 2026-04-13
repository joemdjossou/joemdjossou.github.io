const roleCards = [
  {
    title: "Flutter Developer",
    stat: "95+ proficiency",
    skills: ["Dart", "Clean Architecture", "Cross-platform", "State Management", "App Store Deployment"],
  },
  {
    title: "Mobile Architect",
    stat: "5+ apps shipped",
    skills: ["iOS Development", "Android Development", "Mobile UI/UX", "Responsive Design", "App Architecture"],
  },
  {
    title: "AI Integrator",
    stat: "On-Device LLM",
    skills: ["AI Integration", "NLP", "On-Device Models", "WhatsApp API", "E-Commerce AI"],
  },
  {
    title: "Backend & DevOps",
    stat: "Full pipeline",
    skills: ["Firebase", "REST APIs", "AWS", "CI/CD", "Git & GitHub", "Automated Testing"],
  },
];

const allSkills = [
  "Flutter", "Dart", "JavaScript", "TypeScript", "React", "Python", "C++",
  "OOP", "Clean Architecture", "iOS", "Android", "Firebase", "Cloud Firestore",
  "REST APIs", "AWS", "API Integration", "CI/CD", "Git", "Automated Testing",
  "Agile", "AI Integration", "NLP", "Team Leadership", "Mentoring",
  "Communication", "Problem Solving", "Bilingual (EN/FR)",
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 md:px-10 lg:px-14 py-20 md:py-28">

      <div className="mb-14">
        <p className="section-label mb-4">Expertise</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          Skills &amp; capabilities
        </h2>
      </div>

      {/* Zonski-style role cards — horizontal scroll on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border divide-y sm:divide-y-0 sm:divide-x divide-border mb-16">
        {roleCards.map((card, i) => (
          <div key={i} className="p-6 md:p-8 space-y-4">
            <div>
              <p className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                {card.title}.
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mt-1">
                {card.stat}
              </p>
            </div>
            <ul className="space-y-2">
              {card.skills.map((s, si) => (
                <li
                  key={si}
                  className="text-xs text-muted-foreground/70 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/30 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* All skills tag cloud */}
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 mb-5">
          / All technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill, i) => (
            <span
              key={i}
              className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/50 border border-border px-3 py-1.5 hover:text-foreground hover:border-foreground/30 transition-smooth cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
