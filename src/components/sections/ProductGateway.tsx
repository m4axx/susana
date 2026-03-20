
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink } from "lucide-react";

export function ProductGateway() {
  const limeImg = PlaceHolderImages.find((img) => img.id === "limelife-card");
  const ringImg = PlaceHolderImages.find((img) => img.id === "ringana-card");

  return (
    <section className="py-24 px-6 bg-background" id="productos">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline">Selección Premium</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Descubre nuestras dos líneas exclusivas diseñadas para potenciar tu belleza de forma natural y efectiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LimeLife Card */}
          <div className="group space-y-6 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={limeImg?.imageUrl || ""}
                alt="LimeLife Products"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="skincare makeup"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-headline">LimeLife by Alcone</h3>
              <p className="text-muted-foreground leading-relaxed">
                Skincare profesional y maquillaje de alta gama utilizado por los mejores artistas del mundo, ahora a tu alcance con ingredientes limpios.
              </p>
              <Button className="w-full rounded-none h-12 text-sm uppercase tracking-widest" asChild>
                <a 
                  href="https://www.limelife.com/PALMIRAGARDE/login?ReturnUrl=/PALMIRAGARDE/overview" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Ver productos <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Ringana Card */}
          <div className="group space-y-6 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={ringImg?.imageUrl || ""}
                alt="Ringana Products"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="natural cosmetics"
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-headline">Ringana</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Cosmética fresca y suplementos 100% naturales, veganos y producidos de forma ética. Frescura pura directamente a tu puerta.
              </p>
              <div className="bg-secondary/20 p-4 border-l-2 border-accent mb-4">
                <p className="text-sm font-medium text-secondary-foreground italic">
                  Solicita tu código de descuento personalizado contactando conmigo.
                </p>
              </div>
              <Button variant="outline" className="w-full rounded-none h-12 text-sm uppercase tracking-widest border-primary text-primary hover:bg-primary/5" asChild>
                <a 
                  href="https://www.ringana.com/?lang=es" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Explorar productos <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
