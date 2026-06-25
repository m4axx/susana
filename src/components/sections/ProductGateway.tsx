"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, Snowflake, Heart, MapPin, ArrowRight } from "lucide-react";
import { track } from "@/lib/pixel";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Aurora, Tallo } from "@/components/ui/decor";

const FEATURES = [
  { icon: Leaf, title: "100% Vegana", desc: "Solo activos vegetales puros. Nada de origen animal." },
  { icon: Snowflake, title: "Fresca de verdad", desc: "Sin conservantes ni aditivos. Nutrientes vivos." },
  { icon: Heart, title: "Cruelty-free", desc: "Nunca testada en animales. Ética innegociable." },
  { icon: MapPin, title: "Hecha en Austria", desc: "Producción directa, recién hecha, sin almacén." },
];

export function ProductGateway() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-background overflow-clip" id="productos">
      <Aurora />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mb-14 md:mb-20">
          <span className="font-accent italic text-accent-foreground/80 text-base block mb-3">
            por qué Ringana
          </span>
          <h2 className="font-headline font-light text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Frescura que se nota en la piel
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Foto producto flotando con halo lavanda */}
          <Reveal dir="left" className="relative">
            <div className="absolute inset-0 -m-6 rounded-full bg-accent/15 blur-3xl" aria-hidden />
            <div className="relative float-soft petal overflow-hidden aspect-[4/5] max-w-md mx-auto shadow-2xl shadow-primary/15">
              <Image
                src="https://picsum.photos/seed/ringana-fresh/1000/1250"
                alt="Cosmética fresca Ringana"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Tarjetas glass */}
          <div className="space-y-8">
            <RevealGroup className="grid sm:grid-cols-2 gap-5">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <RevealItem key={title}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="glass rounded-[1.75rem] p-6 h-full hover:shadow-xl hover:shadow-primary/10 transition-shadow"
                  >
                    <div className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-headline text-xl mb-1.5">{title}</h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{desc}</p>
                  </motion.div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.1}>
              <Button
                className="pill-shine bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 px-8 text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] group"
                asChild
              >
                <a href="#oferta" onClick={() => track("Lead", { content_name: "Diferencial CTA 20 euros" })} className="inline-flex items-center gap-2">
                  Quiero probarlo con 20€
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </Reveal>
          </div>
        </div>

        <Tallo className="max-w-[140px] mx-auto mt-16 md:mt-24" />
      </div>
    </section>
  );
}
