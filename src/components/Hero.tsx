import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const stats = [
  { value: "120K+", label: "Downloads" },
  { value: "80K+", label: "Users reached" },
  { value: "10+", label: "Apps shipped" },
  { value: "23+", label: "Projects completed" },
];

const roles = [
  "Lead Mobile Engineer",
  "Flutter Developer",
  "iOS & Android",
  "On-Device LLM",
  "Tech Speaker",
  "Clean Architecture",
  "API Integration",
  "AI Integrator",
];

const shippedApps = [
  {
    name: "EdoMatch",
    shortName: "EdoMatch",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2f/db/19/2fdb19f0-bb51-a020-4ab3-29843c709dee/productionAppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    appStore:
      "https://apps.apple.com/ng/app/edomatch-ai-job-search/id6498934535",
    playStore:
      "https://play.google.com/store/apps/details?id=com.edogroup.edomatch",
  },
  {
    name: "Hymnes et Louanges",
    shortName: "Hymnes",
    icon: "/hymnes-app-icon.jpg",
    appStore:
      "https://apps.apple.com/ng/app/hymnes-et-louanges-adventiste/id6753330258",
    playStore:
      "https://play.google.com/store/apps/details?id=com.joemdjossou.hymnes",
  },
  {
    name: "01 Supplies",
    shortName: "Supplies",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/06/e4/84/06e484f5-8e32-83e8-9935-4e0217e6c29c/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    appStore: "https://apps.apple.com/ng/app/01-supplies/id6476608761",
    playStore:
      "https://play.google.com/store/apps/details?id=com.zeroonesupplies.zeroonesupplies",
  },
  {
    name: "01 Parcels",
    shortName: "Parcels",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a8/61/e1/a861e1a4-bb86-9886-ca87-acaa0c4d44bd/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    appStore: "https://apps.apple.com/ng/app/01-parcels/id6473236113",
    playStore:
      "https://play.google.com/store/apps/details?id=com.zeroonesupplies.zeroonesuppliesdelivery",
  },
  {
    name: "01 Vendors",
    shortName: "Vendors",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ae/46/1c/ae461cc7-948e-619a-c975-854316bed644/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    appStore: "https://apps.apple.com/ng/app/01-vendors/id6477450302",
    playStore:
      "https://play.google.com/store/apps/details?id=com.zeroonesupplies.zeroonesuppliesstore",
  },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    sub: "joemdjossou",
    href: "https://github.com/joemdjossou",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    sub: "joemdjossou",
    href: "https://www.linkedin.com/in/joemdjossou",
  },
  {
    icon: Mail,
    label: "Email",
    sub: "joemdjossou@outlook.com",
    href: "mailto:joemdjossou@outlook.com",
  },
  {
    icon: Download,
    label: "Resume",
    sub: "Download PDF",
    href: "/resume.pdf",
    download: true,
  },
];

/* Multi-layer depth shadow for app icons */
const iconShadow =
  "0 1px 3px rgba(0,0,0,0.45), 0 4px 10px rgba(0,0,0,0.35), 0 14px 28px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.09)";
const iconShadowHover =
  "0 2px 5px rgba(0,0,0,0.55), 0 8px 20px rgba(0,0,0,0.45), 0 24px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Main hero ── */}
      <div className="flex-1 px-6 md:px-10 lg:px-14 pt-24 pb-10 flex items-center">
        <div className="w-full grid lg:grid-cols-[44%_1fr] gap-10 xl:gap-16 items-center">
          {/* ── LEFT: text ── */}
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] border border-border rounded-full px-3.5 py-1.5 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              Available for work
            </span>

            <h1
              className="font-bold leading-[0.88] tracking-tight text-foreground"
              style={{ fontSize: "clamp(3rem, 5.2vw, 7rem)" }}
            >
              Emmanuel
              <br />
              Josué
              <br />
              <span className="text-muted-foreground">Djossou.</span>
            </h1>

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground/60">
              / Lead Mobile Engineer · @EdoMatch
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building mobile experiences trusted by 80K+ users across iOS and
              Android. On-device LLM integrator &amp; tech speaker.
            </p>

            <div className="flex items-center gap-3">
              <Button
                className="gradient-primary text-primary-foreground rounded-none text-xs font-bold uppercase tracking-[0.14em] px-6 py-5 hover:opacity-90"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in touch
              </Button>
              <Button
                variant="outline"
                className="rounded-none border-border text-xs font-bold uppercase tracking-[0.14em] px-6 py-5 hover-lift"
                asChild
              >
                <a
                  href="/resume.pdf"
                  download="Yaovi_Emmanuel_Josue_Djossou_Resume.pdf"
                >
                  Resume
                </a>
              </Button>
            </div>

            <button
              onClick={() =>
                document
                  .querySelector("#experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hidden lg:flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/40 hover:text-muted-foreground transition-smooth group pt-2"
            >
              scroll for more
              <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-smooth" />
            </button>
          </div>

          {/* ── RIGHT: card grid ── */}
          <div className="grid grid-cols-2 gap-3">
            {/* Top: wide info card (col-span-2) */}
            <div className="col-span-2 border border-border bg-card overflow-hidden grid grid-cols-[1fr_45%]">
              {/* Left: text info */}
              <div className="px-5 py-5 flex flex-col justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-foreground leading-snug">
                    Emmanuel Josué Djossou
                  </p>
                  <p className="text-[10px] text-muted-foreground tracking-[0.04em]">
                    Worldwide · Remote 🌍
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground/70 leading-relaxed max-w-[240px]">
                    Lead Mobile Engineer specializing in Flutter, clean
                    architecture, and on-device AI.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    Flutter Expert
                  </p>
                  <p className="text-[9px] font-semibold text-muted-foreground/50">
                    iOS · Android
                  </p>
                </div>
              </div>
              {/* Right: photo */}
              <div className="overflow-hidden border-l border-border">
                <img
                  src="/profile-0.jpeg"
                  alt="Emmanuel Josué Djossou"
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: "180px" }}
                />
              </div>
            </div>

            {/* ── Bottom: unified apps + socials (col-span-2) ── */}
            <div className="col-span-2 border border-border bg-card overflow-hidden grid grid-cols-[1fr_auto] divide-x divide-border">
              {/* ── Apps section ── */}
              <div className="p-5 space-y-5">
                {/* Header */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-muted-foreground/60 mb-1">
                      / Shipped to production
                    </p>
                    <p className="text-xs font-semibold text-foreground/80">
                      Live on the App Store &amp; Play Store.
                    </p>
                  </div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/50 border border-border px-2 py-1">
                    iOS · Android
                  </span>
                </div>

                {/* App icons with depth + staggered float */}
                <div className="flex items-end gap-3">
                  {shippedApps.map((app, i) => (
                    <div
                      key={app.name}
                      className="group flex flex-col items-center gap-1.5"
                    >
                      <a
                        href={app.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`${app.name} — App Store`}
                        className="relative block animate-float"
                        style={{
                          animationDelay: `${i * 0.45}s`,
                          animationDuration: `${3.5 + i * 0.3}s`,
                        }}
                      >
                        <img
                          src={app.icon}
                          alt={app.name}
                          className="w-11 h-11 rounded-[22%] object-cover transition-all duration-300 group-hover:scale-[1.12]"
                          style={{ boxShadow: iconShadow }}
                          onMouseEnter={(e) =>
                            ((e.target as HTMLImageElement).style.boxShadow =
                              iconShadowHover)
                          }
                          onMouseLeave={(e) =>
                            ((e.target as HTMLImageElement).style.boxShadow =
                              iconShadow)
                          }
                        />
                        {/* Play Store badge on hover */}
                        <a
                          href={app.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`${app.name} — Play Store`}
                          onClick={(e) => e.stopPropagation()}
                          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-secondary border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth hover:bg-muted"
                        >
                          <ArrowUpRight className="w-2.5 h-2.5 text-muted-foreground" />
                        </a>
                      </a>

                      {/* App name — fades in on hover */}
                      <span className="text-[8px] font-medium text-muted-foreground/40 group-hover:text-muted-foreground transition-smooth truncate max-w-[44px] text-center tracking-[0.04em]">
                        {app.shortName}
                      </span>
                    </div>
                  ))}

                  <div className="flex flex-col items-center gap-1.5 pb-0.5">
                    <div className="w-11 h-11 rounded-[22%] border border-border flex items-center justify-center">
                      <span className="text-xs font-bold text-muted-foreground/30">
                        +
                      </span>
                    </div>
                    <span className="text-[8px] text-muted-foreground/30">
                      more
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Socials section ── */}
              <div className="p-5 space-y-4 min-w-[168px]">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-muted-foreground/60">
                  / Connect
                </p>

                <div className="space-y-3">
                  {socials.map(({ icon: Icon, label, sub, href, download }) => (
                    <a
                      key={label}
                      href={href}
                      {...(download
                        ? {
                            download: "Yaovi_Emmanuel_Josue_Djossou_Resume.pdf",
                          }
                        : { target: "_blank", rel: "noopener noreferrer" })}
                      className="group flex items-center gap-3 hover:bg-secondary/60 rounded-sm px-2 py-1.5 -mx-2 transition-smooth"
                    >
                      <div className="w-7 h-7 rounded-sm bg-secondary border border-border flex items-center justify-center shrink-0 group-hover:bg-muted transition-smooth">
                        <Icon className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-foreground transition-smooth" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold text-muted-foreground group-hover:text-foreground transition-smooth leading-none">
                          {label}
                        </p>
                        <p className="text-[8px] text-muted-foreground/40 mt-0.5 truncate">
                          {sub}
                        </p>
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-muted-foreground/30 group-hover:text-foreground ml-auto shrink-0 transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Marquee ticker ── */}
      <div className="border-y border-border overflow-hidden py-5">
        <div className="marquee-track">
          {[...roles, ...roles, ...roles].map((role, i) => (
            <span
              key={i}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground px-5 shrink-0"
            >
              {role}
              <span className="text-border/60 ml-5">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="px-6 md:px-10 lg:px-14 py-12 border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-border">
          {stats.map((stat, i) => (
            <div key={i} className="md:px-8 first:pl-0 last:pr-0">
              <div
                className="font-bold leading-none text-foreground"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
