
"use client";

import Link from "next/link";
import { Brush } from "lucide-react";
import { motion } from "framer-motion";

export function ServicesFloatingCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block"
    >
      <Link 
        href="/servicios" 
        className="bg-accent text-black py-6 px-4 flex flex-col items-center gap-4 hover:bg-white transition-all group shadow-2xl"
        style={{ writingMode: 'vertical-rl' }}
      >
        <Brush className="h-5 w-5 -rotate-90 group-hover:scale-110 transition-transform" />
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] whitespace-nowrap">
          Servicios Maquillaje
        </span>
      </Link>
    </motion.div>
  );
}
