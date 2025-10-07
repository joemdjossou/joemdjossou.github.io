import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check URL hash for routing
    const hash = window.location.hash.slice(1);
    if (hash === 'hymnes-app-privacy-policy') {
      setCurrentPage('privacy');
    } else {
      setCurrentPage('home');
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (newHash === 'hymnes-app-privacy-policy') {
        setCurrentPage('privacy');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {currentPage === 'privacy' ? <PrivacyPolicy /> : <Index />}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
