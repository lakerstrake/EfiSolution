export type Locale = 'es' | 'en' | 'pt' | 'fr';

type NavLink = { href: string; label: string };
type HeroMetric = { value: string; label: string };
type ProblemBlock = { tag: string; headline: string; body: string };
type ServiceItem = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  iconPath: string;
};
type ServiceStep = { k: string; v: string; d: string; desc: string };
// TODO VERIFICAR (Juan): cada métrica con label 'Lighthouse' y valor 100 ("100/100")
// debe confirmarse corriendo Lighthouse real sobre la URL del proyecto. Si no da 100,
// pon el número real o elimina la métrica. Aplica a los 4 idiomas (es/en/pt/fr).
type CaseMetric = { value: number; suffix: string; label: string; decimals?: number };
type CaseItem = {
  key: string;
  name: string;
  sector: string;
  tag: string;
  image: string;
  url: string | null;
  summary: string;
  result: string;
  stack: string[];
  metrics: CaseMetric[];
};
type TeamMember = { name: string; role: string; bio: string; initials: string };
type AIBenefit = { title: string; body: string };
type PlanContent = { name: string; tagline: string; audience: string; features: string[]; cta: string; waMessage: string };
type Testimonial = { quote: string; name: string; role: string; initials: string; highlight: string; logo?: string };

type SiteContent = {
  meta: { title: string; description: string };
  nav: {
    links: NavLink[];
    cta: string;
    ctaPlans: string;
    mobileMenu: string;
    mainLabel: string;
    themeToggle: string;
  };
  hero: {
    badge: string;
    titleA: string;
    titleB: string;
    description: string;
    ctaPrimary: string;
    ctaGhost: string;
    metrics: HeroMetric[];
  };
  ai: {
    badge: string;
    title: string;
    description: string;
    exampleTag: string;
    exampleText: string;
    flowPhoto: string;
    flowResult: string;
    beforeLabel: string;
    afterLabel: string;
    scanLabel: string;
    doneLabel: string;
    frameLabel: string;
    benefits: AIBenefit[];
    cta: string;
    waMessage: string;
  };
  clientCase: {
    badge: string;
    realLabel: string;
    title: string;
    name: string;
    sector: string;
    problemLabel: string;
    problem: string;
    builtLabel: string;
    built: string[];
    resultsLabel: string;
    results: string[];
    visit: string;
    cta: string;
    waMessage: string;
  };
  testimonials: {
    badge: string;
    title: string;
    description: string;
    verifiedLabel: string;
    items: Testimonial[];
  };
  problem: {
    badge: string;
    titleA: string;
    titleB: string;
    description: string;
    statA: string;
    statB: string;
    sequenceLabel: string;
    blocks: ProblemBlock[];
  };
  services: {
    badge: string;
    title: string;
    description: string;
    listLabel: string;
    processLabel: string;
    services: ServiceItem[];
    steps: ServiceStep[];
  };
  approach: {
    badge: string;
    title: string;
    description: string;
    pillars: { title: string; body: string }[];
  };
  cases: {
    badge: string;
    title: string;
    description: string;
    tabLabel: string;
    prev: string;
    next: string;
    live: string;
    resultPrefix: string;
    visit: string;
    items: CaseItem[];
  };
  pricing: {
    badge: string;
    title: string;
    description: string;
    perMonth: string;
    setupLabel: string;
    monthlyLabel: string;
    recommendedLabel: string;
    plans: { esencial: PlanContent; profesional: PlanContent; escala: PlanContent };
  };
  contact: {
    badge: string;
    titleA: string;
    titleB: string;
    description: string;
    cta: string;
    ctaAria: string;
    benefitsLabel: string;
    benefits: string[];
    form: {
      name: string;
      namePh: string;
      email: string;
      emailPh: string;
      message: string;
      messagePh: string;
      send: string;
      sending: string;
      success: string;
      error: string;
      whatsapp: string;
      whatsappMessage: string;
      consent: string;
    };
    team: TeamMember[];
  };
  footer: {
    madeIn: string;
    syncLabel: string;
    commitLabel: string;
    timezone: string;
    siteInfo: string;
    dateLocale: string;
  };
};

export const supportedLocales: Locale[] = ['es', 'en', 'pt', 'fr'];

export function localeHref(locale: Locale): string {
  if (locale === 'es') return '/';
  return `/${locale}/`;
}

const siteContent: Record<Locale, SiteContent> = {
  es: {
    meta: {
      title: 'Diseño web e IA para negocios en Bogotá | Efi Solution',
      description: 'Páginas web rápidas para negocios en Bogotá, con IA que automatiza tareas (como subir inventario con una foto) y SEO local para que te encuentren. Auditoría gratis.',
    },
    nav: {
      links: [
        { href: '#ia', label: 'IA' },
        { href: '#servicios', label: 'Servicios' },
        { href: '#casos', label: 'Proyectos' },
        { href: '#planes', label: 'Planes' },
        { href: '#contacto', label: 'Contacto' },
      ],
      cta: 'Solicitar auditoría',
      ctaPlans: 'Ver planes',
      mobileMenu: 'Abrir menú',
      mainLabel: 'Navegación principal',
      themeToggle: 'Alternar tema claro y oscuro',
    },
    hero: {
      badge: 'Desarrollo web + IA para negocios',
      titleA: 'Tu idea o tu problema,',
      titleB: 'resuelto con web e IA.',
      description:
        'Nos cuentas qué necesita tu negocio y construimos la solución: una web rápida y una IA que trabaja por ti.',
      ctaPrimary: 'Quiero mi web',
      ctaGhost: 'Agendar auditoría gratuita',
      metrics: [
        { value: '110+', label: 'Productos cargados con IA' },
        { value: '48h', label: 'Auditoría inicial' },
        { value: '5★', label: 'Clientes verificados' },
        { value: '0', label: 'Cookies de rastreo' },
      ],
    },
    ai: {
      badge: 'IA aplicada',
      title: 'Inteligencia artificial que hace el trabajo pesado por ti.',
      description: 'Integramos IA que automatiza tareas reales de tu negocio: ganas tiempo y vendes más, sin volverte experto en tecnología.',
      exampleTag: 'Caso real: Búho Repuestos',
      exampleText: 'Sube una foto y la IA llena el inventario sola. De horas a segundos.',
      flowPhoto: 'Formulario vacío + una foto',
      flowResult: 'Nombre, categoría y código llenos por la IA',
      beforeLabel: 'Antes',
      afterLabel: 'Con IA',
      scanLabel: 'Analizando la foto con IA…',
      doneLabel: '¡Listo! Datos completados solos',
      frameLabel: 'Panel de Búho Repuestos',
      benefits: [
        { title: 'Ahorra horas', body: 'La IA hace lo repetitivo mientras tú atiendes tu negocio.' },
        { title: 'Menos errores', body: 'Datos automáticos: sin precios equivocados ni duplicados.' },
        { title: 'Crece sin contratar', body: 'Más productos y pedidos, sin sumar personal.' },
      ],
      cta: 'Quiero esto para mi negocio',
      waMessage: 'Hola, vi lo de la IA para automatizar tareas y quiero saber cómo aplicarlo a mi negocio.',
    },
    clientCase: {
      badge: 'Cliente real',
      realLabel: 'Proyecto pagado',
      title: 'Una tienda de repuestos que ahora se gestiona sola.',
      name: 'Búho Repuestos B&M',
      sector: 'Repuestos automotrices · Barrios Unidos, Bogotá',
      problemLabel: 'El problema',
      problem: 'Cargar cada repuesto a mano le costaba horas y generaba errores.',
      builtLabel: 'Qué construimos',
      built: [
        'Catálogo online con búsqueda',
        'Panel self-service: él gestiona todo',
        'IA: una foto llena el inventario',
        'Pedidos directos por WhatsApp',
      ],
      resultsLabel: 'Resultados',
      results: [
        '110+ referencias autogestionadas',
        'Productos en segundos, no en minutos',
        'Menos errores de datos',
      ],
      visit: 'Ver buhorepuestos.com',
      cta: 'Quiero algo así para mi negocio',
      waMessage: 'Hola, vi el caso de Búho Repuestos y quiero una web con panel e IA para mi negocio.',
    },
    testimonials: {
      badge: 'Lo que dicen de nosotros',
      title: 'Negocios reales, resultados reales.',
      description: 'Esto dicen quienes ya trabajan con nosotros.',
      verifiedLabel: 'Cliente verificado',
      items: [
        {
          quote: 'Servicio excelente, atención de nivel profesional y acompañamiento impecable. Están pendientes del funcionamiento de la página con tal interés que hacen seguimiento incluso en nuestras instalaciones. De confianza y totalmente recomendable.',
          name: 'Cristian',
          role: 'Dueño · Búho Repuestos B&M',
          initials: 'CR',
          highlight: 'Seguimiento incluso en sitio',
          logo: '/buho-logo.png',
        },
      ],
    },
    problem: {
      badge: 'Diagnóstico',
      titleA: 'El rendimiento no es un detalle técnico.',
      titleB: 'Es una ventaja competitiva.',
      description: 'Una web rápida genera confianza y vende más.',
      statA: 'abandonan si la web tarda más de 3 segundos (Google)',
      statB: 'menos ventas por cada segundo de espera (Akamai)',
      sequenceLabel: 'Secuencia problema impacto solución',
      blocks: [
        {
          tag: 'Problema',
          headline: 'Web lenta, ventas bajas.',
          body: 'El usuario se va antes de conocer tu oferta.',
        },
        {
          tag: 'Impacto',
          headline: 'Más rebote y más costo de adquisición.',
          body: 'Menos conversión, peor SEO, publicidad más cara.',
        },
        {
          tag: 'Solución',
          headline: 'Arquitectura limpia desde el día uno.',
          body: 'Menos peso, más claridad, mejor experiencia.',
        },
      ],
    },
    services: {
      badge: 'Servicios',
      title: 'Todo lo que tu web necesita, en un solo equipo.',
      description: 'Diseño, desarrollo y tecnología para que tu negocio venda más por internet.',
      listLabel: 'Lista de servicios',
      processLabel: 'Proceso de trabajo',
      services: [
        {
          number: '01 / Web',
          title: 'Páginas web que venden',
          description: 'Rápidas, claras y hechas para que te escriban.',
          bullets: ['Apareces en Google', 'Diseño simple y profesional', 'Lista para crecer contigo'],
          iconPath: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
        },
        {
          number: '02 / Auditoría',
          title: 'Revisión de tu web actual',
          description: 'Qué falla, qué mejorar y cómo. En 48 horas.',
          bullets: ['Medimos velocidad y errores', 'Lista de mejoras priorizada', 'Entrega en 48 horas'],
          iconPath: 'M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z',
        },
        {
          number: '03 / Producto',
          title: 'Que tu web sea fácil de usar',
          description: 'Que cualquiera entienda tu web y te compre fácil.',
          bullets: ['Caminos claros para el cliente', 'Probado con personas reales', 'Mejoras continuas'],
          iconPath: 'M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h6',
        },
        // DECIDIR: Juan puede quitar este servicio o mantenerlo así.
        {
          number: '04 / IA',
          title: 'Integraciones y automatización con IA',
          description: 'La IA hace lo repetitivo por ti: cargar, responder, organizar.',
          bullets: ['Tareas repetitivas hechas por IA', 'Tus apps y herramientas conectadas', 'Avisos y tareas automáticas'],
          iconPath: 'M20 13c0 5-3.5 8-8 8s-8-3-8-8 3.5-8 8-8 8 3 8 8zM12 5v8l5 3',
        },
      ],
      steps: [
        { k: '01', v: 'Diagnóstico', d: '48h', desc: 'Análisis profundo de métricas y cuellos de botella.' },
        { k: '02', v: 'Definición', d: '1 sem', desc: 'Estructuración de la arquitectura y plan de acción.' },
        { k: '03', v: 'Construcción', d: '3-6 sem', desc: 'Desarrollo backend y frontend optimizado.' },
        { k: '04', v: 'Lanzamiento', d: 'Día 1', desc: 'Despliegue, pruebas de estrés y monitoreo.' },
      ],
    },
    approach: {
      badge: 'Enfoque',
      title: 'Tecnología con propósito, no solo con estética.',
      description:
        'Productos propios que resuelven problemas reales y se miden en producción.',
      pillars: [
        { title: 'Impacto social', body: 'Información útil para quienes más la necesitan.' },
        { title: 'Rendimiento real', body: 'Rápido incluso en gama baja y mala señal.' },
        { title: 'Diseño accesible', body: 'Claro y usable para cualquier persona.' },
      ],
    },
    cases: {
      badge: 'Proyectos',
      title: 'Proyectos que demuestran nuestro enfoque técnico.',
      description: 'Proyectos propios, medidos en producción. Toca uno para ver el detalle.',
      tabLabel: 'Selección de proyectos',
      prev: 'Anterior',
      next: 'Siguiente',
      live: 'Caso activo',
      resultPrefix: 'Resultado:',
      visit: 'Ver sitio en vivo',
      items: [
        {
          key: 'navegador',
          name: 'Navegador Social',
          sector: 'Impacto social',
          tag: 'Proyecto propio',
          image: '/navegador_social.jpg',
          url: 'https://navegador-social.jmlagos2003.workers.dev/',
          summary: 'Portal ligero para consulta ciudadana en dispositivos con conectividad limitada y bajo consumo de datos.',
          result: 'Mejor acceso a información pública y navegación estable incluso en celulares de gama media-baja.',
          stack: ['JavaScript', 'CSS', 'Cloudflare Workers', 'Edge Runtime'],
          metrics: [
            { value: 0.3, suffix: 's', decimals: 1, label: 'Respuesta inicial' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilidad' },
          ],
        },
        {
          key: 'lluvias',
          name: 'Mapa de Lluvias',
          sector: 'Geodatos',
          tag: 'Proyecto propio',
          image: '/lluvias.jpg',
          url: 'https://lluvias.jmlagos2003.workers.dev/',
          summary: 'Visualización interactiva de lluvias en Bogotá con datos en tiempo real servidos desde el borde de la red.',
          result: 'Consulta hidrográfica instantánea desde cualquier dispositivo, sin instalación ni backend dedicado.',
          stack: ['Cloudflare Workers', 'JavaScript', 'Web APIs', 'Edge Runtime'],
          metrics: [
            { value: 0.4, suffix: 's', decimals: 1, label: 'Respuesta inicial' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilidad' },
          ],
        },
        {
          key: 'kennedy',
          name: 'Mapa de Kennedy',
          sector: 'Geodatos',
          tag: 'Proyecto propio',
          image: '/mapa_kennedy.jpg',
          url: 'https://mapa-kennedy.pages.dev/',
          summary: 'Mapa interactivo optimizado para consulta rápida de puntos de interés sin congelar el navegador.',
          result: 'Experiencia fluida a 60fps con carga por demanda para reducir peso y mejorar usabilidad.',
          stack: ['Leaflet.js', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 0.5, suffix: 's', decimals: 1, label: 'Respuesta inicial' },
            { value: 60, suffix: 'fps', label: 'Fluidez' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilidad' },
          ],
        },
        {
          key: 'calculadora',
          name: 'Calculadora de Liquidación',
          sector: 'Fintech',
          tag: 'Proyecto propio',
          image: '/calculadora_liquidacion.jpg',
          url: 'https://calculadora-liquidacion.pages.dev/',
          summary: 'Herramienta laboral para simulaciones instantáneas con fórmulas legales colombianas.',
          result: 'Cálculos en menos de 100ms ejecutados por completo en el navegador, sin enviar datos a un servidor.',
          stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 100, suffix: 'ms', label: 'Tiempo de cálculo' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilidad' },
          ],
        },
      ],
    },
    pricing: {
      badge: 'Planes',
      title: 'Elige cómo quieres crecer.',
      description: 'Acompañamiento mensual: tu web siempre rápida, al día y mejorando.',
      perMonth: '/mes',
      setupLabel: 'Pago único para empezar',
      monthlyLabel: 'Luego, cada mes',
      recommendedLabel: 'Recomendado',
      plans: {
        esencial: {
          name: 'Esencial',
          tagline: 'Tu negocio online, rápido y bien hecho.',
          audience: 'Para negocios que necesitan presencia profesional ya.',
          features: [
            'Web de una página, rápida y optimizada',
            'Botón de WhatsApp para recibir clientes',
            'SEO básico para que te encuentren en Google',
            'Hospedaje y mantenimiento incluidos',
          ],
          cta: 'Empezar con Esencial',
          waMessage: 'Hola, me interesa el plan Esencial para mi negocio.',
        },
        profesional: {
          name: 'Profesional',
          tagline: 'Una web que gestionas tú y que crece contigo.',
          audience: 'Para negocios que quieren vender más y manejar su web solos.',
          features: [
            'Todo lo del plan Esencial',
            'Web multipágina o catálogo con búsqueda',
            'Panel de administración self-service',
            'SEO local (apareces en tu ciudad)',
            'Una automatización a tu medida',
            'Soporte y mejoras continuas',
          ],
          cta: 'Quiero el plan Profesional',
          waMessage: 'Hola, me interesa el plan Profesional (web + panel admin) para mi negocio.',
        },
        escala: {
          name: 'Escala con IA',
          tagline: 'IA que te ahorra horas, como en Búho Repuestos.',
          audience: 'Para negocios que quieren automatizar y escalar sin contratar.',
          features: [
            'Todo lo del plan Profesional',
            'IA a tu medida (ej. foto → inventario)',
            'Varias automatizaciones de tareas',
            'Integraciones (WhatsApp, pagos, etc.)',
            'Soporte prioritario',
          ],
          cta: 'Hablar del plan Escala',
          waMessage: 'Hola, me interesa el plan Escala con IA para automatizar mi negocio.',
        },
      },
    },
    contact: {
      badge: 'Contacto',
      titleA: 'Transformemos tu web',
      titleB: 'en una ventaja real.',
      description: 'Auditamos tu web y te entregamos un plan concreto y priorizado. Gratis.',
      cta: 'Solicitar auditoría',
      ctaAria: 'Solicitar auditoría por correo',
      benefitsLabel: 'Compromisos de respuesta',
      benefits: ['Respuesta en menos de 12 horas', 'Auditoría sin costo', 'Trabajo 100% remoto'],
      form: {
        name: 'Nombre',
        namePh: 'Tu nombre',
        email: 'Correo',
        emailPh: 'tucorreo@empresa.com',
        message: 'Mensaje',
        messagePh: 'Cuéntanos sobre tu proyecto...',
        send: 'Enviar mensaje',
        sending: 'Enviando...',
        success: '¡Gracias! Te responderemos en menos de 12 horas.',
        error: 'Algo salió mal. Escríbenos por correo o WhatsApp.',
        whatsapp: 'Escríbenos por WhatsApp',
        whatsappMessage: 'Hola, vengo del sitio de Efi Solution y quiero una auditoría web.',
        consent: 'Acepto la',
      },
      team: [
        {
          name: 'Juan Manuel',
          role: 'Ingeniería y arquitectura',
          bio: 'Construye sistemas web y backend con foco en rendimiento, estabilidad y escalabilidad.',
          initials: 'JM',
        },
        {
          name: 'Sarai',
          role: 'UX y estrategia digital',
          bio: 'Diseña experiencias claras para que cada flujo ayude a vender mejor.',
          initials: 'SA',
        },
      ],
    },
    footer: {
      madeIn: 'Hecho en Colombia.',
      syncLabel: 'Sync GH -> CF',
      commitLabel: 'Commit',
      timezone: 'COT',
      siteInfo: 'Información del sitio',
      dateLocale: 'es-CO',
    },
  },
  en: {
    meta: {
      title: 'Web design & AI for small businesses | Efi Solution',
      description: 'Fast websites for small businesses, with AI that automates real tasks (like loading inventory from a photo) and local SEO so customers find you. Free audit.',
    },
    nav: {
      links: [
        { href: '#ia', label: 'AI' },
        { href: '#servicios', label: 'Services' },
        { href: '#casos', label: 'Work' },
        { href: '#planes', label: 'Plans' },
        { href: '#contacto', label: 'Contact' },
      ],
      cta: 'Request audit',
      ctaPlans: 'See plans',
      mobileMenu: 'Open menu',
      mainLabel: 'Main navigation',
      themeToggle: 'Toggle light and dark mode',
    },
    hero: {
      badge: 'Web development + AI for businesses',
      titleA: 'Your idea or your problem,',
      titleB: 'solved with web + AI.',
      description: 'Tell us what your business needs and we build the solution: a fast website and AI that works for you.',
      ctaPrimary: 'I want my website',
      ctaGhost: 'Book a free audit',
      metrics: [
        { value: '110+', label: 'Products loaded by AI' },
        { value: '48h', label: 'Initial audit' },
        { value: '5★', label: 'Verified clients' },
        { value: '0', label: 'Tracking cookies' },
      ],
    },
    ai: {
      badge: 'AI in action',
      title: 'Artificial intelligence that does the heavy lifting for you.',
      description: 'We add AI that automates real tasks in your business: save time and sell more, without becoming a tech expert.',
      exampleTag: 'Real case: Búho Repuestos',
      exampleText: 'Upload one photo and the AI fills the inventory. Hours become seconds.',
      flowPhoto: 'Empty form + one photo',
      flowResult: 'Name, category and code filled by AI',
      beforeLabel: 'Before',
      afterLabel: 'With AI',
      scanLabel: 'Analyzing the photo with AI…',
      doneLabel: 'Done! Data filled on its own',
      frameLabel: 'Búho Repuestos panel',
      benefits: [
        { title: 'Save hours', body: 'The AI does the repetitive work while you run your business.' },
        { title: 'Fewer errors', body: 'Automatic data: no wrong prices or duplicates.' },
        { title: 'Grow without hiring', body: 'More products and orders, no extra staff.' },
      ],
      cta: 'I want this for my business',
      waMessage: 'Hi, I saw the AI automation and I want to know how to apply it to my business.',
    },
    clientCase: {
      badge: 'Real client',
      realLabel: 'Paid project',
      title: 'An auto-parts store that now runs itself.',
      name: 'Búho Repuestos B&M',
      sector: 'Auto parts · Barrios Unidos, Bogotá',
      problemLabel: 'The problem',
      problem: 'Loading every part by hand cost him hours and caused errors.',
      builtLabel: 'What we built',
      built: [
        'Online catalog with search',
        'Self-service panel: he manages it all',
        'AI: one photo fills the inventory',
        'Direct orders via WhatsApp',
      ],
      resultsLabel: 'Results',
      results: [
        '110+ self-managed references',
        'Products in seconds, not minutes',
        'Fewer data errors',
      ],
      visit: 'Visit buhorepuestos.com',
      cta: 'I want something like this',
      waMessage: 'Hi, I saw the Búho Repuestos case and I want a website with an admin panel and AI for my business.',
    },
    testimonials: {
      badge: 'What they say about us',
      title: 'Real businesses, real results.',
      description: 'Here’s what those already working with us say.',
      verifiedLabel: 'Verified client',
      items: [
        {
          quote: 'Excellent service, truly professional attention and impeccable support. They watch over how the website performs with such care that they even follow up at our own premises. Trustworthy and absolutely recommended.',
          name: 'Cristian',
          role: 'Owner · Búho Repuestos B&M',
          initials: 'CR',
          highlight: 'Follow-up even on site',
          logo: '/buho-logo.png',
        },
      ],
    },
    problem: {
      badge: 'Diagnosis',
      titleA: 'Performance is not a technical detail.',
      titleB: 'It is a competitive advantage.',
      description: 'A fast website builds trust and sells more.',
      statA: 'bounce when loading takes over 3 seconds (Google)',
      statB: 'fewer sales for every extra second of delay (Akamai)',
      sequenceLabel: 'Problem impact solution sequence',
      blocks: [
        {
          tag: 'Problem',
          headline: 'Slow site, lower sales.',
          body: 'Users leave before they even see your offer.',
        },
        {
          tag: 'Impact',
          headline: 'More bounce and higher acquisition costs.',
          body: 'Lower conversion, weaker SEO, pricier ads.',
        },
        {
          tag: 'Solution',
          headline: 'Clean architecture from day one.',
          body: 'Less weight, more clarity, better experience.',
        },
      ],
    },
    services: {
      badge: 'Services',
      title: 'Everything your website needs, in one team.',
      description: 'Design, development and tech so your business sells more online.',
      listLabel: 'Service list',
      processLabel: 'Work process',
      services: [
        {
          number: '01 / Web',
          title: 'Websites that sell',
          description: 'Fast, clear and built to get you messages.',
          bullets: ['Show up on Google', 'Simple, professional design', 'Ready to grow with you'],
          iconPath: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
        },
        {
          number: '02 / Audit',
          title: 'A review of your current site',
          description: 'What fails, what to fix and how. In 48 hours.',
          bullets: ['We measure speed and errors', 'Prioritized list of fixes', 'Delivered in 48 hours'],
          iconPath: 'M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z',
        },
        {
          number: '03 / Product',
          title: 'Make your site easy to use',
          description: 'Anyone understands your site and buys easily.',
          bullets: ['Clear paths for the customer', 'Tested with real people', 'Continuous improvements'],
          iconPath: 'M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h6',
        },
        // DECIDIR: Juan puede quitar este servicio o mantenerlo así.
        {
          number: '04 / AI',
          title: 'Integrations and automation with AI',
          description: 'AI does the repetitive work: loading, replying, organizing.',
          bullets: ['Repetitive tasks done by AI', 'Your apps and tools connected', 'Automatic alerts and tasks'],
          iconPath: 'M20 13c0 5-3.5 8-8 8s-8-3-8-8 3.5-8 8-8 8 3 8 8zM12 5v8l5 3',
        },
      ],
      steps: [
        { k: '01', v: 'Diagnosis', d: '48h', desc: 'Deep analysis of metrics and bottlenecks.' },
        { k: '02', v: 'Planning', d: '1 wk', desc: 'Architecture definition and action plan.' },
        { k: '03', v: 'Build', d: '3-6 wk', desc: 'Optimized backend and frontend development.' },
        { k: '04', v: 'Launch', d: 'Day 1', desc: 'Deployment, stress testing and monitoring.' },
      ],
    },
    approach: {
      badge: 'Approach',
      title: 'Technology with purpose, not just aesthetics.',
      description:
        'Our own products that solve real problems and are measured in production.',
      pillars: [
        { title: 'Social impact', body: 'Useful information for those who need it most.' },
        { title: 'Real performance', body: 'Fast even on low-end devices and weak signal.' },
        { title: 'Accessible design', body: 'Clear and usable for everyone.' },
      ],
    },
    cases: {
      badge: 'Selected Work',
      title: 'Projects that show our technical approach.',
      description: 'Our own projects, measured in production. Tap one to see the detail.',
      tabLabel: 'Project selector',
      prev: 'Previous',
      next: 'Next',
      live: 'Active case',
      resultPrefix: 'Result:',
      visit: 'Visit live site',
      items: [
        {
          key: 'navegador',
          name: 'Navegador Social',
          sector: 'Social impact',
          tag: 'Own project',
          image: '/navegador_social.jpg',
          url: 'https://navegador-social.jmlagos2003.workers.dev/',
          summary: 'Lightweight portal for public information on low-connectivity and low-data devices.',
          result: 'Better public access and stable navigation even on mid and low-end phones.',
          stack: ['JavaScript', 'CSS', 'Cloudflare Workers', 'Edge Runtime'],
          metrics: [
            { value: 0.3, suffix: 's', decimals: 1, label: 'Initial response' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Availability' },
          ],
        },
        {
          key: 'lluvias',
          name: 'Bogota Rain Map',
          sector: 'Geodata',
          tag: 'Own project',
          image: '/lluvias.jpg',
          url: 'https://lluvias.jmlagos2003.workers.dev/',
          summary: 'Interactive rain visualization for Bogota with real-time data served from the network edge.',
          result: 'Instant hydrographic queries from any device, no installation or dedicated backend required.',
          stack: ['Cloudflare Workers', 'JavaScript', 'Web APIs', 'Edge Runtime'],
          metrics: [
            { value: 0.4, suffix: 's', decimals: 1, label: 'Initial response' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Availability' },
          ],
        },
        {
          key: 'kennedy',
          name: 'Kennedy Map',
          sector: 'Geodata',
          tag: 'Own project',
          image: '/mapa_kennedy.jpg',
          url: 'https://mapa-kennedy.pages.dev/',
          summary: 'Interactive map optimized for fast point-of-interest browsing without freezing browsers.',
          result: 'Smooth 60fps experience with on-demand loading to reduce weight and improve usability.',
          stack: ['Leaflet.js', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 0.5, suffix: 's', decimals: 1, label: 'Initial response' },
            { value: 60, suffix: 'fps', label: 'Smoothness' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Availability' },
          ],
        },
        {
          key: 'calculadora',
          name: 'Settlement Calculator',
          sector: 'Fintech',
          tag: 'Own project',
          image: '/calculadora_liquidacion.jpg',
          url: 'https://calculadora-liquidacion.pages.dev/',
          summary: 'Labor tool for instant simulations with Colombian legal formulas.',
          result: 'Calculations under 100ms, run entirely in the browser with no data sent to a server.',
          stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 100, suffix: 'ms', label: 'Calculation time' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Availability' },
          ],
        },
      ],
    },
    pricing: {
      badge: 'Plans',
      title: 'Choose how you want to grow.',
      description: 'A monthly partnership: your site always fast, up to date and improving.',
      perMonth: '/mo',
      setupLabel: 'One-time setup to start',
      monthlyLabel: 'Then, every month',
      recommendedLabel: 'Recommended',
      plans: {
        esencial: {
          name: 'Essential',
          tagline: 'Your business online, fast and well built.',
          audience: 'For businesses that need a professional presence now.',
          features: [
            'One-page website, fast and optimized',
            'WhatsApp button to receive customers',
            'Basic SEO so people find you on Google',
            'Hosting and maintenance included',
          ],
          cta: 'Start with Essential',
          waMessage: 'Hi, I am interested in the Essential plan for my business.',
        },
        profesional: {
          name: 'Professional',
          tagline: 'A website you manage yourself that grows with you.',
          audience: 'For businesses that want to sell more and manage their own site.',
          features: [
            'Everything in the Essential plan',
            'Multi-page website or catalog with search',
            'Self-service admin panel',
            'Local SEO (show up in your city)',
            'One custom automation',
            'Support and continuous improvements',
          ],
          cta: 'I want the Professional plan',
          waMessage: 'Hi, I am interested in the Professional plan (website + admin panel) for my business.',
        },
        escala: {
          name: 'Scale with AI',
          tagline: 'AI that saves you hours, like at Búho Repuestos.',
          audience: 'For businesses that want to automate and scale without hiring.',
          features: [
            'Everything in the Professional plan',
            'Custom AI (e.g. photo → inventory)',
            'Several task automations',
            'Integrations (WhatsApp, payments, etc.)',
            'Priority support',
          ],
          cta: 'Talk about the Scale plan',
          waMessage: 'Hi, I am interested in the Scale with AI plan to automate my business.',
        },
      },
    },
    contact: {
      badge: 'Contact',
      titleA: 'Let us turn your website',
      titleB: 'into a real advantage.',
      description: 'We audit your site and deliver a clear, prioritized plan. Free.',
      cta: 'Request audit',
      ctaAria: 'Request audit by email',
      benefitsLabel: 'Response commitments',
      benefits: ['Reply in less than 12 hours', 'Free audit', 'Fully remote'],
      form: {
        name: 'Name',
        namePh: 'Your name',
        email: 'Email',
        emailPh: 'you@company.com',
        message: 'Message',
        messagePh: 'Tell us about your project...',
        send: 'Send message',
        sending: 'Sending...',
        success: 'Thanks! We will reply in less than 12 hours.',
        error: 'Something went wrong. Email or WhatsApp us instead.',
        whatsapp: 'Message us on WhatsApp',
        whatsappMessage: 'Hi, I come from the Efi Solution site and I want a web audit.',
        consent: 'I accept the',
      },
      team: [
        {
          name: 'Juan Manuel',
          role: 'Engineering and architecture',
          bio: 'Builds web and backend systems focused on performance, stability and scalability.',
          initials: 'JM',
        },
        {
          name: 'Sarai',
          role: 'UX and digital strategy',
          bio: 'Designs clear experiences so each flow helps users convert.',
          initials: 'SA',
        },
      ],
    },
    footer: {
      madeIn: 'Made in Colombia.',
      syncLabel: 'Sync GH -> CF',
      commitLabel: 'Commit',
      timezone: 'COT',
      siteInfo: 'Site information',
      dateLocale: 'en-US',
    },
  },
  pt: {
    meta: {
      title: 'Design web e IA para negócios | Efi Solution',
      description: 'Sites rápidos para negócios, com IA que automatiza tarefas (como cadastrar estoque com uma foto) e SEO local para que te encontrem. Auditoria grátis.',
    },
    nav: {
      links: [
        { href: '#ia', label: 'IA' },
        { href: '#servicios', label: 'Serviços' },
        { href: '#casos', label: 'Projetos' },
        { href: '#planes', label: 'Planos' },
        { href: '#contacto', label: 'Contato' },
      ],
      cta: 'Solicitar auditoria',
      ctaPlans: 'Ver planos',
      mobileMenu: 'Abrir menu',
      mainLabel: 'Navegação principal',
      themeToggle: 'Alternar tema claro e escuro',
    },
    hero: {
      badge: 'Desenvolvimento web + IA para negócios',
      titleA: 'Sua ideia ou seu problema,',
      titleB: 'resolvido com web e IA.',
      description: 'Você conta o que seu negócio precisa e nós construímos a solução: um site rápido e uma IA que trabalha por você.',
      ctaPrimary: 'Quero meu site',
      ctaGhost: 'Agendar auditoria gratuita',
      metrics: [
        { value: '110+', label: 'Produtos cadastrados com IA' },
        { value: '48h', label: 'Auditoria inicial' },
        { value: '5★', label: 'Clientes verificados' },
        { value: '0', label: 'Cookies de rastreio' },
      ],
    },
    ai: {
      badge: 'IA aplicada',
      title: 'Inteligência artificial que faz o trabalho pesado por você.',
      description: 'Integramos IA que automatiza tarefas reais do seu negócio: ganha tempo e vende mais, sem virar especialista em tecnologia.',
      exampleTag: 'Caso real: Búho Repuestos',
      exampleText: 'Envie uma foto e a IA preenche o estoque sozinha. De horas a segundos.',
      flowPhoto: 'Formulário vazio + uma foto',
      flowResult: 'Nome, categoria e código preenchidos pela IA',
      beforeLabel: 'Antes',
      afterLabel: 'Com IA',
      scanLabel: 'Analisando a foto com IA…',
      doneLabel: 'Pronto! Dados preenchidos sozinhos',
      frameLabel: 'Painel da Búho Repuestos',
      benefits: [
        { title: 'Economize horas', body: 'A IA faz o repetitivo enquanto você cuida do negócio.' },
        { title: 'Menos erros', body: 'Dados automáticos: sem preços errados nem duplicados.' },
        { title: 'Cresça sem contratar', body: 'Mais produtos e pedidos, sem aumentar a equipe.' },
      ],
      cta: 'Quero isso para o meu negócio',
      waMessage: 'Olá, vi a IA para automatizar tarefas e quero saber como aplicar no meu negócio.',
    },
    clientCase: {
      badge: 'Cliente real',
      realLabel: 'Projeto pago',
      title: 'Uma loja de autopeças que agora se gerencia sozinha.',
      name: 'Búho Repuestos B&M',
      sector: 'Autopeças · Barrios Unidos, Bogotá',
      problemLabel: 'O problema',
      problem: 'Cadastrar cada peça na mão custava horas e gerava erros.',
      builtLabel: 'O que construímos',
      built: [
        'Catálogo online com busca',
        'Painel self-service: ele gerencia tudo',
        'IA: uma foto preenche o estoque',
        'Pedidos diretos pelo WhatsApp',
      ],
      resultsLabel: 'Resultados',
      results: [
        '110+ referências autogerenciadas',
        'Produtos em segundos, não em minutos',
        'Menos erros de dados',
      ],
      visit: 'Ver buhorepuestos.com',
      cta: 'Quero algo assim para o meu negócio',
      waMessage: 'Olá, vi o caso da Búho Repuestos e quero um site com painel e IA para o meu negócio.',
    },
    testimonials: {
      badge: 'O que dizem de nós',
      title: 'Negócios reais, resultados reais.',
      description: 'Veja o que dizem quem já trabalha com a gente.',
      verifiedLabel: 'Cliente verificado',
      items: [
        {
          quote: 'Serviço excelente, atendimento de nível profissional e acompanhamento impecável. Ficam atentos ao funcionamento do site com tanto interesse que fazem acompanhamento até nas nossas instalações. De confiança e totalmente recomendável.',
          name: 'Cristian',
          role: 'Dono · Búho Repuestos B&M',
          initials: 'CR',
          highlight: 'Acompanhamento até no local',
          logo: '/buho-logo.png',
        },
      ],
    },
    problem: {
      badge: 'Diagnóstico',
      titleA: 'Desempenho não é detalhe técnico.',
      titleB: 'É vantagem competitiva.',
      description: 'Um site rápido gera confiança e vende mais.',
      statA: 'abandonam se o site demora mais de 3 segundos (Google)',
      statB: 'menos vendas por cada segundo de espera (Akamai)',
      sequenceLabel: 'Sequência problema impacto solução',
      blocks: [
        {
          tag: 'Problema',
          headline: 'Site lento, menos vendas.',
          body: 'O usuário sai antes de conhecer sua oferta.',
        },
        {
          tag: 'Impacto',
          headline: 'Mais rejeição e maior custo de aquisição.',
          body: 'Menos conversão, pior SEO, anúncios mais caros.',
        },
        {
          tag: 'Solução',
          headline: 'Arquitetura limpa desde o primeiro dia.',
          body: 'Menos peso, mais clareza, melhor experiência.',
        },
      ],
    },
    services: {
      badge: 'Serviços',
      title: 'Tudo o que seu site precisa, em um só time.',
      description: 'Design, desenvolvimento e tecnologia para o seu negócio vender mais pela internet.',
      listLabel: 'Lista de serviços',
      processLabel: 'Processo de trabalho',
      services: [
        {
          number: '01 / Web',
          title: 'Sites que vendem',
          description: 'Rápidos, claros e feitos para te chamarem.',
          bullets: ['Apareça no Google', 'Design simples e profissional', 'Pronto para crescer com você'],
          iconPath: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
        },
        {
          number: '02 / Auditoria',
          title: 'Revisão do seu site atual',
          description: 'O que falha, o que melhorar e como. Em 48 horas.',
          bullets: ['Medimos velocidade e erros', 'Lista de melhorias priorizada', 'Entrega em 48 horas'],
          iconPath: 'M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z',
        },
        {
          number: '03 / Produto',
          title: 'Deixe seu site fácil de usar',
          description: 'Qualquer um entende seu site e compra fácil.',
          bullets: ['Caminhos claros para o cliente', 'Testado com pessoas reais', 'Melhorias contínuas'],
          iconPath: 'M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h6',
        },
        // DECIDIR: Juan puede quitar este servicio o mantenerlo así.
        {
          number: '04 / IA',
          title: 'Integrações e automação com IA',
          description: 'A IA faz o repetitivo por você: cadastrar, responder, organizar.',
          bullets: ['Tarefas repetitivas feitas por IA', 'Seus apps e ferramentas conectados', 'Avisos e tarefas automáticas'],
          iconPath: 'M20 13c0 5-3.5 8-8 8s-8-3-8-8 3.5-8 8-8 8 3 8 8zM12 5v8l5 3',
        },
      ],
      steps: [
        { k: '01', v: 'Diagnóstico', d: '48h', desc: 'Análise profunda de métricas e gargalos.' },
        { k: '02', v: 'Planejamento', d: '1 sem', desc: 'Estruturação da arquitetura e plano de ação.' },
        { k: '03', v: 'Construção', d: '3-6 sem', desc: 'Desenvolvimento backend e frontend otimizado.' },
        { k: '04', v: 'Lançamento', d: 'Dia 1', desc: 'Deploy, testes de estresse e monitoramento.' },
      ],
    },
    approach: {
      badge: 'Abordagem',
      title: 'Tecnologia com propósito, não apenas estética.',
      description:
        'Produtos próprios que resolvem problemas reais e são medidos em produção.',
      pillars: [
        { title: 'Impacto social', body: 'Informação útil para quem mais precisa.' },
        { title: 'Desempenho real', body: 'Rápido até em celulares simples e sinal fraco.' },
        { title: 'Design acessível', body: 'Claro e usável para qualquer pessoa.' },
      ],
    },
    cases: {
      badge: 'Projetos',
      title: 'Projetos que mostram nossa abordagem técnica.',
      description: 'Projetos próprios, medidos em produção. Toque em um para ver o detalhe.',
      tabLabel: 'Seletor de projetos',
      prev: 'Anterior',
      next: 'Próximo',
      live: 'Caso ativo',
      resultPrefix: 'Resultado:',
      visit: 'Ver site ao vivo',
      items: [
        {
          key: 'navegador',
          name: 'Navegador Social',
          sector: 'Impacto social',
          tag: 'Projeto próprio',
          image: '/navegador_social.jpg',
          url: 'https://navegador-social.jmlagos2003.workers.dev/',
          summary: 'Portal leve para informação pública em dispositivos com conectividade limitada e baixo consumo de dados.',
          result: 'Melhor acesso à informação pública e navegação estável em celulares de média e baixa gama.',
          stack: ['JavaScript', 'CSS', 'Cloudflare Workers', 'Edge Runtime'],
          metrics: [
            { value: 0.3, suffix: 's', decimals: 1, label: 'Resposta inicial' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilidade' },
          ],
        },
        {
          key: 'lluvias',
          name: 'Mapa de Chuvas de Bogotá',
          sector: 'Geodados',
          tag: 'Projeto próprio',
          image: '/lluvias.jpg',
          url: 'https://lluvias.jmlagos2003.workers.dev/',
          summary: 'Visualização interativa de chuvas em Bogotá com dados em tempo real servidos na borda da rede.',
          result: 'Consulta hidrográfica instantânea de qualquer dispositivo, sem instalação ou backend dedicado.',
          stack: ['Cloudflare Workers', 'JavaScript', 'Web APIs', 'Edge Runtime'],
          metrics: [
            { value: 0.4, suffix: 's', decimals: 1, label: 'Resposta inicial' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilidade' },
          ],
        },
        {
          key: 'kennedy',
          name: 'Mapa de Kennedy',
          sector: 'Geodados',
          tag: 'Projeto próprio',
          image: '/mapa_kennedy.jpg',
          url: 'https://mapa-kennedy.pages.dev/',
          summary: 'Mapa interativo otimizado para consulta rápida de pontos de interesse sem travar o navegador.',
          result: 'Experiência fluida a 60fps com carga sob demanda para reduzir peso e melhorar usabilidade.',
          stack: ['Leaflet.js', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 0.5, suffix: 's', decimals: 1, label: 'Resposta inicial' },
            { value: 60, suffix: 'fps', label: 'Fluidez' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilidade' },
          ],
        },
        {
          key: 'calculadora',
          name: 'Calculadora de Rescisão',
          sector: 'Fintech',
          tag: 'Projeto próprio',
          image: '/calculadora_liquidacion.jpg',
          url: 'https://calculadora-liquidacion.pages.dev/',
          summary: 'Ferramenta trabalhista para simulações instantâneas com fórmulas legais colombianas.',
          result: 'Cálculos em menos de 100ms, executados inteiramente no navegador, sem enviar dados a um servidor.',
          stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 100, suffix: 'ms', label: 'Tempo de cálculo' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilidade' },
          ],
        },
      ],
    },
    pricing: {
      badge: 'Planos',
      title: 'Escolha como você quer crescer.',
      description: 'Acompanhamento mensal: seu site sempre rápido, atualizado e melhorando.',
      perMonth: '/mês',
      setupLabel: 'Pagamento único para começar',
      monthlyLabel: 'Depois, todo mês',
      recommendedLabel: 'Recomendado',
      plans: {
        esencial: {
          name: 'Essencial',
          tagline: 'Seu negócio online, rápido e bem feito.',
          audience: 'Para negócios que precisam de presença profissional já.',
          features: [
            'Site de uma página, rápido e otimizado',
            'Botão de WhatsApp para receber clientes',
            'SEO básico para te acharem no Google',
            'Hospedagem e manutenção incluídas',
          ],
          cta: 'Começar com Essencial',
          waMessage: 'Olá, tenho interesse no plano Essencial para o meu negócio.',
        },
        profesional: {
          name: 'Profissional',
          tagline: 'Um site que você mesmo gerencia e que cresce com você.',
          audience: 'Para negócios que querem vender mais e gerenciar o próprio site.',
          features: [
            'Tudo do plano Essencial',
            'Site multipágina ou catálogo com busca',
            'Painel de administração self-service',
            'SEO local (apareça na sua cidade)',
            'Uma automação sob medida',
            'Suporte e melhorias contínuas',
          ],
          cta: 'Quero o plano Profissional',
          waMessage: 'Olá, tenho interesse no plano Profissional (site + painel admin) para o meu negócio.',
        },
        escala: {
          name: 'Escala com IA',
          tagline: 'IA que economiza horas, como na Búho Repuestos.',
          audience: 'Para negócios que querem automatizar e escalar sem contratar.',
          features: [
            'Tudo do plano Profissional',
            'IA sob medida (ex. foto → estoque)',
            'Várias automações de tarefas',
            'Integrações (WhatsApp, pagamentos, etc.)',
            'Suporte prioritário',
          ],
          cta: 'Falar do plano Escala',
          waMessage: 'Olá, tenho interesse no plano Escala com IA para automatizar o meu negócio.',
        },
      },
    },
    contact: {
      badge: 'Contato',
      titleA: 'Vamos transformar seu site',
      titleB: 'em uma vantagem real.',
      description: 'Auditamos seu site e entregamos um plano claro e priorizado. Grátis.',
      cta: 'Solicitar auditoria',
      ctaAria: 'Solicitar auditoria por email',
      benefitsLabel: 'Compromissos de resposta',
      benefits: ['Resposta em menos de 12 horas', 'Auditoria sem custo', 'Trabalho 100% remoto'],
      form: {
        name: 'Nome',
        namePh: 'Seu nome',
        email: 'E-mail',
        emailPh: 'voce@empresa.com',
        message: 'Mensagem',
        messagePh: 'Conte sobre seu projeto...',
        send: 'Enviar mensagem',
        sending: 'Enviando...',
        success: 'Obrigado! Respondemos em menos de 12 horas.',
        error: 'Algo deu errado. Fale por e-mail ou WhatsApp.',
        whatsapp: 'Fale no WhatsApp',
        whatsappMessage: 'Olá, venho do site da Efi Solution e quero uma auditoria web.',
        consent: 'Aceito a',
      },
      team: [
        {
          name: 'Juan Manuel',
          role: 'Engenharia e arquitetura',
          bio: 'Constrói sistemas web e backend com foco em desempenho, estabilidade e escalabilidade.',
          initials: 'JM',
        },
        {
          name: 'Sarai',
          role: 'UX e estratégia digital',
          bio: 'Desenha experiências claras para que cada fluxo ajude a converter melhor.',
          initials: 'SA',
        },
      ],
    },
    footer: {
      madeIn: 'Feito na Colômbia.',
      syncLabel: 'Sync GH -> CF',
      commitLabel: 'Commit',
      timezone: 'COT',
      siteInfo: 'Informações do site',
      dateLocale: 'pt-BR',
    },
  },
  fr: {
    meta: {
      title: 'Sites web et IA pour entreprises | Efi Solution',
      description: 'Des sites rapides pour les petites entreprises, avec une IA qui automatise des taches (comme remplir l’inventaire avec une photo) et un SEO local. Audit gratuit.',
    },
    nav: {
      links: [
        { href: '#ia', label: 'IA' },
        { href: '#servicios', label: 'Services' },
        { href: '#casos', label: 'Projets' },
        { href: '#planes', label: 'Offres' },
        { href: '#contacto', label: 'Contact' },
      ],
      cta: 'Demander un audit',
      ctaPlans: 'Voir les offres',
      mobileMenu: 'Ouvrir le menu',
      mainLabel: 'Navigation principale',
      themeToggle: 'Basculer entre theme clair et sombre',
    },
    hero: {
      badge: 'Developpement web + IA pour entreprises',
      titleA: 'Votre idee ou votre probleme,',
      titleB: 'resolu avec web + IA.',
      description:
        'Dites-nous ce dont votre activite a besoin : nous construisons la solution, un site rapide et une IA qui travaille pour vous.',
      ctaPrimary: 'Je veux mon site',
      ctaGhost: 'Reserver un audit gratuit',
      metrics: [
        { value: '110+', label: 'Produits charges par IA' },
        { value: '48h', label: 'Audit initial' },
        { value: '5★', label: 'Clients verifies' },
        { value: '0', label: 'Cookies de suivi' },
      ],
    },
    ai: {
      badge: 'IA appliquee',
      title: 'Une intelligence artificielle qui fait le gros du travail pour vous.',
      description: 'Nous integrons une IA qui automatise des taches reelles de votre activite : gagnez du temps et vendez plus, sans devenir expert.',
      exampleTag: 'Cas reel : Búho Repuestos',
      exampleText: 'Une photo et l’IA remplit l’inventaire toute seule. Des heures aux secondes.',
      flowPhoto: 'Formulaire vide + une photo',
      flowResult: 'Nom, categorie et code remplis par l’IA',
      beforeLabel: 'Avant',
      afterLabel: 'Avec IA',
      scanLabel: 'Analyse de la photo par l’IA…',
      doneLabel: 'C’est fait ! Donnees remplies toutes seules',
      frameLabel: 'Panneau de Búho Repuestos',
      benefits: [
        { title: 'Gagnez des heures', body: 'L’IA fait le repetitif pendant que vous gerez votre activite.' },
        { title: 'Moins d’erreurs', body: 'Donnees automatiques : sans prix errones ni doublons.' },
        { title: 'Grandir sans embaucher', body: 'Plus de produits et de commandes, sans personnel en plus.' },
      ],
      cta: 'Je veux ca pour mon entreprise',
      waMessage: 'Bonjour, j’ai vu l’IA pour automatiser les taches et je veux savoir comment l’appliquer a mon entreprise.',
    },
    clientCase: {
      badge: 'Client reel',
      realLabel: 'Projet paye',
      title: 'Un magasin de pieces auto qui se gere desormais tout seul.',
      name: 'Búho Repuestos B&M',
      sector: 'Pieces auto · Barrios Unidos, Bogota',
      problemLabel: 'Le probleme',
      problem: 'Saisir chaque piece a la main lui coutait des heures et generait des erreurs.',
      builtLabel: 'Ce que nous avons construit',
      built: [
        'Catalogue en ligne avec recherche',
        'Panneau self-service : il gere tout',
        'IA : une photo remplit l’inventaire',
        'Commandes directes via WhatsApp',
      ],
      resultsLabel: 'Resultats',
      results: [
        '110+ references autogerees',
        'Produits en secondes, pas en minutes',
        'Moins d’erreurs de donnees',
      ],
      visit: 'Voir buhorepuestos.com',
      cta: 'Je veux quelque chose comme ca',
      waMessage: 'Bonjour, j’ai vu le cas Búho Repuestos et je veux un site avec panneau d’administration et IA pour mon entreprise.',
    },
    testimonials: {
      badge: 'Ce qu’ils disent de nous',
      title: 'De vraies entreprises, de vrais resultats.',
      description: 'Voici ce que disent ceux qui travaillent deja avec nous.',
      verifiedLabel: 'Client verifie',
      items: [
        {
          quote: 'Service excellent, une attention vraiment professionnelle et un accompagnement impeccable. Ils suivent le fonctionnement du site avec un tel interet qu’ils assurent meme un suivi dans nos locaux. Fiable et totalement recommandable.',
          name: 'Cristian',
          role: 'Proprietaire · Búho Repuestos B&M',
          initials: 'CR',
          highlight: 'Suivi meme sur place',
          logo: '/buho-logo.png',
        },
      ],
    },
    problem: {
      badge: 'Diagnostic',
      titleA: 'La performance n’est pas un detail technique.',
      titleB: 'C’est un avantage concurrentiel.',
      description: 'Un site rapide inspire confiance et vend plus.',
      statA: 'abandonnent si le site met plus de 3 secondes (Google)',
      statB: 'de ventes en moins par seconde d’attente (Akamai)',
      sequenceLabel: 'Sequence probleme impact solution',
      blocks: [
        {
          tag: 'Probleme',
          headline: 'Site lent, ventes en baisse.',
          body: 'L’utilisateur part avant de decouvrir votre offre.',
        },
        {
          tag: 'Impact',
          headline: 'Plus de rebond et un cout d’acquisition plus eleve.',
          body: 'Moins de conversion, SEO affaibli, pubs plus cheres.',
        },
        {
          tag: 'Solution',
          headline: 'Une architecture propre des le premier jour.',
          body: 'Moins de poids, plus de clarte, meilleure experience.',
        },
      ],
    },
    services: {
      badge: 'Services',
      title: 'Tout ce dont votre site a besoin, dans une seule equipe.',
      description: 'Design, developpement et technologie pour que votre activite vende plus en ligne.',
      listLabel: 'Liste des services',
      processLabel: 'Processus de travail',
      services: [
        {
          number: '01 / Web',
          title: 'Des sites qui vendent',
          description: 'Rapides, clairs et faits pour qu’on vous contacte.',
          bullets: ['Apparaissez sur Google', 'Design simple et professionnel', 'Pret a grandir avec vous'],
          iconPath: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
        },
        {
          number: '02 / Audit',
          title: 'Un bilan de votre site actuel',
          description: 'Ce qui bloque, quoi ameliorer et comment. En 48 heures.',
          bullets: ['Nous mesurons vitesse et erreurs', 'Liste d’ameliorations prioritaire', 'Livraison en 48 heures'],
          iconPath: 'M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z',
        },
        {
          number: '03 / Produit',
          title: 'Rendre votre site facile a utiliser',
          description: 'Tout le monde comprend votre site et achete facilement.',
          bullets: ['Des parcours clairs pour le client', 'Teste avec de vraies personnes', 'Ameliorations continues'],
          iconPath: 'M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h6',
        },
        // DECIDIR: Juan puede quitar este servicio o mantenerlo así.
        {
          number: '04 / IA',
          title: 'Integrations et automatisation avec IA',
          description: 'L’IA fait le repetitif : saisir, repondre, organiser.',
          bullets: ['Taches repetitives faites par l’IA', 'Vos apps et outils connectes', 'Alertes et taches automatiques'],
          iconPath: 'M20 13c0 5-3.5 8-8 8s-8-3-8-8 3.5-8 8-8 8 3 8 8zM12 5v8l5 3',
        },
      ],
      steps: [
        { k: '01', v: 'Diagnostic', d: '48h', desc: 'Analyse approfondie des metriques et des goulots d’etranglement.' },
        { k: '02', v: 'Cadrage', d: '1 sem', desc: 'Definition de l’architecture et plan d’action.' },
        { k: '03', v: 'Construction', d: '3-6 sem', desc: 'Developpement backend et frontend optimise.' },
        { k: '04', v: 'Lancement', d: 'Jour 1', desc: 'Deploiement, tests de charge et monitoring.' },
      ],
    },
    approach: {
      badge: 'Approche',
      title: 'La technologie avec un but, pas seulement de l’esthétique.',
      description:
        'Nos propres produits qui resolvent de vrais problemes et se mesurent en production.',
      pillars: [
        { title: 'Impact social', body: 'L’information utile a ceux qui en ont le plus besoin.' },
        { title: 'Performance réelle', body: 'Rapide meme sur petits appareils et signal faible.' },
        { title: 'Design accessible', body: 'Clair et utilisable par tout le monde.' },
      ],
    },
    cases: {
      badge: 'Travaux',
      title: 'Des projets qui montrent notre approche technique.',
      description: 'Nos propres projets, mesures en production. Touchez-en un pour voir le detail.',
      tabLabel: 'Selecteur de projets',
      prev: 'Precedent',
      next: 'Suivant',
      live: 'Cas actif',
      resultPrefix: 'Resultat :',
      visit: 'Voir le site en ligne',
      items: [
        {
          key: 'navegador',
          name: 'Navegador Social',
          sector: 'Impact social',
          tag: 'Projet interne',
          image: '/navegador_social.jpg',
          url: 'https://navegador-social.jmlagos2003.workers.dev/',
          summary: 'Portail leger pour l’information publique sur des appareils a faible connectivite et faible consommation de donnees.',
          result: 'Meilleur acces public et navigation stable meme sur des telephones d’entree et de milieu de gamme.',
          stack: ['JavaScript', 'CSS', 'Cloudflare Workers', 'Edge Runtime'],
          metrics: [
            { value: 0.3, suffix: 's', decimals: 1, label: 'Reponse initiale' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilite' },
          ],
        },
        {
          key: 'lluvias',
          name: 'Carte des pluies de Bogota',
          sector: 'Geodonnees',
          tag: 'Projet interne',
          image: '/lluvias.jpg',
          url: 'https://lluvias.jmlagos2003.workers.dev/',
          summary: 'Visualisation interactive des pluies a Bogota avec des donnees en temps reel servies depuis la peripherie du reseau.',
          result: 'Consultation hydrographique instantanee depuis n’importe quel appareil, sans installation ni backend dedie.',
          stack: ['Cloudflare Workers', 'JavaScript', 'Web APIs', 'Edge Runtime'],
          metrics: [
            { value: 0.4, suffix: 's', decimals: 1, label: 'Reponse initiale' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilite' },
          ],
        },
        {
          key: 'kennedy',
          name: 'Carte de Kennedy',
          sector: 'Geodonnees',
          tag: 'Projet interne',
          image: '/mapa_kennedy.jpg',
          url: 'https://mapa-kennedy.pages.dev/',
          summary: 'Carte interactive optimisee pour une consultation rapide des points d’interet sans figer le navigateur.',
          result: 'Experience fluide a 60 fps avec chargement a la demande pour reduire le poids et ameliorer l’utilisabilite.',
          stack: ['Leaflet.js', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 0.5, suffix: 's', decimals: 1, label: 'Reponse initiale' },
            { value: 60, suffix: 'fps', label: 'Fluidite' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilite' },
          ],
        },
        {
          key: 'calculadora',
          name: 'Calculateur d’indemnites',
          sector: 'Fintech',
          tag: 'Projet interne',
          image: '/calculadora_liquidacion.jpg',
          url: 'https://calculadora-liquidacion.pages.dev/',
          summary: 'Outil RH pour des simulations instantanees avec les formules legales colombiennes.',
          result: 'Calculs en moins de 100ms, executes entierement dans le navigateur, sans envoi de donnees a un serveur.',
          stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 100, suffix: 'ms', label: 'Temps de calcul' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilite' },
          ],
        },
      ],
    },
    pricing: {
      badge: 'Offres',
      title: 'Choisissez comment vous voulez grandir.',
      description: 'Un accompagnement mensuel : votre site toujours rapide, a jour et en amelioration.',
      perMonth: '/mois',
      setupLabel: 'Paiement unique pour demarrer',
      monthlyLabel: 'Ensuite, chaque mois',
      recommendedLabel: 'Recommande',
      plans: {
        esencial: {
          name: 'Essentiel',
          tagline: 'Votre activite en ligne, rapide et bien faite.',
          audience: 'Pour les activites qui ont besoin d’une presence pro maintenant.',
          features: [
            'Site une page, rapide et optimise',
            'Bouton WhatsApp pour recevoir des clients',
            'SEO de base pour qu’on vous trouve sur Google',
            'Hebergement et maintenance inclus',
          ],
          cta: 'Commencer avec Essentiel',
          waMessage: 'Bonjour, je suis interesse par l’offre Essentiel pour mon entreprise.',
        },
        profesional: {
          name: 'Professionnel',
          tagline: 'Un site que vous gerez vous-meme et qui grandit avec vous.',
          audience: 'Pour les activites qui veulent vendre plus et gerer leur site.',
          features: [
            'Tout ce que contient l’offre Essentiel',
            'Site multipage ou catalogue avec recherche',
            'Panneau d’administration en self-service',
            'SEO local (apparaissez dans votre ville)',
            'Une automatisation sur mesure',
            'Support et ameliorations continues',
          ],
          cta: 'Je veux l’offre Professionnel',
          waMessage: 'Bonjour, je suis interesse par l’offre Professionnel (site + panneau admin) pour mon entreprise.',
        },
        escala: {
          name: 'Echelle avec IA',
          tagline: 'Une IA qui vous fait gagner des heures, comme chez Búho Repuestos.',
          audience: 'Pour les activites qui veulent automatiser et grandir sans embaucher.',
          features: [
            'Tout ce que contient l’offre Professionnel',
            'IA sur mesure (ex. photo → inventaire)',
            'Plusieurs automatisations de taches',
            'Integrations (WhatsApp, paiements, etc.)',
            'Support prioritaire',
          ],
          cta: 'Parler de l’offre Echelle',
          waMessage: 'Bonjour, je suis interesse par l’offre Echelle avec IA pour automatiser mon entreprise.',
        },
      },
    },
    contact: {
      badge: 'Contact',
      titleA: 'Transformons votre site',
      titleB: 'en un veritable avantage.',
      description: 'Nous auditons votre site et livrons un plan clair et priorise. Gratuit.',
      cta: 'Demander un audit',
      ctaAria: 'Demander un audit par e-mail',
      benefitsLabel: 'Engagements de reponse',
      benefits: ['Reponse en moins de 12 heures', 'Audit gratuit', '100% a distance'],
      form: {
        name: 'Nom',
        namePh: 'Votre nom',
        email: 'E-mail',
        emailPh: 'vous@entreprise.com',
        message: 'Message',
        messagePh: 'Parlez-nous de votre projet...',
        send: 'Envoyer le message',
        sending: 'Envoi...',
        success: 'Merci ! Nous repondons en moins de 12 heures.',
        error: 'Une erreur est survenue. Ecrivez-nous par e-mail ou WhatsApp.',
        whatsapp: 'Ecrivez-nous sur WhatsApp',
        whatsappMessage: 'Bonjour, je viens du site Efi Solution et je veux un audit web.',
        consent: 'J’accepte la',
      },
      team: [
        {
          name: 'Juan Manuel',
          role: 'Ingenierie et architecture',
          bio: 'Construit des systemes web et backend axes sur la performance, la stabilite et l’evolutivite.',
          initials: 'JM',
        },
        {
          name: 'Sarai',
          role: 'UX et strategie digitale',
          bio: 'Concoit des experiences claires pour que chaque parcours aide a mieux convertir.',
          initials: 'SA',
        },
      ],
    },
    footer: {
      madeIn: 'Concu en Colombie.',
      syncLabel: 'Sync GH -> CF',
      commitLabel: 'Commit',
      timezone: 'COT',
      siteInfo: 'Informations du site',
      dateLocale: 'fr-FR',
    },
  },
};

export function getSiteContent(locale: Locale) {
  return siteContent[locale];
}
