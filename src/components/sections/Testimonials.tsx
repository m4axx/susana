"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

// Prueba social. Fotos reales de clientas las aporta Palmira; los textos quedan listos.
const TESTIMONIALS = [
  {
    name: "María L.",
    location: "Madrid",
    text:
      "Llevaba años probando cremas y ninguna me convencía. Con la cosmética fresca de Ringana noté mi piel diferente en dos semanas. Palmira me asesoró en todo.",
    photo: "https://i.pravatar.cc/200?img=47",
  },
  {
    name: "Carmen R.",
    location: "Barcelona",
    text:
      "Lo que más valoro es que no lleva conservantes. Se nota que es producto fresco y la atención de Palmira es cercana y honesta, sin venderte humo.",
    photo: "https://i.pravatar.cc/200?img=32",
  },
  {
    name: "Lucía F.",
    location: "Valencia",
    text:
      "Pedí mi código de bienvenida y me resolvieron todas las dudas por WhatsApp al momento. Repetiré seguro. Una experiencia premium de principio a fin.",
    photo: "https://i.pravatar.cc/200?img=45",
  },
  {
    name: "Ana M.",
    location: "Sevilla",
    text:
      "Mi piel sensible por fin tolera una rutina completa. Ligera, fresca y sin reacciones. Ojalá la hubiera conocido antes.",
    photo: "https://i.pravatar.cc/200?img=20",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-muted overflow-clip" id="testimonios">
      <div className="px-6">
        <Reveal className="max-w-7xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <span className="font-accent italic text-accent-foreground/80 text-base block">
            de mujer a mujer
          </span>
          <h2 className="font-headline font-light text-4xl md:text-6xl leading-tight tracking-tight">
            Lo que cuentan ellas
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1 text-primary">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} className="h-4 w-4 fill-primary" />
            ))}
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold ml-2">
              5/5 de media
            </span>
          </div>
        </Reveal>
      </div>

      {/* Carrusel interno con scroll-snap (no rompe el viewport) */}
      <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-6 px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2))] pb-2">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="glass rounded-[1.75rem] p-7 md:p-8 snap-center shrink-0 w-[82vw] sm:w-[60vw] md:w-[24rem] flex flex-col gap-5"
            >
              <span className="font-headline italic text-5xl text-accent leading-none -mb-2" aria-hidden>
                “
              </span>
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-primary" />
                ))}
              </div>
              <blockquote className="text-foreground/80 font-light leading-relaxed text-[15px] flex-1">
                {t.text}
              </blockquote>
              <figcaption className="flex items-center gap-3.5 pt-4 border-t border-border">
                <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/30">
                  <Image src={t.photo} alt={t.name} fill className="object-cover" unoptimized />
                </div>
                <div>
                  <p className="font-headline text-lg leading-none">{t.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mt-1">
                    {t.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
