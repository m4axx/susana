
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find((img) => img.id === "hero-bg");

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Palmira Garden Wellness"
          fill
          className="object-cover opacity-60 scale-105"
          priority
          data-ai-hint="nature wellness background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Bienvenida a <br />
          <span className="text-primary italic">Palmira Garden</span>
        </h1>
        <p className="text-lg md:text-xl font-body text-muted-foreground mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Tu espacio de belleza, salud y bienestar consciente. <br className="hidden md:block" />
          Acompañándote en el camino hacia tu mejor versión natural.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button 
            size="lg" 
            className="rounded-none px-10 h-14 text-base tracking-widest uppercase font-semibold"
            asChild
          >
            <a href="#productos">Descubrir productos</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-none px-10 h-14 text-base tracking-widest uppercase border-primary text-primary hover:bg-primary/5"
            asChild
          >
            <a href="https://wa.me/your-whatsapp-number" target="_blank">Contactar conmigo</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
