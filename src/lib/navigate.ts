/**
 * Navigate to a clean path without a full reload.
 * App.tsx listens for `popstate` and re-resolves the current page.
 */
export function navigateTo(path: string) {
  window.history.pushState(null, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo(0, 0);
}
