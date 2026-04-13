import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
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

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/96 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between h-14">

          {/* Brand mark */}
          <button
            onClick={() => scrollToSection("#home")}
            className="text-sm font-bold tracking-[0.05em] text-foreground hover:text-muted-foreground transition-smooth"
          >
            EJ.
          </button>

          {/* Desktop — dot-separated nav */}
          <div className="hidden md:flex items-center gap-0">
            {navItems.map((item, i) => (
              <span key={item.name} className="flex items-center">
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-xs font-medium text-muted-foreground hover:text-foreground transition-smooth px-3 py-1"
                >
                  {item.name}
                </button>
                {i < navItems.length - 1 && (
                  <span className="text-border text-xs select-none">·</span>
                )}
              </span>
            ))}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-background border border-border mt-2 p-6 animate-scale-in">
            <div className="space-y-5">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-smooth py-1"
                >
                  {item.name} .
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
