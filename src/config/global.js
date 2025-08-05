export default {
  global: {
    Name: 'Aprovechamiento de recursos forestales no maderables',
    Description:
      'Este componente describe las aspectos técnicos y normativos asociados al aprovechamiento de los recursos forestales no maderables, los cuales generan oportunidades para la ejecución de proyectos productivos. Las temáticas descritas le permiten conocer los aspectos normativos requeridos para los permisos ambientales relacionados con el aprovechamiento de productos no maderables, adicionalmente encuentra aspectos relacionados con la recolección, el uso potencial, manufactura y cadena de valor.',
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
        titulo: 'Aprovechamiento de recursos forestales no maderables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clases de aprovechamiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Trámite para adquirir el derecho de uso',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Modos de adquirir el derecho al manejo sostenible',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Consideraciones de sostenibilidad',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Normativa',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recursos forestales no maderables como materia prima',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Usos y aplicaciones de los productos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Fases de desarrollo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Recolección de recursos forestales no maderables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Métodos de recolección',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Impactos ambientales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Elementos de protección personal',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Manufactura de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Uso potencial',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Procesos de transformación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Cadena de valor',
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
      tema: 'Normativa',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021, 21 de junio). Decreto 690 de 2021, por el cual se modifica el Decreto 1076 de 2015 en lo relacionado con el aprovechamiento forestal de especies no maderables y se dictan otras disposiciones. Diario Oficial No. 51.693.',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=164893',
    },
    {
      tema: 'Normativa',
      referencia:
        'Congreso de Colombia. (1993, 22 de diciembre). Ley 99 de 1993, por la cual se crea el Ministerio del Medio Ambiente, se reordena el sector público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental (SINA) y se dictan otras disposiciones. Diario Oficial No. 41.146.',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=29',
    },
    {
      tema: 'Normativa',
      referencia:
        'Presidencia de la República de Colombia. (2015, 26 de mayo). Decreto 1076 de 2015, por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. Diario Oficial No. 49.523.',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=78153',
    },
    {
      tema: 'Cadena de valor',
      referencia:
        'Instituto SINCHI. (2021, 29 de enero). Productos forestales no maderables y cadena de valor [Video]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iUCQcVPjf7k',
    },
  ],
  glosario: [
    {
      termino: 'Estudio técnico',
      significado:
        'documento elaborado por el interesado en el manejo sostenible de la flora silvestre y de los productos forestales no maderables con fines comerciales, por medio del cual se caracterizan, proponen y analizan aspectos biológicos, ecológicos, productivos y socioculturales que demuestran que existe una adecuada estabilidad poblacional, que permita un manejo sostenible de las especies objeto de interés.',
    },
    {
      termino: 'Flora silvestre',
      significado:
        'conjunto de especies e individuos vegetales del territorio nacional que no se han plantado o mejorado por el hombre, presentes en ecosistemas naturales diferentes al bosque natural. Incluye la flora acuática.',
    },
    {
      termino:
        'Protocolo para el manejo sostenible de la flora silvestre y de los productos forestales no maderables',
      significado:
        'documento técnico que contiene los lineamientos para el manejo sostenible de la flora silvestre y de los productos forestales no maderables.',
    },
  ],
  referencias: [
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2021). Decreto 690 de 2021. Por el cual se adiciona y modifica el Decreto Único Reglamentario 1076 de 2015, del sector de Ambiente y Desarrollo Sostenible, en lo relacionado con el manejo sostenible de la flora silvestre y los productos forestales no maderables, y se adoptan otras determinaciones. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=164893',
    },
    {
      referencia:
        'Instituto SINCHI. (2021, 29 de enero). Productos forestales no maderables y cadena de valor [Video]. Youtube. ',
      link: 'https://www.youtube.com/watch?v=iUCQcVPjf7k',
    },
    {
      referencia:
        'López, R y Murcia G. (2020). Productos forestales no maderables -PFNM-  en Colombia consideraciones para su desarrollo.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/03/Productos-Forestales-No-Maderables-PFNM-en-Colombia_v.pdf',
    },
    {
      referencia:
        'López. R. (2008). Productos forestales no maderables:  importancia e impacto de su aprovechamiento. ',
      link:
        'https://revistas.udistrital.edu.co/index.php/colfor/article/view/3029',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021). Formulario único nacional solicitud de aprovechamiento manejo sostenible de flora silvestre y productos forestales no maderables. ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/02/Resolucion-1466-de-2021-ANEXO-FUN-Aprovechamiento-Forestal.pdf',
    },
    {
      referencia:
        'Patrimonio Natural. (2024). Productos forestales no maderables para su uso sostenible con enfoque de cadena de valor.',
      link:
        'https://www.patrimonionatural.org.co/productos-forestales-no-maderables-para-su-uso-sostenible-con-enfoque-de-cadena-de-valor/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Maritza Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Milena Picon Rincon',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
