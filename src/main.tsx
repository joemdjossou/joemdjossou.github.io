import { ThemeProvider } from "@/components/ThemeProvider";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import "./index.css"; // Temporarily disabled to test if CSS is causing issues

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found!");
  }

  createRoot(rootElement).render(
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <App />
    </ThemeProvider>
  );
} catch (error) {
  console.error("Failed to render app:", error);
  // Fallback: show basic content
  document.body.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
      <h1>Josué Djossou - Portfolio</h1>
      <p>Loading issue detected. Please refresh the page.</p>
      <p>Error: ${error}</p>
    </div>
  `;
}
