const items = [
  "Flutter", "Java", "Spring Boot", "Node.js", "TypeScript", "Python",
  "ETL / ELT", "MongoDB", "AWS", "Docker", "Kubernetes", "React", "AI / ML",
  "Clean Architecture", "CI / CD", "Data Pipelines",
];

const Marquee = () => {
  return (
    <div className="border-y border-border overflow-hidden py-5 bg-card/30">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground px-6">
              {item}
            </span>
            <span className="text-primary/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
