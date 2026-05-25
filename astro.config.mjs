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
    inlineStylesheets: 'auto',
  },

  compressHTML: true,

  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },

  adapter: cloudflare(),
});
