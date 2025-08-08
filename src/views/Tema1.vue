<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Aprovechamiento de recursos forestales no maderables
    
    .row.align-items-center.mb-5.style___box_3(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img1.svg', alt='' style="max-width: 84px").m-auto
      .col-xl
        p.mb-0 Según lo establecido en el Decreto 690 de 2021, el manejo sostenible de la flora silvestre y de los productos forestales no maderables se clasifica en distintas modalidades, las cuales se describen a continuación (Departamento Administrativo de la Función Pública, 2021).
    
    <!-- BLOQUE 1 -->
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Clases de aprovechamiento

    p.mb-5 El manejo de recursos forestales no maderables se divide en dos grandes tipos: <strong>doméstico y persistente</strong>.

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Doméstico")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img2.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Doméstico
            p.mb-0 Se realiza exclusivamente para satisfacer necesidades vitales del hogar. En este caso, <strong>no está permitida la comercialización</strong> de los productos.

      .py-3.py-md-4(titulo="Persistente")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img3.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Persistente
            p.mb-0 Implica actividades realizadas bajo criterios de <strong>sostenibilidad</strong>, con el compromiso de mantener el rendimiento del recurso mediante técnicas que aseguren su <strong>renovación, permanencia y producción sostenible</strong>. Requiere un <strong>estudio técnico o protocolo de manejo sostenible</strong>, aprobado por la autoridad ambiental competente.
    
    p.mb-5 Cuando se trata de manejo <strong>persistente con fines comerciales</strong>, las actividades se clasifican según los ingresos mensuales, medidos en Salarios Mínimos Legales Mensuales Vigentes (SMLMV):

    .row.mb-5
      .col-xl-4(data-aos="zoom-in")
        .style___box_4.h-100
          h4.mb-0.text-center Pequeños
          p.mb-0.text-center De 1 a 10 SMLMV.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_4.h-100.ajuste___color_1
          h4.mb-0.text-center Medianos
          p.mb-0.text-center De 10.1 a 30 SMLMV.
      .col-xl-4(data-aos="zoom-in").espacio___movil_3
        .style___box_4.h-100.ajuste___color_2
          h4.mb-0.text-center Grandes
          p.mb-0.text-center Más de 30 SMLMV.

    p.mb-0 En los casos en que los ingresos <strong>no superen 1 SMLMV, no se requiere presentar un estudio técnico</strong>, pero sí se debe cumplir con el <strong>protocolo de manejo sostenible</strong> correspondiente a la especie aprovechada.
      
    <!-- BLOQUE 2 -->
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Trámite para adquirir el derecho de uso

    p.mb-5 El aprovechamiento forestal de flora silvestre y productos no maderables requiere un trámite específico conforme al Decreto 690 de 2021. Para iniciar el proceso, el interesado debe diligenciar el formato único de solicitud, disponible en la página web del Ministerio de Ambiente y Desarrollo Sostenible (2021). En este formulario deben incluirse los datos del solicitante y una descripción detallada del aprovechamiento que se desea realizar.

    .row.align-items-center.style___box_5.m-0.mb-5(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img4.svg', alt='' style="max-width: 85px").m-auto
      .col-xl
        h4 Resolución 1466 de 2021 - ANEXO FUN: Aprovechamiento Forestal
        p.mb-0 Se invita a leer el documento Resolución 1466 de 2021 - ANEXO FUN: Aprovechamiento Forestal, donde se aborda el formato único nacional para el aprovechamiento forestal en Colombia, en el marco de la normatividad ambiental vigente.
      .col-xl-2.espacio___movil_3
        a.boton.color-acento-botones.texto-negro(:href="('https://www.minambiente.gov.co/wp-content/uploads/2022/02/Resolucion-1466-de-2021-ANEXO-FUN-Aprovechamiento-Forestal.pdf')" target="_blank" type="application/pdf")
          span Ir sitio web
          i.fas.fa-link
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 Procedimiento para la obtención del permiso de aprovechamiento

    p.mb-5 Según lo establecido en el Decreto 690 de 2021, tanto el manejo doméstico como el persistente de productos forestales no maderables deben cumplir un procedimiento administrativo ante la autoridad ambiental competente. A continuación se detallan los pasos según el tipo de manejo solicitado: 

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img7.png', alt='').m-auto
              .col-xl-6.mb-4
                h4 A.	Diligenciamiento del formulario
                p.mb-0 El interesado debe presentar la solicitud mediante el formulario único nacional del Ministerio de Ambiente y Desarrollo Sostenible.
              
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img8.png', alt='').m-auto
              .col-xl-6.mb-4
                h4 B.	Apertura del expediente
                p.mb-0 Dentro de los 5 días siguientes a la radicación, la autoridad ambiental abre el expediente y programa la visita de evaluación.

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img9.png', alt='').m-auto
              .col-xl-6.mb-4
                h4 C.	Visita de evaluación
                p.mb-0 Se realiza dentro de los 10 días siguientes a la apertura del expediente, no tiene costo y debe ser notificada y publicada oficialmente.
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img10.png', alt='').m-auto
              .col-xl-6.mb-4
                h4 D.	Emisión del concepto técnico
                p.mb-0 Dentro de los 10 días posteriores a la visita, la autoridad emite una resolución motivada otorgando o negando el permiso de manejo doméstico.

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img11.png', alt='').m-auto
              .col-xl-6.mb-4
                h4 E.	Recurso administrativo
                p.mb-0 Procede el recurso de reposición ante la misma autoridad. Si se niega el permiso, la solicitud puede presentarse nuevamente.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img5.svg" style="max-width: 60px").m-auto
      .col
        h3 Procedimiento adicional para manejo persistente

    p.mb-5 En el caso de solicitudes de manejo persistente, el procedimiento incluye fases adicionales:

    .row.align-items-center.mb-4
      .col-xl-7(data-aos="fade-right")
        LineaTiempoD.color-secundario
          p(numero="A" titulo="Radicación del estudio técnico") Además del formulario único nacional, debe presentarse un estudio técnico de manejo sostenible.
          p(numero="B" titulo="Liquidación del costo de evaluación") La autoridad ambiental liquida inmediatamente el valor correspondiente a la evaluación técnica.
          p(numero="C" titulo="Pago del servicio de evaluación") El solicitante dispone de 5 días para presentar copia del comprobante de pago ante la autoridad ambiental.
          p(numero="D" titulo="Auto de inicio de trámite") Dentro de los 10 días posteriores a la entrega del comprobante de pago, se expide el auto de inicio, se notifica, se publica y se abre el expediente formal.
          p(numero="E" titulo="Evaluación y programación de visita") Dentro de los 10 días siguientes a la notificación del auto de inicio, se analiza el estudio técnico y se programa la visita de campo.
          p(numero="F" titulo="Visita de evaluación") Debe realizarse hasta 10 días después de la evaluación documental.
      .col-xl-5
        figure.d-none.d-xl-block(data-aos="zoom-in")
          img(src="@/assets/curso/temas/img12.png", alt="").m-auto

    .row.align-items-center
      .col-xl-5
        figure.d-none.d-xl-block(data-aos="zoom-in")
          img(src="@/assets/curso/temas/img13.png", alt="").m-auto
      .col-xl-7(data-aos="fade-left")
        LineaTiempoD.color-secundario
          p(numero="G" titulo="Concepto técnico") Se emite hasta 5 días después de la visita. La autoridad puede solicitar información adicional dentro de los 10 días posteriores a esta evaluación.
          p(numero="H" titulo="Entrega de información adicional") El solicitante tiene 1 mes para entregar la información solicitada. Este plazo puede prorrogarse por 1 mes más si se solicita antes de su vencimiento.
          p(numero="I" titulo="Evaluación final") Solo se evaluará la información solicitada expresamente. Cualquier documento adicional no requerido será descartado.
          p(numero="J" titulo="Decisión final") Dentro de los 20 días siguientes a la recepción completa de la información requerida, la autoridad otorga o niega el permiso mediante resolución motivada.
          p(numero="K" titulo="Recurso administrativo") Procede el recurso de reposición ante la misma autoridad.
              
    <!-- BLOQUE 3 -->
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Modos de adquirir el derecho al manejo sostenible

    p.mb-5 Tal como lo establece el Decreto 690 de 2021, el derecho al manejo sostenible de la flora silvestre y de los productos forestales no maderables puede adquirirse a través de diferentes mecanismos legales. Estos modos están regulados por el Estado y son aplicables según el tipo de usuario, la finalidad del aprovechamiento y las condiciones del recurso (Departamento Administrativo de la Función Pública, 2021).

    TabsB.color-primario(data-aos="fade-up")
      .py-4.py-md-5(titulo="Ministerio de ley" :icono="require('@/assets/curso/temas/img14.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Ministerio de ley
            p.mb-0 Todos los habitantes del país tienen derecho al uso gratuito y no exclusivo de los recursos naturales de dominio público, sin necesidad de permiso. Este uso está limitado a la satisfacción de necesidades básicas propias, familiares o de animales domésticos. No está permitido comercializar los productos obtenidos. Además, no deben vulnerarse leyes ni derechos de terceros.
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img18.png', alt="" style="max-width: 450px").m-auto

      .py-4.py-md-5(titulo="Permiso" :icono="require('@/assets/curso/temas/img15.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Permiso
            p.mb-0 Consiste en una autorización temporal otorgada por la autoridad ambiental competente, con una duración máxima de 10 años. La vigencia depende de la naturaleza del recurso, su disponibilidad y restricciones técnicas o normativas.
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img19.png', alt="" style="max-width: 450px").m-auto
      
      .py-4.py-md-5(titulo="Asociación" :icono="require('@/assets/curso/temas/img16.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Asociación
            p.mb-0 El derecho puede ser adquirido mediante la organización de grupos asociativos. La autoridad ambiental puede otorgar este modo por el periodo definido en el estudio técnico, siempre que se garantice el manejo sostenible del recurso.
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img20.png', alt="" style="max-width: 450px").m-auto

      .py-4.py-md-5(titulo="Concesión forestal" :icono="require('@/assets/curso/temas/img17.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Concesión forestal
            p.mb-0 Este tipo de concesión se otorga usualmente en áreas de reserva forestal, con el fin de permitir el aprovechamiento y manejo por parte de comunidades campesinas o asociaciones. Importante: no confiere propiedad sobre la tierra, únicamente autoriza el uso del recurso.
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img21.png', alt="" style="max-width: 450px").m-auto

    <!-- BLOQUE 4 -->
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Consideraciones de sostenibilidad
    
    p.mb-5 El manejo y aprovechamiento de los productos forestales no maderables debe estar fundamentado en criterios de sostenibilidad que garanticen su permanencia, regeneración y beneficio para las comunidades actuales y futuras. A continuación, se presentan las principales consideraciones:

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img22.png', alt='').m-auto
              .col-xl-6.mb-4
                h4 Equilibrio entre desarrollo productivo y conservación
                p.mb-0 El aprovechamiento debe combinar estrategias productivas que promuevan el desarrollo de las comunidades con acciones que aseguren la conservación de los recursos. Esto garantiza que las generaciones futuras puedan seguir beneficiándose de los productos forestales no maderables.
              
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img23.png', alt='').m-auto
              .col-xl-6.mb-4
                h4 Regeneración natural
                p.mb-0 Se deben implementar medidas que aseguren la recuperación natural de los recursos aprovechados, bajo condiciones óptimas, de modo que su disponibilidad se mantenga a lo largo del tiempo.

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img24.png', alt='').m-auto
              .col-xl-6.mb-4
                h4 Mitigación de impactos
                p.mb-0 Los proyectos productivos deben diseñarse para minimizar los efectos negativos sobre el ambiente, evitando el deterioro asociado al uso intensivo o irresponsable de los recursos naturales.
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img25.png', alt='').m-auto
              .col-xl-6.mb-4
                h4 Participación comunitaria
                p.mb-0 Es fundamental incluir a las comunidades locales y pueblos indígenas en los procesos de toma de decisiones relacionados con el aprovechamiento y manejo de productos no maderables.

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img26.png', alt='').m-auto
              .col-xl-6.mb-4
                h4 Rentabilidad a largo plazo
                p.mb-0 Las actividades deben ser económicamente viables, incorporando criterios ambientales, sociales, técnicos y económicos que permitan su sostenibilidad integral en el tiempo.

    <!-- BLOQUE 5 -->
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Normativa

    p.mb-5 En Colombia existe un marco normativo consolidado que regula el manejo y aprovechamiento de los <strong>productos forestales no maderables</strong>. Esta normativa ha evolucionado con el tiempo, fortaleciendo los mecanismos de sostenibilidad, control y participación en el uso responsable de la biodiversidad. A continuación, se presentan las principales disposiciones legales aplicables a estos recursos:

    .bg--img_03.mb-4
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
            .row(titulo="1993 — Ley 99").ajuste-cajaAcordion
              p.mb-0 Crea el Sistema Nacional Ambiental (SINA) y asigna competencias a las autoridades ambientales. Reconoce la necesidad de regular el aprovechamiento sostenible de los recursos naturales, incluyendo productos no maderables.
            .row(titulo="2000 — Ley 633").ajuste-cajaAcordion
              p.mb-0 Regula el cobro por servicios de evaluación ambiental. Aplica a los trámites de permisos para el uso de productos forestales no maderables.
            .row(titulo="2011 — Ley 1450").ajuste-cajaAcordion
              p.mb-0 Promueve el uso sostenible de la biodiversidad en el marco del desarrollo sostenible. Incluye incentivos para integrar productos no maderables en planes productivos.
            .row(titulo="2015 — Decreto 1076 ").ajuste-cajaAcordion
              p.mb-3 Compila y organiza la normativa ambiental. Define procedimientos y tipos de permisos (doméstico, persistente, especial) para el aprovechamiento de productos no maderables.
        .col-xl-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/temas/img27.png", alt="" style="width: 500px").m-auto

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img28.png", alt="" style="width: 450px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="2017 — Resolución 1909").ajuste-cajaAcordion
              p.mb-0 Regula el salvoconducto único nacional en línea para movilizar especímenes de la biodiversidad, incluyendo productos no maderables.
            .row(titulo="2018 — Resolución 1740").ajuste-cajaAcordion
              p.mb-3 Establece lineamientos generales para el manejo, aprovechamiento y establecimiento de guaduales y bambusales.
            .row(titulo="2021 — Decreto 690").ajuste-cajaAcordion
              p.mb-3 Modifica y adiciona el Decreto 1076 en aspectos relacionados con la silvicultura y productos forestales no maderables, reforzando criterios de sostenibilidad y trazabilidad.
    
    .row.align-items-center.m-0.style___box_6(data-aos="zoom-in").espacio___movil_2
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img29.svg', alt='' style="max-width: 100px").m-auto  
      .col-xl
        p.mb-0 Como parte de este programa, cuyo objetivo es <strong>dar a conocer la normatividad y técnicas aplicadas a la recolección de productos forestales no maderables</strong> en los bosques colombianos, se invita a consultar directamente esta reglamentación.
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
