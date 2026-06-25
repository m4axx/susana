"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { track } from "@/lib/pixel";
import { whatsappUrl } from "@/lib/contact";
import { Reveal } from "@/components/ui/reveal";
import { Aurora, SapWord } from "@/components/ui/decor";

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-32 px-6 bg-background overflow-clip">
      <Aurora soft />

      <Reveal className="relative z-10 max-w-2xl mx-auto">
        <div className="glass rounded-[1.75rem] px-8 py-12 md:px-12 md:py-16 text-center space-y-7 shadow-xl shadow-primary/10">
          <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mx-auto">
            <MessageCircle className="h-7 w-7 text-primary" />
          </div>
          <h2 className="font-headline font-light text-3xl md:text-5xl leading-tight tracking-tight">
            Escríbeme, <br className="sm:hidden" />
            <SapWord className="text-primary">te respondo yo</SapWord>
          </h2>
          <p className="text-muted-foreground font-light text-base md:text-lg max-w-md mx-auto leading-relaxed">
            ¿Dudas sobre qué producto te conviene o cómo usar tu código de 20€?
            Estás a un mensaje de tu mejor piel.
          </p>
          <Button
            size="lg"
            className="pill-shine bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 px-10 text-sm tracking-wide font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
            asChild
          >
            <a
              href={whatsappUrl("Hola Palmira, quiero hablar sobre mi ritual Ringana.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("Contact")}
              className="inline-flex items-center gap-2.5"
            >
              <MessageCircle className="h-5 w-5" /> Hablar por WhatsApp
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
