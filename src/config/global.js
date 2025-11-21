export default {
  global: {
    Name: 'Servicios BPO',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos de la gestión y monitoreo del desempeño en los servicios BPO. Explora los modelos de negocio, niveles de servicio, indicadores de gestión y procedimientos de evaluación aplicados a procesos tercerizados. Permite al aprendiz analizar y establecer métricas que optimicen la calidad y eficiencia del servicio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Modelos de negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Segmentos de mercado',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Niveles de servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estructura',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Indicadores',
            hash: 't_2_3',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Fuentes de datos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Herramientas de monitoreo',
            hash: 't_3_4',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Procedimientos de evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Pasos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Protocolos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Documentación',
            hash: 't_4_3',
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
        download: 'downloads/CFA1_13530528_DU.pdf',
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
      tema: 'Niveles de servicio',
      referencia:
        'Da Silva, D. (s.f.). <em>6 métodos simples para la evaluación del servicio al cliente.</em> Zendesk.',
      tipo: 'Artículo',
      link: 'https://www.zendesk.com.mx/blog/evaluacion-servicio-al-cliente/',
    },
    {
      tema: 'Modelos de negocio',
      referencia:
        'ESIC Business & Marketing School. (2025).<em> BPO: qué es, cómo funciona y ejemplos.</em>',
      tipo: 'Artículo',
      link:
        'https://www.esic.edu/rethink/marketing-y-comunicacion/bpo-que-es-como-funciona-y-ejemplos-c',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo de Nivel de Servicio (SLA)',
      significado:
        'Documento técnico-operativo que establece los parámetros mínimos de calidad, eficiencia y oportunidad que debe cumplir un servicio tercerizado.',
    },
    {
      termino: '<em>Back office</em>',
      significado:
        'Tipo de servicio BPO que se desarrolla sin contacto directo con el cliente.',
    },
    {
      termino: 'Calidad del servicio',
      significado:
        'Dimensión evaluativa que mide el grado de cumplimiento de protocolos, estándares y buenas prácticas en la prestación del servicio.',
    },
    {
      termino: 'CRM <em>(Customer Relationship Management)</em>',
      significado:
        'Sistema tecnológico que permite gestionar las interacciones con clientes, registrar datos operativos, medir indicadores y facilitar el seguimiento de casos en tiempo real.',
    },
    {
      termino: 'Evaluación del desempeño',
      significado:
        'Proceso técnico que permite validar la operación del servicio mediante la recolección, análisis y comparación de datos frente a estándares definidos.',
    },
    {
      termino: '<em>Front office</em>',
      significado:
        'Tipo de servicio BPO que implica contacto directo con el cliente.',
    },
    {
      termino: 'Indicador de gestión (KPI)',
      significado:
        'Medida cuantitativa o cualitativa que permite evaluar el desempeño de un proceso o servicio.',
    },
    {
      termino: 'Matriz de evaluación',
      significado:
        'Formato técnico que permite analizar la calidad de una interacción o proceso, mediante criterios como cortesía, resolución, cumplimiento del <em>script</em> y manejo emocional.',
    },
    {
      termino: 'Procedimiento técnico',
      significado:
        'Conjunto de pasos estructurados que guían la evaluación del servicio, incluyendo la recolección de datos, análisis de información y comparación con estándares.',
    },
    {
      termino: 'Tasa de resolución en primer contacto (FCR)',
      significado:
        'Indicador que mide el porcentaje de casos resueltos en la primera interacción con el cliente, sin necesidad de escalamiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Castellaños, P., & Farias, P. (2011). <em>Estructuración de un modelo de servicio para el sector de Servicios tercerizados a distancia BPO&O. </em>Universidad EAN.',
      link: '',
    },
    {
      referencia:
        'Da Silva, D. (s.f.). <em>6 métodos simples para la evaluación del servicio al cliente.</em> Zendesk.',
      link: 'https://www.zendesk.com.mx/blog/evaluacion-servicio-al-cliente/',
    },
    {
      referencia:
        'ESIC Business & Marketing School. (2025, mayo). <em>BPO: qué es, cómo funciona y ejemplos.</em> ESIC Rethink.',
      link:
        'https://www.esic.edu/rethink/marketing-y-comunicacion/bpo-que-es-como-funciona-y-ejemplos-c',
    },
    {
      referencia:
        'Montoya, C. A. (2009).<em> Evaluación del desempeño como herramienta para el análisis del capital humano.</em> Revista Científica Visión de Futuro, 11(1), Universidad Nacional de Misiones.',
      link: 'https://www.redalyc.org/pdf/3579/357935472005.pdf',
    },
    {
      referencia:
        'Sánchez Torres, W. C., Delgado Vélez, L. D., Gaviria Martínez, L. F., Montoya Ríos, F. J., & Ángel Rodrigo, V. B. (2014).<em> Una mirada analítica al sector de BPO en Colombia y Antioquia.</em> Institución Universitaria Esumer.',
      link:
        'https://repositorio.esumer.edu.co/items/4b4072cd-7176-43da-a7b1-ede5d4e39690',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolas Cruz Ríos ',
          cargo: 'Experto temático ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack<em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
