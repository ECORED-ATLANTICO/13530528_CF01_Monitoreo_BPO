<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    //- Col8 y Col4
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/intro/img01.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
          p El componente formativo <b>Servicios BPO</b> ofrece al aprendiz herramientas técnicas y prácticas para abordar el monitoreo del desempeño en los procesos de externalización de servicios empresariales. 
          
          p A partir del conocimiento de los modelos de negocio, los niveles de servicio y los indicadores de gestión, se fortalecen las competencias necesarias para establecer métricas que garanticen la eficiencia, la calidad y el cumplimiento de los objetivos organizacionales. 


          .cajon.bg-color-acento-contenido-p10.p-4.mb-4
            p.mb-0 Este componente también enfatiza en la aplicación de procedimientos de evaluación y protocolos que permiten analizar resultados y optimizar la operación de los servicios BPO, con un enfoque en la mejora continua y la satisfacción del cliente. 

          p Además, promueve la toma de decisiones basada en datos y la comprensión integral del desempeño de los procesos. Así, se contribuye a la formación de aprendices competentes, analíticos y orientados a la excelencia en la gestión de servicios empresariales. 

    // Video
    figure.mb-5
      .video.mb-2
        //- iframe(width="560" height="315" src="https://www.youtube.com/embed/_AEo02CGe0o?si=GrS0x9a8Z2rwElJl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Fuente: SENA, 2025.

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
