import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "Stack", href: "#stack" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/70 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-sm font-bold tracking-[0.02em] text-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-smooth" />
            <span className="group-hover:text-primary transition-smooth">EJ.</span>
            <span className="text-muted-foreground/60 font-mono font-normal">/ joemdjossou.com</span>
          </button>

          {/* Center email (desktop) */}
          <a
            href="mailto:joemdjossou@outlook.com"
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground hover:text-primary transition-smooth tracking-[0.06em]"
          >
            joemdjossou@outlook.com
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => go(item.href)}
                className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-smooth"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-card border border-border mt-2 mb-3 p-6 rounded-lg animate-scale-in">
            <div className="space-y-5">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => go(item.href)}
                  className="block w-full text-left text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-smooth"
                >
                  {item.name}
                </button>
              ))}
              <a href="mailto:joemdjossou@outlook.com" className="block text-xs font-mono text-primary pt-2">
                joemdjossou@outlook.com
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
