import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://efisolution.com',

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
