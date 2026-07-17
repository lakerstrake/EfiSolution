/*
  Central public config — paste your values below to activate each feature.
  All three are PUBLIC values (safe to expose in the client). Leave a value
  empty to keep that feature off (the site falls back gracefully).
*/

// Identidad del sitio — ÚNICA fuente para URL, nombre, WhatsApp y email.
// Un futuro cambio de nombre o dominio se hace editando SOLO este objeto.
// whatsapp: código de país + número, solo dígitos (sin +, espacios ni guiones).
export const SITE = {
  url: 'https://efisolution.jmlagos2003.workers.dev',
  name: 'Efi Solution',
  whatsapp: '573007279875',
  // TODO: cambiar a correo de dominio cuando exista
  email: 'jmlagos2003@gmail.com',
} as const;

// Web3Forms access key from https://web3forms.com (free, 1 min).
// Empty = contact stays as a mailto button instead of the form.
export const WEB3FORMS_ACCESS_KEY = 'fa6bd024-9e53-4c45-816d-1c5252425d29';

// Cloudflare Web Analytics beacon token (privacy-friendly, no cookies).
// Empty = no analytics. If the site runs on Cloudflare Pages you can also
// enable analytics from the dashboard without setting this.
export const CF_ANALYTICS_TOKEN = 'ebb100bc84c740a99da9e2e3016c1059';
