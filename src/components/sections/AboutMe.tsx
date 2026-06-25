"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Reveal } from "@/components/ui/reveal";
import { Aurora, SapWord, Tallo } from "@/components/ui/decor";

export function AboutMe() {
  const profileImg = PlaceHolderImages.find((img) => img.id === "about-me");

  return (
    <section className="relative py-20 md:py-32 px-6 bg-background overflow-clip" id="sobre-mi">
      <Aurora soft />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Tallo className="max-w-[140px] mx-auto mb-16 md:mb-24" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Retrato en cápsula pétalo */}
          <Reveal dir="left" className="order-1">
            <div className="petal-alt overflow-hidden aspect-[3/4] sm:aspect-[4/5] w-full max-w-md mx-auto bg-white p-1 shadow-2xl shadow-primary/15 ring-1 ring-border">
              <div className="petal-alt overflow-hidden w-full h-full relative">
                {profileImg?.imageUrl ? (
                  <Image
                    src={profileImg.imageUrl}
                    alt="Palmira Garde"
                    fill
                    className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-muted animate-pulse" />
                )}
              </div>
            </div>
          </Reveal>

          {/* Texto sobre marfil sólido */}
          <div className="order-2 space-y-7">
            <Reveal className="space-y-3">
              <span className="font-accent italic text-accent-foreground/80 text-base block">
                Hola, soy Palmira
              </span>
              <h2 className="font-headline font-light text-4xl md:text-6xl leading-[1.05] tracking-tight">
                Cosmética honesta, <br />
                <SapWord className="text-primary">de mujer a mujer</SapWord>
              </h2>
            </Reveal>

            <div className="space-y-6 text-muted-foreground font-light text-base md:text-[17px] leading-relaxed">
              <Reveal delay={0.05}>
                <p>
                  Durante años probé cremas que prometían milagros y solo dejaban
                  la cartera vacía. Hasta que descubrí la cosmética fresca de
                  Ringana y entendí que la piel no necesita más química: necesita
                  ingredientes <span className="text-foreground font-normal">vivos</span>.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Hoy soy asesora Ringana porque creo en lo que uso cada mañana.
                  Sin conservantes, sin humo, sin promesas vacías. Solo frescura
                  real que se nota.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Te acompaño paso a paso para encontrar tu ritual y estrenarlo
                  con tu código de bienvenida de 20€.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="pt-2">
              <p className="font-headline italic text-3xl md:text-4xl text-foreground">Palmira</p>
            </Reveal>
          </div>
        </div>

        <Tallo className="max-w-[140px] mx-auto mt-16 md:mt-24" />
      </div>
    </section>
  );
}
