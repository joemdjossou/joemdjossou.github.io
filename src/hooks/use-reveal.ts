import { useEffect, useRef, useState } from "react";

const REDUCED = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * One shared IntersectionObserver drives every `.reveal` on the page — cheaper
 * than an observer per card, and it keeps the reveal order tied to the DOM
 * rather than to render order.
 *
 * Elements opt in by carrying the `reveal` class; the observer flips
 * `data-visible` once and then stops watching them.
 */
export function useRevealObserver() {
  useEffect(() => {
    const root = document.documentElement;

    // No IntersectionObserver (or the visitor asked for less motion): show
    // everything immediately rather than leaving the page blank.
    if (typeof IntersectionObserver === "undefined" || REDUCED()) {
      root.classList.add("no-reveal");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      },
      // Fire slightly before the element reaches the viewport so the motion
      // has finished by the time it's properly in view.
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );

    // Re-scan on each run so cards added by "Load more" or a filter change are
    // picked up too.
    const scan = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not([data-visible])")
        .forEach((el) => observer.observe(el));
    };

    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);
}

/**
 * Counts from 0 to `target` once the element scrolls into view. Returns a ref to
 * attach and the current display value.
 */
export function useCountUp(target: number, duration = 1100) {
  const ref = useRef<HTMLElement | null>(null);
  // Rests on the real number. It's only zeroed once we know the element is
  // still below the fold, so a card that's already on screen never displays a
  // value that isn't true.
  const [value, setValue] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || REDUCED() || typeof IntersectionObserver === "undefined") {
      setValue(target);
      return;
    }

    const belowFold = el.getBoundingClientRect().top > window.innerHeight;
    if (!belowFold) return;
    setValue(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutCubic — fast out of the gate, settles onto the real number.
          setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return { ref, value };
}
