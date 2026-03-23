
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
      setShowLogo(scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-6 md:px-12",
      isScrolled ? "bg-white/80 backdrop-blur-xl py-4 shadow-sm" : "bg-transparent py-8"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          className="md:hidden p-2 hover:bg-black/5 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link href="/" className={cn(
          "text-2xl md:text-3xl font-headline tracking-tighter flex items-center gap-2 transition-all duration-700",
          showLogo ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}>
          <span className="font-bold">Palmira</span>
          <span className="italic font-normal text-accent">Garde</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-12">
          <Link href="/servicios" className="text-[10px] font-semibold uppercase tracking-[0.3em] hover-gold">Servicios</Link>
          <Link href="/#productos" className="text-[10px] font-semibold uppercase tracking-[0.3em] hover-gold">Marcas</Link>
          <Link href="/#sobre-mi" className="text-[10px] font-semibold uppercase tracking-[0.3em] hover-gold">El Ritual</Link>
          <Link href="/#limelife-detalles" className="text-[10px] font-semibold uppercase tracking-[0.3em] hover-gold">Shop</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-black/5 transition-colors hidden sm:block">
            <ShoppingBag className="h-5 w-5" />
          </button>
          <a 
            href="https://wa.me/qr/4JSUW45MSRMZM1" 
            target="_blank"
            className="text-[10px] font-bold uppercase tracking-[0.2em] bg-primary text-primary-foreground px-5 py-3 hover:bg-accent transition-all"
          >
            Consulta VIP
          </a>
        </div>
      </div>

      <div className={cn(
        "fixed inset-0 bg-white z-40 transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <button 
          className="absolute top-8 right-6 p-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="h-8 w-8" />
        </button>
        <Link href="/servicios" onClick={() => setIsMenuOpen(false)} className="text-2xl font-headline italic hover-gold">Servicios</Link>
        <Link href="/#productos" onClick={() => setIsMenuOpen(false)} className="text-2xl font-headline italic hover-gold">Marcas</Link>
        <Link href="/#sobre-mi" onClick={() => setIsMenuOpen(false)} className="text-2xl font-headline italic hover-gold">El Ritual</Link>
        <Link href="/#limelife-detalles" onClick={() => setIsMenuOpen(false)} className="text-2xl font-headline italic hover-gold">Shop LimeLife</Link>
        <Link href="/#blog" onClick={() => setIsMenuOpen(false)} className="text-2xl font-headline italic hover-gold">Editorial</Link>
        <div className="mt-8">
           <a 
            href="https://wa.me/qr/4JSUW45MSRMZM1" 
            className="text-sm font-bold uppercase tracking-[0.3em] border-b-2 border-accent pb-2"
          >
            WhatsApp Directo
          </a>
        </div>
      </div>
    </header>
  );
}
