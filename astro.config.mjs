import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // TODO: actualizar a https://efisolution.com cuando se compre el dominio final.
  // Por ahora apunta a la URL real en produccion para no enviar a Google un
  // canonical/og:url/hreflang hacia un dominio que aun no se controla.
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
