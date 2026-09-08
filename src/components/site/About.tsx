import { githubData } from "@/data/feed";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { icon: Mail, label: "joemdjossou@outlook.com", href: "mailto:joemdjossou@outlook.com" },
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
    <div className="card-surface p-5 sm:p-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <img
          src="/profile-about.jpg"
          alt="Emmanuel Josué Djossou"
          loading="lazy"
          className="h-48 w-full shrink-0 rounded-xl object-cover object-top sm:h-56 sm:w-44"
        />

        <div className="min-w-0">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">About</h2>

          <div className="mt-3 space-y-3.5 text-sm leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Yaovi Emmanuel Josué Djossou — a senior software and data
              engineer based in Lomé, Togo. Six years in, my work sits in three
              places that keep turning out to be the same job: mobile apps people
              use daily, the services behind them, and the pipelines that make the
              resulting numbers worth acting on.
            </p>
            <p>
              I started in Flutter and never really left — apps I&apos;ve built or
              led have crossed 200K downloads and reached 100K+ people. Along the
              way I picked up the backend (Java, Spring Boot, Node, Go) and the
              data side (ETL/ELT, schema versioning, the unglamorous QA that stops
              a dashboard from lying to you). Lately that&apos;s meant a lot of
              applied AI: on-device NLP, evaluation harnesses, and teaching other
              developers to ship it rather than demo it.
            </p>
            <p>
              I work in English, French and Ewe, and I&apos;m available worldwide
              for remote contract and full-time work.
            </p>
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
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
                className="inline-flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm transition-colors hover:bg-muted"
              >
                <Icon className="size-4 shrink-0 text-muted-foreground" />
                <span className="truncate">{label}</span>
              </a>
            ))}
          </div>

          <p className="mt-5 text-xs text-muted-foreground/70">
            GitHub data on this page refreshes daily — last synced{" "}
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
