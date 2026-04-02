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

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  ctaHeading?: string;
  ctaDescription?: string;
  appStoreHref?: string;
  playStoreHref?: string;
  /** Localized phone chrome + list copy (drives FR/EN toggle from the parent). */
  phoneScreen?: CinematicPhoneScreenContent;
  phoneAvatarLabel?: string;
  badge1Emoji?: string;
  badge1Title?: string;
  badge1Subtitle?: string;
  badge2Emoji?: string;
  badge2Title?: string;
  badge2Subtitle?: string;
  /** Flanking glass feature tiles (left of headline). */
  heroFloatingLeft?: React.ReactNode;
  /** Flanking glass feature tiles (right of headline). */
  heroFloatingRight?: React.ReactNode;
  /** Merged app preview (e.g. screenshot carousel) under the taglines. */
  heroPreviewSlot?: React.ReactNode;
  /** Extra glass content on the “card” beat (why choose + about). */
  cardContextSlot?: React.ReactNode;
  /** Testimonials / social proof on the download CTA beat. */
  ctaTestimonialsSlot?: React.ReactNode;
  /** Bumps GSAP rebuild when locale changes (do not pass unstable JSX deps). */
  localeKey?: string;
}

export function CinematicHero({
  brandName = "Sobers",
  tagline1 = "Track the journey,",
  tagline2 = "not just the days.",
  cardHeading = "Accountability, redefined.",
  cardDescription = (
    <>
      <span className="text-white font-semibold">Sobers</span> empowers sponsors
      and sponsees in 12-step recovery programs with structured accountability,
      precise sobriety tracking, and beautiful visual timelines.
    </>
  ),
  ctaHeading = "Start your recovery.",
  ctaDescription = "Join thousands of others in the 12-step program and take control of your timeline today.",
  appStoreHref = "#",
  playStoreHref = "#",
  phoneScreen: phoneScreenProp,
  phoneAvatarLabel = "HL",
  badge1Emoji = "🔥",
  badge1Title = "1 Year Streak",
  badge1Subtitle = "Milestone unlocked",
  badge2Emoji = "🤝",
  badge2Title = "Sponsor Update",
  badge2Subtitle = "Shared successfully",
  heroFloatingLeft,
  heroFloatingRight,
  heroPreviewSlot,
  cardContextSlot,
  ctaTestimonialsSlot,
  localeKey = "",
  className,
  ...props
}: CinematicHeroProps) {
  const phoneScreen = phoneScreenProp ?? DEFAULT_PHONE_SCREEN;
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    let xTo: ReturnType<typeof gsap.quickTo> | null = null;
    let yTo: ReturnType<typeof gsap.quickTo> | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;

      cancelAnimationFrame(requestRef.current);

      requestRef.current = requestAnimationFrame(() => {
        if (!mainCardRef.current || !mockupRef.current) return;

        const rect = mainCardRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
        mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

        const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
        const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

        if (!xTo || !yTo) {
          xTo = gsap.quickTo(mockupRef.current, "rotationY", {
            duration: 0.5,
            ease: "power3.out",
          });
          yTo = gsap.quickTo(mockupRef.current, "rotationX", {
            duration: 0.5,
            ease: "power3.out",
          });
        }
        xTo(xVal * 12);
        yTo(-yVal * 12);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
      xTo = null;
      yTo = null;
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const scrollTopHard = () => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    };

    scrollTopHard();

    const ctx = gsap.context(() => {
      gsap.set(".text-track", {
        autoAlpha: 0,
        y: 60,
        scale: 0.85,
        filter: "blur(20px)",
        rotationX: -20,
      });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set(
        [
          ".card-left-text",
          ".card-right-text",
          ".mockup-scroll-wrapper",
          ".floating-badge",
          ".phone-widget",
        ],
        { autoAlpha: 0 },
      );
      gsap.set(".cta-wrapper", {
        autoAlpha: 0,
        scale: 0.8,
        filter: "blur(30px)",
      });
      gsap.set(".hero-floating-col", {
        autoAlpha: 0,
        y: 36,
        scale: 0.92,
      });
      gsap.set(".hero-preview-slot", {
        autoAlpha: 0,
        y: 28,
        scale: 0.96,
      });
      gsap.set(".card-glass-panel", { autoAlpha: 0, y: 24 });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", {
          duration: 1.8,
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          rotationX: 0,
          ease: "expo.out",
        })
        .to(
          ".text-days",
          {
            duration: 1.4,
            clipPath: "inset(0 0% 0 0)",
            ease: "power4.inOut",
          },
          "-=1.0",
        )
        .to(
          ".hero-floating-col",
          {
            duration: 1.2,
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            ease: "back.out(1.15)",
          },
          "-=0.9",
        )
        .to(
          ".hero-preview-slot",
          {
            duration: 1.15,
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: "expo.out",
          },
          "-=0.85",
        );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7200",
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      scrollTl
        .to(
          [".hero-intro-burst", ".bg-grid-theme"],
          {
            scale: 1.15,
            filter: "blur(20px)",
            opacity: 0.2,
            ease: "power2.inOut",
            duration: 2,
          },
          0,
        )
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", {
          width: "100%",
          height: "100%",
          borderRadius: "0px",
          ease: "power3.inOut",
          duration: 1.5,
        })
        .fromTo(
          ".mockup-scroll-wrapper",
          {
            y: 300,
            z: -500,
            rotationX: 50,
            rotationY: -30,
            autoAlpha: 0,
            scale: 0.6,
          },
          {
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            autoAlpha: 1,
            scale: 1,
            ease: "expo.out",
            duration: 2.5,
          },
          "-=0.8",
        )
        .fromTo(
          ".phone-widget",
          { y: 40, autoAlpha: 0, scale: 0.95 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            stagger: 0.15,
            ease: "back.out(1.2)",
            duration: 1.5,
          },
          "-=1.5",
        )
        .to(
          ".phone-stat-primary-val",
          {
            innerHTML: phoneScreen.statPrimaryEnd,
            snap: { innerHTML: 1 },
            duration: 2,
            ease: "expo.out",
          },
          "-=1.2",
        )
        .to(
          ".phone-stat-secondary-val",
          {
            innerHTML: phoneScreen.statSecondaryEnd,
            snap: { innerHTML: 1 },
            duration: 2,
            ease: "expo.out",
          },
          "-=2.0",
        )
        .fromTo(
          ".floating-badge",
          {
            y: 100,
            autoAlpha: 0,
            scale: 0.7,
            rotationZ: -10,
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            rotationZ: 0,
            ease: "back.out(1.5)",
            duration: 1.5,
            stagger: 0.2,
          },
          "-=2.0",
        )
        .fromTo(
          ".card-left-text",
          { x: -50, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 },
          "-=1.5",
        )
        .fromTo(
          ".card-glass-panel",
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.08,
            ease: "power3.out",
            duration: 1.2,
          },
          "-=1.2",
        )
        .fromTo(
          ".card-right-text",
          { x: 50, autoAlpha: 0, scale: 0.8 },
          { x: 0, autoAlpha: 1, scale: 1, ease: "power4.out", duration: 1.5 },
          "<",
        )
        .to({}, { duration: 2.5 })
        .set(".hero-intro-burst", { autoAlpha: 0 })
        .set(".cta-wrapper", { autoAlpha: 1 })
        .to({}, { duration: 1.5 })
        .to(
          [
            ".mockup-scroll-wrapper",
            ".floating-badge",
            ".card-left-text",
            ".card-right-text",
          ],
          {
            scale: 0.9,
            y: -40,
            z: -200,
            autoAlpha: 0,
            ease: "power3.in",
            duration: 1.2,
            stagger: 0.05,
          },
        )
        .to(
          ".main-card",
          {
            width: isMobile ? "92vw" : "85vw",
            height: isMobile ? "92vh" : "85vh",
            borderRadius: isMobile ? "32px" : "40px",
            ease: "expo.inOut",
            duration: 1.8,
          },
          "pullback",
        )
        .to(
          ".cta-wrapper",
          {
            scale: 1,
            filter: "blur(0px)",
            ease: "expo.inOut",
            duration: 1.8,
          },
          "pullback",
        )
        .to(".main-card", {
          y: -window.innerHeight - 300,
          ease: "power3.in",
          duration: 1.5,
        });
    }, containerRef);

    let raf2 = 0;
    const refreshId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      raf2 = requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(refreshId);
      cancelAnimationFrame(raf2);
      window.removeEventListener("resize", onResize);
      ctx.revert();
      scrollTopHard();
    };
  }, [phoneScreen, localeKey]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-screen h-screen overflow-hidden flex items-center justify-center bg-background text-foreground font-sans antialiased",
        className,
      )}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div
        className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50"
        aria-hidden="true"
      />

      <div className="hero-intro-burst absolute z-10 inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-[1500px] mx-auto px-3 sm:px-5 flex flex-col items-center justify-center min-h-[100dvh] py-8">
          <div className="flex w-full flex-col items-center justify-center gap-[clamp(1.5rem,3.5vw,3rem)] lg:flex-row">
            {heroFloatingLeft ? (
              <div className="hero-floating-col hidden lg:flex flex-col shrink-0 order-2 lg:order-1 pointer-events-auto w-[min(100%,clamp(10.5rem,15.25vw,19rem))] gap-[clamp(0.75rem,1.4vw,1.35rem)] [transform:perspective(1200px)_rotateY(8deg)]">
                {heroFloatingLeft}
              </div>
            ) : null}

            <div className="hero-text-wrapper flex flex-col items-center text-center order-1 lg:order-2 w-full max-w-4xl mx-auto px-2 will-change-transform transform-style-3d">
              <h1 className="text-track gsap-reveal text-3d-matte text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-2">
                {tagline1}
              </h1>
              <h1 className="text-days gsap-reveal text-silver-matte text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter">
                {tagline2}
              </h1>
              {heroPreviewSlot ? (
                <div className="hero-preview-slot mt-[clamp(1.25rem,3vw,2.75rem)] w-full max-w-[min(96vw,clamp(22rem,40vw,40rem))] mx-auto pointer-events-auto overflow-visible px-[clamp(0.25rem,1.5vw,0.5rem)]">
                  {heroPreviewSlot}
                </div>
              ) : null}
            </div>

            {heroFloatingRight ? (
              <div className="hero-floating-col hidden lg:flex flex-col shrink-0 order-3 pointer-events-auto w-[min(100%,clamp(10.5rem,15.25vw,19rem))] gap-[clamp(0.75rem,1.4vw,1.35rem)] [transform:perspective(1200px)_rotateY(-8deg)]">
                {heroFloatingRight}
              </div>
            ) : null}
          </div>

          {heroFloatingLeft || heroFloatingRight ? (
            <div className="lg:hidden mt-[clamp(1.5rem,4vw,2.5rem)] flex flex-row gap-[clamp(0.75rem,3vw,1.25rem)] overflow-x-auto max-w-[100vw] px-[clamp(0.75rem,3vw,1.25rem)] pb-2 pointer-events-auto justify-center">
              {heroFloatingLeft}
              {heroFloatingRight}
            </div>
          ) : null}
        </div>
      </div>

      <div className="cta-wrapper absolute z-10 flex h-[100dvh] max-h-[100dvh] w-screen flex-col items-center justify-end overflow-hidden px-[clamp(1rem,4vw,1.75rem)] pb-[clamp(1.5rem,8dvh,4.5rem)] pt-[clamp(2.5rem,9dvh,5.5rem)] text-center gsap-reveal pointer-events-auto will-change-transform">
        <h2 className="text-silver-matte mb-[clamp(1rem,3.5dvh,2rem)] shrink-0 px-2 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          {ctaHeading}
        </h2>
        <p className="text-muted-foreground mx-auto mb-[clamp(1.5rem,4.5dvh,3rem)] max-w-xl shrink-0 px-2 text-lg font-light leading-relaxed md:text-xl">
          {ctaDescription}
        </p>
        <div className="flex shrink-0 flex-col gap-6 sm:flex-row sm:gap-8">
          <a
            href={appStoreHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
            className="btn-modern-light flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] group focus:outline-none focus:ring-2 focus:ring-[#3b6e4a] focus:ring-offset-2"
          >
            <svg
              className="w-8 h-8 transition-transform group-hover:scale-105"
              fill="currentColor"
              viewBox="0 0 384 512"
              aria-hidden="true"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase mb-[-2px]">
                Download on the
              </div>
              <div className="text-xl font-bold leading-none tracking-tight">
                App Store
              </div>
            </div>
          </a>
          <a
            href={playStoreHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
            className="btn-modern-dark flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] group focus:outline-none focus:ring-2 focus:ring-[#3b6e4a] focus:ring-offset-2 focus:ring-offset-background"
          >
            <svg
              className="w-7 h-7 transition-transform group-hover:scale-105"
              fill="currentColor"
              viewBox="0 0 512 512"
              aria-hidden="true"
            >
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-[-2px]">
                Get it on
              </div>
              <div className="text-xl font-bold leading-none tracking-tight">
                Google Play
              </div>
            </div>
          </a>
        </div>
        {ctaTestimonialsSlot ? (
          <div
            className="mt-[clamp(2rem,8dvh,5rem)] w-[calc(100%+2*clamp(1rem,4vw,1.75rem))] max-w-none shrink-0 self-center -mx-[clamp(1rem,4vw,1.75rem)]"
          >
            {ctaTestimonialsSlot}
          </div>
        ) : null}
      </div>

      <div
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={{ perspective: "1500px" }}
      >
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">
            <div className="card-right-text gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
              <h2 className="text-6xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter text-card-silver-matte lg:mt-0">
                {brandName}
              </h2>
            </div>

            <div
              className="mockup-scroll-wrapper order-2 lg:order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10"
              style={{ perspective: "1000px" }}
            >
              <div className="relative w-full h-full flex items-center justify-center transform scale-[0.65] md:scale-[0.85] lg:scale-100">
                <div
                  ref={mockupRef}
                  className="relative w-[280px] h-[580px] rounded-[3rem] iphone-bezel flex flex-col will-change-transform transform-style-3d"
                >
                  <div
                    className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-[7px] bg-gradient-to-b from-[#fefdfb] via-[#faf7f0] to-[#f0ebe3] rounded-[2.5rem] overflow-hidden shadow-[inset_0_0_12px_rgba(45,95,63,0.06)] text-[#1a2e1a] z-10 flex flex-col">
                    <div
                      className="absolute inset-0 pointer-events-none z-40 opacity-[0.35] bg-gradient-to-br from-white/50 to-transparent"
                      aria-hidden="true"
                    />

                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-[#2a2a2a] rounded-full z-50 flex items-center justify-end px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.08)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3b6e4a] shadow-[0_0_8px_rgba(59,110,74,0.85)] animate-pulse" />
                    </div>

                    <div className="relative w-full h-full min-h-0 pt-11 px-3 pb-6 flex flex-col z-10">
                      <div className="phone-widget flex justify-between items-start gap-2 mb-3">
                        <div className="flex flex-col min-w-0">
                          <span className="text-[11px] text-[#5a5a5a] font-medium leading-tight">
                            {phoneScreen.welcomeLabel}
                          </span>
                          <span className="text-lg font-bold tracking-tight text-[#3b6e4a] leading-snug truncate">
                            {phoneScreen.userDisplayName}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            className="w-8 h-8 rounded-full bg-white border border-[#3b6e4a]/20 flex items-center justify-center text-[#3b6e4a] shadow-sm"
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.25} />
                          </button>
                          <div className="w-9 h-9 rounded-full bg-[#3b6e4a] text-white flex items-center justify-center font-bold text-xs border-2 border-[#2d5f3f]/30 shadow-md">
                            {phoneAvatarLabel}
                          </div>
                        </div>
                      </div>

                      <div className="phone-widget flex gap-2 mb-3">
                        <div className="flex-1 rounded-2xl bg-white/90 border border-[#3b6e4a]/12 p-2.5 shadow-sm">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-7 h-7 rounded-lg bg-[#3b6e4a]/12 flex items-center justify-center text-[#3b6e4a]">
                              <Music2 className="w-3.5 h-3.5" strokeWidth={2.2} />
                            </div>
                            <span className="phone-stat-primary-val text-xl font-extrabold tabular-nums text-[#1a2e1a] leading-none">
                              0
                            </span>
