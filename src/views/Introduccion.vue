<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-stard.mb-5
      .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/introduccion/img_1.png", data-aos="zoom-in")
      .col-12.col-lg-8(data-aos="fade-left")
        p.mb-3.mb-lg-3(data-aos="fade-left") Este componente formativo se adentra en los fundamentos clave que sustentan la construcción de propuestas comerciales estratégicas, partiendo del entendimiento del marketing digital como enfoque integral, de la identificación profunda del cliente como sujeto activo del proceso comercial, y del análisis técnico de las capacidades organizacionales que sustentan la oferta. 
        .cita-decorada.mb-1(data-aos="fade-left")
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2
            p.cita-decorada__texto.p-3 El estudio de las propuestas comerciales digitales representa una competencia esencial en el contexto actual de los mercados, donde las dinámicas de consumo, los canales de comunicación y las capacidades empresariales se redefinen continuamente bajo el impulso de lo digital. 
        .row.justify-content-center.align-items-stard
          .col-12.col-lg-12
            p.mb-0 A lo largo del desarrollo temático se exploran no solo los conceptos esenciales, sino también las técnicas, elementos y herramientas que permiten al aprendiz articular propuestas comerciales coherentes, persuasivas y funcionales en entornos digitales.

    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Propuesta comercial

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
