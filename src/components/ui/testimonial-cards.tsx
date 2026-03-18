import * as React from "react";
import { motion, type PanInfo } from "framer-motion";

export type StackPosition = "front" | "middle" | "back";

const DRAG_THRESHOLD_PX = 150;

export type TestimonialCardProps = {
  handleShuffle: () => void;
  testimonial: string;
  position: StackPosition;
  id: number;
  author: string;
  /** Optional avatar URL; defaults to a curated Unsplash portrait. */
  avatarSrc?: string;
};

/** Stacked testimonial-style card (drag front card left to advance). */
export function TestimonialCard({
  handleShuffle,
  testimonial,
  position,
  id,
  author,
  avatarSrc,
}: TestimonialCardProps) {
  const isFront = position === "front";

  const src =
    avatarSrc ??
    (
      [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=256&h=256&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=crop&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&fit=crop&q=80",
      ][id % 3] ?? ""
    );

  return (
    <motion.div
      style={{
        zIndex:
          position === "front" ? 2 : position === "middle" ? 1 : 0,
      }}
      animate={{
        rotate:
          position === "front"
            ? "-6deg"
            : position === "middle"
              ? "0deg"
              : "6deg",
        x:
          position === "front"
            ? "0%"
            : position === "middle"
              ? "33%"
              : "66%",
      }}
      drag={isFront}
      dragElastic={0.35}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragEnd={(_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x < -DRAG_THRESHOLD_PX) {
          handleShuffle();
        }
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={src}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-lg italic text-slate-400">
        &ldquo;{testimonial}&rdquo;
      </span>
      <span className="text-center text-sm font-medium text-indigo-400">
        {author}
      </span>
    </motion.div>
  );
}

export type TestimonialItem = {
  id: number;
  testimonial: string;
  author: string;
  avatarSrc?: string;
};

/** Demo: three stacked testimonials (full-page slate layout). */
export function ShuffleCards({
  testimonials = DEFAULT_TESTIMONIALS,
}: {
  testimonials?: TestimonialItem[];
}) {
  const deck = React.useMemo(() => testimonials.slice(0, 3), [testimonials]);
  const [positions, setPositions] = React.useState<StackPosition[]>([
    "front",
    "middle",
    "back",
  ]);

  const handleShuffle = () => {
    setPositions((prev) => {
      const next = [...prev];
      next.unshift(next.pop()!);
      return next;
    });
  };

  if (deck.length < 3) {
    return (
      <div className="p-8 text-center text-slate-200">
        ShuffleCards requires at least three testimonials.
      </div>
    );
  }

  return (
    <div className="grid min-h-screen w-full place-content-center overflow-hidden bg-slate-900 px-8 py-24 text-slate-50">
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
        {deck.map((item, index) => (
          <TestimonialCard
            key={item.id}
            id={item.id}
            testimonial={item.testimonial}
            author={item.author}
            avatarSrc={item.avatarSrc}
            handleShuffle={handleShuffle}
            position={positions[index]!}
          />
        ))}
      </div>
    </div>
  );
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    testimonial:
      "I feel like I've learned as much from X as I did completing my masters. It's the first thing I read every morning.",
    author: "Jenn F. — Marketing Director @ Square",
  },
  {
    id: 2,
    testimonial:
      "My boss thinks I know what I'm doing. Honestly, I just read this newsletter.",
    author: "Adrian Y. — Product Marketing @ Meta",
  },
  {
    id: 3,
    testimonial:
      "Cannot believe this is free. If X was $5,000 a month, it would be worth every penny.",
    author: "Devin R. — Growth Marketing Lead @ OpenAI",
  },
];

export type AppPreviewStackItem = {
  id: string;
  src: string;
  alt: string;
};

export type AppPreviewCardStackProps = {
  items: AppPreviewStackItem[];
  /** Auto-advance front card on an interval (ms). 0 = off. */
  autoAdvanceMs?: number;
  className?: string;
  /** Hint below the stack (e.g. swipe instructions). */
  hint?: React.ReactNode;
  showDots?: boolean;
};

/**
 * Three-deep screenshot stack for hero / app preview.
 * Drag the front card left to go to the next screen. Optional dot stepper via `showDots`.
 */
export function AppPreviewCardStack({
  items,
  autoAdvanceMs = 4000,
  className,
  hint,
  showDots = false,
}: AppPreviewCardStackProps) {
  const n = items.length;
  const [base, setBase] = React.useState(0);

  React.useEffect(() => {
    setBase(0);
  }, [items]);

  React.useEffect(() => {
    if (!autoAdvanceMs || n === 0) return;
    const t = window.setInterval(() => {
      setBase((b) => (b + 1) % n);
    }, autoAdvanceMs);
    return () => window.clearInterval(t);
  }, [autoAdvanceMs, n]);

  const handleAdvance = React.useCallback(() => {
    setBase((b) => (b + 1) % n);
  }, [n]);

  if (n === 0) return null;

  const slots: StackPosition[] = ["front", "middle", "back"];

  return (
    <div className={className}>
      <div className="relative mx-auto h-[min(68vh,clamp(24rem,52vmin,40rem))] w-[min(92vw,clamp(16rem,28vw,25rem))] max-w-full">
        {[0, 1, 2].map((slotIdx) => {
          const item = items[(base + slotIdx) % n]!;
          const position = slots[slotIdx]!;
          return (
            <ScreenshotStackCard
              key={slotIdx}
              imageSrc={item.src}
              alt={item.alt}
              position={position}
              onAdvance={handleAdvance}
            />
          );
        })}
      </div>
      {showDots ? (
        <div
          className="mt-4 flex justify-center gap-1.5"
          role="tablist"
          aria-label="Screenshots"
        >
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-label={`Screenshot ${index + 1}`}
              aria-selected={index === base % n}
              onClick={() => setBase(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === base % n ? "w-6 bg-white" : "w-1.5 bg-white/45"
              }`}
            />
          ))}
        </div>
      ) : null}
      {hint ? <div className="mt-2 text-center">{hint}</div> : null}
    </div>
  );
}

type ScreenshotStackCardProps = {
  imageSrc: string;
  alt: string;
  position: StackPosition;
  onAdvance: () => void;
};

function ScreenshotStackCard({
  imageSrc,
  alt,
  position,
  onAdvance,
}: ScreenshotStackCardProps) {
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? 2 : position === "middle" ? 1 : 0,
      }}
      animate={{
        rotate:
          position === "front"
            ? "-4deg"
            : position === "middle"
              ? "0deg"
              : "4deg",
        x:
          position === "front"
            ? "0%"
            : position === "middle"
              ? "14%"
              : "28%",
      }}
      drag={isFront}
      dragElastic={0.35}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragEnd={(_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x < -DRAG_THRESHOLD_PX) {
          onAdvance();
        }
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 overflow-hidden rounded-2xl border border-white/25 bg-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      } h-full w-full`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#1a2e1a]/55 via-transparent to-[#3b6e4a]/15"
        aria-hidden="true"
      />
      <img
        src={imageSrc}
        alt={alt}
        draggable={false}
        className="relative z-0 h-full w-full object-cover object-top"
      />
    </motion.div>
  );
}
