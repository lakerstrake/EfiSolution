# Tracking de conversión sin cookies

Medimos clics en los CTAs y envíos del formulario **sin cookies, sin
localStorage y sin scripts de terceros**. Un listener delegado en el Layout
envía `{event, label, lang}` con `navigator.sendBeacon` a `POST /api/event`
([src/pages/api/event.ts](../src/pages/api/event.ts)). No se registra IP,
user-agent ni ningún identificador del visitante.

## Estado actual: contador en KV (plan B)

Analytics Engine requiere activarse UNA vez en el dashboard (la cuenta aún no
lo tiene activo, error 10089 al desplegar), así que hoy los eventos se cuentan
en KV (namespace `EVENTS_KV`), con una clave diaria por combinación:
`evt:<YYYY-MM-DD>:<event>:<label>:<lang>` → total del día.

Consultar (los 50 más recientes):

```bash
npx wrangler kv key list --binding EVENTS_KV --remote | head -50
npx wrangler kv key get --binding EVENTS_KV --remote "evt:2026-07-17:whatsapp:flotante:es"
```

Limitación: KV no tiene incremento atómico; con clics simultáneos puede
perderse alguno. Suficiente para decidir qué CTA convierte más.

## Upgrade a Analytics Engine (recomendado, 1 clic)

1. Activarlo en el dashboard: Workers & Pages → **Analytics Engine** → Enable
   (https://dash.cloudflare.com → cuenta → workers/analytics-engine).
2. En [wrangler.jsonc](../wrangler.jsonc) añadir:
   `"analytics_engine_datasets": [{ "binding": "EVENTS", "dataset": "efisolution_events" }]`
3. `npm run deploy`. El endpoint ya prefiere `EVENTS` cuando existe; KV queda
   de respaldo y puede retirarse después.

## Esquema del dato

| Campo AE | Contenido |
|---|---|
| `blob1` | `event` — tipo de acción |
| `blob2` | `label` — origen del clic |
| `blob3` | `lang` — idioma de la página (es/en/pt/fr) |
| `double1` | 1 (contador) |
| `index1` | `event` (dimensión de muestreo) |

## Eventos instrumentados

| event | label | Dónde |
|---|---|---|
| `cta` | `hero` | Botón principal del hero ("Quiero mi web" → #planes) |
| `whatsapp` | `ia` | CTA de WhatsApp de la sección IA |
| `whatsapp` | `caso` | CTA de WhatsApp del caso Búho (home) |
| `whatsapp` | `plan-esencial` / `plan-profesional` / `plan-escala` | CTA de cada tarjeta de Planes |
| `whatsapp` | `contacto` | Botón de WhatsApp de la sección Contacto (incl. fallback de error) |
| `whatsapp` | `flotante` | Botón flotante de WhatsApp |
| `whatsapp` | `caso-pagina` | CTA de la página /casos/buho-repuestos |
| `case` | `home-caso` | Enlace "Ver caso completo →" en el home |
| `form` | `contacto` | Envío EXITOSO del formulario |

## Cómo consultar los datos

### Opción A — Dashboard
Cloudflare Dash → Workers & Pages → **Analytics Engine** → dataset
`efisolution_events`.

### Opción B — SQL API (recomendada)
Crea un API Token con permiso **Account Analytics: Read** y ejecuta:

```bash
curl -s "https://api.cloudflare.com/client/v4/accounts/<ACCOUNT_ID>/analytics_engine/sql" \
  -H "Authorization: Bearer <API_TOKEN>" \
  -d "SELECT blob1 AS event, blob2 AS label, blob3 AS lang,
             SUM(_sample_interval) AS total
      FROM efisolution_events
      WHERE timestamp > NOW() - INTERVAL '7' DAY
      GROUP BY event, label, lang
      ORDER BY total DESC
      FORMAT JSON"
```

Notas:
- `SUM(_sample_interval)` (y no `COUNT()`) da el total real: Analytics Engine
  muestrea cuando hay mucho volumen.
- Retención de datos: ~90 días. Si se necesita histórico, exportar
  periódicamente con la misma consulta.
- Para añadir un nuevo CTA al tracking basta con ponerle
  `data-track="<event>" data-label="<label>"` — el listener global lo recoge.
