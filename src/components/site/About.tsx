import { githubData } from "@/data/feed";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { icon: Mail, label: "josue@joemdjossou.com", href: "mailto:josue@joemdjossou.com" },
  { icon: Github, label: "github.com/joemdjossou", href: "https://github.com/joemdjossou" },
  {
    icon: Linkedin,
    label: "linkedin.com/in/joemdjossou",
    href: "https://www.linkedin.com/in/joemdjossou",
  },
  { icon: Download, label: "Résumé (PDF)", href: "/resume.pdf" },
];

const About = () => (
  <section id="about" className="scroll-mt-20 pt-14 sm:pt-20">
    <div className="reveal card-surface p-5 sm:p-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <img
          src="/profile-about.jpg"
          alt="Emmanuel Josué Djossou"
          loading="lazy"
          className="h-56 w-full shrink-0 rounded-[3px] border object-cover object-top sm:h-64 sm:w-52"
        />

        <div className="min-w-0">
          <h2 className="display text-[clamp(2.5rem,6vw,4.5rem)]">About</h2>

          <div className="mt-4 max-w-[70ch] space-y-3.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              I&apos;m Yaovi Emmanuel Josué Djossou, a senior software and data
              engineer based in Lomé, Togo. Six years in, my work sits in three
              places that keep turning out to be the same job: products people use
              daily on the web and on their phones; the services behind them; and
              the pipelines that make the resulting numbers worth acting on.
            </p>
            <p>
              I started in Flutter and never really left. Apps I&apos;ve built or
              led have crossed 200K downloads and reached 100K+ people. The web
              half runs in parallel: React and TypeScript most days, Angular and
              NgRx when the job calls for it, on Supabase, Firebase or a NestJS
              API I wrote. Behind both sit the backend (Java, Spring Boot, Node,
              Go) and the data side: ETL/ELT, schema versioning, the unglamorous
              QA that stops a dashboard from lying to you. Lately that&apos;s meant
              a lot of applied AI: on-device NLP, evaluation harnesses, and
              teaching other developers to ship it rather than demo it.
            </p>
            <p>
              I work in English and French, and I&apos;m available worldwide
              for remote contract and full-time work.
            </p>
          </div>

          <div className="mt-6 grid max-w-[70ch] gap-2 sm:grid-cols-2">
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                {...(href.endsWith(".pdf")
                  ? { download: "Yaovi_Emmanuel_Josue_Djossou_Resume.pdf" }
                  : {})}
                className="inline-flex items-center gap-2.5 rounded-[3px] bg-muted px-3.5 py-2.5 text-sm font-medium transition-colors hover:bg-pop hover:text-pop-foreground"
              >
                <Icon className="size-4 shrink-0 opacity-70" />
                <span className="truncate">{label}</span>
              </a>
            ))}
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            GitHub data on this page refreshes daily. Last synced{" "}
            {new Date(githubData.generatedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
