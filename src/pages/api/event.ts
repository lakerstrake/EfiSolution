import type { APIRoute } from 'astro';

// Endpoint de tracking sin cookies: recibe {event, label, lang} por sendBeacon
// y lo escribe en Workers Analytics Engine (dataset efisolution_events).
// No se guarda IP, ni user-agent, ni identificador alguno del visitante.
export const prerender = false;

type AnalyticsEngineDataset = {
  writeDataPoint: (point: { blobs?: string[]; doubles?: number[]; indexes?: string[] }) => void;
};
type RuntimeEnv = { EVENTS?: AnalyticsEngineDataset };

export const POST: APIRoute = async ({ request, locals }) => {
  let data: Record<string, unknown>;
  try {
    data = JSON.parse(await request.text());
  } catch {
    return new Response(null, { status: 400 });
  }

  const event = typeof data.event === 'string' ? data.event.slice(0, 32) : '';
  const label = typeof data.label === 'string' ? data.label.slice(0, 48) : '';
  const lang = typeof data.lang === 'string' ? data.lang.slice(0, 8) : '';
  if (!event) return new Response(null, { status: 400 });

  const env = (locals as unknown as { runtime?: { env?: RuntimeEnv } }).runtime?.env;
  env?.EVENTS?.writeDataPoint({ blobs: [event, label, lang], doubles: [1], indexes: [event] });

  return new Response(null, { status: 204 });
};
