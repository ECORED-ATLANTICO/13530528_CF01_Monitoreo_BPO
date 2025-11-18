<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    //- Col3 y Col9
    .container
      .row.align-items-center(data-aos="fade-left").mb-3
        .col-12.col-md-8.col-lg-2.mb-4.mb-lg-0.mx-auto
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/sintesis01.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-10.mb-4.mb-lg-0
          p El componente formativo Servicios BPO, permite comprender los fundamentos y la gestión integral de los servicios de externalización de procesos, desde su estructura operativa hasta la evaluación de su desempeño. Se inicia con el estudio de los modelos de negocio, sus tipos y segmentos de mercado, así como su relación con los objetivos estratégicos de las organizaciones. Posteriormente, se profundiza en los niveles de servicio (SLA), lo que permite establecer su importancia en la gestión de la calidad y la satisfacción del cliente.
      
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-12.mb-4.mb-lg-0
          p Asimismo, se analizan los indicadores de gestión, sus tipos, fuentes de datos y herramientas de monitoreo, proporcionando al aprendiz criterios técnicos para medir y optimizar el rendimiento. Se presentan los procedimientos de evaluación que influyen en la mejora continua, así como los protocolos y la documentación técnica que respaldan la trazabilidad de los resultados. La documentación aborda la correcta interpretación y registro de la información. Para fortalecer la aplicación de estos conceptos, se detallan los aspectos metodológicos y normativos que orientan la gestión del servicio. Finalmente, se analiza la función estratégica del monitoreo como herramienta clave para garantizar la eficiencia, la transparencia y la sostenibilidad de los procesos BPO.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Diseño del plan de la cadena de suministro sostenible, ofrece una aproximación integral a los conocimientos fundamentales sobre la integración de la sostenibilidad en los procesos logísticos y la planificación estratégica de la cadena de suministro. Este módulo analiza detalladamente la formulación de objetivos sostenibles con enfoque ambiental, social y económico, resaltando su relevancia en la creación de valor responsable y competitivo. Asimismo, se desglosan las estrategias de ecodiseño, logística inversa y digitalización, junto con la definición de indicadores, recursos y cronogramas, permitiendo estructurar planes sostenibles coherentes con los objetivos de desarrollo sostenible y las competencias laborales del sector productivo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
