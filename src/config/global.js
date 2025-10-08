export default {
  global: {
    Name: 'Negociación de propuestas comerciales.',
    Description:
      'Este componente desarrolla competencias orientadas a la estructuración, presentación y seguimiento de propuestas comerciales en entornos digitales. A través del estudio de la comunicación comercial, los modelos de negociación, las técnicas persuasivas, los protocolos de seguimiento y los programas de fidelización, el aprendiz adquiere herramientas para influir éticamente en la toma de decisiones del cliente y construir relaciones sostenibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comunicación comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Interferencias',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Herramientas digitales',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Negociación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Modelos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Técnicas de anclaje y persuasión',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Desarrollo de <i>scripts</i>',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Técnicas de seguimiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas de seguimiento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protocolos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Informes',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Programas de fidelización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Objetivo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Beneficios',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Tipos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Estrategias',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas de seguimiento comercial',
      referencia:
        'Vidal, E. (2023). <i>Técnicas de seguimiento comercial: métricas, plantillas y ejemplos</i>. Ventas de Alto Octanaje.',
      tipo: 'Artículo web',
      link:
        'https://www.ventasdealtooctanaje.com/blog/tecnicas-de-seguimiento-comercial-metricas-plantillas-y-ejemplos-de-aplicacion-para-gerentes-y-vendedores',
    },
    {
      tema: 'Estrategias de seguimiento proactivo',
      referencia:
        'Nomadia Group. (2023). <i>Seguimiento comercial en 2023: ¡la guía completa!</i> Nomadia.',
      tipo: 'Artículo web',
      link:
        'nomadia-group.com/es/recursos/blog/seguimiento-comercial-en-2023-la-guia-completa/',
    },
    {
      tema: 'Comunicación comercial efectiva',
      referencia:
        'Maddio, G. (s.f.). <i>Técnicas de ventas y comunicación comercial</i>. Universidad Nacional de Cuyo.',
      tipo: 'Capítulo de libro',
      link:
        'https://fce.uncuyo.edu.ar/upload/se-adm-n66-tecnicas-de-ventas-y-comunicacion-comercial-gustavo-maddio.pdf',
    },
    {
      tema: 'Herramientas digitales para seguimiento',
      referencia:
        'LaGrowthMachine. (2023). <i>Impulse sus ventas con estas estrategias de seguimiento comercial</i>. LaGrowthMachine.',
      tipo: 'Artículo web',
      link: 'https://lagrowthmachine.com/es/seguimiento-comercial/',
    },
  ],
  glosario: [
    {
      termino: 'Anclaje',
      significado:
        'Técnica persuasiva que consiste en presentar una cifra inicial que influye en la percepción del cliente sobre ofertas posteriores.',
    },
    {
      termino: 'Autoridad',
      significado:
        'Principio persuasivo que utiliza testimonios, certificaciones o expertos para generar credibilidad en una propuesta comercial.',
    },
    {
      termino: 'Canal de comunicación',
      significado:
        'Medio a través del cual se transmite el mensaje comercial, como correo electrónico, redes sociales o presentaciones digitales.',
    },
    {
      termino: 'Cliente',
      significado:
        'Receptor de la propuesta comercial, cuya necesidad o interés motiva el diseño de la oferta.',
    },
    {
      termino: 'Comunicación comercial',
      significado:
        'Proceso estratégico mediante el cual una empresa transmite valor a sus clientes a través de mensajes claros y persuasivos.',
    },
    {
      termino: 'CRM',
      significado:
        'Siglas de <i>Customer Relationship Management</i>, herramienta digital que permite gestionar relaciones con clientes y automatizar el seguimiento comercial.',
    },
    {
      termino: 'Escasez',
      significado:
        'Técnica persuasiva que genera urgencia al limitar la disponibilidad de un producto o servicio.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Estrategia comercial orientada a mantener y fortalecer la relación con clientes a largo plazo.',
    },
    {
      termino: 'Frecuencia de contacto',
      significado:
        'Número y ritmo de interacciones con el cliente durante el proceso de seguimiento comercial.',
    },
    {
      termino: 'Informe comercial',
      significado:
        'Documento que recopila datos sobre el seguimiento de propuestas, incluyendo indicadores como respuestas, reuniones y cierres.',
    },
    {
      termino: 'Modelo colaborativo',
      significado:
        'Enfoque de negociación que busca construir relaciones duraderas basadas en confianza y cooperación.',
    },
    {
      termino: 'Modelo distributivo',
      significado:
        'Enfoque de negociación competitivo donde cada parte busca maximizar su beneficio individual.',
    },
    {
      termino: 'Persuasión',
      significado:
        'Capacidad de influir en las decisiones del cliente mediante argumentos, emociones o técnicas estratégicas.',
    },
    {
      termino: 'Propuesta comercial',
      significado:
        'Documento estructurado que presenta una oferta de productos o servicios, destacando beneficios, condiciones y llamado a la acción.',
    },
    {
      termino: '<i>Script</i> comercial',
      significado:
        'Guion estructurado que guía la interacción entre vendedor y cliente, facilitando la presentación de la oferta y el manejo de objeciones.',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
