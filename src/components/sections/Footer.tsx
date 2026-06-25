"use client";

import { useState, useEffect } from "react";
import { Instagram, Facebook, Mail, Leaf } from "lucide-react";

export function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="section-dark relative bg-[hsl(20_10%_5%)] text-foreground overflow-clip">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div className="space-y-5 md:col-span-1">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="font-headline text-2xl">
                Palmira <span className="italic text-primary">Garde</span>
              </span>
            </div>
            <p className="text-muted-foreground font-light leading-relaxed max-w-xs text-sm">
              Cosmética fresca Ringana. Piel sana, conciencia limpia. De mujer a
              mujer.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70">Explora</h4>
            <ul className="space-y-3 text-muted-foreground text-sm font-light">
              <li><a href="#sobre-mi" className="hover:text-primary transition-colors">Sobre Palmira</a></li>
              <li><a href="#productos" className="hover:text-primary transition-colors">Por qué Ringana</a></li>
              <li><a href="#testimonios" className="hover:text-primary transition-colors">Testimonios</a></li>
              <li><a href="#oferta" className="hover:text-primary transition-colors">Mi código 20€</a></li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70">Contacto</h4>
            <ul className="space-y-3 text-muted-foreground text-sm font-light">
              <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-primary" /> concierge@palmiragarde.com</li>
              <li>WhatsApp +34 619 51 64 12</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-5 text-xs text-muted-foreground">
          <p>&copy; {year} Palmira Garde · Cosmética fresca Ringana.</p>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            <a href="/aviso-legal" className="hover:text-primary transition-colors">Aviso legal</a>
            <a href="/privacidad" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="/cookies" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
