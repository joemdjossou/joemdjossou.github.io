import type { CinematicPhoneScreenContent } from "@/components/ui/cinematic-landing-hero";
import { cn } from "@/lib/utils";
import { Heart, Music2, Search, TrendingUp } from "lucide-react";
import React from "react";

export type HymnesHeroPhonePreviewProps = {
  screen: CinematicPhoneScreenContent;
  phoneAvatarLabel: string;
  className?: string;
};

/**
 * Static replica of the cinematic hero phone screen for the tagline “app preview” slot.
 * Class names are prefixed so GSAP in CinematicHero does not target these nodes.
 */
export function HymnesHeroPhonePreview({
  screen,
  phoneAvatarLabel,
  className,
}: HymnesHeroPhonePreviewProps) {
  return (
    <div
      className={cn(
        "mx-auto w-[min(92vw,clamp(16rem,28vw,25rem))] max-w-full rounded-[1.85rem] bg-gradient-to-b from-[#3b6e4a] via-[#1a2e1a] to-[#0d1a0d] p-[5px] shadow-[0_28px_64px_rgba(0,0,0,0.5)] ring-1 ring-white/15",
        className,
      )}
    >
      <div className="rounded-[1.55rem] bg-[#0d1a0d]/35 p-1.5 ring-1 ring-[#3b6e4a]/25">
        <div className="relative mx-auto flex w-full justify-center py-1">
          <div className="relative mx-auto flex h-[min(538px,68vh)] w-[min(260px,78vw)] max-w-full flex-col rounded-[2.75rem] iphone-bezel">
            <div
              className="absolute top-[14%] -left-[3px] z-0 h-[25px] w-[3px] rounded-l-md hardware-btn"
              aria-hidden="true"
            />
            <div
              className="absolute top-[19%] -left-[3px] z-0 h-[45px] w-[3px] rounded-l-md hardware-btn"
              aria-hidden="true"
            />
            <div
              className="absolute top-[26%] -left-[3px] z-0 h-[45px] w-[3px] rounded-l-md hardware-btn"
              aria-hidden="true"
            />
            <div
              className="absolute top-[21%] -right-[3px] z-0 h-[70px] w-[3px] scale-x-[-1] rounded-r-md hardware-btn"
              aria-hidden="true"
            />

            <div className="absolute inset-[7px] z-10 flex flex-col overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#fefdfb] via-[#faf7f0] to-[#f0ebe3] text-[#1a2e1a] shadow-[inset_0_0_12px_rgba(45,95,63,0.06)]">
              <div
                className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-br from-white/50 to-transparent opacity-[0.35]"
                aria-hidden="true"
              />

              <div className="absolute left-1/2 top-[5px] z-50 flex h-[28px] w-[100px] -translate-x-1/2 items-center justify-end rounded-full bg-[#2a2a2a] px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.08)]">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#3b6e4a] shadow-[0_0_8px_rgba(59,110,74,0.85)]" />
              </div>

              <div className="relative z-10 flex h-full min-h-0 flex-col px-3 pb-6 pt-11">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div className="flex min-w-0 flex-col">
                    <span className="text-[11px] font-medium leading-tight text-[#5a5a5a]">
                      {screen.welcomeLabel}
                    </span>
                    <span className="truncate text-lg font-bold leading-snug tracking-tight text-[#3b6e4a]">
                      {screen.userDisplayName}
                    </span>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3b6e4a]/20 bg-white text-[#3b6e4a] shadow-sm"
                      aria-hidden="true"
                    >
                      <TrendingUp className="h-3.5 w-3.5" strokeWidth={2.25} />
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#2d5f3f]/30 bg-[#3b6e4a] text-xs font-bold text-white shadow-md">
                      {phoneAvatarLabel}
                    </div>
                  </div>
                </div>

                <div className="mb-3 flex gap-2">
                  <div className="flex-1 rounded-2xl border border-[#3b6e4a]/12 bg-white/90 p-2.5 shadow-sm">
                    <div className="mb-1 flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#3b6e4a]/12 text-[#3b6e4a]">
                        <Music2 className="h-3.5 w-3.5" strokeWidth={2.2} />
                      </div>
                      <span className="text-xl font-extrabold tabular-nums leading-none text-[#1a2e1a]">
                        {screen.statPrimaryEnd}
                      </span>
                    </div>
                    <p className="text-[9px] font-medium leading-tight text-[#5a5a5a]">
                      {screen.statPrimaryLabel}
                    </p>
                  </div>
                  <div className="flex-1 rounded-2xl border border-[#3b6e4a]/12 bg-white/90 p-2.5 shadow-sm">
                    <div className="mb-1 flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#3b6e4a]/12 text-[#3b6e4a]">
                        <Heart className="h-3.5 w-3.5" strokeWidth={2.2} />
                      </div>
                      <span className="text-xl font-extrabold tabular-nums leading-none text-[#1a2e1a]">
                        {screen.statSecondaryEnd}
                      </span>
                    </div>
                    <p className="text-[9px] font-medium leading-tight text-[#5a5a5a]">
                      {screen.statSecondaryLabel}
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 rounded-full border border-[#3b6e4a]/15 bg-white/95 px-3 py-2 shadow-sm">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3b6e4a] text-white">
                      <Search className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </div>
                    <span className="truncate text-[11px] text-[#888]">{screen.searchPlaceholder}</span>
                  </div>
                </div>

                <div className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto pr-0.5 -mr-0.5 [scrollbar-width:thin]">
                  {screen.hymns.slice(0, 3).map((h) => (
                    <div
                      key={h.num}
                      className="flex gap-2 rounded-2xl border border-[#3b6e4a]/10 bg-white/95 p-2 shadow-sm"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e8dcc8]/60 text-sm font-bold text-[#2d5f3f]">
                        {h.num}
                      </div>
                      <div className="min-w-0 flex-1 py-0.5">
                        <p className="line-clamp-2 text-[11px] font-semibold leading-snug text-[#1a2e1a]">
                          {h.title}
                        </p>
                        <p className="mt-0.5 truncate text-[9px] text-[#5a5a5a]">{h.author}</p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          <span className="rounded-md bg-[#3b6e4a]/15 px-1.5 py-0.5 text-[8px] font-semibold text-[#2d5f3f]">
                            {h.tagTempo}
                          </span>
                          <span className="rounded-md bg-[#f5e6a8]/90 px-1.5 py-0.5 text-[8px] font-semibold text-[#5c4d1a]">
                            {h.tagCategory}
                          </span>
                        </div>
                      </div>
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#3b6e4a]/15 text-[#3b6e4a]/50"
                        aria-hidden="true"
                      >
                        <Heart className="h-3 w-3" strokeWidth={2} />
                      </span>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-2 left-1/2 h-[4px] w-[120px] -translate-x-1/2 rounded-full bg-[#1a2e1a]/15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
