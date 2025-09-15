import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TestApp from "./TestApp";

const queryClient = new QueryClient();

const App = () => {
  try {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <TestApp />
        </TooltipProvider>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error("App component error:", error);
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Josué Djossou - Portfolio</h1>
        <p>App loading error. Please check console for details.</p>
      </div>
    );
  }
};

export default App;
