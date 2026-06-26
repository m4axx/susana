"use client";

import { useEffect } from "react";
import { trackWhenReady } from "@/lib/pixel";

// Dispara ViewContent al ver la landing de la oferta (solo home).
// Si el consentimiento aún no se ha dado, queda en cola y se dispara al aceptar.
export function ViewContentTracker() {
  useEffect(() => {
    trackWhenReady("ViewContent", {
      content_name: "Landing oferta Ringana 20 euros",
      content_category: "cosmetica",
    });
  }, []);

  return null;
}
