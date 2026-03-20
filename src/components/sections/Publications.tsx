
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const POSTS = [
  {
    id: 1,
    title: "5 Pasos para una rutina facial natural",
    excerpt: "Descubre cómo simplificar tu cuidado diario utilizando solo ingredientes puros y efectivos.",
    imageId: "post-1",
    date: "25 Mayo, 2024"
  },
  {
    id: 2,
    title: "El poder de la cosmética fresca",
    excerpt: "¿Sabías que los ingredientes activos pierden eficacia con el tiempo? Conoce la diferencia.",
    imageId: "post-2",
    date: "18 Mayo, 2024"
  }
];

export function Publications() {
  return (
    <section className="py-24 px-6 bg-background" id="blog">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline">Publicaciones Recientes</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Consejos de belleza, bienestar y salud para que te sientas radiante cada día.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {POSTS.map((post) => {
            const img = PlaceHolderImages.find((i) => i.id === post.imageId);
            return (
              <Card key={post.id} className="border-none rounded-none shadow-none bg-transparent group cursor-pointer overflow-hidden">
                <div className="relative aspect-video overflow-hidden mb-6">
                  <Image
                    src={img?.imageUrl || ""}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-0 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-accent">
                    {post.date}
                  </div>
                  <h3 className="text-2xl font-headline group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="inline-block text-primary font-bold uppercase tracking-widest text-xs border-b border-primary pb-1">
                    Leer más
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
