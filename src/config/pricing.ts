import type { Locale } from '../i18n/siteContent';

/*
  PRECIOS — único lugar donde se ajustan los montos.
  El texto de los planes (nombres, qué incluye, CTA) vive en
  src/i18n/siteContent.ts (4 idiomas). Aquí solo van los números y la moneda.

  - Cada idioma muestra su moneda de mercado: ES→COP, EN→USD, PT→BRL, FR→EUR.
  - NO son conversiones 1:1: cada precio está pensado para su mercado.
  - `price` = retainer mensual · `setup` = puesta en marcha (pago único).
  - Ajusta libremente. `RECOMMENDED_PLAN` marca la tarjeta destacada.
*/

export type PlanKey = 'esencial' | 'profesional' | 'escala';

type Amount = { price: string; setup: string };
type CurrencyConfig = {
  code: string;   // etiqueta (vacía si el símbolo ya es inequívoco, p. ej. € o R$)
  symbol: string; // prefijo del monto
  plans: Record<PlanKey, Amount>;
};

export const RECOMMENDED_PLAN: PlanKey = 'profesional';
export const planOrder: PlanKey[] = ['esencial', 'profesional', 'escala'];

// Montos alineados al mercado 2026 (no son conversiones 1:1). Pensados para ser
// sostenibles y justos: ni tan bajos que parezcan "plantilla reciclada" o dañen
// el mercado, ni inalcanzables para arrancar. Referencia Colombia: landing
// 0,8–1,2M, sitio+catálogo 2–3M, e-commerce/IA 4,5–7M, mantenimiento 0,15–0,6M/mes.
export const PRICING_BY_LOCALE: Record<Locale, CurrencyConfig> = {
  // Colombia — pesos colombianos
  es: {
    code: 'COP',
    symbol: '$',
    plans: {
      esencial:    { price: '120.000', setup: '890.000'   },
      profesional: { price: '290.000', setup: '2.400.000' },
      escala:      { price: '690.000', setup: '5.900.000' },
    },
  },
  // Internacional — dólares
  en: {
    code: 'USD',
    symbol: '$',
    plans: {
      esencial:    { price: '49',  setup: '590'   },
      profesional: { price: '129', setup: '1,490' },
      escala:      { price: '299', setup: '3,490' },
    },
  },
  // Brasil — reales
  pt: {
    code: '',
    symbol: 'R$ ',
    plans: {
      esencial:    { price: '150', setup: '1.500' },
      profesional: { price: '450', setup: '3.900' },
      escala:      { price: '990', setup: '9.900' },
    },
  },
  // Europa — euros
  fr: {
    code: '',
    symbol: '€ ',
    plans: {
      esencial:    { price: '49',  setup: '590'   },
      profesional: { price: '129', setup: '1.490' },
      escala:      { price: '299', setup: '3.490' },
    },
  },
};
