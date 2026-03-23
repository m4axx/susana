
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const TIPS = [
  {
    id: 1,
    title: "El Doble Limpiado: El Secreto Profesional",
    excerpt: "Por qué la limpieza en dos pasos es innegociable para mantener una piel luminosa y libre de impurezas.",
    imageId: "post-1",
    daysAgo: 0
  },
  {
    id: 2,
    title: "Vitamina C y Protección Solar",
    excerpt: "La sinergia perfecta para combatir el estrés oxidativo y prevenir el envejecimiento prematuro durante el día.",
    imageId: "post-2",
    daysAgo: 1
  },
  {
    id: 3,
    title: "Hidratación vs Nutrición",
    excerpt: "Aprende a identificar qué necesita realmente tu barrera cutánea según la estación del año.",
    imageId: "ll-piel",
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

        <div className="grid md:grid-cols-3 gap-12">
          {TIPS.map((post) => {
            const img = PlaceHolderImages.find((i) => i.id === post.imageId);
            const date = new Date();
            date.setDate(date.getDate() - post.daysAgo);
            
            return (
              <Card key={post.id} className="border-none rounded-none shadow-none bg-transparent group overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-sm">
                  {img?.imageUrl && (
                    <Image
                      src={img.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                      data-ai-hint={img.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <CardContent className="p-0 space-y-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                    {format(date, "d 'de' MMMM, yyyy", { locale: es })}
                  </div>
                  <h3 className="text-2xl font-headline leading-snug group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
