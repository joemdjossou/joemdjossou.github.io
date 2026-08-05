import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import HymnesApp from "./pages/HymnesApp";
import HymnesAppDownload from "./pages/HymnesAppDownload";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyES from "./pages/PrivacyPolicyES";
import PrivacyPolicyFR from "./pages/PrivacyPolicyFR";
import { navigateTo } from "@/lib/navigate";
import PrivacyPolicyPT from "./pages/PrivacyPolicyPT";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

type Page =
  | "home"
  | "hymnes-app"
  | "hymnes-app-download"
  | "terms"
  | "privacy"
  | "privacy-fr"
  | "privacy-es"
  | "privacy-pt";

/**
 * Canonical clean path for each page — the URL the address bar should show.
 * The legal pages live under /hymnes-app/… because those are the URLs
 * declared to Apple App Review and Google Play.
 */
const PAGE_TO_PATH: Record<Page, string> = {
  home: "",
  "hymnes-app": "hymnes-app",
  "hymnes-app-download": "hymnes-app/download",
  terms: "hymnes-app/terms-of-service",
  privacy: "hymnes-app/privacy-policy",
  "privacy-fr": "hymnes-app/privacy-policy-fr",
  "privacy-es": "hymnes-app/privacy-policy-es",
  "privacy-pt": "hymnes-app/privacy-policy-pt",
};

/**
 * Every clean path we answer on (canonical + legacy aliases) → Page.
 * Aliases still render the page; the address bar is rewritten to canonical.
 */
const PATH_TO_PAGE: Record<string, Page> = {
  "": "home",
  "hymnes-app": "hymnes-app",
  "hymnes-app/download": "hymnes-app-download",
  "hymnes-app/terms-of-service": "terms",
  "hymnes-app/privacy-policy": "privacy",
  "hymnes-app/privacy-policy-fr": "privacy-fr",
  "hymnes-app/privacy-policy-es": "privacy-es",
  "hymnes-app/privacy-policy-pt": "privacy-pt",
  // Legacy top-level paths (still linked from the stores / older builds).
  "terms-of-service": "terms",
  "privacy-policy": "privacy",
  "privacy-policy-fr": "privacy-fr",
  "privacy-policy-es": "privacy-es",
  "privacy-policy-pt": "privacy-pt",
};

/**
 * Any hash spelling (legacy or new) → Page.
 * Keeps every historical #hash link working while redirecting the
 * address bar to the hash-free canonical path.
 */
const HASH_TO_PAGE: Record<string, Page> = {
  "hymnes-app": "hymnes-app",
  "hymnes-app/download": "hymnes-app-download",
  "hymnes-app-terms-of-service": "terms",
  "hymnes-app-privacy-policy": "privacy",
  "hymnes-app-privacy-policy-fr": "privacy-fr",
  "hymnes-app-privacy-policy-es": "privacy-es",
  "hymnes-app-privacy-policy-pt": "privacy-pt",
  "terms-of-service": "terms",
  "privacy-policy": "privacy",
  "privacy-policy-fr": "privacy-fr",
  "privacy-policy-es": "privacy-es",
  "privacy-policy-pt": "privacy-pt",
};

const trim = (s: string) => s.replace(/^\/+|\/+$/g, "");

/** Known routes that should navigate client-side (no full reload). */
export const CLEAN_ROUTES = new Set(
  Object.keys(PATH_TO_PAGE).filter((p) => p !== "")
);

/**
 * Resolve the current URL to a page + the canonical path it should show.
 * Precedence: an explicit clean path wins; otherwise fall back to the hash.
 * A hash that is not a route (e.g. `#purchases-and-donations`) is an in-page
 * anchor and is preserved so browser anchor scrolling keeps working.
 */
function resolve(): { page: Page; canonicalPath: string } {
  const rawHash = trim(window.location.hash.replace(/^#\/?/, ""));
  const routeHash = rawHash ? HASH_TO_PAGE[rawHash] : undefined;
  const anchor = rawHash && !routeHash ? "#" + rawHash : "";

  const canonical = (page: Page) => ({
    page,
    canonicalPath: "/" + PAGE_TO_PATH[page] + anchor,
  });

  const path = trim(window.location.pathname);
  if (path && PATH_TO_PAGE[path]) {
    return canonical(PATH_TO_PAGE[path]);
  }

  if (routeHash) {
    return { page: routeHash, canonicalPath: "/" + PAGE_TO_PATH[routeHash] };
  }

  return canonical("home");
}

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  useEffect(() => {
    const sync = () => {
      const { page, canonicalPath } = resolve();
      setCurrentPage(page);
      // Drop the #hash (and any 404-fallback query) so the bar shows the clean
      // path. Hash links keep working — they just get rewritten on arrival.
      const current = window.location.pathname + window.location.search + window.location.hash;
      if (current !== canonicalPath) {
        window.history.replaceState(null, "", canonicalPath);
      }
    };

    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);

    // Intercept in-app clicks on known clean routes for reload-free navigation.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      // Clean route like "/hymnes-app". navigateTo fires `popstate`, which both
      // re-syncs this component and lets index.html refresh the page metadata.
      if (href.startsWith("/") && CLEAN_ROUTES.has(trim(href))) {
        e.preventDefault();
        navigateTo(href);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {currentPage === "hymnes-app-download" ? (
          <HymnesAppDownload />
        ) : currentPage === "hymnes-app" ? (
          <HymnesApp />
        ) : currentPage === "terms" ? (
          <TermsOfService />
        ) : currentPage === "privacy" ? (
          <PrivacyPolicy />
        ) : currentPage === "privacy-fr" ? (
          <PrivacyPolicyFR />
        ) : currentPage === "privacy-es" ? (
          <PrivacyPolicyES />
        ) : currentPage === "privacy-pt" ? (
          <PrivacyPolicyPT />
        ) : (
          <Index />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
