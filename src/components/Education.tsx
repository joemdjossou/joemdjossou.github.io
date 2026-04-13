const educationData = [
  {
    degree: "BSc Computer Science",
    specialization: "Information Systems",
    institution: "Babcock University",
    logo: "https://babcock.edu.ng/curator/media/5f733795-3e87-4c9b-87cd-65567a41fc34.png?h=62&w=194&s=12b683a5409becc7bc92ee933c6e75ef",
    location: "Ilishan-Remo, Nigeria",
    period: "2020 – 2024",
    highlights: [
      "Computer Science major · Information Systems minor",
      "Mobile Application Development focus",
      "Final year project: Mental Health Application",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="px-6 md:px-10 lg:px-14 py-20 md:py-28 bg-secondary/10">

      <div className="mb-14">
        <p className="section-label mb-4">Background</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          Education
        </h2>
      </div>

      <div className="divide-y divide-border border-t border-border">
        {educationData.map((edu, i) => (
          <div key={i} className="py-10 flex flex-col md:flex-row gap-6">
            {/* Logo + period */}
            <div className="shrink-0 md:w-52 flex md:flex-col gap-4 md:gap-3">
              <div className="w-12 h-12 rounded-sm overflow-hidden bg-white border border-border flex items-center justify-center shrink-0">
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-full h-full object-contain p-1.5"
                />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground/60 tracking-[0.08em]">
                  {edu.period}
                </p>
                <p className="text-xs text-muted-foreground/50 mt-0.5">{edu.location}</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-1">
                  {edu.institution}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{edu.specialization}</p>
              </div>

              <ul className="space-y-1.5">
                {edu.highlights.map((h, hi) => (
                  <li key={hi} className="text-sm text-muted-foreground/70 flex items-start gap-2">
                    <span className="text-muted-foreground/30 shrink-0 text-[10px] mt-1">—</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
