"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { track } from "@/lib/pixel";
import { whatsappUrl } from "@/lib/contact";

// Botón flotante WhatsApp: presente todo el scroll, micro-respiración, dispara Contact.
// .wa-float permite que el banner de cookies lo eleve (ver globals.css).
export function WhatsAppFloating() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl("Hola Palmira, quiero información sobre Ringana.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("Contact")}
          aria-label="Hablar por WhatsApp"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ type: "spring", damping: 18, stiffness: 200 }}
          className="wa-float wa-breathe fixed bottom-5 right-5 z-[90] hidden md:flex items-center justify-center h-16 w-16 rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/30 transition-[bottom] duration-300"
        >
          <svg viewBox="0 0 32 32" className="h-7 w-7 md:h-8 md:w-8 fill-white" aria-hidden="true">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.13 6.744 3.05 9.38L1.054 31.3l6.114-1.954A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.822 32 16S24.83 0 16.004 0zm9.32 22.6c-.387 1.092-1.922 1.998-3.146 2.262-.838.178-1.93.32-5.606-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.424 1.636-3.904.387-.396.85-.576 1.13-.576.137 0 .26.007.37.012.32.014.48.033.69.536.262.63.9 2.184.976 2.342.077.158.128.342.022.552-.1.21-.188.34-.346.524-.158.184-.334.41-.477.55-.158.157-.323.327-.14.642.184.31.818 1.35 1.756 2.186 1.21 1.078 2.23 1.412 2.58 1.57.262.117.566.092.776-.14.266-.296.595-.788.93-1.274.236-.347.534-.39.85-.27.32.117 2.02.952 2.366 1.124.347.173.576.257.66.4.085.142.085.82-.302 1.912z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
