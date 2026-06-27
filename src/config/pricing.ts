/*
  PRECIOS — único lugar donde se ajustan los montos.
  Todo el texto de los planes (nombres, qué incluye, CTA) vive en
  src/i18n/siteContent.ts (4 idiomas). Aquí SOLO van los números.

  - `price`  = retainer mensual.
  - `setup`  = pago inicial único (puesta en marcha). Pon '' para ocultarlo.
  - Los valores de abajo son PLACEHOLDERS: ajústalos a tu realidad.
  - `recommended` marca la tarjeta destacada.
*/

export type PlanKey = 'esencial' | 'profesional' | 'escala';

export const PRICING: {
  currency: string;
  recommended: PlanKey;
  plans: Record<PlanKey, { price: string; setup: string }>;
} = {
  currency: 'USD',
  recommended: 'profesional',
  plans: {
    esencial:    { price: '299',   setup: '199' },
    profesional: { price: '599',   setup: '349' },
    escala:      { price: '1.200', setup: '690' },
  },
};

export const planOrder: PlanKey[] = ['esencial', 'profesional', 'escala'];
