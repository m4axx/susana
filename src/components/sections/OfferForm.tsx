"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { track } from "@/lib/pixel";
import { whatsappUrl } from "@/lib/contact";
import { Clock, CheckCircle2 } from "lucide-react";

// Punto de conversión. Formulario on-page: Nombre + Email/WhatsApp.
// Submit -> dispara fbq('track','Lead') y abre WhatsApp con el lead pre-rellenado.
export function OfferForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    track("Lead", { content_name: "Codigo 20 euros Ringana" });

    const msg = `Hola Palmira, soy ${name}. Quiero reclamar mi código de bienvenida de 20€ de Ringana. Mi contacto: ${contact}`;
    setSent(true);
    window.open(whatsappUrl(msg), "_blank");
  };

  return (
    <section className="section-oferta relative py-20 md:py-32 px-6 bg-background text-foreground overflow-clip" id="oferta">
      {/* Marca de agua 20€ + guirnalda botánica tenue */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-headline italic opacity-[0.04] select-none pointer-events-none text-[16rem] leading-none">
        20€
      </div>
      <svg
        className="absolute top-6 left-1/2 -translate-x-1/2 w-64 opacity-[0.12] text-primary pointer-events-none"
        viewBox="0 0 240 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden
      >
        <path d="M10 12 C 60 2, 90 22, 120 12 S 180 2, 230 12" strokeLinecap="round" />
        <path d="M120 12 l-6 -9 M120 12 l6 -9 M120 12 l0 -11" strokeLinecap="round" />
      </svg>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center space-y-5 mb-10">
          <span className="font-accent italic text-accent text-base block">tu regalo de bienvenida</span>
          <p className="font-headline font-light leading-none" style={{ fontSize: "clamp(3rem, 12vw, 5.5rem)" }}>
            20€
          </p>
          <h2 className="font-headline text-2xl md:text-3xl font-light">
            de regalo en tu primer pedido
          </h2>
          <p className="text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
            Déjame tus datos y te envío tu código personalmente. Sin compromiso,
            sin letra pequeña.
          </p>
          <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            <Clock className="h-4 w-4" /> Reservado para las primeras 20 personas
          </div>
        </div>

        {sent ? (
          <div className="bg-card rounded-[1.75rem] p-10 text-center space-y-4 shadow-2xl">
            <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl font-headline">¡Casi listo!</h3>
            <p className="text-muted-foreground font-light">
              Te he abierto WhatsApp para confirmar tu código de 20€. Si no se ha
              abierto,{" "}
              <a
                href={whatsappUrl(`Hola Palmira, soy ${name}. Quiero mi código de 20€ de Ringana.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline font-medium"
                onClick={() => track("Contact")}
              >
                pulsa aquí
              </a>
              .
            </p>
          </div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card rounded-[1.75rem] p-7 md:p-10 space-y-5 shadow-2xl"
          >
            <div className="space-y-2">
              <label htmlFor="pg-name" className="text-sm font-medium text-foreground/90">
                Nombre
              </label>
              <Input
                id="pg-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                required
                className="h-14 bg-input border-border text-foreground placeholder:text-muted-foreground/60 rounded-[1rem] focus-visible:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="pg-contact" className="text-sm font-medium text-foreground/90">
                Email o WhatsApp
              </label>
              <Input
                id="pg-contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="tucorreo@email.com o +34 600 000 000"
                required
                className="h-14 bg-input border-border text-foreground placeholder:text-muted-foreground/60 rounded-[1rem] focus-visible:ring-ring"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="pill-shine halo-pulse w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-sm tracking-wide font-semibold transition-all hover:scale-[1.02]"
            >
              Reservar mi oferta de 20€
            </Button>
            <p className="text-xs text-muted-foreground/80 text-center leading-relaxed">
              Al enviar aceptas que Palmira Garde te contacte sobre tu código. Sin
              spam. Consulta la{" "}
              <a href="/privacidad" className="underline hover:text-primary">
                política de privacidad
              </a>
              .
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
