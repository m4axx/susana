"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

// Aurora de rocío: respira en los márgenes de la sección, nunca bajo el texto.
// El wrapper recorta (overflow-clip) para garantizar CERO scroll horizontal.
export function Aurora({ soft = false, className }: { soft?: boolean; className?: string }) {
  return (
    <div className="absolute inset-0 overflow-clip pointer-events-none z-0" aria-hidden>
      <div className={cn("aurora", soft && "aurora-soft", className)} />
    </div>
  );
}

// Palabra-firma con subrayado-savia lavanda dibujado a mano.
// animate=false -> se pinta estático (hero, para proteger el LCP).
export function SapWord({
  children,
  animate = true,
  className,
}: {
  children: React.ReactNode;
  animate?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const state = !animate ? "sap-static" : inView ? "sap-draw" : "";

  return (
    <span ref={ref} className={cn("sap-underline italic", state, className)}>
      {children}
      <svg viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
        <path d="M3 8 C 55 2, 110 11, 165 6 S 250 3, 297 7" />
      </svg>
    </span>
  );
}

// Filete-tallo: separador hairline con micro-hoja botánica.
export function Tallo({ className }: { className?: string }) {
  return (
    <div className={cn("tallo", className)} aria-hidden>
      <Leaf className="h-3.5 w-3.5 shrink-0" />
    </div>
  );
}
