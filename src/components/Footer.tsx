import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border px-6 md:px-10 lg:px-14 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Brand */}
        <button
          onClick={scrollToTop}
          className="text-sm font-bold tracking-[0.05em] text-foreground hover:text-muted-foreground transition-smooth text-left"
        >
          EJ.
        </button>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground/50 order-last sm:order-none">
          © {currentYear} Josué Djossou
        </p>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/joemdjossou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/50 hover:text-foreground transition-smooth"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/joemdjossou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/50 hover:text-foreground transition-smooth"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/joemdjossou/joemdjossou.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/50 hover:text-foreground transition-smooth tracking-[0.08em]"
          >
            Source
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
