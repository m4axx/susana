import { Snowflake, Leaf, MapPin } from "lucide-react";

const PILLS = [
  { icon: Snowflake, label: "Recién hecha" },
  { icon: Leaf, label: "Ingredientes vivos" },
  { icon: MapPin, label: "Directo de Austria" },
];

// Banda directa: refuerza el USP de frescura, grande y con energía.
export function TrustStrip() {
  return (
    <section className="bg-background py-14 md:py-20 px-6 border-b border-border">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-headline font-medium text-foreground text-3xl md:text-5xl leading-[1.05] tracking-tight text-balance">
          Cosmética que llega{" "}
          <span className="relative whitespace-nowrap text-primary">
            recién hecha
            <span className="absolute left-0 -bottom-1 h-1.5 w-full bg-accent/70 rounded-full" />
          </span>
          , no de un almacén.
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {PILLS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm font-semibold"
            >
              <Icon className="h-4 w-4 text-primary" /> {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
