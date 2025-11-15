<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Procedimientos de evaluación

    
    .row.align-items-center(data-aos="fade-left").mb-2
      .col-12.col-md-12.col-lg-3
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img01.png', alt='Imagen Decorativa')
      .col-12.col-md-12.col-lg-9
        p La evaluación del desempeño en servicios BPO es un proceso técnico que combina análisis, verificación y control para garantizar la eficiencia y la calidad del servicio. Requiere una metodología estructurada que defina claramente los pasos, los protocolos aplicables y los formatos de registro necesarios para documentar los resultados. Una evaluación bien ejecutada permite validar la operación con criterios objetivos, asegurando el cumplimiento de los acuerdos de nivel de servicio y la mejora continua.

    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_4_1 4.1 Pasos

    .row.align-items-center(data-aos="fade-left").mb-5
      .col-12.col-md-12.col-lg-12
        p La evaluación del desempeño en servicios BPO se desarrolla mediante un proceso estructurado compuesto por tres pasos secuenciales: recolección de datos, análisis de la información y comparación con estándares. Cada etapa cumple un propósito clave dentro del ciclo de gestión del desempeño, permitiendo pasar de la observación operativa a la toma de decisiones estratégicas. Según Cordero Torres & Riofrío Romero (2024), este proceso debe ser sistemático, trazable y orientado a la mejora continua.
     
    
    //- Col10
    .row
      .col-12.col-lg-6.mx-auto
        .titulo-sexto.mb-4
          h5 Figura 2. 
            span Fases clave en la producción sostenible

        ImagenInfografica.d-none.d-lg-block.img-infografica.color-primario
          template(v-slot:imagen)
            figure
              img.mb-3(src='@/assets/curso/temas/tema4/img02.svg', alt='La figura relaciona cuatro técnicas de seguimiento comercial. La primera es la llamada telefónica; la segunda es el correo personalizado, la tercera es la reunión de seguimiento y finalmente el contenido adicional.')
              figcaption 
                b Fuente. 
                | SENA, 2025.

          .tarjeta.p-2.px-3(x="16.5%" y="63.5%" numero="+")
            .row.align-items-center
              .col-2
                h2.mb-0.text-destacado 01
              .col-10
                p.mb-0 Es el punto de partida del proceso. Consiste en capturar información verificada y actualizada sobre la operación del servicio, proveniente de fuentes confiables como CRM, reportes, encuestas o bases de datos. Garantiza la precisión y representatividad de los datos mediante protocolos definidos y registros estructurados.
          .tarjeta.p-2.px-3(x="50.5%" y="63.5%" numero="+")
            .row.align-items-center
              .col-2
               h2.mb-0.text-destacado 02
              .col-10
                p.mb-0 
                 b Selección de materiales: 
                 | elige insumos verdes.
          .tarjeta.color-acento-botones.p-2.px-3(x="84.6%" y="63.5%" numero="+")
            .row.align-items-center
              .col-2
               h2.mb-0.text-destacado 03
              .col-10
                p.mb-0 
                 b Producción limpia: 
                 | menos agua, energía y químicos.

          
        //- Version movil de la figura
        figure.d-block.d-lg-none
          img(src='@/assets/curso/temas/tema4/img02_1.svg', alt='La figura relaciona cuatro técnicas de seguimiento comercial. La primera es la llamada telefónica; la segunda es el correo personalizado, la tercera es la reunión de seguimiento y finalmente el contenido adicional.')



    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_4_2 4.2 Protocolos


    .row.align-items-center(data-aos="fade-left").mb-5
      .col-12.col-md-12.col-lg-2
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img02.png', alt='Imagen Decorativa')
      .col-12.col-md-12.col-lg-10
        p Los protocolos internos y normativos son el conjunto de reglas, procedimientos y estándares que orientan cómo debe realizarse la evaluación del desempeño en un entorno BPO, estos protocolos no solo aseguran la coherencia técnica del proceso, sino que también protegen la integridad del servicio, la transparencia de los resultados y la confianza entre cliente y proveedor.

    .row.align-items-center(data-aos="fade-left")
      .row.justify-content-center.mb-5
        .col-xl-6.col-lg-6.col-12.mb-4.mb-xl-0.col-md-8
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema4/img03.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Protocolos internos
              p Diseñados por cada empresa BPO según sus objetivos, cultura y contratos. Incluyen guías, matrices y formatos para evaluar desempeño adaptado al tipo de servicio. Se aplican de forma personalizada, flexible y orientada a la mejora continua.

        .col-xl-6.col-lg-6.col-12.mb-4.mb-xl-0.col-md-8
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema4/img04.png", alt="Imagen decorativa")
            .crd_hover_txt--body
              p.text-bold.mb-3.text-center Protocolos normativos
              p Basados en estándares internacionales como ISO 9001, ITIL o ISO/IEC 15504. Establecen criterios medibles, trazables y auditables para garantizar la calidad, la gestión eficiente y la mejora continua de los servicios BPO.
        
    //- Tabla
    .row
      .col-12.col-lg-10.mx-auto
        .titulo-sexto.mb-4
          h5 Tabla 1. 
          span Comparación entre protocolos internos y normativos
        .tabla-a.color-secundario
          table
            caption 
              b Fuente: 
              | SENA, 2025 con base en Rodríguez Orozco (2018) y Arrizabalaga (2019)
            thead
              tr
                th Aspecto
                th Protocolos internos
                th Protocolos normativos
            tbody
              tr
                td Origen
                td Diseñados por la empresa.
                td Basados en estándares internacionales.
              tr
                td Flexibilidad
                td Alta, adaptables a cada cliente.
                td Moderada, requieren cumplimiento estricto.
              tr
                td Objetivo principal
                td Operatividad y mejora continua.
                td Calidad, trazabilidad y auditoría.
              tr
                td Ejemplos
                td Matrices de evaluación, checklists.
                td ISO 9001, ITIL, ISO/IEC 15504.
              tr
                td Aplicación
                td Campañas específicas.
                td Toda la organización o áreas certificadas.

    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_4_3 4.3 Documentación

    .container.mb-5
      .row.align-items-center(data-aos="fade-left").mb-2
        
        .col-12.col-md-12.col-lg-4
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img05.png', alt='Imagen Decorativa')

        .col-12.col-md-12.col-lg-8
          p La documentación constituye un componente esencial del proceso de evaluación del desempeño, ya que garantiza la trazabilidad, transparencia y consistencia de los resultados obtenidos. Los formatos técnicos empleados permiten registrar de manera estructurada los hallazgos, evidencias, indicadores y recomendaciones, asegurando que cada etapa del proceso quede debidamente soportada.
          .bloque-texto-b.color-terciario.mb-3
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h4.mb-0.ps-3 De acuerdo con Rodríguez Orozco (2018),
              p.mb-0 una adecuada documentación no solo facilita la comunicación entre las áreas involucradas, sino que también fortalece el seguimiento de acciones correctivas y promueve la mejora continua del servicio.
              i.fas.fa-quote-right

          .cajon.bg-color-primario-p10.p-4.mb-4
            p.mb-0 En este sentido, los documentos asociados a la evaluación del desempeño pueden adoptar diferentes formatos, como matrices de evaluación, listas de verificación, informes técnicos y tableros de control. Estos instrumentos permiten organizar y analizar la información de manera sistemática, facilitando la toma de decisiones y el seguimiento de la gestión operativa. A continuación, se describen los principales componentes documentales utilizados en el proceso de evaluación del desempeño:
    
    .row.align-items-center(data-aos="fade-left")
      .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
        //- Linea de tiempo
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Introducción")
            p.mb-0 Presenta el objetivo del informe, el periodo evaluado, el servicio o campaña analizada y el propósito de la evaluación (validar indicadores, identificar desviaciones y proponer mejoras).

          .row(numero="2" titulo="Recolección de datos")
            p.mb-0 Describe las fuentes de información utilizadas (CRM, grabaciones, encuestas, entre otros), el tamaño y tipo de muestra, el periodo evaluado y la metodología aplicada para garantizar representatividad y trazabilidad.

          .row(numero="3" titulo="Análisis de indicadores")
            p.mb-0 Expone los resultados cuantitativos obtenidos para cada indicador clave de desempeño (TTR, FCR, CSAT, cumplimiento del script), comparando los valores reales con los esperados.
          
          .row(numero="4" titulo="Comparación con estándares")
            p.mb-0 Contrasta los resultados con los niveles definidos en el Acuerdo de Nivel de Servicio (SLA) e identifica desviaciones, brechas o cumplimientos destacados.
          
          .row(numero="5" titulo="Observaciones")
            p.mb-0 Registra los hallazgos cualitativos, causas probables de las desviaciones y recomendaciones técnicas o formativas para la mejora continua del servicio.
          
          .row(numero="6" titulo="Conclusión")
            p.mb-0 Resume el desempeño general, los principales puntos fuertes, las áreas de mejora y las acciones de seguimiento o retroalimentación que se deben implementar.

      .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0.mx-auto
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img06.png', alt='Imagen Decorativa')
  
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
