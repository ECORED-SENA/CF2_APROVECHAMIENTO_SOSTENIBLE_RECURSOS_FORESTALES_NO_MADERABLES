<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Manufactura de productos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img100.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La manufactura de <strong>productos forestales no maderables (PFNM)</strong> comprende un conjunto de procesos mediante los cuales los recursos recolectados del bosque son <strong>transformados, acondicionados o valorizados</strong>, sin necesidad de recurrir a la tala de árboles. Estos procesos permiten <strong>dar valor agregado</strong> a materias primas silvestres, favoreciendo la economía local y promoviendo el uso sostenible de la biodiversidad.
    
    <!-- BLOQUE 1 -->
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Uso potencial

    p.mb-5 Los PFNM tienen un <strong>amplio potencial de uso</strong> en diversos sectores económicos y regiones del país. Entre los recursos más comunes que ofrecen alternativas productivas se encuentran: frutos, semillas, raíces, resinas, hongos, plantas medicinales y aromáticas, así como fibras vegetales. Su disponibilidad y tipo de uso dependen de la riqueza natural específica de cada territorio. A continuación, se resumen los principales usos potenciales de estos productos:

    TabsC.color-acento-contenido(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Artesanías")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img101.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Artesanías
            p.mb-0 Uso de fibras y tintes naturales como materia prima para la elaboración de productos artesanales con alto valor cultural y comercial.

      .py-3.py-md-4(titulo="Alimentos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img102.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Alimentos
            p.mb-0 Empleo de frutos silvestres, semillas comestibles y otros insumos vegetales en la producción de alimentos, bebidas e ingredientes para cadenas agroalimentarias.
      
      .py-3.py-md-4(titulo="Salud y medicina")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img103.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Salud y medicina
            p.mb-0 Utilización de plantas medicinales, aceites y compuestos bioactivos para la elaboración de remedios tradicionales y productos farmacéuticos naturales.

      .py-3.py-md-4(titulo="Cosmetología")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img104.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Cosmetología
            p.mb-0 Materias primas como aceites esenciales, extractos vegetales y aromas naturales empleadas en la producción de jabones, cremas, perfumes y cosméticos.

    <!-- BLOQUE 2 -->
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Procesos de transformación

    .row.align-items-center.mb-5.m-0
      .col-xl.style___box_14(data-aos="fade-right")
        p.mb-0 Para comprender cómo se transforman los <strong>productos forestales no maderables (PFNM)</strong>, es útil conocer casos concretos que han tenido impacto comercial en sectores como la alimentación y la cosmética. Un ejemplo representativo es el <strong>Asaí</strong>, fruto amazónico que en los últimos años ha ganado gran popularidad tanto como <strong>producto comestible</strong> como en la <strong>industria de belleza</strong>.
      .col-xl-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img105.png', alt='' style="max-width: 290px").m-auto
      .col-xl.espacio___movil_4
        figure.d-none.d-xl-block.mb-3(data-aos="fade-left")
          img(src='@/assets/curso/temas/img106.svg', alt='' style="max-width: 76px")
        p.mb-0 El Asaí es recolectado principalmente en el Amazonas colombiano, donde su producción varía a lo largo del año según las condiciones climáticas. La temporada de cosecha se concentra entre los meses de abril y junio. Cada planta puede producir entre 1 y 5 racimos, con un rendimiento promedio de 9,5 kg por planta. Recolección comunitaria.
    
    p.mb-5.espacio___movil_1 La actividad es realizada por comunidades indígenas, como los Nukak Makú, quienes organizan grupos de trabajo y pueden recolectar hasta 850 kg de Asaí por día. El primer paso consiste en identificar las palmas aptas para el aprovechamiento, las cuales deben:

    .row.justify-content-center.mb-5.m-0
      .col-xl-10
        .row.justify-content-center.mb-3
          .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .style___box_15.ajuste___box(data-aos="zoom-in")
              p.mb-0 Tener una altura superior a 10 metros.
          
          .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .style___box_15(data-aos="zoom-in")
              p.mb-0 Presentar un color adecuado del fruto, indicador de madurez.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 Etapas del proceso de transformación del Asaí
    
    p.mb-5 Una vez recolectado, el fruto del Asaí pasa por diversas etapas técnicas que aseguran su <strong>calidad y valor agregado</strong>. Estas etapas se dividen en fases de transformación:

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
            .row(titulo="Postcosecha").ajuste-cajaAcordion
              p.mb-0 Comercialización de fruta fresca, acopio, selección de frutos en buen estado y refrigeración para conservar propiedades antes del procesamiento.
            .row(titulo="Primera transformación").ajuste-cajaAcordion
              p.mb-0 Incluye el lavado, despulpado (se separa la pulpa del resto del fruto), pasteurización para asegurar la inocuidad, empaque y refrigeración final.
            .row(titulo="Segunda transformación").ajuste-cajaAcordion
              p.mb-0 Se elaboran productos derivados como helados, infusiones, bebidas energizantes y <em>bowls</em> de Asaí combinados con frutas, cereales u otros ingredientes.
            .row(titulo="Comercialización final").ajuste-cajaAcordion
              p.mb-3 Implica la identificación de consumidores y la compra y venta de pulpa, productos elaborados y subproductos del Asaí.
        .col-xl-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/temas/img107.png", alt="" style="width: 400px").m-auto
    
    p.mb-0.espacio___movil_1 Este ejemplo demuestra cómo un PFNM puede integrarse en una <strong>cadena de transformación eficiente</strong>, respetando criterios ambientales, generando valor económico y <strong>fortaleciendo la economía comunitaria</strong>.

    <!-- BLOQUE 3 -->
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Cadena de valor

    .row.align-items-center.mb-5.m-0.style___box_9(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img108.svg', alt='' style="max-width: 190px").m-auto
      .col-xl
        p La cadena de valor es una relación de colaboración estratégica entre diversos actores para agregar valor a un producto o servicio, con el propósito de ofrecer calidad al consumidor y generar competitividad en el mercado.
        p.mb-0 En el caso de los productos forestales no maderables, la cadena de valor parte de la biodiversidad y de sistemas productivos forestales. La articulación de diferentes actores permite agregar valor a estos recursos, generando productos con propiedades diferenciadas que, además de ofrecer oportunidades productivas, fortalecen a las comunidades recolectoras. A continuación, se presentan los actores principales que intervienen en la cadena de valor de estos productos:
    
    .row.mb-5
      .col-lg-4(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img109.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Recolectores / agricultores
          p.mb-0 Obtienen los recursos a partir de la biodiversidad y sistemas forestales productivos. Se encargan de la cosecha y poscosecha (transformación primaria).
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img110.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Agroindustria local
          p.mb-0 Realiza la transformación secundaria, elaborando productos intermedios como ingredientes naturales para cosméticos y alimentos.
      .col-lg-4(data-aos="zoom-in").espacio___movil_3
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img111.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Empresas nacionales o multinacionales
          p.mb-0 Ejecutan la transformación terciaria: desarrollan productos terminados y servicios, y se encargan de la comercialización en el mercado.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 Ejemplo: cadena de valor con comunidades de San José del Guaviare
    
    p.mb-5 En la siguiente tabla se describe cómo se articula una cadena de valor a partir del aprovechamiento de frutos frescos, hojas y flores mediante un proyecto productivo con comunidades del Guaviare (Patrimonio Natural, 2024):

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Recolectores / agricultores de San José del Guaviare
                p.mb-0 Recolección de recursos provenientes de poblaciones naturales y sistemas agroforestales. Se realiza la transformación primaria con la producción de pulpas, aceites, harinas y extractos crudos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img112.png', alt='').m-auto
              
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agroindustria
                p.mb-0 Desarrollo de productos intermedios como aceites corporales, cremas, jabones, bálsamos labiales, alimentos horneados, bebidas, confites y <em>snacks</em>.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img113.png', alt='').m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Empresas nacionales o multinacionales
                p.mb-0 Transformación terciaria y entrega final al mercado mediante productos terminados y servicios dirigidos al consumidor.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img114.png', alt='').m-auto

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
