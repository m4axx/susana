
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const TIPS = [
  {
    id: 1,
    title: "El Doble Limpiado: El Secreto Profesional",
    excerpt: "Por qué la limpieza en dos pasos es innegociable para mantener una piel luminosa y libre de impurezas.",
    daysAgo: 0
  },
  {
    id: 2,
    title: "Vitamina C y Protección Solar",
    excerpt: "La sinergia perfecta para combatir el estrés oxidativo y prevenir el envejecimiento prematuro durante el día.",
    daysAgo: 1
  },
  {
    id: 3,
    title: "Hidratación vs Nutrición",
    excerpt: "Aprende a identificar qué necesita realmente tu barrera cutánea según la estación del año.",
    daysAgo: 2
  }
];

export function Publications() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-32 px-6 bg-background" id="blog">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-6">
          <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold block">Editorial</span>
          <h2 className="text-5xl md:text-7xl font-headline italic">Notas de Belleza</h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-light text-lg">
            Consejos expertos y rituales diarios para elevar tu cuidado personal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {TIPS.map((post) => {
            const date = new Date();
            date.setDate(date.getDate() - post.daysAgo);
            
            return (
              <Card key={post.id} className="border-none rounded-none shadow-none bg-transparent group overflow-hidden">
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-accent" />
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                      {format(date, "d 'de' MMMM, yyyy", { locale: es })}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-headline leading-snug group-hover:text-accent transition-colors duration-500">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed text-base">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-muted opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-primary">Próximamente...</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
