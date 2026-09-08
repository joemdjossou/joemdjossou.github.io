import { useTheme } from "@/components/ThemeProvider";
import { Github, Linkedin, Moon, Sun, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

const socials = [
  { icon: Github, href: "https://github.com/joemdjossou", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/joemdjossou", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/joemdjossou", label: "X" },
];

const ThemeButton = () => {
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
      className="inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" className="group flex items-center gap-2 font-medium tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-lg bg-foreground text-[11px] font-semibold text-background">
            EJ
          </span>
          <span className="hidden sm:inline">
            joemdjossou<span className="text-muted-foreground">.com</span>
          </span>
        </a>

        <nav className="flex items-center gap-1 text-sm">
          <a
            href="#work"
            className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Work
          </a>
          <a
            href="#about"
            className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            About
          </a>
          <a
            href="mailto:joemdjossou@outlook.com"
            className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Contact
          </a>

          <span className="mx-1.5 hidden h-4 w-px bg-border sm:block" />

          <span className="hidden items-center gap-0.5 sm:flex">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </span>

          <ThemeButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
