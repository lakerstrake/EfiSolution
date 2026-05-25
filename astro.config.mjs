import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://efisolution.com',

  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap(),
  ],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  build: {
    inlineStylesheets: 'auto',
  },

  compressHTML: true,

  vite: {
    build: {
      cssCodeSplit: true,
    },
  },

  adapter: cloudflare()
});