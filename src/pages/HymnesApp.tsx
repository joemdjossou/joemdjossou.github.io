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
