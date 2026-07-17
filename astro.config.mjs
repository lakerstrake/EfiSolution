import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { SITE } from './src/config/site';

export default defineConfig({
  // ───────────────────────────────────────────────────────────────────────
  // BASE URL DEL SITIO — la única fuente de verdad es SITE.url en
  // src/config/site.ts. Canonical, Open Graph, hreflang, sitemap, robots.txt
  // y el JSON-LD derivan todos de ahí. Migración de dominio: editar SOLO ese
  // objeto y correr `npm run build`. Pasos completos en DOMAIN-SETUP.md.
  // ───────────────────────────────────────────────────────────────────────
  site: SITE.url,

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

  // Optimiza imágenes con sharp en build (páginas prerenderizadas); en el
  // runtime de Cloudflare sharp no existe, así que 'compile' es lo correcto.
  adapter: cloudflare({ imageService: 'compile' }),
});
