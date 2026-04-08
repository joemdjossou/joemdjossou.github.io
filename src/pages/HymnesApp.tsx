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
