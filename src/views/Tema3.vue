<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Niveles de servicio
 
    .bg-full-width.bg04
      .row.align-items-center(data-aos="fade-left")

        //- Col Imagen y Texto
        .bloque-texto-g.bg-color-acento-botones.p-3.p-sm-4.p-md-5.mb-2
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los indicadores de gestión son herramientas esenciales para transformar los datos operativos en información útil y accionable. En el ámbito BPO, permiten medir la eficiencia, la calidad y la satisfacción del cliente, asegurando que el servicio se mantenga alineado con los objetivos del negocio. Analizar los indicadores implica comprender su naturaleza, origen y método de monitoreo, garantizando una evaluación continua que impulse la mejora del desempeño y la competitividad del servicio.

      separador

      //- Titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_3_1 3.1 Concepto

    .container.mb-0
      .row.align-items-center.justify-content-center(data-aos="fade-left").mb-2
        .col-12.col-md-12.col-lg-8
          p Un indicador de gestión es una medida cuantitativa o cualitativa que permite evaluar el desempeño de un proceso, servicio o actividad.
          .bloque-texto-b.color-terciario
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h4.mb-0.ps-3 Según Rivero-Remírez (2019),
              p.mb-0 los indicadores deben ser relevantes, medibles, comparables y alineados con los objetivos estratégicos. En servicios BPO, los indicadores permiten validar aspectos como eficiencia operativa, calidad del servicio, experiencia del cliente y cumplimiento de acuerdos contractuales.
              i.fas.fa-quote-right

        .col-12.col-md-12.col-lg-4
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img02.png', alt='Imagen Decorativa')

    .container.mb-1
      .row.align-items-center.bg-color-secundario-s5.p-4(data-aos="fade-left")
        .col-12.col-md-6.col-lg-1.mx-auto
          figure
            img.mb-4.mb-lg-0.mx-auto.w-auto(src='@/assets/curso/temas/tema3/img15.svg', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-11
          p.mb-0 Por ejemplo, el tiempo promedio de respuesta (TTR) es un indicador que refleja la agilidad del servicio, mientras que la satisfacción del cliente (CSAT) mide la percepción del usuario. Ambos son esenciales para entender si el servicio está cumpliendo con lo prometido. Un buen indicador no solo mide, también orienta y transforma.

    separador

  
    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_2 3.2 Tipos
    
    .row.align-items-center(data-aos="fade-left").mb-5
      .col-12.col-md-12.col-lg-3
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img04.png', alt='Imagen Decorativa')
      .col-12.col-md-12.col-lg-9
        p Los KPIs (Key Performance Indicators) son indicadores clave de desempeño que permiten medir, analizar y mejorar los procesos en servicios BPO, estas se agrupan en tres grandes categorías que, aunque distintas, se complementan para ofrecer una visión integral del servicio: operativos, de calidad y de experiencia del cliente. Según Beex (2025), elegir los KPIs adecuados es como diseñar el mapa que guía la operación hacia la excelencia.

    .bg-full-width.bg04
      .row.align-items-center(data-aos="fade-left").mb-4
        .col-12.col-md-12.col-lg-12.mb-4.mb-lg-0
          .tarjeta.p-5.bg03
            .tarjeta--blanca
              SlyderA(tipo="b")
                .tarjeta.p-5
                  .row.align-items-center
                    .col-12.col-lg-8
                      h5.mb-4 KPIs operativos
                      p.mb-0 Evalúan la eficiencia y productividad del servicio, midiendo tiempos de atención, volúmenes de gestión y capacidad de respuesta del equipo. Son indicadores cuantitativos que permiten detectar cuellos de botella y optimizar procesos. En entornos BPO, estos datos se utilizan para ajustar la asignación de personal, mejorar los flujos de atención y cumplir con los niveles definidos en los acuerdos de servicio. Si los tiempos promedio superan lo esperado, el equipo revisa el flujo operativo para optimizar la gestión.
                    .col-12.col-md-8.col-lg-4.mx-auto
                      figure
                        img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img06.png', alt='Imagen Decorativa')

                .tarjeta.p-5
                  .row.align-items-center
                    .col-12.col-lg-8
                      h5.mb-4 KPIs de calidad
                      p.mb-0 Miden el cumplimiento de protocolos, estándares y buenas prácticas operativas. Más que evaluar cantidad, se centran en la forma en que se ejecutan las tareas, garantizando consistencia y profesionalismo en cada interacción. En los servicios BPO, se utilizan auditorías y revisiones periódicas para asegurar que los agentes sigan el guion, registren correctamente la información y mantengan la calidad en la atención. Si se identifican errores o desviaciones, se aplican planes de mejora para fortalecer las competencias del equipo.
                    .col-12.col-md-8.col-lg-4.mx-auto
                      figure
                        img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img07.png', alt='Imagen Decorativa')

                .tarjeta.p-5
                  .row.align-items-center
                    .col-12.col-lg-8
                      h5.mb-4 KPIs de experiencia al cliente
                      p.mb-0 Reflejan la percepción y satisfacción del usuario sobre el servicio recibido. Aunque son indicadores subjetivos, resultan esenciales para mantener la fidelización y fortalecer la reputación del negocio. Estos KPIs se obtienen a partir de encuestas y retroalimentación directa, analizando aspectos como la satisfacción general, la facilidad del proceso y la disposición del cliente a recomendar el servicio. Si se detectan dificultades en la experiencia, el equipo ajusta los canales o el flujo de atención para mejorar la percepción del usuario.
                    .col-12.col-md-8.col-lg-4.mx-auto
                      figure
                        img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img08.png', alt='Imagen Decorativa')

    .row.align-items-center(data-aos="fade-left")
      .col-12.col-md-12.col-lg-12
        .cajon.bg-color-acento-botones-p10.p-4.mb-4
          p.mb-0 En conjunto, los tres tipos de KPIs ofrecen una visión integral del desempeño en los servicios BPO. Los indicadores operativos permiten reaccionar con agilidad ante variaciones del rendimiento; los de calidad garantizan el cumplimiento de estándares y la consistencia en los procesos; y los de experiencia del cliente orientan las estrategias de mejora continua y fidelización, asegurando un equilibrio entre eficiencia, excelencia y satisfacción.
  
    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_3 3.3 Fuentes de datos

    .bg-full-width.bg01
      //- Col8 (Slider) y Col4
      .container(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema3/img09.png', alt='Imagen Decorativa')
              
          .col-12.col-lg-8.mb-4.mb-lg-0
            .row.align-items-center
              .col-12.col-lg-12.mb-4.mb-lg-0
                p.mb-0 Los indicadores se alimentan de datos que provienen de diversas fuentes. Según González & Rodríguez (2021), las principales fuentes en BPO son:
              
              .col-12.col-lg-12.mb-4.mb-lg-0
                .custom-slider
                  SlyderF(columnas="col-lg-6 col-xl-6")
                    .tarjeta.shadow.p-3.bg-white.bg-white
                      .row.justify-content-center
                        .col-6.col-lg-8
                          img(src='@/assets/curso/temas/tema3/img10.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-100
                      .text-center.p-3.mb-0
                        H5.bg-color-acento-botones.text-white.py-1 Dashboards y reportes automáticos
                        p.mb-0 Visualizan resultados en tiempo real.
                    .tarjeta.shadow.p-3.bg-white.bg-white
                      .row.justify-content-center
                        .col-6.col-lg-8
                          img(src='@/assets/curso/temas/tema3/img11.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-100
                      .text-center.p-3.mb-0
                        H5.bg-color-acento-botones.text-white.py-1 Encuestas de satisfacción
                        p.mb-0 Capturan la percepción del usuario.
                    .tarjeta.shadow.p-3.bg-white.bg-white
                      .row.justify-content-center
                        .col-6.col-lg-8
                          img(src='@/assets/curso/temas/tema3/img12.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-100
                      .text-center.p-3.mb-0
                        H5.bg-color-acento-botones.text-white.py-1 Sistemas de grabación y monitoreo
                        p.mb-0 Permiten auditar llamadas y chats.
                    .tarjeta.shadow.p-3.bg-white.bg-white
                      .row.justify-content-center
                        .col-6.col-lg-8
                          img(src='@/assets/curso/temas/tema3/img13.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-100
                      .text-center.p-3.mb-0
                        H5.bg-color-acento-botones.text-white.py-1 Bases de datos operativas
                        p.mb-0 Consolidan métricas por campaña, agente o canal.
                    .tarjeta.shadow.p-3.bg-white.bg-white
                      .row.justify-content-center
                        .col-6.col-lg-8
                          img(src='@/assets/curso/temas/tema3/img14.svg' alt='Imagen Decorativa').w-auto.mx-auto.h-100
                      .text-center.p-3.mb-0
                        H5.bg-color-acento-botones.text-white.py-1 Sistemas CRM
                        p.mb-0 Registran interacciones, tiempos, canales y resultados.
          
      .container.mb-1
        .row.align-items-center.bg-color-secundario-s5.p-4(data-aos="fade-left")
          .col-12.col-md-6.col-lg-1.mx-auto
            figure
              img.mb-4.mb-lg-0.mx-auto(src='@/assets/curso/temas/tema3/img16.svg', alt='Imagen Decorativa')
          .col-12.col-md-12.col-lg-11
            p.mb-0 Es fundamental comprender que la calidad del dato determina la calidad del indicador. Si los datos están incompletos, desactualizados o mal registrados, el análisis será erróneo y las decisiones equivocadas. Por ejemplo, si el CRM no registra correctamente el canal de atención, no se podrá segmentar el TTR por tipo de interacción, lo que limita la capacidad de análisis.
  
    separador


    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_4 3.4 Herramientas de monitoreo
    
    .row.align-items-center.justify-content-center(data-aos="fade-left").mb-4
      .col-12.col-md-6.col-lg-1.mx-auto
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img17.svg', alt='Imagen Decorativa')
      .col-12.col-md-12.col-lg-11
        p Mientras las fuentes de datos se encargan de capturar y almacenar la información generada en la operación (por ejemplo, bases de datos, grabaciones o encuestas), las herramientas de monitoreo se enfocan en interpretar, visualizar y comunicar los resultados. Ambas trabajan en conjunto: las fuentes proporcionan los insumos y las herramientas convierten esos datos en conocimiento útil para la gestión del servicio.

    .row.align-items-center(data-aos="fade-left")
      .row.justify-content-center.mb-5
        .col-xl-3.col-lg-3.col-12.mb-4.mb-xl-0.col-md-8
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/img17.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Dashboards interactivos
              p Paneles visuales que presentan los KPIs en tiempo real, con filtros por fecha, canal, agente o campaña, facilitando el análisis inmediato del desempeño.

        .col-xl-3.col-lg-3.col-12.mb-4.mb-xl-0.col-md-8
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/img18.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Reportes automáticos
              p Informes programados (diarios, semanales o mensuales) que consolidan los indicadores y permiten hacer seguimiento a las metas y tendencias.
        
        .col-xl-3.col-lg-3.col-12.mb-4.mb-xl-0.col-md-8
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/img19.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center(:style="{'font-size': '15px'}") Sistemas de gestión del desempeño
              p Plataformas que integran información de distintas fuentes (CRM, encuestas, bases de datos, entre otros) para analizar cumplimiento de objetivos y generar alertas tempranas.
        
        .col-xl-3.col-lg-3.col-12.mb-4.mb-xl-0.col-md-8
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema3/img20.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Sistemas CRM
              p Además de gestionar la relación con los clientes, permiten monitorear la trazabilidad de los casos, los tiempos de atención y la calidad de las interacciones.

    .row.align-items-center(data-aos="fade-left")
      .col-12.col-md-12.col-lg-12
        .cajon.bg-color-acento-botones-p10.p-4.mb-4
          p.mb-0 En conjunto, estas herramientas fortalecen la gestión del desempeño en servicios BPO al facilitar la toma de decisiones informadas, mejorar la trazabilidad de los procesos, generar alertas tempranas ante desviaciones y consolidar información proveniente de diversas fuentes para ofrecer una visión integral del servicio. 

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
