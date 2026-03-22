
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative h-svh w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {heroImg?.imageUrl && (
          <Image
            src={heroImg.imageUrl}
            alt="Palmira Garde Luxury Beauty"
            fill
            className="object-cover opacity-70 scale-110"
            priority
            data-ai-hint="luxury makeup detail"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6 animate-fade-up">
        <span className="text-accent uppercase tracking-[0.5em] text-[10px] md:text-xs mb-6 block font-bold">The Art of Pure Beauty</span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline mb-8 text-white leading-[0.9] tracking-tighter">
          Palmira <br />
          <span className="italic text-accent font-normal">Garde</span>
        </h1>
        <p className="text-sm md:text-lg font-body text-white/60 mb-12 max-w-xl mx-auto leading-relaxed tracking-wide">
          Descubre el lujo consciente. Una selección de alta gama para quienes buscan resultados profesionales y frescura absoluta.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-accent hover:text-white px-12 h-14 text-[10px] tracking-[0.3em] uppercase font-bold rounded-none w-full sm:w-auto"
            asChild
          >
            <a href="#productos">Explorar Catálogo</a>
          </Button>
          <a 
            href="#limelife-detalles" 
            className="text-white text-[10px] tracking-[0.3em] uppercase font-bold border-b border-white/30 pb-2 hover:border-accent transition-all"
          >
            Tienda Oficial
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
