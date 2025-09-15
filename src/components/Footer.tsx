import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Josué Djossou</h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate Mobile Application Developer specializing in
              Dart/Flutter & Firebase. Creating innovative solutions that solve
              real-world problems.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="hover-lift">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift">
                <Mail className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift">
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Education", href: "#education" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Get in Touch
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p>joemdjossou@gmail.com</p>
              <p>+228 93 14 27 33</p>
              <p>Available for Remote Work</p>
            </div>
            <Button className="gradient-primary text-white hover-lift" asChild>
              <a href="mailto:joemdjossou@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Start a Project
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Josué Djossou. Made using React & Tailwind CSS
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <button
                onClick={() => {
                  const element = document.querySelector("#home");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="hover:text-primary transition-colors"
              >
                Back to Top
              </button>
              <span>•</span>
              <a
                href="https://github.com/joemdjossou?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
