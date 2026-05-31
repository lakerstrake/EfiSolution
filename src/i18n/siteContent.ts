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
type CaseMetric = { value: number; suffix: string; label: string; decimals?: number };
type CaseItem = {
  key: string;
  name: string;
  sector: string;
  image: string;
  url: string | null;
  summary: string;
  result: string;
  stack: string[];
  metrics: CaseMetric[];
};
type TeamMember = { name: string; role: string; bio: string; initials: string };

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
        { href: '#casos', label: 'Casos' },
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
      metrics: [
        { value: '0.9s', label: 'TIEMPO DE CARGA' },
        { value: '+35%', label: 'Mejora conversión' },
        { value: '100/100', label: 'Score Lighthouse' },
        { value: '48h', label: 'Auditoría inicial' },
      ],
    },
    problem: {
      badge: 'Diagnóstico',
      titleA: 'El rendimiento no es un detalle técnico.',
      titleB: 'Es una ventaja competitiva.',
      description: 'Cuando la web responde rápido, el usuario confía más, explora más y compra con menos fricción.',
      statA: 'de los usuarios abandonan si la carga supera los 3 segundos',
      statB: 'de caída en conversiones por cada segundo de retraso',
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
          number: '02 / Backend',
          title: 'Sistemas y automatización',
          description: 'APIs y procesos robustos para operaciones internas, integraciones y crecimiento sostenido.',
          bullets: ['FastAPI y Spring Boot', 'Modelado de datos y observabilidad', 'Integraciones con herramientas clave'],
          iconPath: 'M20 13c0 5-3.5 8-8 8s-8-3-8-8 3.5-8 8-8 8 3 8 8zM12 5v8l5 3',
        },
        {
          number: '03 / Producto',
          title: 'UX y estrategia digital',
          description: 'Decisiones de producto guiadas por datos para reducir fricción y aumentar conversión.',
          bullets: ['Flujos y arquitectura de contenido', 'Prototipos validados con usuarios', 'Roadmap de mejora continua'],
          iconPath: 'M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h6',
        },
      ],
      steps: [
        { k: '01', v: 'Diagnóstico', d: '48h', desc: 'Análisis profundo de métricas y cuellos de botella.' },
        { k: '02', v: 'Definición', d: '1 sem', desc: 'Estructuración de la arquitectura y plan de acción.' },
        { k: '03', v: 'Construcción', d: '3-6 sem', desc: 'Desarrollo backend y frontend optimizado.' },
        { k: '04', v: 'Lanzamiento', d: 'Día 1', desc: 'Despliegue, pruebas de estrés y monitoreo.' },
      ],
    },
    cases: {
      badge: 'Casos de éxito',
      title: 'Resultados reales con producto, diseño y performance.',
      description: 'Selecciona un proyecto para ver contexto, stack y métricas de impacto.',
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
          image: '/navegador_social.jpg',
          url: 'https://navegador-social.jmlagos2003.workers.dev/',
          summary: 'Portal ligero para consulta ciudadana en dispositivos con conectividad limitada y bajo consumo de datos.',
          result: 'Mejor acceso a información pública y navegación estable incluso en celulares de gama media-baja.',
          stack: ['JavaScript', 'CSS', 'Cloudflare Workers', 'Edge Runtime'],
          metrics: [
            { value: 0.3, suffix: 's', decimals: 1, label: 'Respuesta inicial' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 93, suffix: '%', label: 'Menos rebote' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilidad' },
          ],
        },
        {
          key: 'lluvias',
          name: 'Mapa de Lluvias',
          sector: 'Geodatos',
          image: '/lluvias.jpg',
          url: 'https://lluvias.jmlagos2003.workers.dev/',
          summary: 'Visualización interactiva de lluvias en Bogotá con datos en tiempo real servidos desde el borde de la red.',
          result: 'Consulta hidrográfica instantánea desde cualquier dispositivo, sin instalación ni backend dedicado.',
          stack: ['Cloudflare Workers', 'JavaScript', 'Web APIs', 'Edge Runtime'],
          metrics: [
            { value: 0.4, suffix: 's', decimals: 1, label: 'Respuesta inicial' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 20, suffix: '+', label: 'Zonas cubiertas' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilidad' },
          ],
        },
        {
          key: 'kennedy',
          name: 'Mapa de Kennedy',
          sector: 'Geodatos',
          image: '/mapa_kennedy.jpg',
          url: 'https://mapa-kennedy.pages.dev/',
          summary: 'Mapa interactivo optimizado para consulta rápida de puntos de interés sin congelar el navegador.',
          result: 'Experiencia fluida a 60fps con carga por demanda para reducir peso y mejorar usabilidad.',
          stack: ['Leaflet.js', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 0.5, suffix: 's', decimals: 1, label: 'Latencia GPS' },
            { value: 60, suffix: 'fps', label: 'Fluidez' },
            { value: 500, suffix: '+', label: 'Puntos activos' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Uptime edge' },
          ],
        },
        {
          key: 'calculadora',
          name: 'Calculadora de Liquidación',
          sector: 'Fintech',
          image: '/calculadora_liquidacion.jpg',
          url: 'https://calculadora-liquidacion.pages.dev/',
          summary: 'Herramienta laboral para simulaciones instantáneas con fórmulas legales colombianas.',
          result: 'Cálculos en menos de 100ms y reducción sustancial de errores operativos.',
          stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 100, suffix: 'ms', label: 'Tiempo de cálculo' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 95, suffix: '%', label: 'Ahorro operativo' },
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
      benefits: ['Respuesta en menos de 12 horas', 'Auditoría sin costo', 'Trabajo remoto para LATAM'],
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
        { href: '#casos', label: 'Cases' },
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
        { value: '+35%', label: 'Conversion uplift' },
        { value: '100/100', label: 'Lighthouse score' },
        { value: '48h', label: 'Initial audit' },
      ],
    },
    problem: {
      badge: 'Diagnosis',
      titleA: 'Performance is not a technical detail.',
      titleB: 'It is a competitive advantage.',
      description: 'When your site responds quickly, users trust more, explore more and buy with less friction.',
      statA: 'Mobile bounce when loading takes more than 3 seconds.',
      statB: 'Estimated conversion drop for every extra second.',
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
          number: '02 / Backend',
          title: 'Systems and automation',
          description: 'Robust APIs and processes for operations, integrations and sustainable growth.',
          bullets: ['FastAPI and Spring Boot', 'Data modeling and observability', 'Integrations with key tools'],
          iconPath: 'M20 13c0 5-3.5 8-8 8s-8-3-8-8 3.5-8 8-8 8 3 8 8zM12 5v8l5 3',
        },
        {
          number: '03 / Product',
          title: 'UX and digital strategy',
          description: 'Data-guided product decisions to reduce friction and increase conversion.',
          bullets: ['Flows and content architecture', 'User-validated prototypes', 'Continuous improvement roadmap'],
          iconPath: 'M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h6',
        },
      ],
      steps: [
        { k: '01', v: 'Diagnosis', d: '48h', desc: 'Deep analysis of metrics and bottlenecks.' },
        { k: '02', v: 'Planning', d: '1 wk', desc: 'Architecture definition and action plan.' },
        { k: '03', v: 'Build', d: '3-6 wk', desc: 'Optimized backend and frontend development.' },
        { k: '04', v: 'Launch', d: 'Day 1', desc: 'Deployment, stress testing and monitoring.' },
      ],
    },
    cases: {
      badge: 'Case studies',
      title: 'Real results with product, design and performance.',
      description: 'Choose a project to see context, stack and impact metrics.',
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
          image: '/navegador_social.jpg',
          url: 'https://navegador-social.jmlagos2003.workers.dev/',
          summary: 'Lightweight portal for public information on low-connectivity and low-data devices.',
          result: 'Better public access and stable navigation even on mid and low-end phones.',
          stack: ['JavaScript', 'CSS', 'Cloudflare Workers', 'Edge Runtime'],
          metrics: [
            { value: 0.3, suffix: 's', decimals: 1, label: 'Initial response' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 93, suffix: '%', label: 'Lower bounce' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Availability' },
          ],
        },
        {
          key: 'lluvias',
          name: 'Bogota Rain Map',
          sector: 'Geodata',
          image: '/lluvias.jpg',
          url: 'https://lluvias.jmlagos2003.workers.dev/',
          summary: 'Interactive rain visualization for Bogota with real-time data served from the network edge.',
          result: 'Instant hydrographic queries from any device, no installation or dedicated backend required.',
          stack: ['Cloudflare Workers', 'JavaScript', 'Web APIs', 'Edge Runtime'],
          metrics: [
            { value: 0.4, suffix: 's', decimals: 1, label: 'Initial response' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 20, suffix: '+', label: 'Zones covered' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Availability' },
          ],
        },
        {
          key: 'kennedy',
          name: 'Kennedy Map',
          sector: 'Geodata',
          image: '/mapa_kennedy.jpg',
          url: 'https://mapa-kennedy.pages.dev/',
          summary: 'Interactive map optimized for fast point-of-interest browsing without freezing browsers.',
          result: 'Smooth 60fps experience with on-demand loading to reduce weight and improve usability.',
          stack: ['Leaflet.js', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 0.5, suffix: 's', decimals: 1, label: 'GPS latency' },
            { value: 60, suffix: 'fps', label: 'Smoothness' },
            { value: 500, suffix: '+', label: 'Active points' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Edge uptime' },
          ],
        },
        {
          key: 'calculadora',
          name: 'Settlement Calculator',
          sector: 'Fintech',
          image: '/calculadora_liquidacion.jpg',
          url: 'https://calculadora-liquidacion.pages.dev/',
          summary: 'Labor tool for instant simulations with Colombian legal formulas.',
          result: 'Calculations under 100ms and major reduction of operational errors.',
          stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 100, suffix: 'ms', label: 'Calculation time' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 95, suffix: '%', label: 'Operational savings' },
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
      benefits: ['Reply in less than 12 hours', 'Free audit', 'Remote work for LATAM'],
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
        { href: '#casos', label: 'Casos' },
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
        { value: '+35%', label: 'Melhora de conversão' },
        { value: '100/100', label: 'Score Lighthouse' },
        { value: '48h', label: 'Auditoria inicial' },
      ],
    },
    problem: {
      badge: 'Diagnóstico',
      titleA: 'Desempenho não é detalhe técnico.',
      titleB: 'É vantagem competitiva.',
      description: 'Quando o site responde rápido, o usuário confia mais, explora mais e compra com menos fricção.',
      statA: 'Abandono no mobile quando o carregamento passa de 3 segundos.',
      statB: 'Queda estimada de conversão por segundo extra.',
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
          number: '02 / Backend',
          title: 'Sistemas e automação',
          description: 'APIs e processos robustos para operação, integrações e crescimento sustentável.',
          bullets: ['FastAPI e Spring Boot', 'Modelagem de dados e observabilidade', 'Integrações com ferramentas chave'],
          iconPath: 'M20 13c0 5-3.5 8-8 8s-8-3-8-8 3.5-8 8-8 8 3 8 8zM12 5v8l5 3',
        },
        {
          number: '03 / Produto',
          title: 'UX e estratégia digital',
          description: 'Decisões guiadas por dados para reduzir fricção e aumentar conversão.',
          bullets: ['Fluxos e arquitetura de conteúdo', 'Protótipos validados com usuários', 'Roadmap de melhoria contínua'],
          iconPath: 'M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h6',
        },
      ],
      steps: [
        { k: '01', v: 'Diagnóstico', d: '48h', desc: 'Análise profunda de métricas e gargalos.' },
        { k: '02', v: 'Planejamento', d: '1 sem', desc: 'Estruturação da arquitetura e plano de ação.' },
        { k: '03', v: 'Construção', d: '3-6 sem', desc: 'Desenvolvimento backend e frontend otimizado.' },
        { k: '04', v: 'Lançamento', d: 'Dia 1', desc: 'Deploy, testes de estresse e monitoramento.' },
      ],
    },
    cases: {
      badge: 'Casos de sucesso',
      title: 'Resultados reais com produto, design e desempenho.',
      description: 'Selecione um projeto para ver contexto, stack e métricas de impacto.',
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
          image: '/navegador_social.jpg',
          url: 'https://navegador-social.jmlagos2003.workers.dev/',
          summary: 'Portal leve para informação pública em dispositivos com conectividade limitada e baixo consumo de dados.',
          result: 'Melhor acesso à informação pública e navegação estável em celulares de média e baixa gama.',
          stack: ['JavaScript', 'CSS', 'Cloudflare Workers', 'Edge Runtime'],
          metrics: [
            { value: 0.3, suffix: 's', decimals: 1, label: 'Resposta inicial' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 93, suffix: '%', label: 'Menos rejeição' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilidade' },
          ],
        },
        {
          key: 'lluvias',
          name: 'Mapa de Chuvas de Bogotá',
          sector: 'Geodados',
          image: '/lluvias.jpg',
          url: 'https://lluvias.jmlagos2003.workers.dev/',
          summary: 'Visualização interativa de chuvas em Bogotá com dados em tempo real servidos na borda da rede.',
          result: 'Consulta hidrográfica instantânea de qualquer dispositivo, sem instalação ou backend dedicado.',
          stack: ['Cloudflare Workers', 'JavaScript', 'Web APIs', 'Edge Runtime'],
          metrics: [
            { value: 0.4, suffix: 's', decimals: 1, label: 'Resposta inicial' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 20, suffix: '+', label: 'Zonas cobertas' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilidade' },
          ],
        },
        {
          key: 'kennedy',
          name: 'Mapa de Kennedy',
          sector: 'Geodados',
          image: '/mapa_kennedy.jpg',
          url: 'https://mapa-kennedy.pages.dev/',
          summary: 'Mapa interativo otimizado para consulta rápida de pontos de interesse sem travar o navegador.',
          result: 'Experiência fluida a 60fps com carga sob demanda para reduzir peso e melhorar usabilidade.',
          stack: ['Leaflet.js', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 0.5, suffix: 's', decimals: 1, label: 'Latência GPS' },
            { value: 60, suffix: 'fps', label: 'Fluidez' },
            { value: 500, suffix: '+', label: 'Pontos ativos' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Uptime edge' },
          ],
        },
        {
          key: 'calculadora',
          name: 'Calculadora de Rescisão',
          sector: 'Fintech',
          image: '/calculadora_liquidacion.jpg',
          url: 'https://calculadora-liquidacion.pages.dev/',
          summary: 'Ferramenta trabalhista para simulações instantâneas com fórmulas legais colombianas.',
          result: 'Cálculos em menos de 100ms e redução importante de erros operacionais.',
          stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 100, suffix: 'ms', label: 'Tempo de cálculo' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 95, suffix: '%', label: 'Economia operacional' },
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
      benefits: ['Resposta em menos de 12 horas', 'Auditoria sem custo', 'Trabalho remoto para LATAM'],
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
        { href: '#casos', label: 'Cas' },
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
        { value: '+35%', label: 'Hausse de conversion' },
        { value: '100/100', label: 'Score Lighthouse' },
        { value: '48h', label: 'Audit initial' },
      ],
    },
    problem: {
      badge: 'Diagnostic',
      titleA: 'La performance n’est pas un detail technique.',
      titleB: 'C’est un avantage concurrentiel.',
      description: 'Quand le site repond vite, l’utilisateur fait plus confiance, explore davantage et achete avec moins de friction.',
      statA: 'Abandon sur mobile quand le chargement depasse 3 secondes.',
      statB: 'Baisse de conversion estimee pour chaque seconde supplementaire.',
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
          number: '02 / Backend',
          title: 'Systemes et automatisation',
          description: 'Des API et processus robustes pour les operations, les integrations et une croissance durable.',
          bullets: ['FastAPI et Spring Boot', 'Modelisation de donnees et observabilite', 'Integrations avec les outils cles'],
          iconPath: 'M20 13c0 5-3.5 8-8 8s-8-3-8-8 3.5-8 8-8 8 3 8 8zM12 5v8l5 3',
        },
        {
          number: '03 / Produit',
          title: 'UX et strategie digitale',
          description: 'Des decisions produit guidees par les donnees pour reduire la friction et augmenter la conversion.',
          bullets: ['Parcours et architecture de contenu', 'Prototypes valides avec les utilisateurs', 'Feuille de route d’amelioration continue'],
          iconPath: 'M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h6',
        },
      ],
      steps: [
        { k: '01', v: 'Diagnostic', d: '48h', desc: 'Analyse approfondie des metriques et des goulots d’etranglement.' },
        { k: '02', v: 'Cadrage', d: '1 sem', desc: 'Definition de l’architecture et plan d’action.' },
        { k: '03', v: 'Construction', d: '3-6 sem', desc: 'Developpement backend et frontend optimise.' },
        { k: '04', v: 'Lancement', d: 'Jour 1', desc: 'Deploiement, tests de charge et monitoring.' },
      ],
    },
    cases: {
      badge: 'Etudes de cas',
      title: 'Des resultats concrets avec produit, design et performance.',
      description: 'Choisissez un projet pour voir le contexte, la stack et les metriques d’impact.',
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
          image: '/navegador_social.jpg',
          url: 'https://navegador-social.jmlagos2003.workers.dev/',
          summary: 'Portail leger pour l’information publique sur des appareils a faible connectivite et faible consommation de donnees.',
          result: 'Meilleur acces public et navigation stable meme sur des telephones d’entree et de milieu de gamme.',
          stack: ['JavaScript', 'CSS', 'Cloudflare Workers', 'Edge Runtime'],
          metrics: [
            { value: 0.3, suffix: 's', decimals: 1, label: 'Reponse initiale' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 93, suffix: '%', label: 'Moins de rebond' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilite' },
          ],
        },
        {
          key: 'lluvias',
          name: 'Carte des pluies de Bogota',
          sector: 'Geodonnees',
          image: '/lluvias.jpg',
          url: 'https://lluvias.jmlagos2003.workers.dev/',
          summary: 'Visualisation interactive des pluies a Bogota avec des donnees en temps reel servies depuis la peripherie du reseau.',
          result: 'Consultation hydrographique instantanee depuis n’importe quel appareil, sans installation ni backend dedie.',
          stack: ['Cloudflare Workers', 'JavaScript', 'Web APIs', 'Edge Runtime'],
          metrics: [
            { value: 0.4, suffix: 's', decimals: 1, label: 'Reponse initiale' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 20, suffix: '+', label: 'Zones couvertes' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Disponibilite' },
          ],
        },
        {
          key: 'kennedy',
          name: 'Carte de Kennedy',
          sector: 'Geodonnees',
          image: '/mapa_kennedy.jpg',
          url: 'https://mapa-kennedy.pages.dev/',
          summary: 'Carte interactive optimisee pour une consultation rapide des points d’interet sans figer le navigateur.',
          result: 'Experience fluide a 60 fps avec chargement a la demande pour reduire le poids et ameliorer l’utilisabilite.',
          stack: ['Leaflet.js', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 0.5, suffix: 's', decimals: 1, label: 'Latence GPS' },
            { value: 60, suffix: 'fps', label: 'Fluidite' },
            { value: 500, suffix: '+', label: 'Points actifs' },
            { value: 99.9, suffix: '%', decimals: 1, label: 'Uptime edge' },
          ],
        },
        {
          key: 'calculadora',
          name: 'Calculateur d’indemnites',
          sector: 'Fintech',
          image: '/calculadora_liquidacion.jpg',
          url: 'https://calculadora-liquidacion.pages.dev/',
          summary: 'Outil RH pour des simulations instantanees avec les formules legales colombiennes.',
          result: 'Calculs en moins de 100ms et reduction importante des erreurs operationnelles.',
          stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Cloudflare Pages'],
          metrics: [
            { value: 100, suffix: 'ms', label: 'Temps de calcul' },
            { value: 100, suffix: '/100', label: 'Lighthouse' },
            { value: 95, suffix: '%', label: 'Economies operationnelles' },
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
      benefits: ['Reponse en moins de 12 heures', 'Audit gratuit', 'Travail a distance pour l’Amerique latine'],
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
