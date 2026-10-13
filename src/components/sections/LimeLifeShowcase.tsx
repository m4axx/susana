"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { track } from "@/lib/pixel";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const LIMELIFE_URL = "https://www.limelife.com/PALMIRAGARDE";

// 2 arriba (3 cols) + 3 abajo (2 cols) en desktop; 2 columnas en móvil
const CATEGORIES = [
  { title: "Novedades", img: "/Novedades.jpg", url: `${LIMELIFE_URL}/products/novedades`, span: "col-span-2 md:col-span-3", aspect: "aspect-[16/10] md:aspect-[4/3]" },
  { title: "Maquillaje", img: "/Maquillaje.jpg", url: `${LIMELIFE_URL}/products/maquillaje`, span: "col-span-1 md:col-span-3", aspect: "aspect-[4/5] md:aspect-[4/3]" },
  { title: "Cuidado de la piel", img: "/Cuidado.jpg", url: `${LIMELIFE_URL}/products/cuidado-de-la-piel`, span: "col-span-1 md:col-span-2", aspect: "aspect-[4/5]" },
  { title: "Cabello", img: "/Cabello.jpg", url: "https://www.limelife.com/corporphan/cms/c/1538", span: "col-span-1 md:col-span-2", aspect: "aspect-[4/5]" },
  { title: "Colecciones", img: "/Colecciones.jpg", url: `${LIMELIFE_URL}/products?categoryId=1615`, span: "col-span-1 md:col-span-2", aspect: "aspect-[4/5]" },
];

export function LimeLifeShowcase() {
  return (
    <section className="section-dark relative py-20 md:py-32 px-6 bg-background text-foreground overflow-clip" id="limelife">
      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal className="text-center mb-12 md:mb-16 space-y-6">
          <span className="font-accent italic text-accent text-base block">marca 02 · maquillaje profesional</span>
          <div className="relative h-14 w-48 md:h-20 md:w-72 mx-auto">
            <Image src="/Newlogo.svg" alt="LimeLife" fill className="object-contain brightness-0 invert" />
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            Maquillaje profesional de alta pigmentación con ingredientes limpios.
            Color que dura, piel que respira y un acabado impecable bajo cualquier luz.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
          {CATEGORIES.map((cat) => (
            <RevealItem key={cat.title} className={cat.span}>
              <motion.a
                href={cat.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("ViewContent", { content_name: `LimeLife ${cat.title}` })}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={cn(
                  "group relative block overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-card",
                  cat.aspect
                )}
              >
                <Image
                  src={cat.img}
                  alt={`LimeLife ${cat.title}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-headline text-xl md:text-4xl font-light leading-tight text-white">{cat.title}</h3>
                    <div className="h-px w-8 bg-primary mt-3 transition-all duration-500 group-hover:w-16" />
                  </div>
                  <span className="shrink-0 h-9 w-9 md:h-11 md:w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.a>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="text-center mt-12 md:mt-16">
          <a
            href={LIMELIFE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("ViewContent", { content_name: "LimeLife catalogo completo" })}
            className="pill-shine inline-flex items-center gap-2 border border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground rounded-full h-14 px-8 text-sm font-semibold transition-all"
          >
            Ver catálogo completo LimeLife
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
