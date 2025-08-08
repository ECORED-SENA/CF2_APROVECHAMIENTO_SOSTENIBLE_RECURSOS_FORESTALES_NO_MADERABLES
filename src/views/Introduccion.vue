<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo___color
      .px-5
        .row.align-items-center.mb-4
          .col-xl
            p.mb-4 El componente formativo aborda los aspectos técnicos, normativos y productivos vinculados con la recolección y uso de productos del bosque distintos a la madera, como frutos, resinas, fibras y plantas medicinales. Se explican las clases de aprovechamiento doméstico y persistente,  y los procedimientos para obtener permisos según el Decreto 690 de 2021, así como los modos de adquisición del derecho al uso sostenible. También se profundiza en las consideraciones de sostenibilidad, la normativa aplicable y la importancia de integrar a las comunidades locales en estos procesos para garantizar beneficios sociales y ambientales a largo plazo.
            .row.align-items-center.m-0.style___box_1(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/intro/img2.png', alt='' style="max-width: 400px")
              .col-xl
                p.mb-0 Además, se expone cómo estos recursos actúan como materias primas en sectores como la alimentación, medicina, cosmética y construcción. Se describen usos específicos de productos como la goma arábiga, el látex, el corcho o las especias, entre otros. Se analizan las fases de desarrollo logístico para su comercialización y se proponen modelos de cadena productiva que conectan recolección, transformación y distribución, impulsando emprendimientos sostenibles y fortaleciendo economías locales.
          .col-xl-auto(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img3.png', alt='' style="max-width: 500px").m-auto
      
      p.mb-0.style___box_2 Por último, se explican métodos de recolección tradicionales y mejorados, los impactos ambientales positivos y negativos del aprovechamiento, y la importancia del uso de elementos de protección personal. La manufactura de productos a partir de estos insumos se ilustra con ejemplos como el del Asaí, destacando el papel de comunidades indígenas en estos procesos. Se concluye con el concepto de cadena de valor como una estrategia colaborativa entre actores que agrega valor al producto, mejora la competitividad e impulsa el desarrollo sostenible.
    
</template>

<script>
export default {
  name: 'Introduccion',
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
