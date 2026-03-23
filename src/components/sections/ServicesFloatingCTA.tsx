
"use client";

import Link from "next/link";
import { Brush } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function ServicesFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Retraso para que aparezca después de la carga inicial, aumentando el impacto
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-[60]"
        >
          <Link 
            href="/servicios" 
            className="bg-black text-accent py-4 px-2 md:py-8 md:px-4 flex flex-col items-center gap-3 md:gap-4 hover:bg-accent hover:text-black transition-all group shadow-[0_0_30px_rgba(0,0,0,0.4)] border-l border-y border-accent/30 rounded-l-xl"
            style={{ writingMode: 'vertical-rl' }}
          >
            <Brush className="h-4 w-4 md:h-5 md:w-5 -rotate-90 group-hover:scale-110 transition-transform" />
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] whitespace-nowrap">
              Servicios Maquillaje
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
