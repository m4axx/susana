"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ChevronDown, MessageCircle, Leaf, Snowflake, Heart } from "lucide-react";
import { track } from "@/lib/pixel";
import { whatsappUrl } from "@/lib/contact";

const EASE = [0.22, 1, 0.36, 1] as const;

const CLAIMS = [
  { icon: Leaf, label: "Vegana" },
  { icon: Snowflake, label: "Sin conservantes" },
  { icon: Heart, label: "Cruelty-free" },
];

export function Hero() {
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-bg");

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section className="relative h-svh min-h-[600px] w-full overflow-hidden bg-foreground">
      {/* Foto a pantalla completa */}
      <div className="absolute inset-0 z-0">
        {heroImg?.imageUrl && (
          <Image
            src={heroImg.imageUrl}
            alt="Cosmética fresca Ringana — Palmira Garde"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        )}
        {/* Overlay negro para legibilidad + impacto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Contenido — anclado abajo, CTA inmediato en móvil */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-end md:justify-center pb-28 md:pb-0 pt-24"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 self-start bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5"
        >
          <Leaf className="h-3.5 w-3.5" /> Cosmética fresca Ringana
        </motion.span>

        <motion.h1
          variants={item}
          className="font-headline font-medium text-white leading-[0.98] tracking-[-0.02em] mb-5 max-w-3xl text-balance"
          style={{ fontSize: "clamp(2.6rem, 11vw, 5.5rem)" }}
        >
          Tu piel merece <br className="hidden sm:block" />
          cosmética <span className="italic font-normal text-primary">viva</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-white/85 text-base md:text-xl font-light leading-relaxed max-w-xl mb-8"
        >
          Natural, fresca y sin conservantes. Reclama tus{" "}
          <strong className="font-semibold text-white">20€ de regalo</strong> y
          nótalo en tu piel en pocas semanas.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 sm:items-center">
          <Button
            size="lg"
            className="pill-shine bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-16 px-9 text-base font-bold w-full sm:w-auto shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02]"
            asChild
          >
            <a href="#oferta" onClick={() => track("Lead", { content_name: "Hero CTA 20 euros" })}>
              Quiero mis 20€ de regalo
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-16 px-8 text-base font-bold w-full sm:w-auto border-2 border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-foreground transition-all"
            asChild
          >
            <a
              href={whatsappUrl("Hola Palmira, quiero información sobre Ringana.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("Contact")}
              className="inline-flex items-center gap-2.5"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </Button>
        </motion.div>

        {/* Claims */}
        <motion.div variants={item} className="flex flex-wrap gap-2.5 mt-7">
          {CLAIMS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white rounded-full px-3 py-1.5 text-xs font-semibold border border-white/15"
            >
              <Icon className="h-3.5 w-3.5 text-primary" /> {label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 z-10">
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </div>
    </section>
  );
}
