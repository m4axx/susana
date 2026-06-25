"use client";

import { motion } from "framer-motion";

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-32 md:pt-44 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-3 mb-12"
      >
        <span className="font-accent italic text-accent-foreground/80 text-base block">
          Palmira Garde
        </span>
        <h1 className="text-4xl md:text-6xl font-headline font-light leading-tight tracking-tight">
          {title}
        </h1>
        {updated && (
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60 pt-2">
            {updated}
          </p>
        )}
      </motion.div>
      <div className="space-y-2">{children}</div>
    </article>
  );
}

export function LegalH2({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="text-xl md:text-2xl font-headline mt-12 mb-3"
    >
      {children}
    </motion.h2>
  );
}

export function LegalP({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="text-muted-foreground font-light leading-relaxed"
    >
      {children}
    </motion.p>
  );
}
