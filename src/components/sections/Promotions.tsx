
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Tag } from "lucide-react";

export function Promotions() {
  const promoImg = PlaceHolderImages.find((img) => img.id === "promo-1");

  return (
    <section className="py-24 px-6 bg-white" id="promociones">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-primary text-primary-foreground min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={promoImg?.imageUrl || ""}
              alt="Special Promotion"
              fill
              className="object-cover opacity-30 grayscale"
              data-ai-hint="beauty spa"
            />
          </div>
          <div className="relative z-10 p-12 md:p-20 space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest">
              <Tag className="h-3 w-3" /> Oferta Especial
            </div>
            <h2 className="text-4xl md:text-6xl font-headline leading-tight">-20% en productos seleccionados</h2>
            <p className="text-lg opacity-90 font-body">
              Aprovecha nuestras promociones mensuales en cosmética natural y suplementación. Cuida tu piel y tu salud al mejor precio.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none h-14 px-10 uppercase tracking-widest font-bold" asChild>
              <a href="https://wa.me/your-whatsapp-number" target="_blank">Solicitar código</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
