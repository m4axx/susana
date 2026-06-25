"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { track } from "@/lib/pixel";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-[100] transition-all duration-500",
        scrolled ? "glass" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto h-16 px-5 md:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="font-headline font-medium text-lg md:text-xl tracking-tight text-foreground"
        >
          Palmira <span className="italic text-primary">Garde</span>
        </Link>

        <a
          href="#oferta"
          onClick={() => track("Lead", { content_name: "Header CTA 20 euros" })}
          className="pill-shine bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-10 md:h-11 px-5 md:px-6 inline-flex items-center text-xs md:text-sm font-semibold shadow-md shadow-primary/20 transition-all hover:scale-[1.03]"
        >
          <span className="md:hidden">Mi oferta 20€</span>
          <span className="hidden md:inline">Quiero mi oferta</span>
        </a>
      </div>
    </header>
  );
}
