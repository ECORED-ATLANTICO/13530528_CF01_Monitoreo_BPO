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
          .col-12.col-sm-12.col-md-8.col-lg-3
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img01.png', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-9
            p  Los Acuerdos de Niveles de Servicio, conocidos como SLA por sus siglas en inglés (<em>Service Level Agreement</em>), son el corazón operativo de cualquier modelo de negocio BPO, a través de estos acuerdos se definen las expectativas, responsabilidades y métricas que regulan la relación entre el proveedor del servicio y el cliente. 
    
            .cajon.bg-color-primario-p10.p-4
              p.mb-0 En el ámbito del servicio al cliente, los SLA permiten definir tiempos de respuesta, niveles de resolución y parámetros de satisfacción que garantizan una atención oportuna y efectiva. Comprender su estructura, los indicadores que los sustentan y su aplicación en los diferentes tipos de servicio es clave para mantener la coherencia en la evaluación, optimizar la operación y asegurar una experiencia positiva para el usuario.

      separador

      //- Titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_2_1 2.1 Concepto

    //- Col3 y Col9
    .container.mb-0
      .row.align-items-center.justify-content-center(data-aos="fade-left").mb-2
        .col-12.col-md-12.col-lg-10.mb-4
          p Un SLA es un contrato operativo que establece los parámetros de calidad, eficiencia y oportunidad que debe cumplir un servicio tercerizado. 
          .bloque-texto-b.color-terciario
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h4.mb-0.ps-3 Según Zendesk (s.f.), 
              p.mb-0 estos acuerdos permiten al cliente definir con precisión las expectativas sobre tiempos de respuesta, resolución de solicitudes, disponibilidad y satisfacción del usuario. Constituyen una guía de gestión que orienta la operación, facilita el control del desempeño y promueve relaciones basadas en la transparencia y el cumplimiento de compromisos.
              i.fas.fa-quote-right

        .col-12.col-sm-12.col-md-8.mx-auto.col-lg-2
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img02.svg', alt='Imagen Decorativa')

    separador


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
        .col-1
        .col-12.col-sm-12.col-md-8.mx-auto.col-lg-3
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img04.svg', alt='Imagen Decorativa')

        .col-12.col-md-12.col-lg-7
          .bloque-texto-b.color-terciario
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h4.mb-0.ps-3 Según González & Rodríguez (2021),
              p.mb-0  un SLA bien estructurado debe ser claro, medible, alcanzable y coherente con los objetivos estratégicos del negocio, garantizando la gestión efectiva y la mejora continua del servicio. Un SLA típico en el contexto BPO incluye los siguientes componentes:
              i.fas.fa-quote-right
        .col-1
      
    .row.align-items-center.justify-content-center(data-aos="fade-left")
      .col-12.col-md-12.col-lg-8
        //- Figura
        .mb-5(data-aos="zoom-in-down")
          .titulo-sexto.mb-4
            h5 Figura 1. 
              span Componentes de la estructura SLA
          figure.mb-4
            img(src='@/assets/curso/temas/tema2/img05.svg', alt='La figura describe las herramientas de diagnóstico para la sostenibilidad, DOFA verde, benchmarking sostenible, Análisis de Ciclo de Vida, huella de carbono y balanced scorecard verde, destacando su función en la identificación de oportunidades de mejora y en la toma de decisiones.').mx-auto.d-none.d-md-block

          //- Version movil de la figura
          figure.d-block.d-md-none.d-lg-none
            img(src='@/assets/curso/temas/tema2/img05_1.svg', alt='La figura relaciona cuatro técnicas de seguimiento comercial. La primera es la llamada telefónica; la segunda es el correo personalizado, la tercera es la reunión de seguimiento y finalmente el contenido adicional.')

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
          .row(numero="1" titulo="Descripción del servicio")
            p.mb-0 Detalla los procesos que serán tercerizados, los canales de atención que se utilizarán (teléfono, chat, correo, redes sociales) y el alcance operativo del servicio. Incluye la definición de horarios, cobertura y segmentación por tipo de cliente, asegurando claridad en lo que el proveedor debe ejecutar.
            
          .row(numero="2" titulo="Indicadores de desempeño")
            p.mb-0 Define los KPIs que permitirán evaluar la calidad, eficiencia y satisfacción del servicio. Entre ellos pueden estar el tiempo de respuesta (TTR), la resolución en primer contacto (FCR), la satisfacción del cliente (CSAT) o la tasa de error. Cada indicador debe tener una fórmula definida, fuente de datos y frecuencia de medición establecida.
            
          .row(numero="3" titulo="Niveles mínimos aceptables")
            p.mb-0 Establece los umbrales de cumplimiento que permiten determinar si el servicio está dentro de los parámetros acordados. Estos valores mínimos se ajustan según el tipo de servicio, canal de atención o segmento del cliente, y sirven como referencia para activar acciones de mejora cuando se presentan desviaciones.
            
          .row(numero="4" titulo="Responsabilidades de las partes")
            p.mb-0 Define los compromisos de cada parte involucrada. El proveedor BPO asume la ejecución, el registro y el seguimiento del servicio, mientras que el cliente debe proporcionar insumos, validar resultados y ofrecer retroalimentación oportuna. Esta claridad previene errores y facilita la gestión del contrato.
            
          .row(numero="5" titulo="Mecanismos de seguimiento")
            p.mb-0 Describe los procedimientos para monitorear el cumplimiento de los acuerdos, incluyendo la frecuencia de los reportes, las herramientas empleadas (CRM, tableros de control, auditorías) y los canales de comunicación. También considera la programación de reuniones de revisión y evaluación de resultados.
          
          .row(numero="6" titulo="Consecuencias por incumplimiento")
            p.mb-0 Especifica las acciones correctivas o preventivas que se aplicarán en caso de incumplimiento de los niveles acordados. Estas pueden incluir planes de mejora, sanciones económicas, revisión de condiciones contractuales o terminación del servicio, garantizando la transparencia y la mejora continua.
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
            .tarjeta.p-3.px-4(titulo="Tiempo  de respuesta (TTR)").bg-color-adicional-1.d-flex.align-items-center
              p Refleja la rapidez con que un agente inicia la atención tras recibir la solicitud del cliente. Un tiempo breve mejora la experiencia y demuestra eficiencia operativa, especialmente en canales como chat o teléfono, donde la inmediatez define la calidad percibida del servicio.
            
            .tarjeta.p-3.px-4(titulo="Tiempo de resolución (TTRS)").bg-color-adicional-1.d-flex.align-items-center
              p Evalúa el tiempo total necesario para resolver completamente una solicitud o incidente. Un TTRS corto muestra procesos ágiles, coordinación efectiva entre áreas y personal capacitado para dar soluciones definitivas que mantienen la confianza del cliente.

            .tarjeta.p-3.px-4(titulo="Satisfacción del cliente (CSAT)").bg-color-adicional-1.d-flex.align-items-center
              p Mide la percepción del usuario sobre la calidad del servicio recibido. Altos niveles de CSAT reflejan atención amable, comunicación clara y cumplimiento de expectativas, factores que fortalecen la fidelización y la imagen de la empresa BPO.

            .tarjeta.p-3.px-4(titulo="Resolución en primer<br> contacto (FCR)").bg-color-adicional-1.d-flex.align-items-center
              p Determina si el requerimiento del cliente fue resuelto desde la primera interacción. Un alto FCR evidencia dominio técnico, gestión eficiente y atención orientada al cliente, reduciendo seguimientos y mejorando la productividad del servicio.


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
