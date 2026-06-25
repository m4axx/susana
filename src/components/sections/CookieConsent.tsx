"use client";

import { useEffect, useState } from "react";
import { CONSENT_KEY, loadPixel } from "@/lib/pixel";

// Banner de consentimiento RGPD. El píxel NO se carga hasta aceptar.
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "granted") {
      loadPixel();
    } else if (stored !== "denied") {
      setVisible(true);
      document.body.classList.add("cookie-open");
    }
    return () => document.body.classList.remove("cookie-open");
  }, []);

  const decide = (granted: boolean) => {
    window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    if (granted) loadPixel();
    document.body.classList.remove("cookie-open");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[200] p-3 md:p-5">
      <div className="glass mx-auto max-w-2xl rounded-[1.25rem] p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 shadow-2xl">
        <p className="text-xs md:text-sm font-light leading-relaxed text-foreground/80 flex-1">
          Usamos cookies propias y de Meta para medir y mejorar tu experiencia. El
          píxel solo se activa si lo aceptas.{" "}
          <a href="/cookies" className="text-primary underline hover:opacity-80">
            Más info
          </a>
          .
        </p>
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => decide(false)}
            className="px-5 h-11 rounded-full text-xs font-semibold border border-border text-foreground hover:bg-secondary transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={() => decide(true)}
            className="pill-shine px-6 h-11 rounded-full text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
