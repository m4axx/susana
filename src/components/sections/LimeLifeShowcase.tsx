"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink } from "lucide-react";

const CATEGORIES = [
  { id: "ll-sales", title: "Birthday Sales", url: "https://www.limelife.com/PALMIRAGARDE/products/birthday-sales", hint: "luxury perfume" },
  { id: "ll-novedades", title: "Novedades", url: "https://www.limelife.com/PALMIRAGARDE/products/novedades", hint: "makeup palette" },
  { id: "ll-maquillaje", title: "Maquillaje", url: "https://www.limelife.com/PALMIRAGARDE/products/maquillaje", hint: "lipstick detail" },
  { id: "ll-piel", title: "Cuidado de la Piel", url: "https://www.limelife.com/PALMIRAGARDE/products/cuidado-de-la-piel", hint: "skin texture" },
  { id: "ll-cabello", title: "Cabello", url: "https://www.limelife.com/corporphan/cms/c/1538", hint: "shiny hair" },
  { id: "ll-colecciones", title: "Colecciones", url: "https://www.limelife.com/PALMIRAGARDE/products?categoryId=1615", hint: "beauty collection" },
];

export function LimeLifeShowcase() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A]" id="limelife-detalles">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-8">
          <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold">The Boutique</span>
          
          {/* Logo Placeholder - Asumiendo logo-limelife.png en public */}
          <div className="flex justify-center">
            <h2 className="text-5xl md:text-7xl font-headline text-white italic">LimeLife</h2>
          </div>
          
          <p className="text-white/40 max-w-xl mx-auto font-light leading-relaxed">
            Excelencia profesional para tu ritual diario. Fórmulas botánicas de alta pigmentación y resultados impecables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {CATEGORIES.map((cat) => {
            const img = PlaceHolderImages.find((i) => i.id === cat.id);
            return (
              <a 
                key={cat.id} 
                href={cat.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-black flex flex-col justify-end p-10 border border-white/5"
              >
                <Image
                  src={img?.imageUrl || ""}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-60 group-hover:opacity-40"
                  data-ai-hint={cat.hint}
                />
                <div className="relative z-10 space-y-4">
                  <h3 className="text-white font-headline text-3xl md:text-4xl italic">
                    {cat.title}
                  </h3>
                  <div className="h-px w-12 bg-accent group-hover:w-24 transition-all duration-500" />
                  <span className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold block pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Descubrir <ExternalLink className="inline h-3 w-3 ml-2" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="pt-20 text-center border-t border-white/10">
          <a 
            href="https://www.limelife.com/PALMIRAGARDE" 
            target="_blank"
            className="inline-block text-white text-sm tracking-[0.4em] uppercase font-bold border-b-2 border-accent pb-4 hover:tracking-[0.5em] transition-all"
          >
            Explorar catálogo completo LimeLife
          </a>
        </div>
      </div>
    </section>
  );
}
