# EfiSolution — sitio de marketing

## Contexto
Landing de agencia web (Astro 5 estático, Cloudflare Workers). Idiomas: ES (raíz), EN, PT, FR.
Objetivo: generar leads por WhatsApp (+573007279875) y formulario (Web3Forms).
URL actual: https://efisolution.jmlagos2003.workers.dev (dominio propio PENDIENTE: el nombre de la marca puede cambiar — NO comprar/asumir dominios, NO cambiar el nombre de marca).

## Reglas de trabajo (obligatorias)
- Ejecuta, no expliques. Respuestas cortas. Sin resúmenes largos salvo que se pidan.
- Antes de leer un archivo completo: localiza con grep/glob y lee solo lo necesario.
- Edita en sitio (str_replace); nunca reescribas archivos enteros si un cambio puntual basta.
- Todo texto visible al usuario se replica en los 4 idiomas (ES/EN/PT/FR) con el mismo tono del sitio: cercano, sin tecnicismos, orientado a dueño de pyme.
- Un commit por tarea: `feat|fix(scope): descripción [ID-tarea]`.
- No añadas dependencias sin justificarlo en una línea.
- Centraliza valores en `src/config/site.ts` (crearlo si no existe): SITE = { url, name: "Efi Solution", whatsapp: "573007279875", email }. Todo el código referencia SITE.*, nunca valores hardcodeados. Así el futuro cambio de nombre/dominio será un solo edit.
- Nunca prometer en el copy nada no confirmado (garantías, plazos): usar los textos exactos que se te den.
- El sitio promete "0 cookies de rastreo": ninguna solución técnica puede introducir cookies ni trackers de terceros.

## Verificación estándar tras cada tarea
`npm run build` sin errores + revisar el HTML generado en dist/ con grep cuando aplique.