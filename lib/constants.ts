export const SITE_NAME = 'Oficina Arbitral'
export const SITE_URL = 'https://www.oficinaarbitral.cl'
export const SITE_DESCRIPTION =
  'Gestión profesional e integral de juicios arbitrales de partición en Chile. Su expediente organizado, sus comparendos agendados, sus actas redactadas. Usted solo resuelve el fondo.'

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? '[CONFIGURAR_EMAIL]'
export const CONTACT_PHONE = process.env.CONTACT_PHONE ?? '[CONFIGURAR_TELEFONO]'
export const CONTACT_ADDRESS = process.env.CONTACT_ADDRESS ?? 'Santiago, Región Metropolitana, Chile'

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''

// These must be configured before launch — do NOT use for real pricing
export const PRICING_PLANS = [
  {
    id: 'causa-unica',
    name: 'Causa Única',
    description: 'Para jueces árbitros con una causa específica a gestionar.',
    price: '[CONFIGURAR_PRECIO]',
    unit: 'pago único',
    features: [
      'Gestión integral de la causa',
      'Portal digital de expediente',
      'Coordinación de comparendos vía Zoom',
      'Redacción de actas y borradores',
      'Coordinación de peritos y tasadores',
      'Soporte permanente hasta el remate',
    ],
    highlighted: false,
    cta: 'Solicitar gestión',
  },
  {
    id: 'multi-causa',
    name: 'Multi-Causa',
    description: 'Para jueces árbitros con varias causas activas simultáneas.',
    price: '[CONFIGURAR_PRECIO]',
    unit: 'por causa / mes',
    features: [
      'Todo lo incluido en Causa Única',
      'Gestión simultánea de múltiples causas',
      'Tablero consolidado de todas sus causas',
      'Alertas de plazos y vencimientos',
      'Reportes mensuales de avance',
      'Prioridad en soporte y atención',
    ],
    highlighted: true,
    cta: 'Solicitar gestión',
  },
  {
    id: 'causas-ilimitadas',
    name: 'Causas Ilimitadas',
    description: 'Para árbitros de alta demanda o estudios jurídicos.',
    price: '[CONFIGURAR_PRECIO]',
    unit: 'mensual',
    features: [
      'Todo lo incluido en Multi-Causa',
      'Causas ilimitadas sin costo adicional por causa',
      'Acceso administrativo para equipo del estudio',
      'Integración con sistemas propios (a convenir)',
      'Reunión mensual de revisión de cartera',
      'Ejecutivo de cuenta dedicado',
    ],
    highlighted: false,
    cta: 'Contactar para cotizar',
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Designación judicial',
    description:
      'El tribunal lo designa a usted como juez árbitro partidor. Las partes aceptan y el proceso comienza.',
  },
  {
    step: '02',
    title: 'Encargo a Oficina Arbitral',
    description:
      'Nos encarga la gestión integral de la causa. Firmamos un acuerdo de confidencialidad y definimos el alcance.',
  },
  {
    step: '03',
    title: 'Tramitación completa',
    description:
      'Nosotros gestionamos correos, comparendos, actas, borradores, peritos y comunicaciones. Usted revisa y aprueba.',
  },
  {
    step: '04',
    title: 'Resolución y remate',
    description:
      'Usted falla el fondo. Coordinamos el remate con compradores calificados. Meta referencial: ~6 meses.',
  },
]

export const SERVICES = [
  {
    icon: 'Mail',
    title: 'Comunicaciones',
    description:
      'Gestión de correos con partes, abogados, peritos y compradores. Toda comunicación documentada en el portal.',
  },
  {
    icon: 'Video',
    title: 'Comparendos vía Zoom',
    description:
      'Programación, convocatoria y actas de cada comparendo. Link de Zoom y grabación disponibles en el expediente.',
  },
  {
    icon: 'FileText',
    title: 'Actas y borradores',
    description:
      'Redacción de actas de comparendos y borradores de resoluciones para revisión y firma del juez árbitro.',
  },
  {
    icon: 'Users',
    title: 'Coordinación de peritos',
    description:
      'Contacto, contratación y seguimiento de tasadores, peritos de parte y auditores necesarios en la causa.',
  },
  {
    icon: 'Building2',
    title: 'Gestión del remate',
    description:
      'Contacto con compradores calificados, coordinación con corredores y apoyo en el proceso de remate judicial.',
  },
  {
    icon: 'Shield',
    title: 'Portal digital seguro',
    description:
      'Expediente digital accesible 24/7 para el juez, las partes y sus abogados, con control de acceso por rol.',
  },
]

export const FAQ_ITEMS = [
  {
    question: '¿Qué es un juicio arbitral de partición?',
    answer:
      'Es el proceso judicial por el cual se divide un bien en comunidad (herencia, sociedad conyugal, copropiedad) entre sus comuneros. Lo dirige un juez árbitro partidor designado por las partes o el tribunal, quien tiene un plazo de 2 años para fallar.',
  },
  {
    question: '¿Qué hace exactamente Oficina Arbitral?',
    answer:
      'Nos encargamos de toda la gestión administrativa de la causa: correos, programación de comparendos vía Zoom, redacción de actas, borradores de resoluciones, coordinación con peritos y tasadores, y contacto con compradores para el remate. El juez árbitro solo resuelve el fondo jurídico.',
  },
  {
    question: '¿Cómo se cobra el servicio?',
    answer:
      'Principalmente mediante un fee sobre el resultado del remate. Los planes específicos y precios se definen en una reunión inicial según las características de cada causa. No cobramos mensualidades fijas como único modelo.',
  },
  {
    question: '¿Qué pasa si las partes llegan a acuerdo antes del remate?',
    answer:
      'El acuerdo de las partes es siempre el mejor resultado. En ese caso, adaptamos los honorarios a la gestión efectivamente realizada hasta ese momento, lo que está contemplado en nuestros contratos desde el inicio.',
  },
  {
    question: '¿Quién puede contratar el servicio?',
    answer:
      'El servicio está dirigido principalmente a jueces árbitros designados. Las partes litigantes también pueden contactarnos para obtener información sobre el proceso y coordinar la contratación con el juez árbitro de su causa.',
  },
  {
    question: '¿Es seguro subir documentos al portal?',
    answer:
      'Sí. El portal usa cifrado en tránsito y en reposo. El acceso está controlado por roles: cada usuario solo ve los documentos que le corresponden según su calidad en la causa (juez, parte, abogado). Firmamos acuerdo de confidencialidad con cada cliente.',
  },
  {
    question: '¿En cuánto tiempo se puede llegar al remate?',
    answer:
      'La meta referencial es ~6 meses desde la designación del juez árbitro. Este plazo depende de la complejidad de la causa, la cooperación de las partes y la disponibilidad de los bienes. El plazo legal máximo del juez árbitro es 2 años.',
  },
  {
    question: '¿Trabajan en todo Chile o solo en Santiago?',
    answer:
      'Operamos de manera remota para causas en cualquier parte de Chile. Las comparendos se realizan principalmente vía Zoom. Para causas que requieran presencia física en regiones, lo coordinamos caso a caso.',
  },
]

export const NAV_LINKS = [
  { href: '/que-es-un-juicio-arbitral', label: '¿Qué es?' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/para-jueces-arbitros', label: 'Para Jueces' },
  { href: '/precios', label: 'Precios' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]
