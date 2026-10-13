"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

// Las dos marcas al mismo nivel: misma tarjeta, mismo tamaño, mismo peso visual.
const BRANDS = [
  {
    n: "01",
    name: "Ringana",
    logo: "/ringana-logo.svg",
    invert: false,
    kicker: "cuidado de la piel",
    claim: "Cosmética fresca, vegana y sin conservantes. Tu piel, nutrida con ingredientes vivos.",
    points: ["100% vegana y cruelty-free", "Recién hecha, sin conservantes", "20€ de regalo en tu primer pedido"],
    href: "#productos",
    cta: "Descubrir Ringana",
  },
  {
    n: "02",
    name: "LimeLife",
    logo: "/Newlogo.svg",
    invert: true,
    kicker: "maquillaje profesional",
    claim: "Maquillaje de alta pigmentación con ingredientes limpios. Acabado impecable bajo cualquier luz.",
    points: ["Fórmulas limpias y botánicas", "Pigmentación de nivel profesional", "Asesoramiento de color personal"],
    href: "#limelife",
    cta: "Descubrir LimeLife",
  },
];

export function BrandDuo() {
  return (
    <section className="relative py-20 md:py-28 px-6 bg-background" id="marcas">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="font-accent italic text-accent-foreground/80 text-base block mb-3">mis dos marcas</span>
          <h2 className="font-headline font-light text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Piel sana y maquillaje <span className="italic text-primary">impecable</span>
          </h2>
        </Reveal>

        <RevealGroup className="grid md:grid-cols-2 gap-5 md:gap-6">
          {BRANDS.map((b) => (
            <RevealItem key={b.name} className="h-full">
              <motion.a
                href={b.href}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="section-dark group relative flex flex-col h-full rounded-[2rem] bg-background text-foreground p-7 md:p-10 overflow-hidden shadow-xl shadow-black/10"
              >
                <span className="absolute -top-4 right-4 font-headline italic text-[7rem] md:text-[9rem] leading-none text-primary/10 select-none pointer-events-none">
                  {b.n}
                </span>
                <span className="font-accent italic text-accent text-sm">{b.kicker}</span>
                <div className="relative h-12 w-40 md:h-14 md:w-48 my-6">
                  <Image
                    src={b.logo}
                    alt={b.name}
                    fill
                    className={b.invert ? "object-contain object-left brightness-0 invert" : "object-contain object-left invert"}
                  />
                </div>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">{b.claim}</p>
                <ul className="space-y-2.5 mb-8">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <span className="h-6 w-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 text-primary text-sm font-semibold">
                  {b.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
