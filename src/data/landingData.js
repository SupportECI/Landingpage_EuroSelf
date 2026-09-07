// Datos completos de contenido para la Landing Page de Euroself Academy

export const PROMO_DATA = {
  pricePerMonth: '$895',
  currency: 'MXN',
  urgencyText: 'Cupo limitado de lanzamiento',
  spotsRemaining: 8,
};

export const WHAT_INCLUDES_DATA = [
  {
    id: 1,
    title: 'Plataforma de autoestudio 24/7',
    description: 'Acceso ilimitado a sesiones interactivas, ejercicios prácticos y materiales de estudio en cualquier dispositivo.',
    icon: 'MonitorPlay',
    tag: 'Acceso Total',
  },
  {
    id: 2,
    title: '2 sesiones Grupales en Vivo por Semana',
    description: 'Sesiones dinámicas con docentes certificados los lunes y miércoles (horario ideal para profesionistas).',
    icon: 'Users',
    tag: 'En Tiempo Real',
  },
  {
    id: 3,
    title: '1 Tutoría Individual Semanal',
    description: 'Espacio 1 a 1 personalizado con un profesor para pulir tu pronunciación, fluidez y resolver dudas puntuales.',
    icon: 'UserCheck',
    tag: '1 a 1',
  },
  {
    id: 4,
    title: 'Asistente con Inteligencia Artificial',
    description: 'Tecnología con reconocimiento de voz que analiza tu fonética y corrige tu pronunciación al instante.',
    icon: 'Sparkles',
    tag: 'IA Avanzada',
  },
  {
    id: 5,
    title: 'Todas las sesiones Quedan Grabadas',
    description: '¿No pudiste conectarte a una sesión? Repásalas cuantas veces quieras desde tu biblioteca de grabaciones.',
    icon: 'Video',
    tag: 'A tu ritmo',
  },
  {
    id: 6,
    title: 'Viernes de Inmersión',
    description: 'Clubes de conversación libres, workshops prácticos y webinars temáticos cada semana para acelerar tu soltura.',
    icon: 'Compass',
    tag: 'Comunidad',
  },
  {
    id: 7,
    title: 'Examen de Ubicación Gratuito',
    description: 'Diagnóstico inicial completo según el Marco Común Europeo (MCER) para situarte exactamente en tu nivel.',
    icon: 'GraduationCap',
    tag: 'Sin Costo',
  },
];

export const PROGRAMS_DATA = {
  core: {
    id: 'Euroself Core',
    name: 'Euroself Core',
    badge: 'Más Popular — Desde Cero',
    target: 'Empieza desde cero o tiene nivel intermedio (A1 – B2)',
    description: 'El equilibrio perfecto entre bases sólidas de inglés general y tus primeros módulos aplicados a tu profesión.',
    content: [
      'Módulo English Core completo según tu nivel MCER',
      '3 Módulos ESP a elección (Salud, Negocios, IT, Hospitalidad, etc.)',
      'Acceso a plataforma 24/7 y asistente con IA',
      '2 sesiones en vivo grupales + 1 tutoría 1 a 1 semanal',
      'Viernes de inmersión y clubes de conversación',
    ],
    requirements: 'Ninguno — Examen de ubicación gratuito incluido',
    duration: '4 meses',
    monthlyPrice: 895,
    totalPrice: 3900,
    installments: '4 pagos mensuales de $895 MXN',
    ctaText: 'Quiero el programa Core',
    recommended: true,
  },
  specialty: {
    id: 'Euroself Specialty',
    name: 'Euroself Specialty',
    badge: '100% Especializado',
    target: 'Ya tiene nivel B1 – C1 y busca acelerar su carrera',
    description: 'Enfocado 100% en inglés técnico y habilidades profesionales de alto impacto para el mercado global.',
    content: [
      '5 Módulos ESP 100% enfocados en tu industria o carrera',
      'Simulaciones de entrevistas, juntas y negociaciones reales',
      'Revisión de correos, contratos y terminología técnica',
      '2 sesiones en vivo grupales + 1 tutoría 1 a 1 semanal',
      'Preparación opcional para Certificación VTest',
    ],
    requirements: 'Examen de ubicación, entrevista oral o certificación vigente (B1–C1)',
    duration: '4 meses',
    monthlyPrice: 1100,
    totalPrice: 4400,
    installments: '4 pagos mensuales de $1,100 MXN',
    ctaText: 'Quiero el programa Specialty',
    recommended: false,
  },
  moduleC1:{
    id: 'Módulo C1',
    name: 'Módulo Inglés C1',
    badge: 'Mejorar el nivel de Inglés',
    target: 'Preparación y aplicación TOEIC',
    description: 'Enfocado 100% en inglés técnico y habilidades profesionales de alto impacto para el mercado global.',
    content: [
      'Duración 4 meses',
      'Módulo nivel C1 + preparación TOEIC',
      'Clases 3 veces por semana (Lunes, miércoles y jueves)',
      'Club de conversación',
      'Simulacro TOEIC y aplicación oficial del examen',
      'Resultados examen TOEIC en solo 2 días',
      'Aplicación revalidación CENNI + trámite ante la SEP',
    ],
    requirements: 'Examen de ubicación, entrevista oral o certificación vigente (B2–C1)',
    duration: '4 meses',
    monthlyPrice: 1860,
    totalPrice: 5580,
    installments: '3 pagos mensuales de $1,860 MXN sin interéses',
    ctaText: 'Quiero el programa Módulo C1',
    recommended: false,
  }
};

export const ESP_MODULES_DATA = [
  {
    id: 'hospitality',
    title: 'Hospitalidad y Turismo',
    icon: 'ConciergeBell',
    description: 'Vocabulario clave para atención de primer nivel en hoteles, aeropuertos y restaurantes internacionales.',
    examples: ['Check-in / Check-out sin tropiezos', 'Resolución de quejas y atención a huéspedes VIP', 'Reservaciones, tours y concierge en inglés'],
    tag: 'Servicios & Turismo',
  },
  {
    id: 'business',
    title: 'Negocios y Finanzas',
    icon: 'Briefcase',
    description: 'Domina el lenguaje corporativo, estados financieros y negociaciones con clientes o socios del extranjero.',
    examples: ['Términos de facturación e inversiones', 'Reportes financieros y presentaciones de resultados', 'Técnicas de negociación y cierre de acuerdos'],
    tag: 'Corporativo & Banca',
  },
  {
    id: 'health',
    title: 'Salud y Medicina',
    icon: 'HeartPulse',
    description: 'Vocabulario clínico y trato empático con pacientes extranjeros y colegas de la comunidad médica internacional.',
    examples: ['Historia clínica y expedientes médicos en inglés', 'Atención directa y diagnóstico de pacientes', 'Comunicación con especialistas internacionales'],
    tag: 'Médico & Farmacia',
  },
  {
    id: 'tech',
    title: 'Tecnología (IT & Software)',
    icon: 'Code2',
    description: 'Comunícate fluidamente en standups, lee documentación técnica y redacta tickets o correos de ingeniería.',
    examples: ['Documentación técnica, repositorios y arquitectura', 'Correos corporativos y reuniones ágiles (Scrum)', 'Terminología de sistemas, cloud y ciberseguridad'],
    tag: 'Tech & Desarrollo',
  },
  {
    id: 'engineering',
    title: 'Ingeniería y Manufactura',
    icon: 'Wrench',
    description: 'Manejo de terminología técnica de plantas, planos, especificaciones y gestión de proyectos industriales.',
    examples: ['Manuales técnicos y diagramas de proceso', 'Especificaciones de calidad y seguridad industrial', 'Coordinación con proveedores y equipos globales'],
    tag: 'Industria & Planta',
  },
  {
    id: 'legal',
    title: 'Derecho y Asuntos Legales',
    icon: 'Scale',
    description: 'Precisión jurídica para la lectura de cláusulas, redacción de contratos y trato con firmas internacionales.',
    examples: ['Redacción e interpretación de contratos mercantiles', 'Terminología legal corporativa y arbitrajes', 'Comunicación fluida con despachos en el extranjero'],
    tag: 'Legal & Litigio',
  },
  {
    id: 'softskills',
    title: 'Soft Skills Laborales',
    icon: 'MessagesSquare',
    description: 'Aprende a vender tu perfil, superar entrevistas en inglés y comunicar tus ideas con autoridad y asertividad.',
    examples: ['Simulación de entrevistas de trabajo en inglés', 'Oratoria, presentaciones y trabajo en equipo', 'Feedback constructivo y comunicación con directivos'],
    tag: 'Empleabilidad',
  },
  {
    id: 'corporate',
    title: 'Inglés Corporativo Ejecutivo',
    icon: 'Building2',
    description: 'Tres niveles de inglés directivo para liderar equipos multiculturales y cerrar negocios en el escenario global.',
    examples: ['Liderazgo de juntas ejecutivas y webinars', 'Networking y relaciones públicas internacionales', 'Redacción de propuestas comerciales de alto impacto'],
    tag: 'Alta Dirección',
  },
];

export const VTEST_AUTHORITY_DATA = {
  headline: 'Certificación Internacional VTest',
  subheadline: 'A diferencia de cursos que ofrecen diplomas sin validez, Euroself te prepara para certificar tu nivel con respaldo científico y reconocimiento global.',
  costNote: 'Costo adicional de examen de certificación VTest: $2,440 MXN (100% opcional, no incluido en la mensualidad).',
  pillars: [
    {
      title: 'Avalada por Organismos Mundiales',
      description: 'ALTE (alineación rigurosa al MCER Pre-A1 a C2) e ILTA (validez psicométrica y científica de evaluación de idiomas).',
      icon: 'ShieldCheck',
    },
    {
      title: 'Evaluación Adaptativa Inteligente',
      description: 'El examen ajusta dinámicamente la dificultad según tus respuestas en tiempo real. Más corto, más preciso y sin estrés innecesario.',
      icon: 'Cpu',
    },
    {
      title: 'Evalúa las 4 Habilidades Reales',
      description: 'Mide con exactitud Listening, Reading, Writing y Speaking para darte un perfil integral de tus competencias lingüísticas.',
      icon: 'CheckCheck',
    },
    {
      title: 'Reporte Can-Do + Código Digital',
      description: 'Recibes un desglose específico de qué puedes hacer en el mundo real, con certificado digital verificable por 3 años.',
      icon: 'Award',
    },
    /* {
      title: 'Trámite de CENNI en México',
      description: 'Resultados listos para tramitar constancia, certificado o diploma CENNI oficial ante la SEP para trámites de titulación o empleo.',
      icon: 'FileCheck',
    }, */
  ],
  seals: [
    { name: 'ALTE', role: 'Marco Común Europeo', subtitle: 'Pre-A1 a C2 Standard' },
    { name: 'ILTA', role: 'Validez Científica', subtitle: 'Psicometría Lingüística' },
    /* { name: 'CENNI', role: 'SEP México', subtitle: 'Validez Oficial' }, */
  ],
};

export const TESTIMONIALS_DATA = [
  {
    name: 'Andrea Morales Coutiño',
    role: 'Desarrolladora Web Full Stack',
    city: 'Tuxtla Gutiérrez, Chiapas',
    levelChange: 'De A2 a B2 en 5 meses',
    outcome: 'Consiguió empleo remoto para una empresa de software en Austin, TX.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    quote: 'Lo que más me sirvió fue el módulo ESP de Tecnología. Aprendí a expresarme en los daily meetings y a responder preguntas de código en inglés técnico. ¡Valió cada peso!',
    rating: 5,
  },
  {
    name: 'Carlos Eduardo Ramírez',
    role: 'Médico Residente de Medicina Interna',
    city: 'Modalidad Online (CDMX)',
    levelChange: 'De B1 a C1 con VTest',
    outcome: 'Aprobó su certificación VTest',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
    quote: 'El horario nocturno y las tutorías 1 a 1 se adaptaron perfecto a mis guardias. El vocabulario médico que enseñan es exactamente el que leo en journals.',
    rating: 5,
  },
  {
    name: 'Valeria Solís Domínguez',
    role: 'Gerente de Operaciones Turísticas',
    city: 'San Cristóbal / Tuxtla',
    levelChange: 'De Principiante a Intermedio B1',
    outcome: 'Manejo fluido de grupos de turistas europeos y negociación de tarifas.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    quote: 'Había probado otras escuelas que solo te ponen videos. En Euroself las sesiones en vivo con profesor y el asistente de pronunciación me dieron la seguridad de hablar sin miedo.',
    rating: 5,
  },
  {
    name: 'Ing. Rodrigo Méndez',
    role: 'Ingeniero de Calidad Automotriz',
    city: 'Puebla (Modalidad Online)',
    levelChange: 'Especialidad Specialty 5 Módulos',
    outcome: 'Promovido a Lead Project Coordinator con clientes alemanes y estadounidenses.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    quote: 'El precio es súper honesto y claro desde el día 1. Sin cobros ocultos ni sorpresas. La inversión se pagó sola con el incremento de sueldo en mi nuevo puesto.',
    rating: 5,
  },
];

export const METRICS_DATA = [
  { value: '+1,200', label: 'Alumnos activos y egresados' },
  { value: '98%', label: 'Tasa de aprobación en certificaciones' },
  { value: '40+', label: 'Países reconocen la prueba VTest' }
];

export const FAQ_DATA = [
  {
    q: '¿Necesito saber inglés para empezar?',
    a: 'No, para nada. En Euroself puedes iniciar completamente desde cero (nivel A1). Al inscribirte realizas un examen de ubicación gratuito que nos permite colocarte exactamente en el grupo y contenido adecuado para ti.',
  },
  {
    q: '¿Cómo son las sesiones en vivo?',
    a: 'Son 2 sesiones grupales dinámicas por semana con docente en tiempo real (lunes y miércoles). Además, tienes 1 tutoría individual semanal 1 a 1 para corregir pronunciación y resolver dudas personales.',
  },
  {
    q: '¿Qué pasa si no puedo conectarme a una clase en vivo?',
    a: '¡No te preocupes! Todas las sesiones en vivo quedan grabadas y se suben a la plataforma de inmediato para que puedas repasarlas a cualquier hora, 24/7.',
  },
  {
    q: '¿La certificación tiene costo aparte?',
    a: 'Sí, la certificación internacional VTest tiene un costo adicional, para conocer más de etse costo hable con su asesior y le dará la información necesaria. Es completamente opcional y se recomienda presentarla a partir del nivel intermedio (B1) para formalizar tu nivel.',
  },
  {
    q: '¿Cuánto dura el programa?',
    a: 'El programa dura 4 meses por paquete completo. En Euroself Core incluye tu nivel de English Core + 3 módulos ESP. En Euroself Specialty incluye 5 módulos ESP enfocados 100% en tu profesión.',
  },
  {
    q: '¿Qué es un módulo ESP y cómo elijo los míos?',
    a: 'ESP significa "English for Specific Purposes" (Inglés para Fines Específicos). Son módulos especializados en tu carrera o industria (Salud, TI, Hospitalidad, Negocios, Derecho, Ingeniería, etc.). Tú eliges los que mejor se alineen con tus metas laborales.',
  },
  {
    q: '¿Puedo tomar el curso si trabajo tiempo completo?',
    a: 'Totalmente. El programa fue diseñado pensando en profesionistas: las sesiones en vivo son en horario nocturno, la plataforma está abierta 24/7 y las tutorías 1 a 1 se programan según tu disponibilidad.',
  },
];

export const PLACEMENT_TEST_INFO = {
  badge: 'Diagnóstico Académico sin Costo',
  title: '¿No estás seguro de cuál es tu nivel de inglés?',
  description: 'En Euroself Academy aplicamos un examen de ubicación personalizado directamente con nuestros docentes para medir con precisión tus competencias según el Marco Común Europeo (MCER) y definir tu plan de estudio ideal.',
  benefits: [
    'Evaluación oral y gramatical realizada directamente en la academia',
    'Diagnóstico 100% gratuito y sin ningún compromiso',
    'Asignación al nivel exacto y módulos profesionales (ESP) ideales',
  ],
};
