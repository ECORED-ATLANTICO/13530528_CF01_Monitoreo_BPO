<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Niveles de servicio
 
    //- Col3 y Col9
    .bg-full-width.bg02
      .container.mb-0
        .row.align-items-center.justify-content-center(data-aos="fade-left")
          .col-12.col-md-12.col-lg-3
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-9
            p  Los Acuerdos de Niveles de Servicio, conocidos como SLA por sus siglas en inglés (Service Level Agreement), son el corazón operativo de cualquier modelo de negocio BPO, a través de estos acuerdos se definen las expectativas, responsabilidades y métricas que regulan la relación entre el proveedor del servicio y el cliente. 
    
            .cajon.bg-color-primario-p10.p-4.mb-4
              p.mb-0 En el ámbito del servicio al cliente, los SLA permiten definir tiempos de respuesta, niveles de resolución y parámetros de satisfacción que garantizan una atención oportuna y efectiva. Comprender su estructura, los indicadores que los sustentan y su aplicación en los diferentes tipos de servicio es clave para mantener la coherencia en la evaluación, optimizar la operación y asegurar una experiencia positiva para el usuario.

      separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_1 2.1 Concepto

    //- Col3 y Col9
    .container.mb-0
      .row.align-items-center.justify-content-center(data-aos="fade-left").mb-2
        .col-12.col-md-12.col-lg-10
          p Un SLA es un contrato operativo que establece los parámetros de calidad, eficiencia y oportunidad que debe cumplir un servicio tercerizado. 
          .bloque-texto-b.color-terciario
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h4.mb-0.ps-3 Según Zendesk (s.f.),
              p.mb-0 estos acuerdos permiten al cliente definir con precisión las expectativas sobre tiempos de respuesta, resolución de solicitudes, disponibilidad y satisfacción del usuario. Constituyen una guía de gestión que orienta la operación, facilita el control del desempeño y promueve relaciones basadas en la transparencia y el cumplimiento de compromisos.
              i.fas.fa-quote-right

        .col-12.col-md-12.col-lg-2
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img02.png', alt='Imagen Decorativa')

    separador

    //- Titulo
    .bg-full-width.bg01

      //- Titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_2_2 2.2 Estructura
    
      //- banner con tarjeta
      .row.justify-content-center.align-items-center.mb-3.tarjeta(data-aos="fade-left")
        .col-lg-12.mb-2
          div.tarjeta-horz.mb-3
            img(src='@/assets/curso/temas/tema2/img03.png', alt='Imagen decorativa')
            div.texto-tarjeta.bg-white
                p.mb-0 La estructura de un SLA (Acuerdo de Nivel de Servicio) es un documento técnico-operativo que define de manera detallada las expectativas del servicio, los métodos de medición, las responsabilidades de las partes involucradas y las acciones correspondientes ante los diferentes niveles de desempeño. 

      .row.align-items-center.justify-content-center(data-aos="fade-left").mb-5
        .col-12.col-md-12.col-lg-3
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img04.png', alt='Imagen Decorativa')

        .col-12.col-md-12.col-lg-7
          .bloque-texto-b.color-terciario
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h4.mb-0.ps-3 Según González & Rodríguez (2021),
              p.mb-0  un SLA bien estructurado debe ser claro, medible, alcanzable y coherente con los objetivos estratégicos del negocio, garantizando la gestión efectiva y la mejora continua del servicio. Un SLA típico en el contexto BPO incluye los siguientes componentes:
              i.fas.fa-quote-right
      
    .row.align-items-center.justify-content-center(data-aos="fade-left")
      .col-12.col-md-12.col-lg-8
        //- Figura
        .mb-5(data-aos="zoom-in-down")
          .titulo-sexto.mb-4
            h5 Figura 1. 
              span Componentes de la estructura SLA
          figure.mb-4
            img(src='@/assets/curso/temas/tema2/img05.svg', alt='La figura describe las herramientas de diagnóstico para la sostenibilidad, DOFA verde, benchmarking sostenible, Análisis de Ciclo de Vida, huella de carbono y balanced scorecard verde, destacando su función en la identificación de oportunidades de mejora y en la toma de decisiones.').mx-auto.d-none.d-md-block

          figcaption 
            b Fuente: 
            | SENA, 2025.

    .row.align-items-center(data-aos="fade-left")
      .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0.mx-auto
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img06.png', alt='Imagen Decorativa')
      .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
        //- Linea de tiempo
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Diseño sostenible")
            p.mb-0 Planifica el producto y el proceso con un enfoque ambiental desde su origen. 
            p 
              b Ejemplo: 
              | un electrodoméstico diseñado para ser fácil de desmontar y reciclar.

          .row(numero="2" titulo="Selección de materiales")
            p.mb-0 Prioriza materias primas recicladas, renovables o de origen local para minimizar impactos ambientales. 
            p
              b Ejemplo: 
              | uso de cartón reciclado en empaques.
          .row(numero="3" titulo="Producción limpia")
            p.mb-0 Reduce el consumo de agua, energía y el uso de sustancias tóxicas en los procesos industriales. 
            p 
              b Ejemplo: 
              | uso de tintas vegetales en impresión.
          .row(numero="4" titulo="Gestión de residuos")
            p.mb-0 Promueve prácticas de reciclaje, compostaje o disposición final responsable. . 
            p 
              b Ejemplo: 
              | clasificación y compostaje de residuos orgánicos en restaurantes.
          .row(numero="5" titulo="Distribución eficiente")
            p.mb-0 Optimiza rutas logísticas y empaques para disminuir emisiones y costos de transporte. 
            p 
              b Ejemplo: 
              | agrupar pedidos y utilizar empaques más ligeros.
          .row(numero="6" titulo="Mejora continua")
            p.mb-0 Evalúa el desempeño ambiental de los procesos y aplica acciones correctivas para su optimización. 
            p.mb-0 
              b Ejemplo: 
              | auditorías anuales de sostenibilidad y ajustes en procesos.
  
    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_3 2.3 Indicadores

    //- Col3 y Col9
    .row.align-items-center(data-aos="fade-left")

      p Los indicadores asociados a SLA son métricas específicas que permiten validar si el servicio tercerizado está cumpliendo con los niveles de calidad, eficiencia y oportunidad pactados entre el proveedor BPO y el cliente. Estos indicadores no solo reflejan el desempeño técnico, sino también la experiencia del usuario y la capacidad de respuesta del equipo operativo. Según Zendesk (s.f.), los SLA deben estar respaldados por indicadores claros, medibles y alineados con los objetivos del negocio. A continuación, se presentan algunos indicadores utilizados en SLA:

      //- Col9 (Slider) y Col3
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-4.mb-4.mb-lg-0.d-xl-block.d-none(data-aos="fade-left")
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img07.png', alt='Imagen Decorativa')
        .col-12.col-xl-8.mb-4.mb-lg-0
          TabsA.color-terciario
            .tarjeta.p-3.px-4(titulo="Reactiva").bg-color-terciario-t5
              //- img.mb-4(src='@/assets/curso/temas/tema2/img07.png', alt='Imagen Decorativa')
              p actúa por obligación legal, cumpliendo normativas ambientales solo cuando es exigido por las autoridades.
            .tarjeta.p-3.px-4(titulo="Proactiva").bg-color-terciario-t5
              //- img.mb-4(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen Decorativa')
              p Adopta la sostenibilidad como estrategia voluntaria para mejorar su imagen y competitividad en el mercado.
            .tarjeta.p-3.px-4(titulo="Colaborativa").bg-color-terciario-t5
              //- img.mb-4(src='@/assets/curso/temas/tema3/img13.png', alt='Imagen Decorativa')
              p Promueve alianzas con proveedores y socios para gestionar conjuntamente los recursos y reducir impactos ambientales.
            .tarjeta.p-3.px-4(titulo="Circular").bg-color-terciario-t5
              //- img.mb-4(src='@/assets/curso/temas/tema3/img14.png', alt='Imagen Decorativa')
              p Cierra el ciclo productivo mediante el reuso, reciclaje y rediseño de materiales dentro de la economía circular.

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
