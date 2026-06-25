// Meta Pixel — Palmira Garde
// Pixel ID solicitado por BreoganOnline / Ramses (23 jun 2026)
export const PIXEL_ID = "3838200989821889";

// Clave de consentimiento RGPD en localStorage
export const CONSENT_KEY = "pg_cookie_consent";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    _pgPixelLoaded?: boolean;
  }
}

// Inyecta el código base del píxel y dispara PageView.
// Solo se llama DESPUÉS de que el usuario acepte cookies (RGPD).
export function loadPixel() {
  if (typeof window === "undefined") return;
  if (window._pgPixelLoaded) return;
  window._pgPixelLoaded = true;

  /* eslint-disable */
  (function (f: any, b: any, e: string, v: string) {
    if (f.fbq) return;
    const n: any = (f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    });
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    const t: any = b.createElement(e);
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */

  window.fbq?.("init", PIXEL_ID);
  window.fbq?.("track", "PageView");
}

// Dispara un evento estándar (Lead, Contact, ViewContent...).
// No hace nada si el píxel aún no se ha cargado (sin consentimiento) -> RGPD safe.
export function track(event: string, params?: Record<string, any>) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
}

export function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(CONSENT_KEY) === "granted";
}
