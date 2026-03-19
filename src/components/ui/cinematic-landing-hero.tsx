import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Music2, Search, TrendingUp } from "lucide-react";
import React, { useEffect, useRef } from "react";

/** All strings + demo data for the in-frame phone UI — supply per locale from the page. */
export type CinematicPhoneScreenContent = {
  welcomeLabel: string;
  userDisplayName: string;
  statPrimaryEnd: number;
  statPrimaryLabel: string;
  statSecondaryEnd: number;
  statSecondaryLabel: string;
  searchPlaceholder: string;
  hymns: Array<{
    num: string;
    title: string;
    author: string;
    tagTempo: string;
    tagCategory: string;
  }>;
};

const DEFAULT_PHONE_SCREEN: CinematicPhoneScreenContent = {
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
};

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image: 
          linear-gradient(to right, color-mix(in srgb, hsl(var(--foreground)) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, hsl(var(--foreground)) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .text-3d-matte {
      color: hsl(var(--foreground));
      text-shadow: 
          0 10px 30px color-mix(in srgb, hsl(var(--foreground)) 20%, transparent), 
          0 2px 4px color-mix(in srgb, hsl(var(--foreground)) 10%, transparent);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, hsl(var(--foreground)) 0%, color-mix(in srgb, hsl(var(--foreground)) 40%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 10px 20px color-mix(in srgb, hsl(var(--foreground)) 15%, transparent)) 
          drop-shadow(0px 2px 4px color-mix(in srgb, hsl(var(--foreground)) 10%, transparent));
  }

  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8)) 
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  .premium-depth-card {
      background: linear-gradient(145deg, #2d5f3f 0%, #1a2e1a 42%, #0d1a0d 100%);
      box-shadow: 
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.12),
          inset 0 -2px 4px rgba(0, 0, 0, 0.85);
      border: 1px solid rgba(59, 110, 74, 0.25);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  .iphone-bezel {
      background-color: #111;
      box-shadow: 
          inset 0 0 0 2px #52525B, 
          inset 0 0 0 7px #000, 
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7);
      transform-style: preserve-3d;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow: 
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }
  
  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
      background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
      box-shadow: 
          0 10px 20px rgba(0,0,0,0.3),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
      backdrop-filter: blur(24px); 
      -webkit-backdrop-filter: blur(24px);
      box-shadow: 
          0 0 0 1px rgba(255, 255, 255, 0.1),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .btn-modern-light, .btn-modern-dark {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-modern-light {
      background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%);
      color: #0F172A;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active {
      transform: translateY(1px);
      background: linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1), inset 0 3px 6px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.02);
  }
  .btn-modern-dark {
      background: linear-gradient(180deg, #27272A 0%, #18181B 100%);
      color: #FFFFFF;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.6), 0 12px 24px -4px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:hover {
      transform: translateY(-3px);
      background: linear-gradient(180deg, #3F3F46 0%, #27272A 100%);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.15), 0 6px 12px -2px rgba(0,0,0,0.7), 0 20px 32px -6px rgba(0,0,0,1), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:active {
      transform: translateY(1px);
      background: #18181B;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.05), inset 0 3px 8px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(0,0,0,0.5);
  }

  .hero-glass-panel {
      background: linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.18);
      box-shadow:
          0 4px 24px rgba(0,0,0,0.15),
          inset 0 1px 0 rgba(255,255,255,0.25);
      transform: translateZ(0);
  }

  .card-glass-panel {
      background: linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.03) 100%);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border: 1px solid rgba(255,255,255,0.14);
      box-shadow:
          0 12px 40px rgba(0,0,0,0.28),
          inset 0 1px 0 rgba(255,255,255,0.16);
      transform: translateZ(0);
  }

`;
