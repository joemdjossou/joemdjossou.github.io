import { Button } from "@/components/ui/button";
import {
  getHymnesStoreTarget,
  HYMNES_APP_ICON_SRC,
  HYMNES_APP_STORE_URL,
  HYMNES_PLAY_STORE_URL,
} from "@/constants/hymnes-brand";
import { ArrowLeft, Loader2 } from "lucide-react";
import React, { useLayoutEffect, useState } from "react";

const HymnesAppDownload: React.FC = () => {
  const [status, setStatus] = useState<"pending" | "redirecting" | "chooser">("pending");

  useLayoutEffect(() => {
    const target = getHymnesStoreTarget();
    if (target === "ios") {
      setStatus("redirecting");
      window.location.replace(HYMNES_APP_STORE_URL);
      return;
    }
    if (target === "android") {
      setStatus("redirecting");
      window.location.replace(HYMNES_PLAY_STORE_URL);
      return;
    }
    setStatus("chooser");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f1e8] to-[#e8dcc8] dark:from-[#1a2e1a] dark:to-[#0d1a0d] flex flex-col">
      <header className="border-b border-[#3b6e4a]/20 bg-[#2d5f3f]/95 backdrop-blur-md">
        <div className="container mx-auto flex max-w-lg items-center justify-between px-4 py-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => (window.location.hash = "hymnes-app")}
            className="text-white hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Hymnes
          </Button>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-2xl border border-[#3b6e4a]/20 bg-white/90 p-8 shadow-xl dark:bg-[#1a2e1a]/90">
          <div className="flex flex-col items-center text-center">
            <img
              src={HYMNES_APP_ICON_SRC}
              alt=""
              width={88}
              height={88}
              className="h-[5.5rem] w-[5.5rem] rounded-[1.25rem] object-cover shadow-lg ring-2 ring-[#3b6e4a]/30"
            />
            <h1 className="mt-5 text-xl font-bold tracking-tight text-[#1a2e1a] dark:text-[#e8f0ea]">
              Hymnes et Louanges Adventiste
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {status === "redirecting" || status === "pending" ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-[#3b6e4a]" />
                  Opening the store…
                </span>
              ) : (
                "Choose your platform to download the app."
              )}
            </p>
          </div>

          {status === "chooser" ? (
            <div className="mt-8 flex flex-col gap-3">
              <Button
                asChild
                className="h-12 w-full rounded-xl bg-[#000] text-white hover:bg-[#1a1a1a]"
              >
                <a href={HYMNES_APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  Download on the App Store
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 w-full rounded-xl border-[#3b6e4a]/40 bg-[#f8faf8] hover:bg-[#eef5ef] dark:bg-[#243524] dark:hover:bg-[#2d5f3f]/40"
              >
                <a href={HYMNES_PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  Get it on Google Play
                </a>
              </Button>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
};

export default HymnesAppDownload;
