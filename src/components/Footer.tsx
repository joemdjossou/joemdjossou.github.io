import { Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50 py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold text-foreground">Josué Djossou</span>
            <nav className="flex flex-wrap gap-x-6 gap-y-1">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/joemdjossou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth p-2 rounded-lg hover:bg-secondary"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/joemdjossou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth p-2 rounded-lg hover:bg-secondary"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:joemdjossou@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-smooth p-2 rounded-lg hover:bg-secondary"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Josué Djossou. Built with React & Tailwind.
          </p>
          <a
            href="https://github.com/joemdjossou/joemdjossou.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-smooth"
          >
            View source
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
