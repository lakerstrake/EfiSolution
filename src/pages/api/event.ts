import type { APIRoute } from 'astro';

// Endpoint de tracking sin cookies: recibe {event, label, lang} por sendBeacon.
// Escribe en Workers Analytics Engine si el binding EVENTS existe; si no,
// incrementa un contador diario en KV (EVENTS_KV). No se guarda IP, ni
// user-agent, ni identificador alguno del visitante.
export const prerender = false;

type AnalyticsEngineDataset = {
  writeDataPoint: (point: { blobs?: string[]; doubles?: number[]; indexes?: string[] }) => void;
};
type KVNamespace = {
  get: (key: string) => Promise<string | null>;
  put: (key: string, value: string) => Promise<void>;
};
type RuntimeEnv = { EVENTS?: AnalyticsEngineDataset; EVENTS_KV?: KVNamespace };

// Solo caracteres seguros en las claves KV.
const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.replace(/[^\w-]/g, '').slice(0, max) : '';

export const POST: APIRoute = async ({ request, locals }) => {
  let data: Record<string, unknown>;
  try {
    data = JSON.parse(await request.text());
  } catch {
    return new Response(null, { status: 400 });
  }

  const event = clean(data.event, 32);
  const label = clean(data.label, 48);
  const lang = clean(data.lang, 8);
  if (!event) return new Response(null, { status: 400 });

  const env = (locals as unknown as { runtime?: { env?: RuntimeEnv } }).runtime?.env;

  if (env?.EVENTS) {
    env.EVENTS.writeDataPoint({ blobs: [event, label, lang], doubles: [1], indexes: [event] });
  } else if (env?.EVENTS_KV) {
    // Contador diario por combinación. KV no tiene incremento atómico: con
    // tráfico simultáneo puede perderse algún clic (aceptable a este volumen).
    const day = new Date().toISOString().slice(0, 10);
    const key = `evt:${day}:${event}:${label}:${lang}`;
    const current = Number((await env.EVENTS_KV.get(key)) ?? '0');
    await env.EVENTS_KV.put(key, String(current + 1));
  }

  return new Response(null, { status: 204 });
};
