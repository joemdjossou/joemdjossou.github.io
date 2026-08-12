import Reveal from "@/components/Reveal";

interface Group {
  label: string;
  items: string[];
}

const groups: Group[] = [
  {
    label: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "Dart", "SQL"],
  },
  {
    label: "Backend & Data",
    items: ["Spring Boot", "Hibernate", "Node.js", "REST / Microservices", "ETL / ELT", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    label: "Mobile",
    items: ["Flutter", "Dart", "iOS", "Android", "Clean Architecture", "App / Play Store"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI / CD", "Firebase", "GitHub Actions"],
  },
  {
    label: "AI & ML",
    items: ["Machine Learning", "Deep Learning", "NLP", "Prompt Engineering", "AI Integration"],
  },
  {
    label: "Web & BI",
    items: ["React", "Vue.js", "Nuxt", "PostHog", "Data Versioning", "BI Dashboards"],
  },
];

const Stack = () => {
  return (
    <section id="stack" className="relative px-6 md:px-10 lg:px-14 py-20 md:py-28 overflow-hidden">
      <span className="giant-word absolute -top-2 right-4 hidden md:block">Stack</span>

      <Reveal className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
        <div>
          <p className="section-label mb-4">Toolbox</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            The stack behind the work
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs sm:text-right leading-relaxed">
          Full-stack from data pipeline to pixel — the tools I reach for across
          backend, data, mobile and AI.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-border divide-y sm:divide-y-0 divide-border [&>*]:border-border sm:[&>*:nth-child(-n+3)]:border-b sm:[&>*:not(:nth-child(3n))]:border-r">
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={(i % 3) * 0.08} className="h-full">
            <div className="p-6 md:p-8 h-full">
              <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                / {g.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium text-muted-foreground border border-border px-2.5 py-1.5 transition-smooth hover:border-primary/50 hover:text-foreground cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Stack;
