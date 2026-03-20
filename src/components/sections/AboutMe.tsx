
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function AboutMe() {
  const profileImg = PlaceHolderImages.find((img) => img.id === "about-me");

  return (
    <section className="py-24 px-6 bg-white" id="sobre-mi">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
          <Image
            src={profileImg?.imageUrl || ""}
            alt="Palmira Garden Beauty Guide"
            fill
            className="object-cover"
            data-ai-hint="professional woman portrait"
          />
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-accent uppercase tracking-widest text-sm font-bold">Beauty Guide</span>
            <h2 className="text-4xl md:text-5xl font-headline leading-tight">La esencia detrás de Palmira Garden</h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-body">
            <p>
              Hola, soy Palmira. Mi misión es guiarte a través del fascinante mundo de la cosmética natural y el cuidado consciente. Creo firmemente que la belleza no es solo algo exterior, sino el reflejo de una salud equilibrada y un alma en calma.
            </p>
            <p>
              Como tu Beauty Guide personal, he seleccionado cuidadosamente dos marcas que comparten mis valores de frescura, sostenibilidad y eficacia real: LimeLife y Ringana.
            </p>
            <p>
              Mi compromiso es ofrecerte un asesoramiento cercano, profesional y totalmente personalizado para que encuentres los productos que tu piel y tu bienestar realmente necesitan.
            </p>
          </div>
          <div className="pt-4">
             <div className="h-px w-20 bg-accent mb-4" />
             <p className="font-headline italic text-2xl text-primary">Palmira Garden</p>
          </div>
        </div>
      </div>
    </section>
  );
}
