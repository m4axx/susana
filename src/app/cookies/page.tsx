"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { LegalShell, LegalH2, LegalP } from "@/components/sections/LegalShell";
import { CONSENT_KEY } from "@/lib/pixel";

export default function CookiesPage() {
  const resetConsent = () => {
    window.localStorage.removeItem(CONSENT_KEY);
    window.location.reload();
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <LegalShell title="Política de Cookies" updated="Última actualización: junio 2026">
        <LegalH2>1. Qué son las cookies</LegalH2>
        <LegalP>
          Las cookies son pequeños archivos que se almacenan en tu dispositivo al
          navegar. Permiten recordar tus preferencias y medir cómo se usa la web.
        </LegalP>

        <LegalH2>2. Qué cookies usamos</LegalH2>
        <LegalP>
          <strong>Técnicas (necesarias):</strong> guardan tu decisión sobre el
          consentimiento de cookies. No requieren autorización.
        </LegalP>
        <LegalP>
          <strong>De medición y publicidad (terceros):</strong> utilizamos el{" "}
          <strong>píxel de Meta</strong> (Facebook / Instagram) para medir la
          eficacia de nuestros anuncios y mostrarte publicidad relevante. Estas
          cookies <strong>solo se activan si las aceptas</strong>.
        </LegalP>

        <LegalH2>3. Gestionar tu consentimiento</LegalH2>
        <LegalP>
          Al entrar te mostramos un banner para aceptar o rechazar las cookies no
          necesarias. Mientras no aceptes, el píxel de Meta no se carga. Puedes
          cambiar tu decisión cuando quieras desde el botón inferior o desde la
          configuración de tu navegador.
        </LegalP>

        <button
          onClick={resetConsent}
          className="pill-shine mt-6 px-7 h-12 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
        >
          Cambiar preferencias de cookies
        </button>
      </LegalShell>
      <Footer />
    </main>
  );
}
