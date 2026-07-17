import { SITE } from '../config/site';

/**
 * Build a wa.me link with a pre-filled, context-aware message so every lead
 * arrives with the section it came from. Returns null when no number is set
 * (the UI then hides the WhatsApp CTA gracefully).
 */
export function whatsappHref(message: string): string | null {
  if (!SITE.whatsapp) return null;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
