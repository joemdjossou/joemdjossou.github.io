import Reveal from "@/components/Reveal";

const stats = [
  { value: "6+", label: "Years building" },
  { value: "200K+", label: "Downloads" },
  { value: "100K+", label: "Users reached" },
  { value: "7", label: "Teams shipped for" },
];

interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  skills: string[];
}

const roles: Role[] = [
  {
    title: "Senior Full Stack & Data Engineer",
    company: "Upwork (Freelance)",
    location: "Remote",
    period: "SEP 2020 — Present",
    points: [
      "Built ETL/ELT pipelines ingesting REST APIs, Apps Script and webhook feeds into MongoDB/SQL for reporting & analytics.",
      "Architected scalable Java (Spring Boot, Hibernate) and Node.js REST/microservice APIs powering high-traffic apps.",
      "Owned features end-to-end — schema versioning, data QA, TDD and CI/CD workflows.",
    ],
    skills: ["Java", "Spring Boot", "Node.js", "ETL/ELT", "MongoDB"],
  },
  {
    title: "Lead Mobile Engineer",
    company: "EdoMatch",
    location: "Lomé, Togo (Hybrid)",
    period: "FEB 2025 — AUG 2026",
    points: [
      "Improved retention +107% and grew to 70K+ users / 100K+ downloads.",
      "Built high-performance Flutter apps, integrated AWS services and PostHog analytics.",
      "Researched & shipped AI-powered features; mentored junior developers.",
    ],
    skills: ["Flutter", "Dart", "AWS", "PostHog", "AI"],
  },
  {
    title: "AI/ML Technical Trainer",
    company: "TDEV",
    location: "Lomé, Togo",
    period: "NOV 2025 — JUL 2026",
    points: [
      "Designed hands-on AI training for developers — prompt engineering to production deployment.",
      "Mentored builders on translating AI into locally relevant, shipped prototypes.",
    ],
    skills: ["AI/ML", "Prompt Eng.", "Mentoring"],
  },
  {
    title: "Senior Mobile Engineer",
    company: "01Supplies",
    location: "Cotonou, Benin (Remote)",
    period: "OCT 2024 — FEB 2025",
    points: [
      "Led development & release of 3 apps across iOS and Android (+53% engagement).",
      "Built CI/CD cutting deploy time 3 days → 4 hours; 78% coverage, −43% production issues.",
    ],
    skills: ["Flutter", "CI/CD", "iOS", "Android"],
  },
  {
    title: "Software Engineer",
    company: "Babcock University Computer Club",
    location: "Ilishan-Remo, Nigeria",
    period: "NOV 2023 — MAY 2024",
    points: [
      "Reviewed and contributed to student-facing apps: BUCC Companion, BUCC ME, BUCC Ballot.",
    ],
    skills: ["Flutter", "Dart", "Code Review"],
  },
  {
    title: "Mobile Application Engineer",
    company: "GDSC Babcock",
    location: "Ilishan-Remo, Nigeria",
    period: "SEP 2023 — MAY 2024",
    points: [
      "Ran Flutter workshops; co-built & launched Study Stats (GPA analytics) on both stores.",
    ],
    skills: ["Flutter", "Dart", "Teaching"],
  },
  {
    title: "Software Engineer",
    company: "CENTECH-TOGO",
    location: "Lomé, Togo",
    period: "JAN 2023 — JUL 2023",
    points: [
      "Built cross-platform Flutter apps and integrated backend APIs for client projects.",
    ],
    skills: ["Flutter", "Dart", "APIs"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative px-6 md:px-10 lg:px-14 py-20 md:py-28 overflow-hidden">
      <span className="giant-word absolute -top-2 left-4 hidden md:block">Career</span>

      {/* Stats */}
      <Reveal className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-border pb-14 mb-14 border-b border-border">
        {stats.map((s, i) => (
          <div key={i} className="md:px-8 first:pl-0">
            <div className="font-bold leading-none text-foreground" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              {s.value}
            </div>
            <div className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mt-2">{s.label}</div>
          </div>
        ))}
      </Reveal>

      <Reveal>
        <p className="section-label mb-4">Career</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-14">
          My career &amp; experience
        </h2>
      </Reveal>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-0 md:left-52 top-2 bottom-2 w-px bg-border hidden md:block" />
        <div className="space-y-4">
          {roles.map((r, i) => (
            <Reveal key={i} delay={(i % 2) * 0.05}>
              <div className="group grid md:grid-cols-[13rem_1fr] gap-4 md:gap-8 border border-border bg-card/40 hover:bg-card hover:border-primary/40 transition-smooth p-6 md:p-8 rounded-lg">
                <div className="relative">
                  <span className="hidden md:block absolute -left-[calc(2rem+1px)] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                  <p className="text-xs font-mono font-semibold uppercase tracking-[0.12em] text-primary">{r.period}</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">{r.location}</p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {r.title} <span className="text-muted-foreground/60 font-normal">· {r.company}</span>
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {r.points.map((p, pi) => (
                      <li key={pi} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary/50 mt-1.5 shrink-0 text-[10px]">▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {r.skills.map((sk) => (
                      <span key={sk} className="text-[10px] font-mono uppercase tracking-[0.1em] text-muted-foreground/70 border border-border px-2 py-1 rounded">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
