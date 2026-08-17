export const profile = {
  name: 'David Serrudo',
  navItems: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    eyebrow: 'Estudiante de Ciencia de la Computacion',
    location: 'Santiago, Chile / Lima, Peru',
    summary: 'Software impulsado por datos.',
    cta: 'Contactar',
  },
  skills: ['Data Analytics', 'Software Development', 'Machine Learning'],
  about: {
    label: 'About',
    title: 'Mi Perfil',
    paragraphs: [
      'Soy estudiante de Ciencia de la Computacion enfocado en construir software impulsado por datos y productos digitales inteligentes.',
      'Mi trabajo combina desarrollo de software, analisis de datos, machine learning y vision por computador. Disfruto llevar proyectos desde la preparacion de datos y la experimentacion con modelos hasta APIs, interfaces y despliegues reproducibles.',
    ],
    image: {
      src: '/images/FotoPerfil.jpeg',
      alt: 'Fotografia de David Serrudo',
    },
    profileDetails: [
      { label: 'Nombre', value: 'David Serrudo' },
      { label: 'Rol', value: 'Estudiante de Ciencia de la Computacion' },
      { label: 'Ubicacion', value: 'Santiago, Chile / Lima, Peru' },
    ],
    focusAreas: [
      {
        index: '01',
        label: 'Datos',
        value: 'Explorar y preparar informacion.',
      },
      {
        index: '02',
        label: 'Modelos',
        value: 'Construir soluciones predictivas e interactivas.',
      },
      {
        index: '03',
        label: 'Sistemas',
        value: 'Integrar modelos, APIs e interfaces.',
      },
      {
        index: '04',
        label: 'Entrega',
        value: 'Crear productos reproducibles y usables.',
      },
    ],
  },
  projects: {
    label: 'Proyectos',
    range: '2024 - 2026',
    title: 'Trabajos seleccionados',
    summary:
      'Espacio reservado para proyectos reales. Por ahora se muestran placeholders con imagenes de referencia.',
    items: [
      {
        id: 'project-placeholder-01',
        name: 'Proyecto pendiente 01',
        year: '2026',
        category: 'Software / Datos',
        status: '[Pendiente]',
        image: '/images/projects/project-reference-grid.png',
        alt: 'Imagen de referencia para proyecto pendiente',
      },
      {
        id: 'project-placeholder-02',
        name: 'Proyecto pendiente 02',
        year: '2026',
        category: 'Machine Learning',
        status: '[Pendiente]',
        image: '/images/projects/project-placeholder-screen.png',
        alt: 'Imagen de referencia para proyecto pendiente',
      },
      {
        id: 'project-placeholder-03',
        name: 'Proyecto pendiente 03',
        year: '2025',
        category: 'Data Analytics',
        status: '[Pendiente]',
        image: '/images/projects/project-reference-grid.png',
        alt: 'Imagen de referencia para proyecto pendiente',
      },
    ],
  },
  experience: {
    label: 'Experiencia',
    title: 'Donde he trabajado',
    summary:
      'Una vista breve de experiencias reales donde combino desarrollo, datos, modelos e implementacion de sistemas.',
    groups: [
      {
        label: 'Experiencia laboral',
        itemIds: ['ejercito-fullstack', 'omni-resort', 'ayudantia-upc'],
      },
      {
        label: 'Experiencia relevante',
        itemIds: [
          'hackathon-data-innovatech',
          'nasa-space-apps',
          'programacion-competitiva',
        ],
      },
    ],
    items: [
      {
        id: 'ejercito-fullstack',
        period: 'Abr 2026 - Actualidad',
        role: 'Practicante de Desarrollo Full Stack',
        organization: 'Ejercito del Peru',
        location: 'Lima, Peru',
        type: 'laboral',
        focus: 'Sistemas internos, datos relacionales y documentacion tecnica.',
        points: [
          'Desarrollo modulos internos integrando frontend, backend y bases de datos relacionales.',
          'Diseno tablas, relaciones, catalogos y flujos de informacion para organizar datos operativos.',
          'Apoyo en documentacion tecnica, validacion de requerimientos y control de versiones.',
          'Colaboro en soluciones considerando seguridad, trazabilidad, control de accesos y consistencia de informacion.',
        ],
      },
      {
        id: 'hackathon-data-innovatech',
        period: '2026',
        role: 'Participante Hackathon IDEATECH PYME',
        organization: 'ESAN',
        location: '[Pendiente]',
        type: 'datos-ml',
        focus:
          'Desarrollo de Urpi, una plataforma inteligente para apoyar la gestion de PYMES durante un hackathon de innovacion.',
        points: [
          'Desarrolle un MVP junto a un equipo multidisciplinario.',
          'Implemente funcionalidades del sistema e integre componentes de la aplicacion.',
          'Colabore en el diseno y validacion de la solucion.',
          'Presente el proyecto ante mentores y jurado.',
        ],
      },
      {
        id: 'nasa-space-apps',
        period: '2025',
        role: 'Participante NASA Space Apps Challenge',
        organization: 'NASA Space Apps Challenge',
        location: '[Pendiente]',
        type: 'datos-ml',
        focus:
          'Desarrollo de una solucion basada en datos abiertos de la NASA para apoyar la deteccion de exoplanetas mediante machine learning.',
        points: [
          'Analice y prepare datos astronomicos.',
          'Colabore en el desarrollo del MVP y la integracion del sistema.',
          'Implemente componentes para el procesamiento de datos.',
          'Presente la solucion durante la evaluacion final.',
        ],
      },
      {
        id: 'ayudantia-upc',
        period: 'Mar 2024 - Ago 2024',
        role: 'Asistente de catedra',
        organization: 'Universidad Peruana de Ciencias Aplicadas',
        location: 'Lima, Peru',
        type: 'academico',
        focus: 'Tutoria personalizada y refuerzo de fundamentos de programacion.',
        points: [
          'Imparti sesiones de tutoria para reforzar conocimientos de programacion.',
          'Aplique tecnicas de ensenanza adaptativa para simplificar conceptos complejos.',
          'Promovi buenas practicas de programacion y claridad en la resolucion de problemas.',
        ],
      },
      {
        id: 'programacion-competitiva',
        period: '2022 - 2024',
        role: 'Participante Grupo de Programacion Competitiva',
        organization: 'Universidad Peruana de Ciencias Aplicadas',
        location: 'Lima, Peru',
        type: 'academico',
        focus:
          'Entrenamiento en algoritmos, estructuras de datos y resolucion de problemas bajo restricciones de tiempo.',
        points: [
          'Resolvi problemas algoritmicos utilizando C++ y Python.',
          'Aplique estructuras de datos y tecnicas de optimizacion en competencias de programacion.',
          'Fortaleci el pensamiento algoritmico, la resolucion de problemas y el trabajo colaborativo.',
        ],
      },
      {
        id: 'omni-resort',
        period: 'Dic 2025 - Mar 2026',
        role: 'Spa Attendant',
        organization: 'The Omni Homestead Resort & Spa',
        location: 'Virginia, EE. UU.',
        type: 'laboral',
        focus: 'Comunicacion en ingles, atencion al detalle y trabajo multicultural.',
        points: [
          'Desarrolle comunicacion diaria en ingles con clientes internacionales.',
          'Fortaleci atencion al detalle, resolucion de problemas y trabajo en equipo multicultural.',
        ],
      },
    ],
  },
  contact: {
    label: '05 Contacto',
    title: 'Disponible para conversar sobre software, datos y machine learning.',
    summary: 'Canales abiertos para oportunidades, proyectos o ideas academicas.',
    channels: [
      {
        label: 'Email',
        value: 'dserrudocaina@gmail.com',
        href: 'mailto:dserrudocaina@gmail.com',
      },
      {
        label: 'GitHub',
        value: 'github.com/Daavidasc',
        href: 'https://github.com/Daavidasc',
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/david-serrudo-4782bb274',
        href: 'https://www.linkedin.com/in/david-serrudo-4782bb274/',
      },
    ],
    resources: [
      {
        label: 'CV',
        value: 'Descargar CV',
        href: '/cv/CV_David_Serrudo_ES_Investigacion.pdf',
      },
    ],
  },
};
