import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, ShieldCheck, Zap } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const RINGANA_FEATURES = [
  {
    icon: <Leaf className="h-6 w-6 text-accent" />,
    title: "100% Frescura",
    description: "Sin conservantes artificiales ni aditivos químicos. Solo la fuerza pura de la naturaleza entregada directamente."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-accent" />,
    title: "Sostenibilidad Real",
    description: "Envases ecológicos y procesos de producción con huella de carbono neutra y ética innegociable."
  },
  {
    icon: <Zap className="h-6 w-6 text-accent" />,
    title: "Eficacia Activa",
    description: "Sustancias vegetales altamente concentradas que actúan de inmediato, elevando tu ritual diario."
  }
];

export function ProductGateway() {
  const ringanaLogo = PlaceHolderImages.find(img => img.id === "ringana-logo");

  return (
    <section className="py-32 px-6 bg-white" id="productos">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-8">
            <div className="relative w-48 h-12">
              {ringanaLogo && (
                <Image 
                  src={ringanaLogo.imageUrl}
                  alt="Ringana Official Partner"
                  fill
                  className="object-contain opacity-100"
                  data-ai-hint="ringana logo brand"
                  unoptimized
                />
              )}
            </div>
            <div className="space-y-4">
              <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold block">Elite Partnership</span>
              <h2 className="text-5xl md:text-7xl font-headline italic leading-none">Ringana <br/>Freshness</h2>
            </div>
          </div>
          <p className="text-muted-foreground max-w-md font-light leading-relaxed text-lg">
            He seleccionado Ringana por ser la única marca que garantiza una frescura total, entregando nutrientes vivos directamente desde su laboratorio austríaco a tu hogar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-[#FAF9F6] border border-muted shadow-2xl group">
             <Image 
                src="https://picsum.photos/seed/ringana-fresh/1000/1250" 
                alt="Ringana Freshness Experience" 
                fill 
                className="object-cover transition-transform duration-[3s] group-hover:scale-105"
                data-ai-hint="luxury skincare"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
             <div className="absolute bottom-0 left-0 bg-white p-10 md:p-16 max-w-xs md:max-w-sm">
                <div className="space-y-6">
                   <h3 className="text-3xl font-headline italic">Filosofía Fresca</h3>
                   <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      Descubre cómo la cosmética fresca transforma tu piel mediante ingredientes vegetales puros y una ética innegociable.
                   </p>
                   <Button 
                    variant="outline" 
                    className="rounded-none px-0 h-auto text-[10px] tracking-[0.3em] uppercase font-bold border-none hover:bg-transparent hover:text-accent group/btn" 
                    asChild
                  >
                    <a href="https://palmiragarde.ringana.com/" target="_blank" className="flex items-center gap-4">
                      Explorar Catálogo <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                    </a>
                  </Button>
                </div>
             </div>
          </div>

          <div className="space-y-16">
            {RINGANA_FEATURES.map((feature, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="shrink-0 p-4 bg-accent/5 rounded-full h-fit group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-headline italic">{feature.title}</h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="pt-8 border-t border-muted">
               <div className="bg-primary text-primary-foreground p-10 space-y-6 shadow-2xl">
                  <h4 className="text-accent text-[10px] font-bold uppercase tracking-[0.4em]">Promoción Ringana</h4>
                  <p className="font-headline text-3xl italic">20€ de regalo en tu primer pedido de frescura.</p>
                  <Button 
                    className="bg-accent text-black hover:bg-white rounded-none h-14 px-10 text-[10px] tracking-[0.3em] uppercase font-bold transition-all w-full"
                    asChild
                  >
                    <a href="https://wa.me/qr/4JSUW45MSRMZM1" target="_blank">Reclamar mi Cheque</a>
                  </Button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}