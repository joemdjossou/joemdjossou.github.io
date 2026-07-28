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
import PrivacyPolicyPT from "./pages/PrivacyPolicyPT";

const queryClient = new QueryClient();

type Page =
  | "home"
  | "hymnes-app"
  | "hymnes-app-download"
  | "privacy"
  | "privacy-fr"
  | "privacy-es"
  | "privacy-pt";

/**
 * Canonical clean paths (no leading slash) → Page.
 * These are the URLs the browser bar should show.
 */
const PATH_TO_PAGE: Record<string, Page> = {
  "": "home",
  "hymnes-app/download": "hymnes-app-download",
  "hymnes-app": "hymnes-app",
  "privacy-policy": "privacy",
  "privacy-policy-fr": "privacy-fr",
  "privacy-policy-es": "privacy-es",
  "privacy-policy-pt": "privacy-pt",
};

/**
 * Any hash spelling (legacy or new) → its canonical clean path.
 * Keeps every historical #hash link working while redirecting the
 * address bar to the hash-free path.
 */
const HASH_TO_PATH: Record<string, string> = {
  "hymnes-app/download": "hymnes-app/download",
  "hymnes-app": "hymnes-app",
  "hymnes-app-privacy-policy": "privacy-policy",
  "hymnes-app-privacy-policy-fr": "privacy-policy-fr",
  "hymnes-app-privacy-policy-es": "privacy-policy-es",
  "hymnes-app-privacy-policy-pt": "privacy-policy-pt",
  "privacy-policy": "privacy-policy",
  "privacy-policy-fr": "privacy-policy-fr",
  "privacy-policy-es": "privacy-policy-es",
  "privacy-policy-pt": "privacy-policy-pt",
};

const trim = (s: string) => s.replace(/^\/+|\/+$/g, "");

/** Known routes that should navigate client-side (no full reload). */
export const CLEAN_ROUTES = new Set(
  Object.keys(PATH_TO_PAGE).filter((p) => p !== "")
);

/**
 * Resolve the current URL to a page + the canonical path it should show.
 * Precedence: an explicit clean path wins; otherwise fall back to the hash.
 */
function resolve(): { page: Page; canonicalPath: string } {
  const path = trim(window.location.pathname);
  if (path && PATH_TO_PAGE[path]) {
    return { page: PATH_TO_PAGE[path], canonicalPath: "/" + path };
  }

  const rawHash = trim(window.location.hash.replace(/^#\/?/, ""));
  if (rawHash && HASH_TO_PATH[rawHash]) {
    const clean = HASH_TO_PATH[rawHash];
    return { page: PATH_TO_PAGE[clean], canonicalPath: "/" + clean };
  }

  return { page: "home", canonicalPath: "/" };
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

      // Clean route like "/hymnes-app"
      if (href.startsWith("/") && CLEAN_ROUTES.has(trim(href))) {
        e.preventDefault();
        window.history.pushState(null, "", href);
        window.scrollTo(0, 0);
        sync();
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
