export default {
  global: {
    Name: 'Propuesta comercial',
    Description:
      'Este componente desarrolla habilidades para estructurar propuestas comerciales digitales relevantes y persuasivas, integrando principios de marketing, análisis del cliente y capacidades empresariales. Se enfoca en comunicar soluciones estratégicas utilizando recursos digitales y técnicas de presentación profesional.',
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
        titulo: '<i>Marketing</i> digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y Principios',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Análisis del entorno',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y perfil',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de análisis',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Capacidades empresariales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Planes de mercadeo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Planes de mercadeo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Inventarios, términos y condiciones',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Gestión de pagos y descuentos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Portafolio',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Producción',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Propuestas comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Elementos que la componen',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Aplicación en planes de mercadeo',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Herramientas digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Imágenes, videos, audio y texto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Calidad en los documentos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Organización de propuesta comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Estructura',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Técnicas de persuasión',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Redacción',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Presentaciones',
            hash: 't_6_4',
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
      tema: '<i>Marketing</i> digital',
      referencia:
        'Kotler, P., Kartajaya, H., & Setiawan, I. (2021). <i>Marketing 5.0: Tecnología para la humanidad</i>. LID Editorial.',
      tipo: 'Libro completo en español',
      link: 'https://archive.org/details/marketing-5.0-philip-kotler-espanol',
    },
    {
      tema: '<i>Marketing</i> digital',
      referencia:
        'Ministerio de Producción de Argentina. (2021). <i>Manual de marketing digital para emprendedores</i>.',
      tipo: 'Manual práctico en PDF',
      link:
        'https://www.academia.edu/85247906/Manual_de_marketing_digital_para_emprendedores',
    },
    {
      tema: 'Presentaciones efectivas',
      referencia:
        'Cámara de Comercio de Bogotá. (2020). <i>Aprende a elaborar presentaciones efectivas: marca la diferencia</i>.',
      tipo: 'Guía didáctica en PDF',
      link:
        'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/9087/100000333.pdf',
    },
    {
      tema: 'Recursos digitales',
      referencia:
        'FlipHTML5. (s.f.). <i>10 plantillas de portafolios profesionales gratis para descargar y editar</i>. FlipHTML5 Blog. Recuperado en julio de 2025, de ',
      tipo: 'Recursos digitales',
      link: 'https://fliphtml5.com/',
    },
  ],
  glosario: [
    {
      termino: 'Capacidades empresariales',
      significado:
        'Recursos, procesos y condiciones que permiten a la empresa cumplir lo que ofrece.',
    },
    {
      termino: 'Cliente digital',
      significado:
        'Usuario que interactúa, compra y decide a través de canales digitales.',
    },
    {
      termino: 'Diseño narrativo',
      significado:
        'Estructura lógica y visual que guía la lectura de la propuesta comercial.',
    },
    {
      termino: '<i>Marketing</i> digital',
      significado:
        'Conjunto de estrategias de comercialización a través de medios y plataformas digitales.',
    },
    {
      termino: 'Persuasión ética',
      significado:
        'Capacidad de influir respetando la autonomía y razonamiento del receptor.',
    },
    {
      termino: 'Portafolio',
      significado:
        'Conjunto organizado de productos o servicios que ofrece una empresa.',
    },
    {
      termino: 'Propuesta comercial',
      significado:
        'Documento que presenta una oferta de productos o servicios con condiciones claras.',
    },
    {
      termino: 'Recursos digitales',
      significado:
        'Herramientas como imágenes, video, audio y texto utilizadas en entornos virtuales.',
    },
    {
      termino: 'Segmentación',
      significado: 'Proceso de dividir el mercado según criterios específicos.',
    },
    {
      termino: '<i>Storytelling</i> comercial',
      significado:
        'Uso de narrativas para conectar emocionalmente con el cliente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arango Serna, S. A., Londoño Salazar, J. H., & Álvarez Uribe, A. M. (2015). <.>Capacidades de negocio en el contexto empresarial. Revista Facultad de Ingeniería, (76), 2–13</i>. Redalyc. ',
      link: 'https://www.redalyc.org/pdf/1942/194224362002.pdf',
    },
    {
      referencia:
        'Escobar Ceballos, N. M., & Vargas Manzano, M. A. (2022). <i>La narración de historias y el desarrollo de contenidos publicitarios en redes sociales. Caso: Bimbo en Instagram. Revista Comunicación, 31(1), 65–78</i>. Redalyc. ',
      link: 'https://www.redalyc.org/articulo.oa?id=637969125003',
    },
    {
      referencia:
        'Fernández Valiñas, R. (2023). <i>Segmentación de mercados</i>. Universidad Tecnológica de México.',
      link:
        'https://www.uteg.edu.ec/biblioteca-libros/wp-content/uploads/2023/09/Segmentacion-de-mercados_compressed.pdf',
    },
    {
      referencia:
        'Guisado Rodríguez, A. M. (2021). <i>“Storytelling”: cómo contar historias ayuda a la estrategia de marketing</i> (Trabajo de fin de grado). Universidad de Sevilla',
      link:
        'https://idus.us.es/bitstreams/7e46ad9f-13e6-4bda-ac17-9a771a9bc5c1/download',
    },
    {
      referencia:
        'Solomon, M. R. (2018). <i>Comportamiento del consumidor: Comprando, poseyendo y siendo (12ª ed.).</i> Pearson Educación.',
      link:
        'https://www.academia.edu/123591709/Comportamiento_del_consumidor_Solomon',
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
