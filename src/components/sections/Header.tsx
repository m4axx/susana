
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-headline font-bold tracking-tight italic text-primary">
          Palmira Garden
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a href="#sobre-mi" className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Sobre Mí</a>
          <a href="#productos" className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Productos</a>
          <a href="#promociones" className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Ofertas</a>
          <a href="#blog" className="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Blog</a>
        </nav>

        <a 
          href="https://wa.me/your-whatsapp-number" 
          target="_blank"
          className="text-xs font-bold uppercase tracking-widest bg-primary text-primary-foreground px-6 py-3 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        >
          Contactar
        </a>
      </div>
    </header>
  );
}
