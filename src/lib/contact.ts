// Contacto WhatsApp — Palmira Garde
// La clienta aporta el WhatsApp Business definitivo.
// WHATSAPP_QR: enlace QR actual (abre el chat, no admite texto pre-rellenado).
// WHATSAPP_PHONE: nº internacional sin "+" ni espacios (ej "34600000000").
//   Si se rellena, los CTA usan wa.me/<phone>?text=... con mensaje pre-cargado.
export const WHATSAPP_QR = "https://wa.me/qr/4JSUW45MSRMZM1";
export const WHATSAPP_PHONE = "34619516412"; // +34 619 51 64 12

// Devuelve la URL de WhatsApp, con texto pre-rellenado si hay número.
export function whatsappUrl(message?: string): string {
  if (WHATSAPP_PHONE) {
    const base = `https://wa.me/${WHATSAPP_PHONE}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
  }
  return WHATSAPP_QR;
}
