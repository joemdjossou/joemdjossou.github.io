import { useTheme } from "@/components/ThemeProvider";
import { Github, Linkedin, Moon, Sun, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

const socials = [
  { icon: Github, href: "https://github.com/joemdjossou", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/joemdjossou", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/joemdjossou", label: "X" },
];

const ThemeButton = ({ muted, hover }: { muted: string; hover: string }) => {
  const { theme, setTheme } = useTheme();
  // `system` resolves to whatever the OS says; flipping it should land on the
  // opposite of what the visitor is currently looking at.
  const isDark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`inline-flex size-8 items-center justify-center rounded-[3px] transition-colors ${muted} ${hover}`}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the hero the header sits on cobalt in both themes; once the page
  // scrolls it takes the theme's own ground.
  const muted = scrolled ? "text-muted-foreground" : "text-periwinkle";
  const hover = scrolled
    ? "hover:bg-muted hover:text-foreground"
    : "hover:bg-white/15 hover:text-white";
  const link = `rounded-[3px] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${muted} ${hover}`;

  return (
    <header
      className={`sticky top-0 z-50 border-b-2 transition-colors duration-300 ${
        scrolled
          ? "border-night/80 bg-background/90 text-foreground backdrop-blur-xl"
          : "border-transparent bg-transparent text-white"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3">
          <span className="display flex size-9 items-center justify-center rounded-[3px] bg-pop text-xl text-pop-foreground shadow-[3px_3px_0_hsl(var(--night))]">
            EJ
          </span>
          <span className="display hidden text-2xl sm:inline">Josué Djossou</span>
        </a>

        <nav className="flex items-center gap-0.5">
          <a href="#work" className={link}>
            Work
          </a>
          <a href="#about" className={link}>
            About
          </a>

          <span
            className={`mx-2 hidden h-4 w-px md:block ${scrolled ? "bg-foreground/25" : "bg-white/25"}`}
          />

          <span className="hidden items-center gap-0.5 md:flex">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`inline-flex size-8 items-center justify-center rounded-[3px] transition-colors ${muted} ${hover}`}
              >
                <Icon className="size-4" />
              </a>
            ))}
          </span>

          <ThemeButton muted={muted} hover={hover} />

          <a
            href="mailto:joemdjossou@outlook.com"
            className="btn-pop ml-3 h-10 px-4 text-base"
            style={{ "--btn-shadow": "var(--night)" } as React.CSSProperties}
          >
            Email me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
