import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Star } from "lucide-react";

export function ProductGateway() {
  const limeImg = PlaceHolderImages.find((img) => img.id === "limelife-card");
  const ringImg = PlaceHolderImages.find((img) => img.id === "ringana-card");

  return (
    <section className="py-32 px-6 bg-white" id="productos">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">Curated Selection</span>
            <h2 className="text-5xl md:text-7xl font-headline italic leading-none">Las Marcas</h2>
          </div>
          <p className="text-muted-foreground max-w-md font-light leading-relaxed">
            He seleccionado personalmente estas firmas por su compromiso innegociable con la pureza, la innovación y el lujo responsable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          {/* LimeLife Card */}
          <div className="group space-y-10">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src={limeImg?.imageUrl || ""}
                alt="LimeLife Professional"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                data-ai-hint="makeup close up"
              />
              <div className="absolute top-8 right-8 flex gap-1">
                {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
            </div>
            <div className="space-y-6 px-4">
              <h3 className="text-4xl font-headline italic">LimeLife by Alcone</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                El estándar de oro del maquillaje profesional. Ingredientes limpios con un rendimiento impecable bajo cualquier luz.
              </p>
              <Button 
                variant="outline" 
                className="rounded-none px-0 h-auto text-[10px] tracking-[0.3em] uppercase font-bold border-none hover:bg-transparent hover:text-accent group/btn" 
                asChild
              >
                <a href="#limelife-detalles" className="flex items-center gap-4">
                  Explorar Colección <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Ringana Card */}
          <div className="group space-y-10 md:mt-32">
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src={ringImg?.imageUrl || ""}
                alt="Ringana Freshness"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                data-ai-hint="natural herbs skincare"
              />
               <div className="absolute bottom-0 left-0 bg-accent text-white px-8 py-3 text-[10px] tracking-[0.3em] font-bold uppercase">
                Frescura 100%
              </div>
            </div>
            <div className="space-y-6 px-4">
              <h3 className="text-4xl font-headline italic">Ringana</h3>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                Cosmética fresca y ética. Sin conservantes, sin rellenos. Solo la fuerza de la naturaleza entregada directamente en tu puerta.
              </p>
              <Button 
                variant="outline" 
                className="rounded-none px-0 h-auto text-[10px] tracking-[0.3em] uppercase font-bold border-none hover:bg-transparent hover:text-accent group/btn" 
                asChild
              >
                <a href="https://www.ringana.com/?lang=es" target="_blank" className="flex items-center gap-4">
                  Ir a Ringana <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}