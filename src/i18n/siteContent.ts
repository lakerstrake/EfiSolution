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

type SiteContent = {
  meta: { title: string; description: string };
  nav: {
    links: NavLink[];
    cta: string;
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
    testimonialLabel: string;
    testimonialQuote: string;
    testimonialAuthor: string;
    visit: string;
    cta: string;
    waMessage: string;
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
      title: 'Efi Solution - Diseño y desarrollo web de alto rendimiento',
      description: 'Creamos plataformas web rápidas, visuales y profesionales para mejorar conversión, SEO y experiencia de usuario.',
    },
    nav: {
      links: [
        { href: '#servicios', label: 'Servicios' },
        { href: '#casos', label: 'Proyectos' },
        { href: '#contacto', label: 'Contacto' },
      ],
      cta: 'Solicitar auditoría',
      mobileMenu: 'Abrir menú',
      mainLabel: 'Navegación principal',
      themeToggle: 'Alternar tema claro y oscuro',
    },
    hero: {
      badge: 'Diseño y desarrollo web de alto rendimiento',
      titleA: 'Una web más rápida.',
      titleB: 'Un negocio que convierte mejor.',
      description:
        'En Efi Solution construimos plataformas minimalistas, sólidas y escalables para marcas que quieren crecer sin perder tiempo en tecnología lenta.',
      ctaPrimary: 'Agendar auditoría gratuita',
      ctaGhost: 'Ver proyectos',
      // TODO VERIFICAR (Juan): correr Lighthouse real sobre la home para confirmar
      // '0.9s' (tiempo de carga) y '100/100'. Si no coinciden, ajustar o quitar.
      metrics: [
        { value: '0.9s', label: 'TIEMPO DE CARGA' },
        { value: '100/100', label: 'Score Lighthouse' },
        { value: '0', label: 'Cookies de rastreo' },
        { value: '48h', label: 'Auditoría inicial' },
      ],
    },
    ai: {
      badge: 'IA aplicada',
      title: 'Inteligencia artificial que hace el trabajo pesado por ti.',
      description: 'No solo hacemos webs rápidas: integramos IA que automatiza tareas reales de tu negocio para que ganes tiempo y vendas más, sin tener que volverte experto en tecnología.',
      exampleTag: 'Caso real: Búho Repuestos',
      exampleText: 'El dueño sube una sola foto del producto y la IA extrae los datos y llena el inventario solo. Lo que antes tomaba horas, ahora son segundos.',
      flowPhoto: 'Una foto del producto',
      flowResult: 'Inventario lleno automáticamente',
      benefits: [
        { title: 'Ahorra horas', body: 'La IA hace el trabajo repetitivo —cargar productos, ordenar datos— mientras tú atiendes tu negocio.' },
        { title: 'Menos errores', body: 'Los datos se extraen automáticamente: menos precios equivocados, typos o referencias duplicadas.' },
        { title: 'Crece sin contratar', body: 'Manejas más productos y pedidos sin sumar personal ni complicarte con sistemas caros.' },
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
      problem: 'El dueño cargaba cada repuesto a mano: fotos, datos, precios. Con cientos de referencias, mantener el catálogo al día consumía horas y se prestaba a errores.',
      builtLabel: 'Qué construimos',
      built: [
        'Web rápida con catálogo online y búsqueda',
        'Panel de administración self-service: el dueño gestiona todo sin depender de nosotros',
        'IA de inventario: sube una foto y se llenan los datos del producto',
        'Pedidos directos por WhatsApp',
      ],
      resultsLabel: 'Resultados',
      results: [
        'Catálogo de 110+ referencias gestionado por el propio dueño',
        'Alta de productos en segundos en vez de minutos por unidad',
        'Menos errores de datos al automatizar la carga',
      ],
      testimonialLabel: 'En sus palabras',
      // TODO (Juan): reemplazar por el testimonio real del dueño de Búho.
      testimonialQuote: 'Antes me tomaba toda la tarde subir productos; ahora con una foto queda listo. La página la manejo yo mismo.',
      testimonialAuthor: 'Dueño de Búho Repuestos B&M (testimonio de ejemplo — pendiente de confirmar)',
      visit: 'Ver buhorepuestos.com',
      cta: 'Quiero algo así para mi negocio',
      waMessage: 'Hola, vi el caso de Búho Repuestos y quiero una web con panel e IA para mi negocio.',
    },
    problem: {
      badge: 'Diagnóstico',
      titleA: 'El rendimiento no es un detalle técnico.',
      titleB: 'Es una ventaja competitiva.',
      description: 'Cuando la web responde rápido, el usuario confía más, explora más y compra con menos fricción.',
      statA: 'de los usuarios móviles abandonan si la carga supera los 3 segundos (Google/SOASTA)',
      statB: 'de caída en conversiones por cada segundo de retraso (Akamai)',
      sequenceLabel: 'Secuencia problema impacto solución',
      blocks: [
        {
          tag: 'Problema',
          headline: 'Web lenta, ventas bajas.',
          body: 'Si el sitio tarda en cargar, el usuario se va antes de conocer tu oferta.',
        },
        {
          tag: 'Impacto',
          headline: 'Más rebote y más costo de adquisición.',
          body: 'La lentitud reduce conversión, afecta SEO y encarece cada visita pagada.',
        },
        {
          tag: 'Solución',
          headline: 'Arquitectura limpia desde el día uno.',
          body: 'Diseñamos y construimos para rendimiento real: menos peso, más claridad y mejor experiencia.',
        },
      ],
    },
    services: {
      badge: 'Servicios',
      title: 'Tecnología, diseño y ejecución en un mismo equipo.',
      description: 'Entregamos sistemas listos para producir resultados, no solo pantallas bonitas.',
      listLabel: 'Lista de servicios',
      processLabel: 'Proceso de trabajo',
      services: [
        {
          number: '01 / Web',
          title: 'Sitios de alta conversión',
          description: 'Experiencias rápidas, claras y orientadas a negocio con arquitectura moderna en Astro.',
          bullets: ['SEO técnico y performance real', 'UI minimalista y mantenible', 'Implementación lista para escalar'],
          iconPath: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
        },
        {
          number: '02 / Auditoría',
          title: 'Auditoría de rendimiento web',
          description: 'Análisis con Lighthouse y PageSpeed más un informe priorizado de mejoras concretas, entregado en 48h.',
          bullets: ['Diagnóstico de Core Web Vitals', 'Informe priorizado y accionable', 'Entrega en 48 horas'],
          iconPath: 'M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z',
        },
        {
          number: '03 / Producto',
          title: 'UX y estrategia digital',
          description: 'Decisiones de producto guiadas por datos para reducir fricción y aumentar conversión.',
          bullets: ['Flujos y arquitectura de contenido', 'Prototipos validados con usuarios', 'Roadmap de mejora continua'],
          iconPath: 'M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h6',
        },
        // DECIDIR: Juan puede quitar este servicio o mantenerlo así.
        {
          number: '04 / Automatización',
          title: 'Integraciones y automatización con n8n',
          description: 'Conectamos tus herramientas y automatizamos procesos repetitivos con n8n, sin mantener infraestructura frágil.',
          bullets: ['Flujos automatizados con n8n', 'Integraciones entre apps y APIs', 'Notificaciones y tareas programadas'],
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
        'Construimos productos propios para resolver problemas reales: acceso a información pública, datos geográficos y herramientas de impacto social. Cada proyecto nace de una necesidad concreta y se mide en producción.',
      pillars: [
        { title: 'Impacto social', body: 'Plataformas como Navegador Social y mapas territoriales que acercan información útil a quienes más la necesitan.' },
        { title: 'Rendimiento real', body: 'Optimizados para funcionar rápido incluso en dispositivos modestos y conexiones limitadas.' },
        { title: 'Diseño accesible', body: 'Experiencias claras y usables, pensadas desde la investigación de usuario y el trabajo social.' },
      ],
    },
    cases: {
      badge: 'Proyectos',
      title: 'Proyectos que demuestran nuestro enfoque técnico.',
      description: 'Rendimiento real, código limpio y experiencias rápidas. Selecciona uno para ver el contexto técnico.',
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
            { value: 99.9, suffix: '%', decimals: 1, label: 'Uptime edge' },
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
    contact: {
      badge: 'Contacto',
      titleA: 'Transformemos tu web',
      titleB: 'en una ventaja real.',
      description: 'Auditamos tu situación actual y te entregamos un plan de mejora concreto, priorizado y accionable.',
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
      title: 'Efi Solution - High-performance web design and development',
      description: 'We build fast, visual and professional web platforms to improve conversion, SEO and user experience.',
    },
    nav: {
      links: [
        { href: '#servicios', label: 'Services' },
        { href: '#casos', label: 'Work' },
        { href: '#contacto', label: 'Contact' },
      ],
      cta: 'Request audit',
      mobileMenu: 'Open menu',
      mainLabel: 'Main navigation',
      themeToggle: 'Toggle light and dark mode',
    },
    hero: {
      badge: 'High-performance web design and development',
      titleA: 'A faster website.',
      titleB: 'A business that converts better.',
      description: 'At Efi Solution we build minimal, solid and scalable platforms for brands that want to grow without slow technology.',
      ctaPrimary: 'Book a free audit',
      ctaGhost: 'View projects',
      metrics: [
        { value: '0.9s', label: 'Target LCP' },
        { value: '100/100', label: 'Lighthouse score' },
        { value: '0', label: 'Tracking cookies' },
        { value: '48h', label: 'Initial audit' },
      ],
    },
    ai: {
      badge: 'AI in action',
      title: 'Artificial intelligence that does the heavy lifting for you.',
      description: 'We do more than fast websites: we add AI that automates real tasks in your business so you save time and sell more, without becoming a tech expert.',
      exampleTag: 'Real case: Búho Repuestos',
      exampleText: 'The owner uploads a single photo of the product and the AI extracts the data and fills the inventory on its own. What used to take hours now takes seconds.',
      flowPhoto: 'One product photo',
      flowResult: 'Inventory filled automatically',
      benefits: [
        { title: 'Save hours', body: 'The AI handles the repetitive work —loading products, sorting data— while you run your business.' },
        { title: 'Fewer errors', body: 'Data is extracted automatically: fewer wrong prices, typos or duplicate references.' },
        { title: 'Grow without hiring', body: 'Handle more products and orders without adding staff or expensive systems.' },
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
      problem: 'The owner loaded every part by hand: photos, data, prices. With hundreds of references, keeping the catalog up to date took hours and was error-prone.',
      builtLabel: 'What we built',
      built: [
        'Fast website with an online catalog and search',
        'Self-service admin panel: the owner manages everything without us',
        'Inventory AI: upload a photo and the product data fills itself',
        'Direct orders via WhatsApp',
      ],
      resultsLabel: 'Results',
      results: [
        'A 110+ reference catalog managed by the owner himself',
        'Products added in seconds instead of minutes each',
        'Fewer data errors by automating the loading',
      ],
      testimonialLabel: 'In their words',
      // TODO (Juan): replace with the real testimonial from Búho's owner.
      testimonialQuote: 'It used to take me all afternoon to upload products; now one photo does it. I run the site myself.',
      testimonialAuthor: 'Owner of Búho Repuestos B&M (sample testimonial — pending confirmation)',
      visit: 'Visit buhorepuestos.com',
      cta: 'I want something like this',
      waMessage: 'Hi, I saw the Búho Repuestos case and I want a website with an admin panel and AI for my business.',
    },
    problem: {
      badge: 'Diagnosis',
      titleA: 'Performance is not a technical detail.',
      titleB: 'It is a competitive advantage.',
      description: 'When your site responds quickly, users trust more, explore more and buy with less friction.',
      statA: 'Mobile users bounce when loading takes more than 3 seconds (Google/SOASTA).',
      statB: 'Estimated conversion drop for every extra second of delay (Akamai).',
      sequenceLabel: 'Problem impact solution sequence',
      blocks: [
        {
          tag: 'Problem',
          headline: 'Slow site, lower sales.',
          body: 'If your site takes too long to load, users leave before they even see your offer.',
        },
        {
          tag: 'Impact',
          headline: 'More bounce and higher acquisition costs.',
          body: 'Slow speed hurts conversion, weakens SEO and makes each paid visit more expensive.',
        },
        {
          tag: 'Solution',
          headline: 'Clean architecture from day one.',
          body: 'We design and build for real performance: less weight, more clarity and better experience.',
        },
      ],
    },
    services: {
      badge: 'Services',
      title: 'Technology, design and execution in one team.',
      description: 'We deliver systems ready to drive results, not just nice screens.',
      listLabel: 'Service list',
      processLabel: 'Work process',
      services: [
        {
          number: '01 / Web',
          title: 'High-conversion websites',
          description: 'Fast, clear business-driven experiences built with modern Astro architecture.',
          bullets: ['Technical SEO and real performance', 'Minimal and maintainable UI', 'Implementation ready to scale'],
          iconPath: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
        },
        {
          number: '02 / Audit',
          title: 'Web performance audit',
          description: 'Lighthouse and PageSpeed analysis plus a prioritized report of concrete improvements, delivered in 48h.',
          bullets: ['Core Web Vitals diagnosis', 'Prioritized, actionable report', 'Delivered within 48 hours'],
          iconPath: 'M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z',
        },
        {
          number: '03 / Product',
          title: 'UX and digital strategy',
          description: 'Data-guided product decisions to reduce friction and increase conversion.',
          bullets: ['Flows and content architecture', 'User-validated prototypes', 'Continuous improvement roadmap'],
          iconPath: 'M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h6',
        },
        // DECIDIR: Juan puede quitar este servicio o mantenerlo así.
        {
          number: '04 / Automation',
          title: 'Integrations and automation with n8n',
          description: 'We connect your tools and automate repetitive processes with n8n, without maintaining fragile infrastructure.',
          bullets: ['Automated workflows with n8n', 'Integrations across apps and APIs', 'Notifications and scheduled tasks'],
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
        'We build our own products to solve real problems: access to public information, geographic data and social-impact tools. Each project starts from a concrete need and is measured in production.',
      pillars: [
        { title: 'Social impact', body: 'Platforms like Navegador Social and territorial maps that bring useful information to those who need it most.' },
        { title: 'Real performance', body: 'Optimized to run fast even on modest devices and limited connections.' },
        { title: 'Accessible design', body: 'Clear, usable experiences grounded in user research and social work.' },
      ],
    },
    cases: {
      badge: 'Selected Work',
      title: 'Projects that show our technical approach.',
      description: 'Real performance, clean code and fast experiences. Pick one to see the technical context.',
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
            { value: 99.9, suffix: '%', decimals: 1, label: 'Edge uptime' },
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
    contact: {
      badge: 'Contact',
      titleA: 'Let us turn your website',
      titleB: 'into a real advantage.',
      description: 'We audit your current situation and deliver a clear, prioritized and actionable improvement plan.',
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
      title: 'Efi Solution - Design e desenvolvimento web de alto desempenho',
      description: 'Criamos plataformas web rápidas, visuais e profissionais para melhorar conversão, SEO e experiência do usuário.',
    },
    nav: {
      links: [
        { href: '#servicios', label: 'Serviços' },
        { href: '#casos', label: 'Projetos' },
        { href: '#contacto', label: 'Contato' },
      ],
      cta: 'Solicitar auditoria',
      mobileMenu: 'Abrir menu',
      mainLabel: 'Navegação principal',
      themeToggle: 'Alternar tema claro e escuro',
    },
    hero: {
      badge: 'Design e desenvolvimento web de alto desempenho',
      titleA: 'Um site mais rápido.',
      titleB: 'Um negócio que converte melhor.',
      description: 'Na Efi Solution criamos plataformas minimalistas, sólidas e escaláveis para marcas que querem crescer sem tecnologia lenta.',
      ctaPrimary: 'Agendar auditoria gratuita',
      ctaGhost: 'Ver projetos',
      metrics: [
        { value: '0.9s', label: 'LCP alvo' },
        { value: '100/100', label: 'Score Lighthouse' },
        { value: '0', label: 'Cookies de rastreio' },
        { value: '48h', label: 'Auditoria inicial' },
      ],
    },
    ai: {
      badge: 'IA aplicada',
      title: 'Inteligência artificial que faz o trabalho pesado por você.',
      description: 'Não fazemos só sites rápidos: integramos IA que automatiza tarefas reais do seu negócio para você ganhar tempo e vender mais, sem precisar virar especialista em tecnologia.',
      exampleTag: 'Caso real: Búho Repuestos',
      exampleText: 'O dono envia uma única foto do produto e a IA extrai os dados e preenche o estoque sozinha. O que antes levava horas, agora leva segundos.',
      flowPhoto: 'Uma foto do produto',
      flowResult: 'Estoque preenchido automaticamente',
      benefits: [
        { title: 'Economize horas', body: 'A IA faz o trabalho repetitivo —cadastrar produtos, organizar dados— enquanto você cuida do negócio.' },
        { title: 'Menos erros', body: 'Os dados são extraídos automaticamente: menos preços errados, erros de digitação ou referências duplicadas.' },
        { title: 'Cresça sem contratar', body: 'Gerencie mais produtos e pedidos sem aumentar a equipe nem complicar com sistemas caros.' },
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
      problem: 'O dono cadastrava cada peça na mão: fotos, dados, preços. Com centenas de referências, manter o catálogo atualizado levava horas e gerava erros.',
      builtLabel: 'O que construímos',
      built: [
        'Site rápido com catálogo online e busca',
        'Painel de administração self-service: o dono gerencia tudo sem depender de nós',
        'IA de estoque: envie uma foto e os dados do produto se preenchem',
        'Pedidos diretos pelo WhatsApp',
      ],
      resultsLabel: 'Resultados',
      results: [
        'Catálogo de 110+ referências gerenciado pelo próprio dono',
        'Cadastro de produtos em segundos em vez de minutos por unidade',
        'Menos erros de dados ao automatizar o cadastro',
      ],
      testimonialLabel: 'Nas palavras dele',
      // TODO (Juan): substituir pelo depoimento real do dono da Búho.
      testimonialQuote: 'Antes eu levava a tarde toda para subir produtos; agora uma foto resolve. O site eu mesmo administro.',
      testimonialAuthor: 'Dono da Búho Repuestos B&M (depoimento de exemplo — a confirmar)',
      visit: 'Ver buhorepuestos.com',
      cta: 'Quero algo assim para o meu negócio',
      waMessage: 'Olá, vi o caso da Búho Repuestos e quero um site com painel e IA para o meu negócio.',
    },
    problem: {
      badge: 'Diagnóstico',
      titleA: 'Desempenho não é detalhe técnico.',
      titleB: 'É vantagem competitiva.',
      description: 'Quando o site responde rápido, o usuário confia mais, explora mais e compra com menos fricção.',
      statA: 'Abandono no mobile quando o carregamento passa de 3 segundos (Google/SOASTA).',
      statB: 'Queda estimada de conversão por segundo extra de atraso (Akamai).',
      sequenceLabel: 'Sequência problema impacto solução',
      blocks: [
        {
          tag: 'Problema',
          headline: 'Site lento, menos vendas.',
          body: 'Se o site demora para carregar, o usuário sai antes de conhecer sua oferta.',
        },
        {
          tag: 'Impacto',
          headline: 'Mais rejeição e maior custo de aquisição.',
          body: 'A lentidão reduz conversão, prejudica SEO e encarece cada visita paga.',
        },
        {
          tag: 'Solução',
          headline: 'Arquitetura limpa desde o primeiro dia.',
          body: 'Projetamos e construímos para desempenho real: menos peso, mais clareza e melhor experiência.',
        },
      ],
    },
    services: {
      badge: 'Serviços',
      title: 'Tecnologia, design e execução no mesmo time.',
      description: 'Entregamos sistemas prontos para gerar resultado, não apenas telas bonitas.',
      listLabel: 'Lista de serviços',
      processLabel: 'Processo de trabalho',
      services: [
        {
          number: '01 / Web',
          title: 'Sites de alta conversão',
          description: 'Experiências rápidas e claras orientadas a negócio com arquitetura moderna em Astro.',
          bullets: ['SEO técnico e desempenho real', 'UI minimalista e sustentável', 'Implementação pronta para escalar'],
          iconPath: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
        },
        {
          number: '02 / Auditoria',
          title: 'Auditoria de desempenho web',
          description: 'Análise com Lighthouse e PageSpeed mais um relatório priorizado de melhorias concretas, entregue em 48h.',
          bullets: ['Diagnóstico de Core Web Vitals', 'Relatório priorizado e acionável', 'Entrega em 48 horas'],
          iconPath: 'M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z',
        },
        {
          number: '03 / Produto',
          title: 'UX e estratégia digital',
          description: 'Decisões guiadas por dados para reduzir fricção e aumentar conversão.',
          bullets: ['Fluxos e arquitetura de conteúdo', 'Protótipos validados com usuários', 'Roadmap de melhoria contínua'],
          iconPath: 'M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h6',
        },
        // DECIDIR: Juan puede quitar este servicio o mantenerlo así.
        {
          number: '04 / Automação',
          title: 'Integrações e automação com n8n',
          description: 'Conectamos suas ferramentas e automatizamos processos repetitivos com n8n, sem manter infraestrutura frágil.',
          bullets: ['Fluxos automatizados com n8n', 'Integrações entre apps e APIs', 'Notificações e tarefas agendadas'],
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
        'Criamos produtos próprios para resolver problemas reais: acesso à informação pública, dados geográficos e ferramentas de impacto social. Cada projeto nasce de uma necessidade concreta e é medido em produção.',
      pillars: [
        { title: 'Impacto social', body: 'Plataformas como o Navegador Social e mapas territoriais que aproximam informação útil de quem mais precisa.' },
        { title: 'Desempenho real', body: 'Otimizados para funcionar rápido mesmo em dispositivos modestos e conexões limitadas.' },
        { title: 'Design acessível', body: 'Experiências claras e usáveis, baseadas em pesquisa de usuário e trabalho social.' },
      ],
    },
    cases: {
      badge: 'Projetos',
      title: 'Projetos que mostram nossa abordagem técnica.',
      description: 'Desempenho real, código limpo e experiências rápidas. Selecione um para ver o contexto técnico.',
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
            { value: 99.9, suffix: '%', decimals: 1, label: 'Uptime edge' },
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
    contact: {
      badge: 'Contato',
      titleA: 'Vamos transformar seu site',
      titleB: 'em uma vantagem real.',
      description: 'Auditamos seu cenário atual e entregamos um plano de melhoria claro, priorizado e acionável.',
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
      title: 'Efi Solution - Conception et developpement web haute performance',
      description: 'Nous creons des plateformes web rapides, visuelles et professionnelles pour ameliorer la conversion, le SEO et l’experience utilisateur.',
    },
    nav: {
      links: [
        { href: '#servicios', label: 'Services' },
        { href: '#casos', label: 'Projets' },
        { href: '#contacto', label: 'Contact' },
      ],
      cta: 'Demander un audit',
      mobileMenu: 'Ouvrir le menu',
      mainLabel: 'Navigation principale',
      themeToggle: 'Basculer entre theme clair et sombre',
    },
    hero: {
      badge: 'Conception et developpement web haute performance',
      titleA: 'Un site plus rapide.',
      titleB: 'Une entreprise qui convertit mieux.',
      description:
        'Chez Efi Solution, nous construisons des plateformes minimalistes, solides et evolutives pour les marques qui veulent croitre sans technologie lente.',
      ctaPrimary: 'Reserver un audit gratuit',
      ctaGhost: 'Voir les projets',
      metrics: [
        { value: '0.9s', label: 'LCP cible' },
        { value: '100/100', label: 'Score Lighthouse' },
        { value: '0', label: 'Cookies de suivi' },
        { value: '48h', label: 'Audit initial' },
      ],
    },
    ai: {
      badge: 'IA appliquee',
      title: 'Une intelligence artificielle qui fait le gros du travail pour vous.',
      description: 'Nous ne faisons pas que des sites rapides : nous integrons une IA qui automatise des taches reelles de votre activite pour vous faire gagner du temps et vendre plus, sans devenir expert en technologie.',
      exampleTag: 'Cas reel : Búho Repuestos',
      exampleText: 'Le proprietaire televerse une seule photo du produit et l’IA en extrait les donnees et remplit l’inventaire toute seule. Ce qui prenait des heures ne prend plus que quelques secondes.',
      flowPhoto: 'Une photo du produit',
      flowResult: 'Inventaire rempli automatiquement',
      benefits: [
        { title: 'Gagnez des heures', body: 'L’IA fait le travail repetitif —saisir les produits, trier les donnees— pendant que vous gerez votre activite.' },
        { title: 'Moins d’erreurs', body: 'Les donnees sont extraites automatiquement : moins de prix errones, de fautes ou de references en double.' },
        { title: 'Grandir sans embaucher', body: 'Gerez plus de produits et de commandes sans ajouter de personnel ni de systemes couteux.' },
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
      problem: 'Le proprietaire saisissait chaque piece a la main : photos, donnees, prix. Avec des centaines de references, garder le catalogue a jour prenait des heures et generait des erreurs.',
      builtLabel: 'Ce que nous avons construit',
      built: [
        'Site rapide avec catalogue en ligne et recherche',
        'Panneau d’administration en self-service : le proprietaire gere tout sans nous',
        'IA d’inventaire : televersez une photo et les donnees du produit se remplissent',
        'Commandes directes via WhatsApp',
      ],
      resultsLabel: 'Resultats',
      results: [
        'Un catalogue de 110+ references gere par le proprietaire lui-meme',
        'Produits ajoutes en quelques secondes au lieu de minutes chacun',
        'Moins d’erreurs de donnees grace a l’automatisation de la saisie',
      ],
      testimonialLabel: 'En ses mots',
      // TODO (Juan): remplacer par le vrai temoignage du proprietaire de Búho.
      testimonialQuote: 'Avant, je passais l’apres-midi a mettre en ligne les produits ; maintenant une photo suffit. Je gere le site moi-meme.',
      testimonialAuthor: 'Proprietaire de Búho Repuestos B&M (temoignage d’exemple — a confirmer)',
      visit: 'Voir buhorepuestos.com',
      cta: 'Je veux quelque chose comme ca',
      waMessage: 'Bonjour, j’ai vu le cas Búho Repuestos et je veux un site avec panneau d’administration et IA pour mon entreprise.',
    },
    problem: {
      badge: 'Diagnostic',
      titleA: 'La performance n’est pas un detail technique.',
      titleB: 'C’est un avantage concurrentiel.',
      description: 'Quand le site repond vite, l’utilisateur fait plus confiance, explore davantage et achete avec moins de friction.',
      statA: 'Abandon sur mobile quand le chargement depasse 3 secondes (Google/SOASTA).',
      statB: 'Baisse de conversion estimee pour chaque seconde supplementaire (Akamai).',
      sequenceLabel: 'Sequence probleme impact solution',
      blocks: [
        {
          tag: 'Probleme',
          headline: 'Site lent, ventes en baisse.',
          body: 'Si le site met trop de temps a charger, l’utilisateur part avant de decouvrir votre offre.',
        },
        {
          tag: 'Impact',
          headline: 'Plus de rebond et un cout d’acquisition plus eleve.',
          body: 'La lenteur reduit la conversion, nuit au SEO et rencherit chaque visite payante.',
        },
        {
          tag: 'Solution',
          headline: 'Une architecture propre des le premier jour.',
          body: 'Nous concevons et construisons pour une performance reelle : moins de poids, plus de clarte et une meilleure experience.',
        },
      ],
    },
    services: {
      badge: 'Services',
      title: 'Technologie, design et execution dans une meme equipe.',
      description: 'Nous livrons des systemes prets a produire des resultats, pas seulement de jolis ecrans.',
      listLabel: 'Liste des services',
      processLabel: 'Processus de travail',
      services: [
        {
          number: '01 / Web',
          title: 'Sites a forte conversion',
          description: 'Des experiences rapides, claires et orientees business avec une architecture moderne en Astro.',
          bullets: ['SEO technique et performance reelle', 'UI minimaliste et maintenable', 'Implementation prete a evoluer'],
          iconPath: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
        },
        {
          number: '02 / Audit',
          title: 'Audit de performance web',
          description: 'Analyse Lighthouse et PageSpeed avec un rapport priorise d’ameliorations concretes, livre en 48h.',
          bullets: ['Diagnostic des Core Web Vitals', 'Rapport priorise et actionnable', 'Livraison sous 48 heures'],
          iconPath: 'M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z',
        },
        {
          number: '03 / Produit',
          title: 'UX et strategie digitale',
          description: 'Des decisions produit guidees par les donnees pour reduire la friction et augmenter la conversion.',
          bullets: ['Parcours et architecture de contenu', 'Prototypes valides avec les utilisateurs', 'Feuille de route d’amelioration continue'],
          iconPath: 'M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h6',
        },
        // DECIDIR: Juan puede quitar este servicio o mantenerlo así.
        {
          number: '04 / Automatisation',
          title: 'Integrations et automatisation avec n8n',
          description: 'Nous connectons vos outils et automatisons les processus repetitifs avec n8n, sans maintenir d’infrastructure fragile.',
          bullets: ['Flux automatises avec n8n', 'Integrations entre apps et API', 'Notifications et taches planifiees'],
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
        'Nous créons nos propres produits pour résoudre de vrais problèmes : accès à l’information publique, données géographiques et outils à impact social. Chaque projet naît d’un besoin concret et se mesure en production.',
      pillars: [
        { title: 'Impact social', body: 'Des plateformes comme Navegador Social et des cartes territoriales qui rapprochent l’information utile de ceux qui en ont le plus besoin.' },
        { title: 'Performance réelle', body: 'Optimisés pour fonctionner vite même sur des appareils modestes et des connexions limitées.' },
        { title: 'Design accessible', body: 'Des expériences claires et utilisables, fondées sur la recherche utilisateur et le travail social.' },
      ],
    },
    cases: {
      badge: 'Travaux',
      title: 'Des projets qui montrent notre approche technique.',
      description: 'Performance reelle, code propre et experiences rapides. Choisissez-en un pour voir le contexte technique.',
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
            { value: 99.9, suffix: '%', decimals: 1, label: 'Uptime edge' },
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
    contact: {
      badge: 'Contact',
      titleA: 'Transformons votre site',
      titleB: 'en un veritable avantage.',
      description: 'Nous auditons votre situation actuelle et livrons un plan d’amelioration clair, priorise et actionnable.',
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
