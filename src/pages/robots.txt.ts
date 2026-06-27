import type { APIRoute } from 'astro';

// robots.txt dinámico: la URL del sitemap se deriva de `site` en astro.config.mjs.
// Así, cuando cambies el dominio en ese único lugar, el sitemap aquí se actualiza
// solo (no hay dominio hardcodeado). Se prerenderiza a /robots.txt en el build.
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://efisolution.jmlagos2003.workers.dev');
  const sitemap = new URL('sitemap-index.xml', base).href;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
