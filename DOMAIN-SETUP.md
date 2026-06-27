# Migrar a un dominio propio (ej. efisolution.tech)

El sitio está listo para cambiar de `*.workers.dev` a tu dominio sin tocar
código de las páginas. Toda la base URL sale de **un solo lugar**:
`astro.config.mjs` → campo `site`.

## 1. En el código (1 cambio)

1. Abre [astro.config.mjs](astro.config.mjs) y cambia:
   ```js
   site: 'https://efisolution.jmlagos2003.workers.dev',
   ```
   por tu dominio, ej.:
   ```js
   site: 'https://efisolution.tech',
   ```
2. `npm run build` y despliega. Con eso se actualizan automáticamente:
   canonical, `og:url`, `hreflang`, `sitemap-index.xml`, `robots.txt` y el
   JSON-LD de negocio (LocalBusiness).

> Nota: `og:image` usa `/og-image.jpg` (relativa), así que también seguirá el
> nuevo dominio sin cambios.

## 2. En Cloudflare (apuntar el dominio)

Cuando tengas el dominio (vía GitHub Student → `.tech`):

1. **Añadir el dominio a Cloudflare**
   - Panel de Cloudflare → *Add a site* → escribe `efisolution.tech`.
   - Elige el plan Free.
2. **Cambiar los nameservers en el registrador**
   - Cloudflare te da 2 nameservers (ej. `xxx.ns.cloudflare.com`).
   - En el panel donde registraste el `.tech`, reemplaza los nameservers por
     esos. Propaga en minutos/horas.
3. **Conectar el dominio al Worker/Pages del sitio**
   - Si el sitio corre como **Worker**: Workers & Pages → tu Worker → *Settings*
     → *Domains & Routes* → *Add* → *Custom domain* → `efisolution.tech`
     (y `www.efisolution.tech` si lo quieres).
   - Si corre como **Pages**: tu proyecto Pages → *Custom domains* → *Set up a
     custom domain* → `efisolution.tech`.
   - Cloudflare crea el registro DNS y el certificado SSL automáticamente.
4. **Redirección www → raíz (opcional pero recomendado)**
   - Rules → *Redirect Rules* → de `www.efisolution.tech/*` a
     `https://efisolution.tech/$1` (301).
5. **Verificar**
   - Abre `https://efisolution.tech` (candado SSL OK).
   - Revisa `https://efisolution.tech/robots.txt` → debe apuntar al sitemap de
     tu dominio.
   - En Google Search Console, añade la propiedad del nuevo dominio y envía el
     sitemap `https://efisolution.tech/sitemap-index.xml`.

## 3. Después de migrar

- Actualiza el enlace del perfil (LinkedIn/GitHub) al nuevo dominio.
- Si el `.workers.dev` seguía indexado, deja una redirección 301 hacia el
  dominio nuevo para no perder SEO.
- (Opcional) actualiza `email`/`from` del Worker de leads si usas dominio propio
  para correo.
