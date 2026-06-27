import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // ───────────────────────────────────────────────────────────────────────
  // BASE URL DEL SITIO — ÚNICA FUENTE DE VERDAD.
  // Canonical, Open Graph, hreflang, sitemap, robots.txt y el JSON-LD de
  // negocio derivan TODOS de este valor. Para migrar a tu dominio propio:
  // cambia SOLO esta línea (ej. 'https://efisolution.tech'), corre `npm run
  // build` y todo se actualiza. Pasos completos en DOMAIN-SETUP.md.
  // ───────────────────────────────────────────────────────────────────────
  site: 'https://efisolution.jmlagos2003.workers.dev',

  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],

  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },

  build: {
    // Inline ALL CSS into the HTML document — eliminates the render-blocking
    // /_astro/*.css file that was causing the 4.7s mobile LCP.
    inlineStylesheets: 'always',
  },

  compressHTML: true,

  vite: {
    build: {
      cssCodeSplit: false,
    },
  },

  adapter: cloudflare(),
});
