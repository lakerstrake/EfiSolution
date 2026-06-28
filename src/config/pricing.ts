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

export const PRICING_BY_LOCALE: Record<Locale, CurrencyConfig> = {
  // Colombia — pesos colombianos
  es: {
    code: 'COP',
    symbol: '$',
    plans: {
      esencial:    { price: '90.000',  setup: '690.000'   },
      profesional: { price: '250.000', setup: '1.900.000' },
      escala:      { price: '590.000', setup: '4.900.000' },
    },
  },
  // Internacional — dólares
  en: {
    code: 'USD',
    symbol: '$',
    plans: {
      esencial:    { price: '39',  setup: '390'   },
      profesional: { price: '99',  setup: '990'   },
      escala:      { price: '249', setup: '2,490' },
    },
  },
  // Brasil — reales
  pt: {
    code: '',
    symbol: 'R$ ',
    plans: {
      esencial:    { price: '120', setup: '990'   },
      profesional: { price: '390', setup: '2.900' },
      escala:      { price: '890', setup: '7.900' },
    },
  },
  // Europa — euros
  fr: {
    code: '',
    symbol: '€ ',
    plans: {
      esencial:    { price: '45',  setup: '450'   },
      profesional: { price: '110', setup: '1.100' },
      escala:      { price: '279', setup: '2.900' },
    },
  },
};
