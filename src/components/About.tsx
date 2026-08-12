import Reveal from "@/components/Reveal";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const pillars = [
  {
    title: "Backend & Data Engineering",
    body: "ETL/ELT pipelines, schema versioning & data QA, plus scalable Java (Spring Boot, Hibernate) and Node.js APIs over MongoDB/SQL.",
  },
  {
    title: "Mobile Engineering",
    body: "End-to-end Flutter & Dart apps — clean architecture, iOS & Android, store launches reaching 200K+ downloads.",
  },
  {
    title: "AI, Cloud & DevOps",
    body: "AI/ML features & training, NLP, AWS, Docker/Kubernetes, and CI/CD pipelines that cut deploys from 3 days to 4 hours.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative px-6 md:px-10 lg:px-14 py-20 md:py-28 bg-secondary/10 overflow-hidden">
      <span className="giant-word absolute -top-2 left-4 hidden md:block">About</span>

      {/* Header */}
      <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-start mb-16">
        <div>
          <p className="section-label mb-4">About</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl">
            Engineer &amp; builder
          </h2>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-2xl">
            Yaovi Emmanuel Josué Djossou is a Senior Software Engineer with 6+ years
            building production-scale data and backend systems — ETL/ELT pipelines,
            Java &amp; Node.js services, and Flutter apps trusted by 100K+ users. Bilingual
            (EN / FR / Ewe), based in Lomé, Togo and available worldwide for remote contracts.
          </p>
          <p className="mt-6 text-xs font-mono uppercase tracking-[0.12em] text-primary">
            Proof — 6+ yrs · 200K+ downloads · 100K+ users · BSc Computer Science 3.39/4, Babcock University
          </p>
        </div>

        <div className="hidden lg:block w-56 h-64 border border-border overflow-hidden shrink-0">
          <img
            src="/profile-1.jpg"
            alt="Emmanuel Josué Djossou"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Pillars */}
      <div className="grid md:grid-cols-3 border border-border divide-y md:divide-y-0 md:divide-x divide-border mb-16">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="h-full">
            <div className="p-6 md:p-8 h-full">
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Contact CTA */}
      <div id="contact" className="scroll-mt-24 border border-border bg-card p-8 md:p-12">
        <p className="section-label mb-4">Contact</p>
        <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
          Let&apos;s work together<span className="text-primary">.</span>
        </h3>
        <p className="mt-4 text-sm text-muted-foreground max-w-lg leading-relaxed">
          Open to full-time and contract roles, speaking, and collaborations. I
          typically respond within 24 hours.
        </p>

        <a
          href="mailto:joemdjossou@outlook.com"
          className="mt-8 inline-flex items-center gap-2 text-lg md:text-2xl font-bold text-foreground hover:text-primary transition-smooth break-all"
        >
          <Mail className="w-5 h-5 shrink-0" />
          joemdjossou@outlook.com
        </a>

        <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-border text-xs font-mono font-semibold uppercase tracking-[0.12em]">
          <a href="https://github.com/joemdjossou" target="_blank" rel="noopener noreferrer" className="accent-link inline-flex items-center gap-1.5">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/joemdjossou" target="_blank" rel="noopener noreferrer" className="accent-link inline-flex items-center gap-1.5">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="/resume.pdf" download="Yaovi_Emmanuel_Josue_Djossou_Resume.pdf" className="accent-link inline-flex items-center gap-1.5">
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
