import PageHeader from "@/components/site/PageHeader";

const NotFound = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <PageHeader
      image="/setup.jpg"
      title="404 — nothing here"
      subtitle="That page doesn't exist, or it moved."
      tint="linear-gradient(120deg, rgba(10,10,10,0.86), rgba(10,10,10,0.72))"
      backHref="/"
      backLabel="Home"
    />

    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12">
      <p className="text-sm text-muted-foreground">
        Try one of these instead:
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {[
          { href: "/", label: "Home" },
          { href: "/hymnes-app", label: "Hymnes et Louanges — case study" },
          { href: "/hymnes-app/privacy-policy", label: "Privacy Policy" },
          { href: "/hymnes-app/terms-of-service", label: "Terms of Service" },
        ].map((l) => (
          <li key={l.href}>
            <a href={l.href} className="link-underline font-medium">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  </div>
);

export default NotFound;
