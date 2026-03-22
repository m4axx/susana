
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-black text-white overflow-hidden relative">
      {/* Decorative Text */}
      <div className="absolute -top-10 -right-20 text-[20rem] font-headline italic opacity-5 pointer-events-none select-none">
        Garde
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <span className="text-accent uppercase tracking-[0.6em] text-[10px] font-bold block">Personal Concierge</span>
          <h2 className="text-5xl md:text-8xl font-headline leading-[1.1]">Tu Ritual, <br/>Asesorado.</h2>
          <p className="text-white/40 text-xl font-light max-w-2xl mx-auto">
            ¿Buscas un tratamiento específico o tu código exclusivo de bienvenida? Estás a un mensaje de tu mejor piel.
          </p>
        </div>
        
        <div className="pt-8">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-white text-black rounded-none h-20 px-16 text-[10px] tracking-[0.4em] uppercase font-bold shadow-2xl transition-all w-full sm:w-auto flex items-center gap-4 mx-auto group"
            asChild
          >
            <a href="https://wa.me/qr/4JSUW45MSRMZM1" target="_blank">
              <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform" /> WhatsApp Concierge
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
