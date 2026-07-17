import { localeHref, supportedLocales, type Locale } from '../i18n/siteContent';
import { privacyRoute } from '../i18n/legal';

// Caso de estudio Búho Repuestos, por idioma.
export const caseRoute: Record<Locale, string> = {
  es: '/casos/buho-repuestos',
  en: '/en/work/buho-repuestos',
  pt: '/pt/casos/buho-repuestos',
  fr: '/fr/cas/buho-repuestos',
};

// Familias de rutas con equivalente por idioma (privacidad, caso de estudio…).
const routeFamilies: Record<Locale, string>[] = [privacyRoute, caseRoute];

/**
 * Ruta equivalente de la página actual en otro idioma: / ↔ /en/ ↔ /pt/ ↔ /fr/,
 * /privacidad ↔ /en/privacy ↔ …, /casos/buho-repuestos ↔ /en/work/… ↔ ….
 * Cualquier ruta sin mapeo cae a la home del idioma destino.
 */
export function equivalentPath(target: Locale, currentPathname: string): string {
  const clean = currentPathname.replace(/\/+$/, '') || '/';
  for (const family of routeFamilies) {
    if (supportedLocales.some((loc) => family[loc] === clean)) return family[target];
  }
  return localeHref(target);
}
