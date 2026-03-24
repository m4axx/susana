
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingBag } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setShowLogo(scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-4 md:px-12",
      isScrolled ? "bg-white/95 backdrop-blur-xl py-3 md:py-4 shadow-sm" : "bg-transparent py-5 md:py-8"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          className="p-2 hover:bg-black/5 transition-colors relative z-[60]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
        </button>

        <Link href="/" className={cn(
          "text-lg md:text-3xl font-headline tracking-tighter flex items-center gap-1 md:gap-2 transition-all duration-700 absolute left-1/2 -translate-x-1/2",
          showLogo ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}>
          <span className="font-bold text-primary">Palmira</span>
          <span className="italic font-normal text-accent">Garde</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/servicios" className="text-[10px] font-bold uppercase tracking-[0.3em] hover-gold">Servicios</Link>
          <Link href="/#productos" className="text-[10px] font-bold uppercase tracking-[0.3em] hover-gold">Marcas</Link>
          <Link href="/#sobre-mi" className="text-[10px] font-bold uppercase tracking-[0.3em] hover-gold">El Ritual</Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 hover:bg-black/5 transition-colors hidden sm:block">
            <ShoppingBag className="h-5 w-5" />
          </button>
          <a 
            href="https://wa.me/qr/4JSUW45MSRMZM1" 
            target="_blank"
            className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] bg-primary text-primary-foreground px-3 py-2 md:px-5 md:py-3 hover:bg-accent transition-all"
          >
            Consulta VIP
          </a>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-50 transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-6",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-4xl font-headline font-bold mb-8">
          Palmira <span className="italic font-normal text-accent">Garde</span>
        </Link>
        <div className="flex flex-col items-center gap-6">
          <Link href="/servicios" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-headline italic hover-gold">Servicios Pro</Link>
          <Link href="/#productos" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-headline italic hover-gold">Nuestras Marcas</Link>
          <Link href="/#sobre-mi" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-headline italic hover-gold">El Ritual</Link>
          <Link href="/#limelife-detalles" onClick={() => setIsMenuOpen(false)} className="text-xl md:text-2xl font-headline italic hover-gold">Shop Online</Link>
        </div>
        <div className="mt-12">
           <a 
            href="https://wa.me/qr/4JSUW45MSRMZM1" 
            target="_blank"
            className="text-[10px] font-bold uppercase tracking-[0.3em] border-b-2 border-accent pb-2"
          >
            WhatsApp Directo
          </a>
        </div>
      </div>
    </header>
  );
}
