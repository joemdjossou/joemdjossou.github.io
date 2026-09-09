import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

interface PageHeaderProps {
  /** Full-bleed background image for the banner. */
  image: string;
  /** Square mark laid over the banner, usually the app icon. */
  icon?: string;
  title: string;
  subtitle?: string;
  /** Brand wash painted over the image so light text always has contrast. */
  tint?: string;
  /** Where "Back" goes. Defaults to browser history. */
  backHref?: string;
  backLabel?: string;
  /** Language switcher or store buttons, rendered under the title. */
  children?: ReactNode;
}

/**
 * Banner used at the top of every routed sub-page (legal pages, download,
 * 404), so a visitor landing straight on one from a store listing or a search
 * result sees what the page belongs to before they read a word of it.
 */
const PageHeader = ({
  image,
  icon,
  title,
  subtitle,
  tint = "linear-gradient(120deg, rgba(20,58,33,0.92), rgba(9,25,15,0.86))",
  backHref,
  backLabel = "Back",
  children,
}: PageHeaderProps) => (
  <header className="relative isolate overflow-hidden">
    <img
      src={image}
      alt=""
      aria-hidden
      className="absolute inset-0 size-full scale-110 object-cover blur-[10px]"
    />
    <div aria-hidden className="absolute inset-0" style={{ background: tint }} />

    <div className="relative mx-auto max-w-4xl px-4 pb-8 pt-6 sm:pb-10 sm:pt-8">
      {backHref ? (
        <a
          href={backHref}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          <ArrowLeft className="size-4" />
          {backLabel}
        </a>
      ) : (
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          <ArrowLeft className="size-4" />
          {backLabel}
        </button>
      )}

      <div className="mt-6 flex items-center gap-4">
        {icon && (
          <img
            src={icon}
            alt=""
            className="size-14 shrink-0 rounded-[22%] object-cover shadow-lg ring-1 ring-white/20 sm:size-16"
          />
        )}
        <div className="min-w-0">
          <h1 className="text-xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-white/75">{subtitle}</p>}
        </div>
      </div>

      {children && <div className="mt-5 flex flex-wrap gap-2">{children}</div>}
    </div>
  </header>
);

export default PageHeader;
