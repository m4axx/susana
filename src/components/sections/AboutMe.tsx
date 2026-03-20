import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function AboutMe() {
  const profileImg = PlaceHolderImages.find((img) => img.id === "about-me");

  return (
    <section className="py-32 px-6 bg-[#FAF9F6]" id="sobre-mi">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div className="relative aspect-[3/4] overflow-hidden group">
          <Image
            src={profileImg?.imageUrl || ""}
            alt="Palmira Garde"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
            data-ai-hint="high fashion model portrait"
          />
          <div className="absolute inset-0 border-[20px] border-white/30 m-8" />
        </div>
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-bold block">The Visionary</span>
            <h2 className="text-5xl md:text-7xl font-headline leading-none">Palmira <br/><span className="italic font-normal">Garde</span></h2>
          </div>
          <div className="space-y-8 text-muted-foreground font-light text-xl leading-relaxed">
            <p>
              Bienvenida a mi universo de belleza consciente. Soy Palmira, y mi propósito es redefinir lo que significa cuidarse.
            </p>
            <p>
              En un mundo saturado de promesas vacías, apuesto por la eficacia real de la cosmética natural y el poder transformador de un maquillaje profesional respetuoso con tu piel.
            </p>
            <p>
              Como tu asesora personal, te guío para simplificar tu ritual, elevando cada gesto a una experiencia de puro lujo y bienestar.
            </p>
          </div>
          <div className="pt-10 flex items-center gap-6">
             <div className="h-[1px] w-24 bg-accent" />
             <p className="font-headline italic text-3xl text-primary">Estética & Alma</p>
          </div>
        </div>
      </div>
    </section>
  );
}