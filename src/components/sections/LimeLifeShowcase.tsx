
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CATEGORIES = [
  { id: "ll-sales", title: "Birthday Sales", url: "https://www.limelife.com/PALMIRAGARDE/products/birthday-sales" },
  { id: "ll-novedades", title: "Novedades", url: "https://www.limelife.com/PALMIRAGARDE/products/novedades" },
  { id: "ll-maquillaje", title: "Maquillaje", url: "https://www.limelife.com/PALMIRAGARDE/products/maquillaje" },
  { id: "ll-piel", title: "Cuidado de la Piel", url: "https://www.limelife.com/PALMIRAGARDE/products/cuidado-de-la-piel" },
  { id: "ll-cabello", title: "Cabello", url: "https://www.limelife.com/corporphan/cms/c/1538" },
  { id: "ll-colecciones", title: "Colecciones", url: "https://www.limelife.com/PALMIRAGARDE/products?categoryId=1615" },
];

export function LimeLifeShowcase() {
  return (
    <section className="py-24 px-6 bg-white" id="limelife-detalles">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold">Explora</span>
          <h2 className="text-4xl md:text-6xl font-headline">LimeLife by Alcone</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {CATEGORIES.map((cat) => {
            const img = PlaceHolderImages.find((i) => i.id === cat.id);
            return (
              <a 
                key={cat.id} 
                href={cat.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative aspect-[4/5] overflow-hidden bg-secondary/10"
              >
                <Image
                  src={img?.imageUrl || ""}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={img?.imageHint || "beauty"}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <h3 className="text-white font-headline text-xl md:text-3xl mb-3 drop-shadow-md">
                    {cat.title}
                  </h3>
                  <div className="h-px w-0 group-hover:w-16 bg-white transition-all duration-300 mb-4" />
                  <span className="text-white/0 group-hover:text-white/100 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500">
                    Ir a la tienda <ExternalLink className="inline h-3 w-3 ml-1" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="pt-12 text-center">
          <p className="text-muted-foreground font-body italic max-w-2xl mx-auto mb-10 text-lg">
            "Maquillaje profesional y cuidado de la piel natural, libre de químicos dañinos. La excelencia que tu piel merece."
          </p>
          <Button 
            variant="outline" 
            className="rounded-none px-12 h-16 border-primary text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-[0.2em] text-xs font-bold"
            asChild
          >
            <a href="https://www.limelife.com/PALMIRAGARDE" target="_blank">Tienda completa de LimeLife</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
