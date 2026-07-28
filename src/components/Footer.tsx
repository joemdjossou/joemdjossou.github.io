import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.round((window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Fixed scroll-progress indicator */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll progress — back to top"
        className="fixed bottom-4 right-4 z-40 text-[10px] font-mono font-semibold tracking-[0.14em] text-muted-foreground/70 hover:text-primary bg-background/80 backdrop-blur border border-border rounded-full px-2.5 py-1 transition-smooth"
      >
        {String(progress).padStart(2, "0")}%
      </button>

      <footer className="border-t border-border px-6 md:px-10 lg:px-14 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand + status */}
          <div className="flex items-center gap-5">
            <button
              onClick={scrollToTop}
              className="text-sm font-bold tracking-[0.05em] text-foreground hover:text-primary transition-smooth"
            >
              EJ.
            </button>
            <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground/70">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              SYSTEM_CHECK... OK
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/50 font-mono order-last sm:order-none">
            © {currentYear} Emmanuel Josué Djossou · REMOTE · WORLDWIDE
          </p>

          {/* Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/joemdjossou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-primary transition-smooth"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/joemdjossou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/joemdjossou/joemdjossou.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted-foreground/50 hover:text-primary transition-smooth tracking-[0.08em]"
            >
              Source
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
