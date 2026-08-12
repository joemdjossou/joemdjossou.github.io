import Scene3D from "@/components/Scene3D";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, FileText, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["DEVELOPER", "DATA ENGINEER", "MOBILE DEV", "AI BUILDER"];

const socials = [
  { icon: Github, href: "https://github.com/joemdjossou", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/joemdjossou", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/joemdjossou", label: "Instagram" },
  { icon: Mail, href: "mailto:joemdjossou@outlook.com", label: "Email" },
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient glows */}
      <div aria-hidden className="glow-blob pointer-events-none absolute top-1/4 left-1/3 w-[38rem] h-[38rem] rounded-full opacity-25" />
      <div aria-hidden className="glow-blob pointer-events-none absolute -bottom-40 -right-24 w-[34rem] h-[34rem] rounded-full opacity-20" />

      {/* 3D centerpiece — fills the hero, receives pointer for reactivity */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Overlay content — pointer-events off so the canvas stays interactive;
          individual links re-enable pointer events. */}
      <div className="pointer-events-none relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-20">
        <div className="grid lg:grid-cols-3 items-center gap-8 w-full">
          {/* Left — intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-primary font-mono text-lg md:text-xl">Hello! I&apos;m</p>
            <h1
              className="mt-1 font-bold leading-[0.92] tracking-tight text-foreground text-glow"
              style={{ fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)" }}
            >
              Emmanuel
              <br />
              Josué
            </h1>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Senior Software &amp; Data Engineer — Lomé, Togo · Remote worldwide.
            </p>
          </motion.div>

          {/* Middle — spacer (the blob renders behind, centered) */}
          <div className="hidden lg:block" />

          {/* Right — rotating role with ghost text */}
          <motion.div
            className="lg:text-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg md:text-xl font-medium text-muted-foreground">A Creative</p>
            <div className="relative h-[1.1em] mt-1" style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIdx]}
                  className="absolute inset-0 lg:text-right font-bold tracking-tight text-foreground whitespace-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
              {/* ghost duplicate */}
              <span
                aria-hidden
                className="absolute -top-3 right-0 ghost-text font-bold tracking-tight whitespace-nowrap select-none opacity-60"
                style={{ fontSize: "1.35em" }}
              >
                {roles[roleIdx]}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Left vertical social rail */}
      <div className="pointer-events-none absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col gap-5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="pointer-events-auto text-muted-foreground/60 hover:text-primary hover:-translate-y-0.5 transition-all"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
        <span className="w-px h-16 bg-border mx-auto mt-2" />
      </div>

      {/* Resume — bottom right */}
      <a
        href="/resume.pdf"
        download="Yaovi_Emmanuel_Josue_Djossou_Resume.pdf"
        className="pointer-events-auto absolute bottom-6 right-6 md:right-10 z-20 inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-smooth"
      >
        Resume <FileText className="w-3.5 h-3.5" />
      </a>

      {/* Scroll hint — bottom left */}
      <button
        onClick={() => scrollTo("#work")}
        className="pointer-events-auto absolute bottom-6 left-6 md:left-20 z-20 hidden md:flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-muted-foreground/50 hover:text-primary transition-smooth group"
      >
        Scroll <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-smooth" />
      </button>
    </div>
  );
};

export default Hero;
