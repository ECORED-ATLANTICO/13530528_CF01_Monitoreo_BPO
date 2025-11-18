<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Modelos de negocio
 
    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.1 Concepto

    //- Col3 y Col9
    .container.mb-0
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-md-12.col-lg-4
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen Decorativa')
        .col-12.col-md-12.col-lg-8
          p Un modelo de negocio en BPO (<em>Business Process Outsourcing</em>) es la estructura mediante la cual una organización externaliza procesos específicos a un proveedor especializado, con el propósito de optimizar la eficiencia operativa, reducir costos y concentrar sus esfuerzos en la actividad principal. Según Sánchez Torres et al. (2014), el BPO integra la gestión de procesos estratégicos que requieren conocimiento técnico y enfoque especializado. Estos modelos se sustentan en acuerdos de servicio, estructuras organizacionales y objetivos claramente definidos según las necesidades y metas del cliente contratante.
  
          .cajon.bg-color-primario-p10.p-4.mb-4
            p.mb-0 Por ejemplo, una empresa de telecomunicaciones puede externalizar su servicio de atención al cliente para enfocarse en innovación tecnológica; el proveedor BPO se encarga de gestionar llamadas, correos y chats, siguiendo protocolos definidos por el cliente, este modelo permite flexibilidad, escalabilidad y control de calidad, siempre que se establezcan indicadores claros y acuerdos de nivel de servicio (SLA).

    separador

    .bg-full-width.bg01
      //- Titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_1_2 1.2 Tipos

      //- Col3 y Col9
      .container.mb-1
        .row.align-items-center(data-aos="fade-left")

          //- Col Imagen y Texto
          .bloque-texto-g.bg-color-secundario-s20.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img02.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 En el mundo del <em>Business Process Outsourcing</em> (BPO), los servicios se clasifican según el tipo de interacción que tienen con el cliente y el nivel de visibilidad dentro de la operación, esta clasificación permite organizar los equipos, definir indicadores específicos y establecer protocolos técnicos adecuados. Según LatinWeb (2025), existen tres grandes tipos de servicios BPO: front office, back office y mixtos, cada uno con características particulares que responden a necesidades distintas del negocio.


          TabsB.color-primario
            .py-4.py-md-5(titulo="Front office" :icono="require('@/assets/curso/temas/tema1/img06.svg')")
              .row.align-items-center
                .col-12.col-md-12.col-lg-3
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img03.png', alt='Imagen Decorativa')
                .col-12.col-md-12.col-lg-9
                  p.mb-0 Corresponde a la gestión que mantiene contacto directo con el cliente y busca garantizar una experiencia positiva mediante comunicación efectiva y atención ágil. Implica empatía, dominio del lenguaje y uso de canales multimediales. Se evalúa con indicadores como TTR, CSAT y FCR. Un ejemplo es una empresa de telecomunicaciones que terceriza su servicio de atención al cliente para resolver consultas técnicas y comerciales, fortaleciendo la satisfacción y la percepción de calidad del servicio.

            .py-4.py-md-5(titulo="Back office" :icono="require('@/assets/curso/temas/tema1/img07.svg')")
              .row.align-items-center
                .col-12.col-md-12.col-lg-3
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img04.png', alt='Imagen Decorativa')
                .col-12.col-md-12.col-lg-9
                  p.mb-0 Engloba las operaciones administrativas y de soporte que se desarrollan sin contacto directo con el cliente, asegurando la eficiencia interna y el cumplimiento normativo. Exige precisión, confidencialidad y cumplimiento de plazos, evaluándose mediante indicadores de error y productividad. Un ejemplo es una entidad financiera que terceriza el procesamiento de solicitudes de crédito, donde el equipo BPO valida información y actualiza datos garantizando exactitud y eficiencia en los procesos internos.

            .py-4.py-md-5(titulo="Servicios mixtos" :icono="require('@/assets/curso/temas/tema1/img08.svg')")
              .row.align-items-center
                .col-12.col-md-12.col-lg-3
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img05.png', alt='Imagen Decorativa')
                .col-12.col-md-12.col-lg-9
                  p.mb-0 Integran simultáneamente funciones de atención al cliente y gestión operativa, ofreciendo una visión completa del proceso. Requieren coordinación entre equipos, protocolos compartidos y herramientas que faciliten la trazabilidad de la información. Se miden mediante indicadores combinados de satisfacción, tiempo de respuesta y cumplimiento. Un ejemplo es una tienda virtual que terceriza la atención al cliente y la gestión de pedidos, respondiendo consultas, procesando devoluciones y actualizando inventarios en tiempo real.

    separador

    .bg-full-width.bg02

      //- Titulo
      .titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2#t_1_3 1.3 Segmento de mercado

      //- Col3 y Col9
      .container.mb-0
        .row.align-items-center(data-aos="fade-left")

          //- banner con tarjeta
          .row.justify-content-center.align-items-center.mb-3.tarjeta(data-aos="fade-left")
            .col-lg-12.mb-2
              div.tarjeta-horz.mb-3
                img(src='@/assets/curso/temas/tema1/img09.png', alt='Imagen decorativa')
                div.texto-tarjeta.bg-white
                    p.mb-0 El BPO atiende diversos segmentos de mercado, desde telecomunicaciones y banca hasta salud, retail y tecnología, cada segmento tiene necesidades específicas que definen el tipo de servicio, los indicadores de gestión y los protocolos operativos. 

        .row.align-items-center.justify-content-center(data-aos="fade-left").mb-5
          .col-12.col-md-12.col-lg-3
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen Decorativa')

          .col-12.col-md-12.col-lg-7
            .bloque-texto-b.color-terciario
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-0.ps-3 Según ESIC <em>Business & Marketing School (2025)</em>, 
                p.mb-0 los clientes del BPO buscan eficiencia, escalabilidad y experiencia especializada, por lo que el proveedor debe adaptar su modelo de negocio a cada industria.
                i.fas.fa-quote-right
                
        .row.align-items-center.justify-content-center(data-aos="fade-left")
          .col-12.col-md-12.col-lg-10
            //- Acordion
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
              .row(titulo="Telecomunicaciones").justify-content-center.align-items-center.p-2
                .col-12.col-md-8.col-lg-2
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen Decorativa')
                .col-12.col-md-12.col-lg-10
                  p.mb-0 Atiende una alta demanda de soporte técnico y servicio al cliente, priorizando la agilidad en la respuesta. Combina servicios front office y mixtos, donde se emplean indicadores como TTR, FCR y CSAT para medir la eficiencia y la satisfacción. Los protocolos operativos incluyen el uso de scripts estandarizados, procesos de escalamiento y monitoreo continuo para asegurar la calidad en la atención.

              .row(titulo="Financiero").justify-content-center.align-items-center.p-2
                .col-12.col-md-8.col-lg-2
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img12.png', alt='Imagen Decorativa')
                .col-12.col-md-12.col-lg-10
                  p.mb-0 Requiere servicios de alta seguridad, trazabilidad y cumplimiento normativo. Predominan los servicios back office y mixtos, con indicadores como tasa de error, cumplimiento de plazos y tiempos de respuesta. Los protocolos operativos se basan en validación de datos, autenticación de usuarios y auditorías periódicas, garantizando confiabilidad y transparencia en las transacciones.
                  
              .row(titulo="Salud").justify-content-center.align-items-center.p-2
                .col-12.col-md-8.col-lg-2
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img13.png', alt='Imagen Decorativa')
                .col-12.col-md-12.col-lg-10
                  p.mb-0 Exige un manejo cuidadoso de la información, con altos niveles de confidencialidad, precisión y empatía. Se implementan servicios front office y back office que utilizan indicadores como exactitud, tiempo de atención y cumplimiento de normativas. Los protocolos incluyen protección de datos, clasificación de solicitudes (triage) y seguimiento de casos, asegurando atención humanizada y segura.
                  
              .row(titulo="<em>Retail y e-commerce</em>").justify-content-center.align-items-center.p-2
                .col-12.col-md-8.col-lg-2
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img14.png', alt='Imagen Decorativa')
                .col-12.col-md-12.col-lg-10
                  p.mb-0 Enfocado en la multicanalidad, la gestión de devoluciones y el seguimiento de pedidos. Opera mediante servicios front office o mixtos, donde se monitorean indicadores como nivel de entrega, devoluciones y satisfacción del cliente. Los protocolos operativos comprenden el uso de CRM, gestión de pedidos y atención de reclamos, optimizando la experiencia del usuario final.
                  
              .row(titulo="Tecnología").justify-content-center.align-items-center.p-2
                .col-12.col-md-8.col-lg-2
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img15.png', alt='Imagen Decorativa')
                .col-12.col-md-12.col-lg-10
                  p.mb-0 Requiere soporte técnico especializado y disponibilidad 24 / 7. Se utilizan servicios front office o mixtos, medidos por indicadores como resolución en primer contacto, escalamiento y NPS (Net Promoter Score). Los protocolos incluyen bases de conocimiento actualizadas, sistemas de tickets y soporte remoto, garantizando continuidad operativa y alta satisfacción del usuario.
                  
              .row(titulo="Gobierno").justify-content-center.align-items-center.p-2
                .col-12.col-md-8.col-lg-2
                  figure
                    img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img16.png', alt='Imagen Decorativa')
                .col-12.col-md-12.col-lg-10
                  p.mb-0 Se orienta a la transparencia, atención ciudadana y cumplimiento legal. Combina servicios front office y back office, con indicadores como tiempo de respuesta, cobertura y cumplimiento de normativas. Los protocolos operativos contemplan atención ciudadana, trazabilidad de casos y gestión por procesos, fortaleciendo la eficiencia institucional y la confianza pública.
                  
        
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
