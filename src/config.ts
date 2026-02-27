/**
 * Site-wide config. Replace WhatsApp number before publishing.
 */
export const SITE = {
  title: "Angel Leon — Desarrollador web freelance | Landing pages y webs",
  description:
    "Todo lo que necesitas para una web profesional, rápida y sin complicaciones. Contáctame por WhatsApp y lanza tu web hoy mismo.",
  /** Replace with your WhatsApp number (country code + number, no + or spaces). */
  whatsAppUrl: "https://wa.me/+34600698114",
  /** Optional: ballpark starting price to filter serious clients. */
  pricingFrom: "desde €200",
  /** Optional: one testimonial for social proof. */
  testimonial: {
    quote:
      "Angel desarrolló la plataforma de Abordando — sitio para viajeros y panel de administración — con profesionalidad y entrega a tiempo. El resultado superó lo que esperábamos. Muy recomendable.",
    author: "Jesús Palacios",
    role: "Abordando",
    image: "/jesus-apalacios.png",
  },
} as const;
