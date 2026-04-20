import { Button } from "@/components/ui/button";
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";
import { AppPreviewCardStack } from "@/components/ui/testimonial-cards";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  BookOpen,
  Check,
  Cloud,
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
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

/**
 * Nested scroll regions steal wheel events from the document while the cinematic
 * section is pinned. Forward wheel to `window` at scroll extremes so GSAP scrub
 * stays in sync.
 */
function forwardWheelToViewportScroll(e: React.WheelEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const { scrollTop, scrollHeight, clientHeight } = el;
  const dy = e.deltaY;
  const canScrollDown = scrollTop + clientHeight < scrollHeight - 2;
  const canScrollUp = scrollTop > 1;
  if ((dy > 0 && canScrollDown) || (dy < 0 && canScrollUp)) return;
  e.preventDefault();
  window.scrollBy({ top: dy, left: 0, behavior: "auto" });
}

/** Map vertical wheel to horizontal strip scroll; at ends, advance pinned page scroll. */
function testimonialsHorizontalWheel(e: React.WheelEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
  const dy = e.deltaY;
  const { scrollLeft, scrollWidth, clientWidth } = el;
  const atStart = scrollLeft <= 0;
  const atEnd = scrollLeft + clientWidth >= scrollWidth - 2;
  if ((dy > 0 && !atEnd) || (dy < 0 && !atStart)) {
    el.scrollLeft += dy;
    e.preventDefault();
    return;
  }
  e.preventDefault();
  window.scrollBy({ top: dy, left: 0, behavior: "auto" });
}

const HymnesApp: React.FC = () => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;
      if (y < 32) {
        setHeaderHidden(false);
        return;
      }
      if (delta > 6) setHeaderHidden(true);
      else if (delta < -6) setHeaderHidden(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const appScreenshots = useMemo(() => {
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
  }, [language]);

  const previewStackItems = useMemo(
    () =>
      appScreenshots.map((src, i) => ({
        id: `${language}-${i}-${src}`,
        src,
        alt:
          language === "fr"
            ? `Capture d'écran ${i + 1}`
            : `App screenshot ${i + 1}`,
      })),
    [appScreenshots, language],
  );

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
      cinematic: {
        tagline1: "Louez avec clarté,",
        tagline2: "partout avec vous.",
        brandName: "Chantez!",
        cardHeading: "La louange, réimaginée.",
        cardBody:
          "réunit paroles, partitions, audio SATB et recherche intelligente pour vos moments de culte et de prière.",
        ctaHeading: "Prêt à commencer votre voyage de louange ?",
        ctaDescription:
          "Téléchargez l'application dès maintenant et découvrez une nouvelle façon d'adorer.",
        phone: {
          welcomeLabel: "Bienvenue",
          userDisplayName: "Invité",
          statPrimaryEnd: 654,
          statPrimaryLabel: "cantiques · Français",
          statSecondaryEnd: 17,
          statSecondaryLabel: "Favoris",
          searchPlaceholder: "Rechercher un cantique...",
          hymns: [
            {
              num: "1",
              title: "Vous, qui sur la terre habitez",
              author: "TH. DE BEZE",
              tagTempo: "Animé",
              tagCategory: "PSAUMES",
            },
            {
              num: "2",
              title: "Les cieux, en chaque lieu",
              author: "CL. MAROT",
              tagTempo: "Andante",
              tagCategory: "PSAUMES",
            },
            {
              num: "3",
              title: "Dieu me conduit",
              author: "CL. MAROT",
              tagTempo: "Moderato",
              tagCategory: "PSAUMES",
            },
          ],
        },
        badge1Title: "10k+ téléchargements",
        badge1Subtitle: "Communauté mondiale",
        badge2Title: "Audio & partitions",
        badge2Subtitle: "SATB & recherche",
      },
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
        {
          text: "Interface fluide et les partitions sont super lisibles sur téléphone.",
          author: "Utilisateur anonyme",
        },
        {
          text: "Enfin une appli où je retrouve mes cantiques préférés en quelques secondes.",
          author: "Utilisateur anonyme",
        },
        {
          text: "Le mode sombre est parfait pour les cultes du soir et les veillées.",
          author: "Utilisateur anonyme",
        },
        {
          text: "Merci pour l'audio SATB — ça m'aide énormément aux répétitions du chœur.",
          author: "Utilisateur anonyme",
        },
        {
          text: "Je l'utilise tous les dimanches, elle est devenue indispensable pour moi.",
          author: "Utilisateur anonyme",
        },
        {
          text: "Hors ligne ça fonctionne nickel chez nous quand le réseau est capricieux.",
          author: "Utilisateur anonyme",
        },
        {
          text: "Bravo pour le travail : design soigné et contenu vraiment complet.",
          author: "Utilisateur anonyme",
        },
        {
          text: "La recherche par paroles m'a déjà sorti d'embarras plusieurs fois.",
          author: "Utilisateur anonyme",
        },
        {
          text: "Une application bénie, merci pour ce service à la communauté.",
          author: "Utilisateur anonyme",
        },
        {
          text: "Ma grand-mère adore : le texte est bien lisible sans lunettes.",
          author: "Utilisateur anonyme",
        },
        {
          text: "Avoir les quatre voix séparément, c'est exactement ce qu'il me fallait.",
          author: "Utilisateur anonyme",
        },
        {
          text: "Simple, gratuit et efficace — je recommande à toute notre chorale.",
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
      cinematic: {
        tagline1: "Praise with clarity,",
        tagline2: "anywhere you go.",
        brandName: "Praise!",
        cardHeading: "Worship, reimagined.",
        cardBody:
          "brings lyrics, scores, SATB audio, and smart search together for church, small group, or quiet time.",
        ctaHeading: "Ready to start your praise journey?",
        ctaDescription:
          "Download the app now and discover a new way to worship.",
        phone: {
          welcomeLabel: "Welcome",
          userDisplayName: "Guest",
          statPrimaryEnd: 654,
          statPrimaryLabel: "hymns · English",
          statSecondaryEnd: 17,
          statSecondaryLabel: "Favorites",
          searchPlaceholder: "Search hymns...",
          hymns: [
            {
              num: "1",
              title: "You who dwell on earth",
              author: "T. DE BÈZE",
              tagTempo: "Lively",
              tagCategory: "PSALMS",
            },
            {
              num: "2",
              title: "The heavens in every place",
              author: "C. MAROT",
              tagTempo: "Andante",
              tagCategory: "PSALMS",
            },
            {
              num: "3",
              title: "God guides me",
              author: "C. MAROT",
              tagTempo: "Moderato",
              tagCategory: "PSALMS",
            },
          ],
        },
        badge1Title: "10k+ downloads",
        badge1Subtitle: "Global community",
        badge2Title: "Audio & scores",
        badge2Subtitle: "SATB & search",
      },
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
        {
          text: "Smooth interface and the musical scores are easy to read on my phone.",
          author: "Anonymous User",
        },
        {
          text: "Finally an app where I find my favorite hymns in just a few seconds.",
          author: "Anonymous User",
        },
        {
          text: "Dark mode is perfect for evening worship and late-night practice.",
          author: "Anonymous User",
        },
        {
          text: "Thank you for the SATB audio — it helps so much at choir rehearsal.",
          author: "Anonymous User",
        },
        {
          text: "I use it every Sunday now; I wouldn't want to be without it.",
          author: "Anonymous User",
        },
        {
          text: "Offline mode works great at our church when the signal is weak.",
          author: "Anonymous User",
        },
        {
          text: "Really polished work — thoughtful design and genuinely complete content.",
          author: "Anonymous User",
        },
        {
          text: "Searching by lyrics has gotten me out of a pinch more than once.",
          author: "Anonymous User",
        },
        {
          text: "Such a blessing of an app — thank you for serving the community.",
          author: "Anonymous User",
        },
        {
          text: "My grandmother loves how readable the text is without squinting.",
          author: "Anonymous User",
        },
        {
          text: "Having all four vocal parts separately is exactly what I needed.",
          author: "Anonymous User",
        },
        {
          text: "Simple, free, and effective — I've been telling everyone in our choir.",
          author: "Anonymous User",
        },
      ],
    },
  };

  const t = content[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  /**
   * `content` is recreated every render; without this, `cinematic.phone` is a new object every time
   * (e.g. carousel tick) and CinematicHero's GSAP effect re-runs → scrollTopHard() → page jumps to top.
   */
  const cinematicPhoneScreen = useMemo(
    () => content[language].cinematic.phone,
    [language],
  );

  /** Only when locale changes — not on every re-render. */
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [language]);

  const cinematic = t.cinematic;

  const heroFloatingLeft = useMemo(() => {
    const loc = content[language];
    const mid = Math.ceil(loc.featuresList.length / 2);
    return (
      <div
        className="flex max-h-[min(72vh,38rem)] w-full min-w-0 shrink-0 flex-col gap-[clamp(0.65rem,1.6vw,1.1rem)] overflow-y-auto overflow-x-hidden pr-0.5 [scrollbar-width:thin]"
        onWheel={forwardWheelToViewportScroll}
      >
        {loc.featuresList.slice(0, mid).map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={`hero-fl-${feature.title}-${index}`}
              className="hero-glass-panel rounded-[clamp(0.875rem,1.6vw,1.125rem)] p-[clamp(0.65rem,1.85vw,1.25rem)] text-left shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-[clamp(0.5rem,1.3vw,0.9rem)]">
                <div className="flex h-[clamp(2.35rem,5vw,3rem)] w-[clamp(2.35rem,5vw,3rem)] shrink-0 items-center justify-center rounded-[clamp(0.45rem,1vw,0.75rem)] border border-white/20 bg-white/15">
                  <Icon
                    className="text-white h-[clamp(1rem,2.35vw,1.45rem)] w-[clamp(1rem,2.35vw,1.45rem)]"
                    strokeWidth={2}
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold leading-snug text-white text-[clamp(0.78rem,1.15vw,1.05rem)]">
                    {feature.title}
                  </p>
                  <p className="mt-[clamp(0.25rem,0.8vw,0.45rem)] leading-relaxed text-white/78 line-clamp-4 text-[clamp(0.65rem,0.95vw,0.82rem)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }, [language]);

  const heroFloatingRight = useMemo(() => {
    const loc = content[language];
    const mid = Math.ceil(loc.featuresList.length / 2);
    return (
      <div
        className="flex max-h-[min(72vh,38rem)] w-full min-w-0 shrink-0 flex-col gap-[clamp(0.65rem,1.6vw,1.1rem)] overflow-y-auto overflow-x-hidden pr-0.5 [scrollbar-width:thin]"
        onWheel={forwardWheelToViewportScroll}
      >
        {loc.featuresList.slice(mid).map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={`hero-fr-${feature.title}-${index}`}
              className="hero-glass-panel rounded-[clamp(0.875rem,1.6vw,1.125rem)] p-[clamp(0.65rem,1.85vw,1.25rem)] text-left shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-[clamp(0.5rem,1.3vw,0.9rem)]">
                <div className="flex h-[clamp(2.35rem,5vw,3rem)] w-[clamp(2.35rem,5vw,3rem)] shrink-0 items-center justify-center rounded-[clamp(0.45rem,1vw,0.75rem)] border border-white/20 bg-white/15">
                  <Icon
                    className="text-white h-[clamp(1rem,2.35vw,1.45rem)] w-[clamp(1rem,2.35vw,1.45rem)]"
                    strokeWidth={2}
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold leading-snug text-white text-[clamp(0.78rem,1.15vw,1.05rem)]">
                    {feature.title}
                  </p>
                  <p className="mt-[clamp(0.25rem,0.8vw,0.45rem)] leading-relaxed text-white/78 line-clamp-4 text-[clamp(0.65rem,0.95vw,0.82rem)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }, [language]);

  const cardContextSlot = useMemo(() => {
    const loc = content[language];
    return (
      <>
        <div className="card-glass-panel rounded-2xl p-4">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#a3c4b0] mb-3">
            {loc.whyChoose}
          </p>
          <ul className="space-y-2">
            {loc.whyPoints.map((point, i) => (
              <li key={i} className="flex gap-2 text-xs sm:text-sm text-[#e8f0ea]">
                <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-[#7fb89a] mt-0.5" />
                <span className="leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-glass-panel rounded-2xl p-4">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#a3c4b0] mb-2">
            {loc.about}
          </p>
          <p className="text-xs sm:text-sm text-[#d5e5da] leading-relaxed">{loc.aboutText}</p>
          <Button
            variant="secondary"
            size="sm"
            className="mt-3 w-full bg-white/95 text-[#2d5f3f] hover:bg-white border-0 shadow-md"
            onClick={() =>
              (window.location.hash =
                language === "fr"
                  ? "hymnes-app-privacy-policy-fr"
                  : "hymnes-app-privacy-policy")
            }
          >
            <Shield className="mr-2 h-3.5 w-3.5" />
            {loc.privacyLink}
          </Button>
        </div>
      </>
    );
  }, [language]);

  const ctaTestimonialsSlot = useMemo(() => {
    const loc = content[language];
    return (
      <div className="flex w-full max-w-none flex-col gap-3 text-left sm:gap-4">
        <div className="shrink-0 px-[clamp(1rem,4vw,1.75rem)] text-center lg:text-left">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
            {loc.reviews}
          </p>
          <p className="mx-auto mt-1 max-w-xl text-sm text-muted-foreground/90 lg:mx-0">
            {loc.reviewsSubtitle}
          </p>
