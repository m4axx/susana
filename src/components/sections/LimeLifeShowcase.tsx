
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "ll-novedades", title: "Novedades", url: "https://www.limelife.com/PALMIRAGARDE/products/novedades", hint: "makeup palette", span: "md:col-span-3" },
  { id: "ll-maquillaje", title: "Maquillaje", url: "https://www.limelife.com/PALMIRAGARDE/products/maquillaje", hint: "lipstick brush", span: "md:col-span-3" },
  { id: "ll-piel", title: "Cuidado de la Piel", url: "https://www.limelife.com/PALMIRAGARDE/products/cuidado-de-la-piel", hint: "skincare face", span: "md:col-span-2" },
  { id: "ll-cabello", title: "Cabello", url: "https://www.limelife.com/corporphan/cms/c/1538", hint: "beauty hair", span: "md:col-span-2" },
  { id: "ll-colecciones", title: "Colecciones", url: "https://www.limelife.com/PALMIRAGARDE/products?categoryId=1615", hint: "makeup kit", span: "md:col-span-2" },
];

export function LimeLifeShowcase() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A]" id="limelife-detalles">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-12">
          <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold">The Boutique</span>
          
          <div className="flex justify-center">
            <div className="relative h-20 w-64 md:h-32 md:w-96">
              <Image 
                src="/Newlogo.svg" 
                alt="LimeLife Logo" 
                fill 
                className="object-contain brightness-0 invert" 
                priority
              />
            </div>
          </div>
          
          <p className="text-white/40 max-w-xl mx-auto font-light leading-relaxed text-sm md:text-base">
            Excelencia profesional para tu ritual diario. Fórmulas botánicas de alta pigmentación y resultados impecables.
          </p>
        </div>

        {/* 5-Item Grid: 2 on top (3 cols each), 3 on bottom (2 cols each) */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2 bg-white/5 p-2 border border-white/10">
          {CATEGORIES.map((cat) => {
            const img = PlaceHolderImages.find((i) => i.id === cat.id);
            return (
              <a 
                key={cat.id} 
                href={cat.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  "group relative aspect-square md:aspect-[4/5] overflow-hidden bg-black flex flex-col justify-end p-8 md:p-12 transition-all active:scale-[0.98] border border-white/5",
                  cat.span
                )}
              >
                <Image
                  src={img?.imageUrl || "https://picsum.photos/seed/fallback/800/1000"}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-70 group-hover:opacity-50"
                  data-ai-hint={cat.hint}
                  unoptimized // Recomendado si las imágenes locales no se cargan bien en dev
                />
                <div className="relative z-10 space-y-4">
                  <h3 className="text-white font-headline text-3xl md:text-5xl italic leading-none">
                    {cat.title}
                  </h3>
                  <div className="h-px w-12 bg-accent group-hover:w-24 transition-all duration-500" />
                  <span className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold block pt-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
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
            className="inline-block text-white text-[10px] tracking-[0.4em] uppercase font-bold border-b-2 border-accent pb-4 hover:tracking-[0.5em] transition-all"
          >
            Explorar catálogo completo LimeLife
          </a>
        </div>
      </div>
    </section>
  );
}
