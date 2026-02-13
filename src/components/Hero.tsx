import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const profileImages = ["/profile-1.jpg", "/setup.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === profileImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [profileImages.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-width carousel background - object-cover to respect ratio */}
      <div className="absolute inset-0 w-full">
        {profileImages.map((path, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              i === currentImageIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            <img
              src={path}
              alt=""
              className="w-full h-full object-cover"
              role="presentation"
            />
          </div>
        ))}
        {/* Gradient overlay so text stays readable */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"
          aria-hidden
        />
      </div>

      {/* Content on top of the image */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl ml-8 sm:ml-12 lg:ml-20 mr-auto text-left">
          <div className="space-y-8 animate-fade-in">
            <p className="section-label">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground drop-shadow-sm">
              Emmanuel Josué
              <br />
              <span className="text-gradient">Djossou</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Lead Mobile Engineer @EdoMatch 📲 • 📊100K+ downloads & 📲75K+
              users across the apps I have built • On-Device LLM & AI Integrator
              🦾 • Tech Speaker 📣 • Technical Writter 🖋️
            </p>
            <p className="text-muted-foreground max-w-xl">
              Passionate about clean architecture, mentoring, and bringing ideas
              to life with designers and product teams. Let's build something
              great.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground font-semibold hover:opacity-90 hover-lift rounded-lg"
                asChild
              >
                <a
                  href="/resume.pdf"
                  download="Yaovi_Emmanuel_Josue_Djossou_Resume.pdf"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg hover-lift bg-background/80 backdrop-blur-sm border-foreground/20"
                onClick={() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in touch
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/joemdjossou"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-smooth p-2 rounded-lg hover:bg-secondary/80"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/joemdjossou"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-smooth p-2 rounded-lg hover:bg-secondary/80"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel dots - positioned over the image */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {profileImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImageIndex(i)}
            className={`h-2 rounded-full transition-smooth ${
              i === currentImageIndex
                ? "bg-primary w-6"
                : "w-2 bg-foreground/40 hover:bg-foreground/60"
            }`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <button
          onClick={() =>
            document
              .querySelector("#projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="p-2 rounded-full border border-border bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-smooth"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
