<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Recolección de recursos forestales no maderables
    
    .row.align-items-center.mb-5.style___box_10.m-0(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img74.png', alt='').m-auto
      .col-xl
        p.mb-0 La recolección de <strong>productos forestales no maderables (PFNM)</strong> está profundamente vinculada a prácticas ancestrales desarrolladas por comunidades rurales e indígenas. Estas actividades permiten el aprovechamiento de los recursos que ofrece el bosque <strong>sin necesidad de talarlo</strong>, generando una <strong>interacción sostenible con los ecosistemas</strong> y promoviendo alternativas productivas compatibles con la conservación.

    <!-- BLOQUE 1 -->
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Métodos de recolección

    p.mb-5 La cosecha de PFNM, tanto en estado silvestre como cultivado, <strong>no implica la tala de plantas o árboles enteros</strong>. Generalmente no requiere tecnologías especializadas, y los métodos se adaptan al tipo de producto. A continuación, se presentan los procesos más comunes de recolección por tipo de recurso:

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Fibras")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img75.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Fibras
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Cortar las partes necesarias de la planta.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Remover espinas y corteza dura.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Hervir, batir y separar las fibras.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Tratar con productos químicos si es necesario.</li>
            </ul>

      .py-3.py-md-4(titulo="Plantas medicinales")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img76.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Plantas medicinales
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Extraer tubérculos o rizomas.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Dejar material reproductivo en el suelo.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Cortar, deshidratar, calibrar y empaquetar.</li>
            </ul>
      
      .py-3.py-md-4(titulo="Nueces y semillas")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img77.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Nueces y semillas
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Recolectar manualmente.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Limpiar y secar al aire.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Calibrar para seleccionar las de mejor calidad.</li>
            </ul>

      .py-3.py-md-4(titulo="Látex o resina")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img78.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Látex o resina
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Realizar incisiones controladas en el tronco.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Aplicar ácido suave para aumentar la exudación.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Recolectar el exudado crudo.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Hervir hasta lograr una consistencia pastosa.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-tree color___i"></i></span>Formar bolos o bloques para su transporte.</li>
            </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 Buenas prácticas en la recolección de PFNM
    
    p.mb-5 Una adecuada recolección <strong>incrementa el valor del recurso</strong> y asegura su disponibilidad futura. Por ejemplo, el caso del árbol del caucho demuestra cómo una técnica eficiente puede transformar el látex en un insumo valioso para múltiples industrias. Para mejorar el proceso de recolección se deben considerar los siguientes elementos:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_11(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree"></i></span>Aplicar métodos perfeccionados de recolección.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree"></i></span>Emplear herramientas adecuadas y seguras.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree"></i></span>Capacitar a las personas recolectoras en prácticas sostenibles.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree"></i></span>Reducir al mínimo los desperdicios durante todo el proceso.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-tree"></i></span>Planear la recolección con criterios de calidad y trazabilidad.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img79.jpg', alt='').m-auto
    
    p.mb-0 Estas acciones no solo mejoran el rendimiento, sino que también fortalecen el <strong>aprovechamiento sostenible y el valor agregado</strong> de los productos recolectados.
      
    <!-- BLOQUE 2 -->
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Impactos ambientales

    p.mb-5 El aprovechamiento forestal de <strong>productos no maderables (PFNM)</strong> puede generar tanto <strong>impactos ambientales negativos como positivos</strong>, dependiendo del enfoque con que se realice la actividad. Las prácticas inadecuadas pueden causar degradación ecológica, mientras que un manejo planificado y sostenible contribuye a la conservación del bosque y al bienestar de las comunidades. Estos impactos se detallan a continuación:

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 A. Impactos negativos derivados de prácticas inadecuadas
    
    p.mb-5 Cuando la recolección de PFNM se realiza sin criterios técnicos ni conocimiento del ecosistema, pueden generarse consecuencias adversas como:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_7(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img80.jpg', alt='').m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree"></i></span><strong>Explotación intensa de especies altamente sensibles</strong>: la recolección excesiva con fines comerciales u ornamentales, especialmente en grupos como orquídeas, zamias y palmas, ha llevado a que muchas especies se encuentren en categoría de amenaza.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-tree"></i></span><strong>Agotamiento del recurso por sobrexplotación</strong>: la extracción continua y no regulada impide la regeneración natural, poniendo en riesgo la sostenibilidad del recurso.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-tree"></i></span><strong>Alteración de los ecosistemas locales</strong>: se afectan las interacciones entre especies, la fertilidad del suelo, los ciclos hídricos y la biodiversidad en general.</li>
            </ul>

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 B. Impactos positivos derivados del manejo sostenible
    
    p.mb-5 Además de los anteriores, se pueden generar impactos adicionales que refuerzan la sostenibilidad del proceso:

    .row.align-items-center.m-0.mb-5
      .col-xl
        .row.align-items-center.style___box_12(data-aos="zoom-in")
          .col-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src="@/assets/curso/temas/img81.png" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Lo invitamos a escuchar el siguiente <em>Podcast</em>:
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Impactos positivos derivados del manejo sostenible"
              :audio="require('@/assets/componentes/audios/Podcast_CF2_aprovechamiento_sostenible_ recursos_forestales_no_maderables.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/temas/img82.png" style="max-width: 400px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 C. Otros beneficios derivados del aprovechamiento sostenible
    
    p.mb-5 Además de los anteriores, se pueden generar impactos adicionales que refuerzan la sostenibilidad del proceso:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Recolección adecuada
                p.mb-0 Obtener solo las cantidades necesarias y en el estado vegetativo requerido para no afectar la regeneración natural.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img83.png', alt='').m-auto
              
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Uso responsable de recursos naturales
                p.mb-0 Aprovechamiento racional que considere las necesidades de las futuras generaciones.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img84.png', alt='').m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Medidas de manejo ambiental
                p.mb-0 Diseño e implementación de estrategias ambientales aplicables por los recolectores de PFNM.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img85.png', alt='').m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Enfoque de sostenibilidad
                p.mb-0 Prácticas que aseguren la disponibilidad continua de los productos forestales no maderables.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img86.png', alt='').m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cumplimiento normativo
                p.mb-0 Respeto y aplicación de la legislación ambiental en la gestión y aprovechamiento de los bosques.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img87.png', alt='').m-auto

    p.mb-0 El aprovechamiento debe tener en cuenta la adopción de patrones de cosecha, las formas de vida vegetal y las pautas de crecimiento, para poder disminuir su impacto (López, 2008, p. 221).

    <!-- BLOQUE 3 -->
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Elementos de protección personal

    .row.align-items-center.m-0.mb-5.style___box_12.ajuste___color_3(data-aos="zoom-in")
      .col-xl
        p.mb-0 El diseño de los elementos de protección individual (EPI) responde a la necesidad de disminuir el riesgo de los trabajadores en el sector forestal, considerando los distintos niveles de exposición a peligros a los que se enfrentan quienes participan, directa o indirectamente, en las labores propias del contexto productivo.
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img88.svg', alt='').m-auto
    
    p.mb-5 Estos elementos tienen como finalidad <strong>proteger a los trabajadores en su área de desempeño</strong> frente a lesiones o enfermedades derivadas del contacto con factores naturales, físicos o mecánicos. Por esta razón, el personal debe contar con los elementos de protección adecuados, que incluyen tanto ropa como accesorios especializados, tales como:

    .row.justify-content-center.mb-3
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_13(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img89.svg', alt='').m-auto
            .col-xl
              h5.mb-0 Guantes
      
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_13(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img90.svg', alt='').m-auto
            .col-xl
              h5.mb-0 Protectores auditivos

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_13(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img91.svg', alt='').m-auto
            .col-xl
              h5.mb-0 Caretas
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_13(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img92.svg', alt='').m-auto
            .col-xl
              h5.mb-0 Gafas de seguridad
      
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_13(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img93.svg', alt='').m-auto
            .col-xl
              h5.mb-0 Cascos

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .style___box_13(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img94.svg', alt='').m-auto
            .col-xl
              h5.mb-0 Calzado de seguridad

    p.mb-5 Además del uso adecuado de estos elementos, es <strong>fundamental la capacitación</strong> del personal para garantizar su correcta aplicación y fortalecer su competencia en el desarrollo de actividades. La formación debe abordar los siguientes aspectos:

    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img95.svg' alt='')
          .tarjeta.color-primario.shadow
            .p-4
              p.mb-0 Uso de los equipos de protección individual.

      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img96.svg' alt='')
          .tarjeta.color-primario.shadow
            .p-4
              p.mb-0 Tipos de equipos requeridos en la protección individual en sus diferentes actividades.

      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img97.svg' alt='')
          .tarjeta.color-primario.shadow
            .p-4
              p.mb-0 Alcance del equipo de protección individual frente a las diferentes condiciones de trabajo.

      .col-10.col-md-6.col-lg-3(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/img98.svg' alt='')
          .tarjeta.color-primario.shadow
            .p-4
              p.mb-0 Utilizar el equipo de protección individual acorde con las especificaciones y orientaciones del trabajo a desarrollar en el campo forestal.

    p.mb-5 Los trabajos en entornos forestales exigen condiciones de seguridad rigurosas para proteger la salud e integridad de los trabajadores. El uso adecuado de los elementos de protección personal (EPP) es fundamental para prevenir accidentes y enfermedades laborales. A continuación, se presentan los principales equipos que deben utilizarse en labores de aprovechamiento forestal no maderable, resaltando la importancia de su correcta implementación en cada parte del cuerpo.

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 1.
      span Elementos de protección personal
    figure(data-aos="zoom-in")
      img(src='@/assets/curso/temas/img99.png', alt='La imagen indica los elementos de protección personal que deben usar las personas que se dediquen a labores asociadas al aprovechamiento de productos forestales no maderables.').m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
