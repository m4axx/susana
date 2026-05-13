
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "ringana-skincare", title: "Fresh Skincare", url: "https://palmiragarde.ringana.com/skincare", hint: "fresh face cream", span: "md:col-span-3" },
  { id: "ringana-supplements", title: "Supplements", url: "https://palmiragarde.ringana.com/supplements", hint: "natural pills", span: "md:col-span-3" },
  { id: "ringana-drinks", title: "Drinks", url: "https://palmiragarde.ringana.com/drinks", hint: "natural energy drink", span: "md:col-span-2" },
  { id: "ringana-haircare", title: "Haircare", url: "https://palmiragarde.ringana.com/haircare", hint: "natural shampoo", span: "md:col-span-2" },
  { id: "ringana-bodycare", title: "Bodycare", url: "https://palmiragarde.ringana.com/bodycare", hint: "body lotion", span: "md:col-span-2" },
];

export function LimeLifeShowcase() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A]" id="ringana-detalles">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-12">
          <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold">The Fresh Experience</span>
          
          <h2 className="text-4xl md:text-7xl font-headline italic text-white leading-none">Categorías Ringana</h2>
          
          <p className="text-white/40 max-w-xl mx-auto font-light leading-relaxed text-sm md:text-base">
            Nutrientes frescos y sustancias activas de alta tecnología. El máximo rendimiento para tu bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-2 bg-white/5 p-2 border border-white/10">
          {CATEGORIES.map((cat) => {
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
                  src={`https://picsum.photos/seed/${cat.id}/800/1000`}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-70 group-hover:opacity-50"
                  data-ai-hint={cat.hint}
                  unoptimized 
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
            href="https://palmiragarde.ringana.com/" 
            target="_blank"
            className="inline-block text-white text-[10px] tracking-[0.4em] uppercase font-bold border-b-2 border-accent pb-4 hover:tracking-[0.5em] transition-all"
          >
            Explorar catálogo completo Ringana
          </a>
        </div>
      </div>
    </section>
  );
}
