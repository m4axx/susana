"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { track } from "@/lib/pixel";
import { whatsappUrl } from "@/lib/contact";

// Barra de acción fija (solo móvil): interacción inmediata desde cualquier punto.
// Verde = oferta (Lead) · WhatsApp (Contact). Se oculta dentro del propio #oferta.
export function MobileStickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`mobile-sticky md:hidden fixed inset-x-0 bottom-0 z-[95] p-3 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-[120%]"
      }`}
    >
      <div className="glass rounded-full p-1.5 flex items-center gap-2 shadow-2xl">
        <a
          href="#oferta"
          onClick={() => track("Lead", { content_name: "StickyBar 20 euros" })}
          className="pill-shine flex-1 inline-flex items-center justify-center h-12 rounded-full bg-primary text-primary-foreground text-sm font-bold"
        >
          Quiero mis 20€
        </a>
        <a
          href={whatsappUrl("Hola Palmira, quiero información sobre Ringana.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("Contact")}
          aria-label="WhatsApp"
          className="h-12 w-12 shrink-0 inline-flex items-center justify-center rounded-full bg-[#25D366] text-white"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
