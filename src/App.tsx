import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import HymnesApp from "./pages/HymnesApp";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyFR from "./pages/PrivacyPolicyFR";

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Check URL hash for routing
    const hash = window.location.hash.slice(1);
    if (hash === "hymnes-app") {
      setCurrentPage("hymnes-app");
    } else if (hash === "hymnes-app-privacy-policy") {
      setCurrentPage("privacy");
    } else if (hash === "hymnes-app-privacy-policy-fr") {
      setCurrentPage("privacy-fr");
    } else {
      setCurrentPage("home");
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (newHash === "hymnes-app") {
        setCurrentPage("hymnes-app");
      } else if (newHash === "hymnes-app-privacy-policy") {
        setCurrentPage("privacy");
      } else if (newHash === "hymnes-app-privacy-policy-fr") {
        setCurrentPage("privacy-fr");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {currentPage === "hymnes-app" ? (
          <HymnesApp />
        ) : currentPage === "privacy" ? (
          <PrivacyPolicy />
        ) : currentPage === "privacy-fr" ? (
          <PrivacyPolicyFR />
        ) : (
          <Index />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
