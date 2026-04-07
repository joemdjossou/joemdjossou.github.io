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
