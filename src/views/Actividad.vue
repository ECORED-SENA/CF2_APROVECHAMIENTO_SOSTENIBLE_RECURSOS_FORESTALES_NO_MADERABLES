<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Aprovechamiento de recursos no maderables',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprender los fundamentos técnicos, ambientales y normativos relacionados con el aprovechamiento de los recursos forestales no maderables.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una estrategia de conservación asociada a los Productos Forestales No Maderables?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tala selectiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reservas comunitarias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fraccionamiento de tierras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Urbanización rural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de conocimiento favorece el uso sostenible de los Productos Forestales No Maderables?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el académico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El científico extranjero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tradicional y local.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'El “manejo doméstico” de los Productos Forestales No Maderables hace referencia a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividades industriales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comercio internacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso personal o familiar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Licencias de construcción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes productos es típico del uso no maderable del bosque?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Poste de madera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fibra de palma para artesanías.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Piso de madera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Papel reciclado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de flora es comúnmente usada como Producto Forestal No Maderable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Especies ornamentales exóticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Plantas de jardines urbanos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cultivos transgénicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Especies silvestres nativas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es un riesgo del uso no sostenible de los Productos Forestales No Maderables?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pérdida de especies.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mayor biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Recuperación ecológica rápida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mayor acceso comunitario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Un criterio para evaluar el aprovechamiento sostenible es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Volumen de extracción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conservación de hábitat.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ganancia financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tiempo de transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes es un factor importante para el manejo de los Productos Forestales No Maderables?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cantidad de maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Distancia al mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estacionalidad de la especie.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tipo de suelo urbano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La sostenibilidad ecológica en el aprovechamiento de los Productos Forestales No Maderables busca:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conservación del bosque.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducción de biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Extracción ilimitada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alta rentabilidad inmediata.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué sector se beneficia directamente de las plantas aromáticas y medicinales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Textil.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Farmacéutico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Construcción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Minería.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
