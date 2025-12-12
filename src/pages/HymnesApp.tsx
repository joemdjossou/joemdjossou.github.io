import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Download,
  Filter,
  Globe,
  Languages,
  Moon,
  Music,
  Search,
  Shield,
  Star,
  Volume2,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const HymnesApp: React.FC = () => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // App screenshots - loads different images based on selected language
  const getAppScreenshots = () => {
    const langPath = language === "fr" ? "fr" : "en";
    return [
      `/hymnes-images/${langPath}/01.png`,
      `/hymnes-images/${langPath}/02.png`,
      `/hymnes-images/${langPath}/03.png`,
      `/hymnes-images/${langPath}/04.png`,
      `/hymnes-images/${langPath}/05.png`,
      `/hymnes-images/${langPath}/06.png`,
      `/hymnes-images/${langPath}/07.png`,
      `/hymnes-images/${langPath}/08.png`,
    ];
  };

  const appScreenshots = getAppScreenshots();

  useEffect(() => {
    // Reset carousel when language changes
    setCurrentImageIndex(0);
  }, [language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === appScreenshots.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [appScreenshots.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === appScreenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? appScreenshots.length - 1 : prevIndex - 1
    );
  };

  const content = {
    fr: {
      title: "Hymnes et Louanges Adventiste",
      subtitle:
        "Accédez facilement aux cantiques avec paroles, audio et les voix (SATB)",
      description:
        "L'application qui rend vos moments de louange encore plus simples et inspirants. Découvrez une nouvelle façon d'adorer avec des fonctionnalités modernes et intuitives.",
      downloadNow: "Télécharger maintenant",
      availableOn: "Disponible sur",
      features: "Fonctionnalités principales",
      featuresList: [
        {
          icon: Search,
          title: "Recherche intelligente",
          description:
            "Recherchez vos hymnes par numéro, titre, auteur ou paroles",
        },
        {
          icon: Cloud,
          title: "Sauvegarde cloud",
          description: "Sauvegardez vos hymnes en local ou dans le cloud",
        },
        {
          icon: Filter,
          title: "Filtrage avancé",
          description: "Filtrez les hymnes par thème ou sous-thème",
        },
        {
          icon: Moon,
          title: "Mode sombre/clair",
          description: "Choisissez entre mode clair et mode sombre",
        },
        {
          icon: Globe,
          title: "Multilingue",
          description:
            "Sélectionnez la langue de l'application (Français ou Anglais)",
        },
        {
          icon: Volume2,
          title: "Audio SATB",
          description:
            "Écoutez la musique complète ou chaque voix séparément : soprano, alto, ténor, basse",
        },
        {
          icon: Music,
          title: "Partition musicale",
          description: "Visualisez la partition musicale complète",
        },
        {
          icon: BookOpen,
          title: "Histoire des hymnes",
          description: "Découvrez l'histoire derrière certains hymnes",
        },
      ],
      whyChoose: "Pourquoi choisir Hymnes et Louanges ?",
      whyPoints: [
        "Interface moderne et intuitive",
        "Fonctionne hors ligne",
        "Mises à jour régulières",
        "Aucune publicité intrusive",
        "Gratuit et accessible à tous",
      ],
      about: "À propos de l'application",
      aboutText:
        "Hymnes et Louanges Adventiste est conçu pour enrichir vos moments de culte personnel, de prière en groupe ou de service religieux. Avec ses fonctionnalités complètes et son design élégant, cette application devient votre compagnon idéal pour la louange.",
      privacyLink: "Politique de confidentialité",
      backHome: "Retour à l'accueil",
      ratings: "Note moyenne",
      downloads: "Téléchargements",
      reviews: "Ce que disent les utilisateurs",
      reviewsSubtitle: "Découvrez les retours de notre communauté",
      testimonials: [
        {
          text: "J'ai téléchargé l'application ce matin et je l'ai utilisé toute la journée. C'est du bon travail que tu as fait. C'était soft, bien présenté et bien fourni. Félicitations",
          author: "Utilisateur anonyme",
        },
        {
          text: "Je viens de voir et télécharger ton application et c'est vraiment vraiment bien",
          author: "Utilisateur anonyme",
        },
        {
          text: "C'est magnifique 👍",
          author: "Utilisateur anonyme",
        },
        {
          text: "Coucou mais ton application c'est une pepiteeeeeee",
          author: "Utilisateur anonyme",
        },
        {
          text: "Jusqu'à je peux avoir l'alto des cantiques sans galère",
          author: "Utilisateur anonyme",
        },
        {
          text: "J'ai testé beaucoup d'applis (gratuites) Hymnes et louanges sur mon iPhone. Mais je n'ai toujours pas un bon rendu. Ça fait que j'ai jusqu'à 3 applications HL dans mon portable. Mais de tous les trois, je vote pour la tienne. Ça sent une concentration pour le job et en plus c'est gratuit (pour le moment 😊)",
          author: "Utilisateur anonyme",
        },
        {
          text: "Sans vous mentir je suis vraiment surprise hier lorsque j'avais finalement téléchargé l'application, c'était que de l'émerveillement. Vraiment gloire à Dieu et félicitations à vous. Que Dieu continue par bénir vos projets. Sinon c'est bien, j'aime toujours féliciter l'excellence",
          author: "Utilisateur anonyme",
        },
        {
          text: "Tu as créé une dinguerie 🔥🔥. En tout cas merci beaucoup",
          author: "Utilisateur anonyme",
        },
      ],
    },
    en: {
      title: "Hymnes et Louanges Adventiste",
      subtitle: "Easily access hymns with lyrics, audio and voices (SATB)",
      description:
        "The app that makes your moments of praise even simpler and more inspiring. Discover a new way to worship with modern and intuitive features.",
      downloadNow: "Download Now",
      availableOn: "Available on",
      features: "Main Features",
      featuresList: [
        {
          icon: Search,
          title: "Smart Search",
          description: "Search hymns by number, title, author, or lyrics",
        },
        {
          icon: Cloud,
          title: "Cloud Backup",
          description: "Save your hymns locally or in the cloud",
        },
        {
          icon: Filter,
          title: "Advanced Filtering",
          description: "Filter hymns by theme or sub-theme",
        },
        {
          icon: Moon,
          title: "Dark/Light Mode",
          description: "Choose between light mode and dark mode",
        },
        {
          icon: Globe,
          title: "Multilingual",
          description: "Select the app language (French or English)",
        },
        {
          icon: Volume2,
          title: "SATB Audio",
          description:
            "Listen to the full song or individual voices: soprano, alto, tenor, bass",
        },
        {
          icon: Music,
          title: "Musical Score",
          description: "View the complete musical score",
        },
        {
          icon: BookOpen,
          title: "Hymn History",
          description: "Learn the story behind selected hymns",
        },
      ],
      whyChoose: "Why Choose Hymns & Praises?",
      whyPoints: [
        "Modern and intuitive interface",
        "Works offline",
        "Regular updates",
        "No intrusive ads",
        "Free and accessible to all",
      ],
      about: "About the App",
      aboutText:
        "Adventist Hymns & Praises is designed to enrich your personal worship, prayer groups, or religious services. With its comprehensive features and elegant design, this app becomes your ideal companion for praise.",
      privacyLink: "Privacy Policy",
      backHome: "Back to Home",
      ratings: "Average Rating",
      downloads: "Downloads",
      reviews: "What Users Are Saying",
      reviewsSubtitle: "Hear from our community",
      testimonials: [
        {
          text: "I downloaded the app this morning and used it all day. You did great work. It was smooth, well-presented, and comprehensive. Congratulations",
          author: "Anonymous User",
        },
        {
          text: "I just saw and downloaded your app and it's really really good",
          author: "Anonymous User",
        },
        {
          text: "It's magnificent 👍",
          author: "Anonymous User",
        },
        {
          text: "Your app is a gem!",
          author: "Anonymous User",
        },
        {
          text: "Now I can finally get the alto parts of hymns without any hassle",
          author: "Anonymous User",
        },
        {
          text: "I've tested many free hymns and praises apps on my iPhone. But I've never had a good experience. I had up to 3 HL apps on my phone. But of all three, I vote for yours. It shows dedication to the work and it's free (for now 😊)",
          author: "Anonymous User",
        },
        {
          text: "I won't lie, I was truly amazed yesterday when I finally downloaded the app, it was pure wonder. Truly glory to God and congratulations to you. May God continue to bless your projects. It's excellent, I always love celebrating excellence",
          author: "Anonymous User",
        },
        {
          text: "You created something amazing 🔥🔥. In any case, thank you very much",
          author: "Anonymous User",
        },
        {
          text: "We're ranked 4th in religious books, we can aim for 1st place 🔥✅",
          author: "Anonymous User",
        },
      ],
    },
  };

  const t = content[language];

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f1e8] to-[#e8dcc8] dark:from-[#1a2e1a] dark:to-[#0d1a0d]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f5f1e8]/80 dark:bg-[#1a2e1a]/80 border-b border-[#3b6e4a]/20">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex justify-between items-center">
            <Button
              variant="ghost"
              onClick={() => (window.location.hash = "")}
              className="flex items-center gap-2 text-[#3b6e4a] dark:text-[#e8b923] hover:text-[#2d5f3f] dark:hover:text-[#f4c430]"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.backHome}
            </Button>
            <Button
              variant="outline"
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="flex items-center gap-2 border-[#3b6e4a] text-[#3b6e4a] hover:bg-[#3b6e4a] hover:text-white dark:border-[#e8b923] dark:text-[#e8b923] dark:hover:bg-[#e8b923] dark:hover:text-[#1a2e1a]"
            >
              <Languages className="h-4 w-4" />
              {language === "fr" ? "English" : "Français"}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#e8b923]/20 dark:bg-[#e8b923]/10 px-4 py-2 rounded-full">
              <Star className="h-4 w-4 text-[#e8b923]" />
              <span className="text-sm font-medium text-[#3b6e4a] dark:text-[#e8b923]">
                {language === "fr" ? "Maintenant disponible" : "Now Available"}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2d5f3f] dark:text-[#f5f1e8] leading-tight">
              {t.title}
            </h1>
            <p className="text-xl text-[#3b6e4a] dark:text-[#e8dcc8] leading-relaxed">
              {t.subtitle}
            </p>
            <p className="text-lg text-[#5a5a5a] dark:text-[#c4b8a0]">
              {t.description}
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://apps.apple.com/us/app/hymnes-et-louanges-adventiste/id6753330258"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white shadow-lg px-6"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Download on the</span>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </Button>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.joemdjossou.hymnes&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white shadow-lg px-6"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-xs">GET IT ON</span>
                    <span className="text-sm font-semibold">Google Play</span>
                  </div>
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-[#e8b923] fill-[#e8b923]" />
                <div>
                  <div className="text-2xl font-bold text-[#2d5f3f] dark:text-[#e8b923]">
                    4.9
                  </div>
                  <div className="text-sm text-[#5a5a5a] dark:text-[#c4b8a0]">
                    {t.ratings}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Download className="h-6 w-6 text-[#3b6e4a] dark:text-[#e8b923]" />
                <div>
                  <div className="text-2xl font-bold text-[#2d5f3f] dark:text-[#e8b923]">
                    4000+
                  </div>
                  <div className="text-sm text-[#5a5a5a] dark:text-[#c4b8a0]">
                    {t.downloads}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App Screenshot Carousel */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e8b923] to-[#3b6e4a] rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative rounded-3xl shadow-2xl border-4 border-[#3b6e4a] dark:border-[#e8b923] overflow-hidden bg-black">
                <img
                  src={appScreenshots[currentImageIndex]}
                  alt={`Hymnes et Louanges App Screenshot ${
                    currentImageIndex + 1
                  }`}
                  className="relative w-full h-auto transition-opacity duration-500"
                />

                {/* Carousel Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#3b6e4a]/80 dark:bg-[#e8b923]/80 hover:bg-[#3b6e4a] dark:hover:bg-[#e8b923] text-white dark:text-[#1a2e1a] rounded-full p-2 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#3b6e4a]/80 dark:bg-[#e8b923]/80 hover:bg-[#3b6e4a] dark:hover:bg-[#e8b923] text-white dark:text-[#1a2e1a] rounded-full p-2 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {appScreenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-[#e8b923] w-6"
                          : "bg-white/50"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <Button
            variant="ghost"
            onClick={scrollToFeatures}
            className="text-[#3b6e4a] dark:text-[#e8b923] hover:text-[#2d5f3f] dark:hover:text-[#f4c430]"
          >
            {language === "fr"
              ? "Découvrir les fonctionnalités"
              : "Discover features"}
            <svg
              className="ml-2 h-4 w-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="bg-white/50 dark:bg-[#0d1a0d]/50 py-16 md:py-24"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d5f3f] dark:text-[#e8b923] mb-4">
              {t.features}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#e8b923] to-[#3b6e4a] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.featuresList.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-[#f5f1e8] dark:bg-[#1a2e1a] border-[#3b6e4a]/20 dark:border-[#e8b923]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#3b6e4a] to-[#2d5f3f] dark:from-[#e8b923] dark:to-[#d4a420] flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white dark:text-[#1a2e1a]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2d5f3f] dark:text-[#e8b923]">
                      {feature.title}
                    </h3>
                    <p className="text-[#5a5a5a] dark:text-[#c4b8a0]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d5f3f] dark:text-[#e8b923] mb-6">
              {t.whyChoose}
            </h2>
            <div className="space-y-4">
              {t.whyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/50 dark:bg-[#1a2e1a]/50"
                >
                  <div className="w-6 h-6 rounded-full bg-[#3b6e4a] dark:bg-[#e8b923] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white dark:text-[#1a2e1a]" />
                  </div>
                  <p className="text-lg text-[#5a5a5a] dark:text-[#c4b8a0]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-[#3b6e4a] to-[#2d5f3f] dark:from-[#e8b923] dark:to-[#d4a420] border-none shadow-2xl">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white dark:text-[#1a2e1a]">
                {t.about}
              </h3>
              <p className="text-white/90 dark:text-[#1a2e1a]/90 text-lg leading-relaxed">
                {t.aboutText}
              </p>
              <Button
                variant="secondary"
                onClick={() =>
                  (window.location.hash =
                    language === "fr"
                      ? "hymnes-app-privacy-policy-fr"
                      : "hymnes-app-privacy-policy")
                }
                className="w-full bg-white dark:bg-[#1a2e1a] text-[#3b6e4a] dark:text-[#e8b923] hover:bg-white/90 dark:hover:bg-[#0d1a0d]"
              >
                <Shield className="mr-2 h-4 w-4" />
                {t.privacyLink}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews & Testimonials Section */}
      <section className="bg-white/50 dark:bg-[#0d1a0d]/50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d5f3f] dark:text-[#e8b923] mb-4">
              {t.reviews}
            </h2>
            <p className="text-xl text-[#5a5a5a] dark:text-[#c4b8a0]">
              {t.reviewsSubtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#e8b923] to-[#3b6e4a] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-[#f5f1e8] dark:bg-[#1a2e1a] border-[#3b6e4a]/20 dark:border-[#e8b923]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-2">
                    <span className="text-4xl text-[#e8b923]">"</span>
                    <p className="text-[#5a5a5a] dark:text-[#c4b8a0] leading-relaxed pt-2">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-2 border-t border-[#3b6e4a]/10 dark:border-[#e8b923]/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3b6e4a] to-[#2d5f3f] dark:from-[#e8b923] dark:to-[#d4a420] flex items-center justify-center">
                      <span className="text-white dark:text-[#1a2e1a] font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2d5f3f] dark:text-[#e8b923]">
                        {testimonial.author}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 text-[#e8b923] fill-[#e8b923]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Download CTA in Reviews Section */}
          <div className="text-center mt-12">
            <p className="text-xl text-[#5a5a5a] dark:text-[#c4b8a0] mb-6">
              {language === "fr"
                ? "Rejoignez des milliers d'utilisateurs satisfaits"
                : "Join thousands of satisfied users"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/us/app/hymnes-et-louanges-adventiste/id6753330258"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#3b6e4a] hover:bg-[#2d5f3f] text-white dark:bg-[#e8b923] dark:hover:bg-[#d4a420] dark:text-[#1a2e1a] shadow-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  {language === "fr"
                    ? "Télécharger maintenant"
                    : "Download now"}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#3b6e4a] to-[#2d5f3f] dark:from-[#e8b923] dark:to-[#d4a420] py-16">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-[#1a2e1a] mb-4">
            {language === "fr"
              ? "Prêt à commencer votre voyage de louange ?"
              : "Ready to start your praise journey?"}
          </h2>
          <p className="text-xl text-white/90 dark:text-[#1a2e1a]/90 mb-8 max-w-2xl mx-auto">
            {language === "fr"
              ? "Téléchargez l'application dès maintenant et découvrez une nouvelle façon d'adorer."
              : "Download the app now and discover a new way to worship."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/hymnes-et-louanges-adventiste/id6753330258"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white dark:bg-[#1a2e1a] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#0d1a0d] shadow-lg px-6"
              >
                <svg
                  className="mr-2 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </Button>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.joemdjossou.hymnes&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white dark:bg-[#1a2e1a] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#0d1a0d] shadow-lg px-6"
              >
                <svg
                  className="mr-2 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5f3f] dark:bg-[#0d1a0d] py-8">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <p className="text-white/80 dark:text-[#c4b8a0]">
            © 2025 JOEMDJOSSOU.{" "}
            {language === "fr"
              ? "Tous droits réservés."
              : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HymnesApp;
