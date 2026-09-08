const Footer = () => (
  <footer className="mt-16 border-t">
    <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p className="text-muted-foreground">
        © {new Date().getFullYear()} Emmanuel Josué Djossou
      </p>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <a
          href="mailto:joemdjossou@outlook.com"
          className="link-underline text-muted-foreground"
        >
          joemdjossou@outlook.com
        </a>
        <a
          href="https://github.com/joemdjossou/joemdjossou.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-muted-foreground"
        >
          Source
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
