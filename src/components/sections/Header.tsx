
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setShowLogo(scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear el scroll del cuerpo cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out px-4 md:px-12",
        isScrolled ? "bg-white/95 backdrop-blur-xl py-3 md:py-4 shadow-sm border-b border-muted" : "bg-transparent py-5 md:py-8",
        isMenuOpen && "bg-transparent border-none shadow-none"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-[110]">
          {/* Lado Izquierdo: Botón Menú y Nav Desktop */}
          <div className="flex items-center gap-8">
            <button 
              className="p-2 hover:bg-black/5 transition-colors focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className={cn("h-6 w-6", isScrolled ? "text-primary" : "text-white")} />
              )}
            </button>
            
            <nav className="hidden lg:flex items-center gap-10">
              <Link href="/servicios" className={cn("text-[10px] font-bold uppercase tracking-[0.3em] hover-gold", isScrolled ? "text-primary" : "text-white")}>Servicios</Link>
              <Link href="/#productos" className={cn("text-[10px] font-bold uppercase tracking-[0.3em] hover-gold", isScrolled ? "text-primary" : "text-white")}>Marcas</Link>
              <Link href="/#sobre-mi" className={cn("text-[10px] font-bold uppercase tracking-[0.3em] hover-gold", isScrolled ? "text-primary" : "text-white")}>El Ritual</Link>
            </nav>
          </div>

          {/* Lado Derecho: Logo y CTA siempre juntos para evitar solapamiento */}
          <div className="flex items-center gap-4 md:gap-12">
            <Link href="/" className={cn(
              "text-base md:text-2xl font-headline tracking-tighter flex items-center gap-1 md:gap-2 transition-all duration-700",
              showLogo && !isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
            )}>
              <span className="font-bold text-primary">Palmira</span>
              <span className="italic font-normal text-accent">Garde</span>
            </Link>
            
            <a 
              href="https://wa.me/qr/4JSUW45MSRMZM1" 
              target="_blank"
              className={cn(
                "text-[8px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] bg-primary text-primary-foreground px-3 py-2 md:px-6 md:py-3.5 hover:bg-accent transition-all whitespace-nowrap",
                isMenuOpen && "opacity-0 pointer-events-none"
              )}
            >
              Consulta VIP
            </a>
          </div>
        </div>
      </header>

      {/* Menú Overlay Móvil - Fondo Sólido y Z-Index Superior */}
      <div className={cn(
        "fixed inset-0 bg-white z-[90] transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-10",
        isMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-full"
      )}>
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-3xl md:text-5xl font-headline font-bold mb-4 text-primary">
          Palmira <span className="italic font-normal text-accent">Garde</span>
        </Link>
        
        <div className="flex flex-col items-center gap-10 text-center">
          <Link href="/servicios" onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-3xl font-headline italic text-primary hover:text-accent transition-colors">Servicios Pro</Link>
          <Link href="/#productos" onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-3xl font-headline italic text-primary hover:text-accent transition-colors">Nuestras Marcas</Link>
          <Link href="/#sobre-mi" onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-3xl font-headline italic text-primary hover:text-accent transition-colors">El Ritual</Link>
          <Link href="/#limelife-detalles" onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-3xl font-headline italic text-primary hover:text-accent transition-colors">Shop Online</Link>
        </div>

        <div className="mt-12">
           <a 
            href="https://wa.me/qr/4JSUW45MSRMZM1" 
            target="_blank"
            className="text-[10px] font-bold uppercase tracking-[0.4em] border-b-2 border-accent pb-2 text-primary hover:text-accent transition-colors"
          >
            WhatsApp Directo
          </a>
        </div>
      </div>
    </>
  );
}
