# Correcciones para el sitio Efi Solution

> Instrucciones para Claude Code. Aplica los cambios sobre el proyecto Astro existente.
> NO compres dominios, NO hagas deploy, NO cambies configuración de Cloudflare. Eso lo hace Juan manualmente.
> Trabaja por fases en orden. Confirma cada fase antes de pasar a la siguiente.

---

## Contexto del proyecto

- Stack: Astro 5 + Vite + React, Tailwind CSS.
- Alojado en Cloudflare Workers (URL actual: `efisolution.jmlagos2003.workers.dev`).
- Sitio multiidioma: ES (default), EN, PT, FR.
- Equipo: Juan Manuel (desarrollo) y Sarai (UX/estrategia).
- Es una agencia que ofrece desarrollo web de alto rendimiento.

## Objetivo de estas correcciones

El sitio atrae estafadores en Fiverr y no clientes serios. Las causas son: (1) credibilidad débil por métricas no respaldadas, (2) promesas técnicas por encima de lo que el equipo puede sostener, (3) posicionamiento de precio bajo. Estas correcciones buscan honestidad verificable y enfoque en servicios entregables sin riesgo técnico alto.

**Principio rector:** no prometer nada que no se pueda entregar y demostrar. Es preferible una promesa modesta y cumplida a una grande que genere una mala reseña.

---

## FASE 1 — Credibilidad: reescribir los casos (PRIORIDAD MÁXIMA)

Los proyectos actuales (Navegador Social, Mapa de Lluvias, Mapa de Kennedy, Calculadora de Liquidación) están presentados como "Casos de éxito" con métricas de cliente ("95% ahorro operativo", "93% menos rebote"). No hay cliente real detrás, así que estas cifras se leen como infladas y restan credibilidad ante un comprador con experiencia.

**Tarea:**

1. Renombrar la sección de "Casos de éxito" a algo honesto como "Proyectos" o "Trabajo seleccionado" (y sus equivalentes en EN/PT/FR: "Selected Work", "Projetos", "Travaux").

2. Para cada proyecto, reemplazar las métricas de resultado de negocio inventadas por **datos técnicos verificables**. Mantener solo lo que se puede comprobar abriendo el sitio:
   - Tiempo de carga / respuesta (medible con Lighthouse o PageSpeed).
   - Score de Lighthouse real (verificar el número actual, no asumir 100/100).
   - Stack técnico usado.
   - Qué problema técnico resuelve.
   - Eliminar cifras como "95% ahorro operativo", "93% menos rebote", "20+ zonas cubiertas" salvo que se puedan respaldar con una fuente real.

3. Añadir una etiqueta honesta a cada proyecto que aclare su naturaleza, por ejemplo: "Proyecto propio" o "Demostración técnica". No presentarlos como encargos de clientes pagos.

4. Verificar cada Lighthouse score que se afirme. Si un proyecto no da 100/100 real, poner el número real o quitar la afirmación.

**Texto sugerido para el encabezado de la sección (ES):**
> "Proyectos que demuestran nuestro enfoque: rendimiento real, código limpio y experiencias rápidas. Selecciona uno para ver el contexto técnico."

---

## FASE 2 — Enfoque de servicios: reducir el riesgo técnico

La sección de Servicios ofrece actualmente "Sistemas y automatización" con "FastAPI y Spring Boot", "APIs y procesos robustos", "observabilidad". Eso implica mantener backend en producción, algo que no conviene vender todavía si la base de código real depende fuertemente de asistentes de IA. Un backend que falla con un cliente real esperando es el peor escenario reputacional.

**Tarea:**

1. Reordenar los servicios para que el primero y más destacado sea el de **menor riesgo técnico y mayor dominio**: sitios estáticos / landing pages de alto rendimiento en Astro. Este es el servicio estrella.

2. Añadir un servicio de entrada de bajo riesgo y alto valor percibido: **Auditoría de rendimiento web**. El sitio ya menciona "auditoría 48h" pero no está como servicio vendible. Convertirlo en una oferta clara: análisis con Lighthouse/PageSpeed + informe priorizado de mejoras. Es la puerta de entrada barata al cliente.

3. Suavizar o mover el servicio de backend/automatización. Opciones (elegir una y comentarla en el código para que Juan decida):
   - **Opción A (recomendada):** quitarlo temporalmente hasta tener un caso real de backend en producción.
   - **Opción B:** mantenerlo pero reformularlo como "integraciones y automatización con n8n" (que Juan sí domina) en vez de "APIs robustas con Spring Boot/FastAPI".
   - Dejar un comentario `<!-- DECIDIR: Juan elige opción A o B -->` en el código.

4. Revisar todos los textos de servicios en los 4 idiomas para que sean consistentes con el nuevo enfoque.

---

## FASE 3 — Posicionamiento y textos de conversión

**Tarea:**

1. **Quitar "Trabajo remoto para LATAM"** de la sección de contacto. Para clientes internacionales (Fiverr en inglés), "LATAM" señala precio bajo y atrae cazadores de gangas. Reemplazar por algo neutro como "Trabajo 100% remoto" / "Fully remote".

2. Revisar el inglés de la versión EN del sitio. Como el público de Fiverr es mayoritariamente anglosajón, el inglés debe ser impecable. Marcar con comentarios cualquier frase que suene a traducción literal del español para revisión.

3. Revisar las cifras del hero ("0.9s tiempo de carga", "+35% mejora conversión", "100/100 Lighthouse", "48h auditoría"):
   - "+35% mejora conversión" no es respaldable sin un caso real. Reemplazar por una afirmación verificable o quitarla.
   - Verificar que "0.9s" y "100/100" sean ciertos para el sitio propio (correr Lighthouse sobre la home).
   - "48h auditoría" está bien si de verdad se compromete ese tiempo.

4. Las estadísticas citadas ("53% de usuarios abandonan si la carga supera 3s", "7% de caída en conversiones por segundo") son datos de la industria. Está bien usarlas, pero añadir la fuente (ej. Google/Akamai) para que se vean creíbles y no inventadas. Si no se puede citar fuente, reformular como afirmación general sin porcentaje exacto.

---

## FASE 4 — SEO y metadatos

**Tarea:**

1. El `<link rel="canonical">` apunta a `https://efisolution.com/` pero el sitio vive en `workers.dev`. Esto confunde a Google. Hasta que Juan defina el dominio final:
   - Cambiar el canonical para que apunte a la URL real actual (`efisolution.jmlagos2003.workers.dev`), O
   - Dejar un comentario claro `<!-- TODO: actualizar canonical cuando se compre el dominio final -->` y NO apuntar a un dominio que no se controla.

2. Igual con las etiquetas Open Graph (`og:url`, `og:image`): apuntan a `efisolution.com`. La `og:image` (`https://efisolution.com/og-image.jpg`) probablemente da 404. Verificar que exista una imagen OG real en el dominio actual o crear una y referenciarla correctamente.

3. Revisar que cada versión de idioma (ES/EN/PT/FR) tenga sus propias etiquetas `hreflang` correctas para no canibalizar SEO entre idiomas.

4. Verificar que las meta descripciones sean distintas y relevantes por idioma.

---

## FASE 5 — Confianza y contacto

**Tarea:**

1. La sección de equipo (Juan Manuel / Sarai) está bien y humaniza la marca. Mantenerla. Considerar añadir foto real o avatar consistente (no obligatorio).

2. Verificar que el formulario de contacto realmente envíe a algún lado (revisar el handler). Un formulario que no funciona pierde leads. Si usa un servicio (Formspree, Cloudflare, etc.), confirmar que esté bien conectado. Si no envía a ningún lado, marcarlo con `<!-- TODO: conectar formulario a un endpoint real -->`.

3. El enlace de WhatsApp (`wa.me/573007279875`) está bien. Verificar que el número sea correcto.

4. Confirmar que la página de Política de Privacidad (`/privacidad`) exista y tenga contenido real, ya que el formulario la enlaza y la pide como checkbox obligatorio.

---

## Lo que NO debe hacer Claude Code

- NO comprar ni configurar dominios.
- NO hacer deploy a Cloudflare ni a ningún lado.
- NO modificar configuración de DNS, Workers o Pages.
- NO inventar nuevas métricas para reemplazar las viejas. Si un dato no es verificable, se quita, no se sustituye por otro inventado.
- NO añadir testimonios de clientes falsos.

## Orden de ejecución sugerido

1. Fase 1 (credibilidad de casos) — el cambio de mayor impacto.
2. Fase 3 (textos de conversión y posicionamiento).
3. Fase 2 (reenfoque de servicios) — requiere decisión de Juan en el punto 3.
4. Fase 4 (SEO).
5. Fase 5 (confianza y contacto).

Confirmar con Juan después de cada fase antes de continuar.