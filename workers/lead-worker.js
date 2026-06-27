/**
 * Efi Solution — Worker de leads (LISTO PARA ACTIVAR, opcional).
 *
 * Hoy el formulario usa Web3Forms y ya envía a tu correo. Este Worker es una
 * alternativa propia para cuando quieras control total. No se despliega con el
 * sitio: es un Worker aparte.
 *
 * ───────────────────────────────────────────────────────────────────────────
 * CÓMO ACTIVARLO
 * 1) Crear el Worker:        wrangler deploy workers/lead-worker.js --name efi-leads
 * 2) Configurar variables (en el dashboard de Cloudflare > Worker > Settings >
 *    Variables, o con `wrangler secret put`):
 *      - LEAD_TO_EMAIL     (obligatorio)  tu correo destino, ej. jmlagos2003@gmail.com
 *      - RESEND_API_KEY    (recomendado)  API key de https://resend.com (gratis)
 *      - LEAD_FROM_EMAIL   (con Resend)   remitente verificado, ej. leads@tudominio
 *      - LEAD_WEBHOOK_URL  (opcional)     webhook extra (Zapier/Make/n8n)
 *      - ALLOW_ORIGIN      (opcional)     tu dominio para CORS; por defecto '*'
 * 3) En src/components/FooterCTA.astro, cambia la constante ENDPOINT por la URL
 *    de este Worker (ej. https://efi-leads.TU-SUBDOMINIO.workers.dev).
 *
 * El Worker valida, descarta bots (honeypot) y reenvía el lead por email y/o
 * webhook. Responde { success: true } igual que Web3Forms, así el front no cambia.
 * ───────────────────────────────────────────────────────────────────────────
 */

export default {
  async fetch(request, env) {
    const origin = env.ALLOW_ORIGIN || '*';
    const cors = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (request.method !== 'POST') {
      return json({ success: false, message: 'Method not allowed' }, 405, cors);
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ success: false, message: 'Invalid JSON' }, 400, cors);
    }

    // Honeypot: si viene relleno, es un bot. Fingimos éxito y no hacemos nada.
    if (data.botcheck) return json({ success: true }, 200, cors);

    const name = String(data.name || '').trim();
    const email = String(data.email || '').trim();
    const message = String(data.message || '').trim();
    if (!name || !email || !message) {
      return json({ success: false, message: 'Faltan campos' }, 422, cors);
    }

    const summary = [
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Idioma: ${data.locale || '—'}`,
      `Origen: ${data.lead_origin || '—'}`,
      `Página: ${data.page_url || '—'}`,
      '',
      message,
    ].join('\n');

    // 1) Email vía Resend (si está configurado).
    if (env.RESEND_API_KEY && env.LEAD_TO_EMAIL) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: env.LEAD_FROM_EMAIL || 'leads@resend.dev',
            to: env.LEAD_TO_EMAIL,
            reply_to: email,
            subject: `Nuevo lead — ${name}`,
            text: summary,
          }),
        });
      } catch (e) {
        // No rompemos la respuesta al usuario por un fallo de email; seguimos.
      }
    }

    // 2) Webhook extra (opcional): Zapier / Make / n8n.
    if (env.LEAD_WEBHOOK_URL) {
      try {
        await fetch(env.LEAD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message, ...data }),
        });
      } catch (e) {
        /* idem */
      }
    }

    return json({ success: true }, 200, cors);
  },
};

function json(body, status, cors) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors },
  });
}
