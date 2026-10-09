import { ArrowRight } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com/joemdjossou" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/joemdjossou" },
  { label: "X", href: "https://twitter.com/joemdjossou" },
  { label: "Source", href: "https://github.com/joemdjossou/joemdjossou.github.io" },
];

/** Closes the page on the same poster colours the hero opened with. */
const Footer = () => (
  <footer className="mt-20 border-t-2 border-night bg-night text-white">
    <div className="container-page py-14 sm:py-20">
      <h2 className="display max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)]">
        Got something <span className="text-pop">worth shipping?</span>
      </h2>

      <div
        className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5"
        style={{ "--btn-shadow": "var(--cobalt-bright)" } as React.CSSProperties}
      >
        <a href="mailto:joemdjossou@outlook.com" className="btn-pop h-14 px-7 text-lg">
          Start a conversation <ArrowRight className="size-5" strokeWidth={2.5} />
        </a>
        <a
          href="mailto:joemdjossou@outlook.com"
          className="link-underline text-periwinkle hover:text-white"
        >
          joemdjossou@outlook.com
        </a>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-periwinkle/80">
          © {new Date().getFullYear()} Emmanuel Josué Djossou. Built in Lomé, Togo.
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-periwinkle hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
