import { localeHref, supportedLocales, type Locale } from '../i18n/siteContent';
import { privacyRoute } from '../i18n/legal';

/**
 * Ruta equivalente de la página actual en otro idioma: / ↔ /en/ ↔ /pt/ ↔ /fr/
 * y /privacidad ↔ /en/privacy ↔ /pt/privacidade ↔ /fr/confidentialite.
 * Cualquier ruta sin mapeo cae a la home del idioma destino.
 */
export function equivalentPath(target: Locale, currentPathname: string): string {
  const clean = currentPathname.replace(/\/+$/, '') || '/';
  const isPrivacy = supportedLocales.some((loc) => privacyRoute[loc] === clean);
  if (isPrivacy) return privacyRoute[target];
  return localeHref(target);
}
