import { ThemeProvider } from "@/components/ThemeProvider";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
    <App />
  </ThemeProvider>
);
