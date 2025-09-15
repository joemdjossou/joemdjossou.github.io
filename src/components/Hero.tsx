import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  // Profile images array
  const profileImages = [
    "/src/assets/profile-1.png",
    "/src/assets/profile-2.png",
    "/src/assets/profile-3.png",
    "/src/assets/profile-4.png",
    "/src/assets/profile-5.png",
    "/src/assets/profile-6.png",
  ];

  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === profileImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [profileImages.length]);

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient px-4 py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg font-medium">
              Hello, my name is
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">Y. E. Josué</span>
              <br />
              <span className="text-foreground">Djossou</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
              An enthusiastic and passionate software engineer!
            </h2>
          </div>

          <div className="space-y-4 max-w-2xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Highly specialized mobile software engineer with over 5 years of
              experience developing and maintaining production processes by
              applying new technologies. I create high-performance, user-centric
              mobile applications using Flutter & Dart with a focus on
              scalability and innovation.
            </p>
            <div className="flex items-center gap-2 text-primary font-medium">
              <span className="text-2xl">💡</span>
              <span className="text-lg">
                Lead Mobile Engineer specializing in Flutter & Dart with AI
                Integration expertise
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold hover-lift"
              asChild
            >
              <a
                href="/resume.pdf"
                download="Yaovi_Emmanuel_Josue_Djossou_Resume.pdf"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" className="hover-lift" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="icon" className="hover-lift">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift">
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Profile Image Carousel */}
        <div className="relative animate-scale-in">
          <div className="relative overflow-hidden rounded-3xl card-shadow hover-lift">
            {/* Carousel Container */}
            <div className="relative w-full h-[600px]">
              {profileImages.map((imagePath, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                    index === currentImageIndex
                      ? "opacity-100 translate-x-0 scale-100"
                      : index ===
                        (currentImageIndex - 1 + profileImages.length) %
                          profileImages.length
                      ? "opacity-0 -translate-x-full scale-95"
                      : "opacity-0 translate-x-full scale-95"
                  }`}
                >
                  <img
                    src={imagePath}
                    alt={`Josué Djossou - Profile ${index + 1}`}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  {/* Card overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {profileImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-primary scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to profile image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full animate-float" />
          <div
            className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
