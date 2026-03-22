
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Tag, Sparkles } from "lucide-react";

export function Promotions() {
  const promoImg = PlaceHolderImages.find((img) => img.id === "promo-1");

  return (
    <section className="py-24 px-6 bg-white" id="promociones">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="relative overflow-hidden bg-primary text-primary-foreground min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            {promoImg?.imageUrl && (
              <Image
                src={promoImg.imageUrl}
                alt="Special Promotion"
                fill
                className="object-cover opacity-20 grayscale"
                data-ai-hint="beauty spa"
              />
            )}
          </div>
          <div className="relative z-10 p-12 md:p-20 space-y-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-[0.3em]">
              <Tag className="h-3 w-3" /> Beneficios Exclusivos
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-accent text-[10px] font-bold uppercase tracking-[0.4em]">Ringana Freshness</h3>
                <h2 className="text-4xl md:text-6xl font-headline leading-tight">20€ de Regalo <br/><span className="italic font-normal">en tu pedido</span></h2>
              </div>

              <div className="h-px w-24 bg-white/20" />

              <div className="space-y-4">
                <h3 className="text-accent text-[10px] font-bold uppercase tracking-[0.4em]">LimeLife Professional</h3>
                <h2 className="text-3xl md:text-5xl font-headline leading-tight italic font-normal text-white/90">-10% de Bienvenida</h2>
                <p className="text-white/60 font-light tracking-wide">Válido para tu primera compra en toda la colección de maquillaje y skincare.</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-accent text-black hover:bg-white rounded-none h-16 px-12 uppercase tracking-[0.3em] text-[10px] font-bold transition-all group" 
              asChild
            >
              <a href="https://wa.me/qr/4JSUW45MSRMZM1" target="_blank">
                <Sparkles className="h-4 w-4 mr-2 group-hover:animate-pulse" /> Reclamar Mis Códigos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
