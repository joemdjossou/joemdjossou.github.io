/** App Store icon (512×512 JPEG) served from `public/hymnes-app-icon.jpg`. */
export const HYMNES_APP_ICON_SRC = "/hymnes-app-icon.jpg";

export const HYMNES_APP_STORE_URL =
  "https://apps.apple.com/us/app/hymnes-et-louanges-adventiste/id6753330258";

export const HYMNES_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.joemdjossou.hymnes&pcampaignid=web_share";

/** iOS (incl. iPadOS desktop mode) vs Android for smart-store routing. */
export function getHymnesStoreTarget(): "ios" | "android" | "other" {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const isIOS =
    /iPad|iPhone|iPod/i.test(ua) ||
    (typeof navigator !== "undefined" &&
      navigator.platform === "MacIntel" &&
      navigator.maxTouchPoints > 1);
  if (isIOS) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "other";
}
