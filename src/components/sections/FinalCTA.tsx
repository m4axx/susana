
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-headline leading-tight">¿Quieres tu código de descuento?</h2>
          <p className="text-xl text-muted-foreground font-body">
            Escríbeme y te ayudo personalmente a encontrar el ritual perfecto para ti.
          </p>
        </div>
        
        <Button 
          size="lg" 
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-none h-16 px-12 text-lg uppercase tracking-widest font-bold shadow-lg flex items-center gap-3 mx-auto"
          asChild
        >
          <a href="https://wa.me/your-whatsapp-number" target="_blank">
            <MessageCircle className="h-6 w-6 fill-white" /> Contactar por WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
