<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Capacidades Empresariales

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1 Planes de Mercadeo
    .mb-3

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2 Logística
    .mb-3

    #t_3_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.3 Inventarios, términos y condiciones
    .mb-3

    #t_3_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.4 Gestión de pagos y descuentos
    .mb-3
    
    .row.justify-content-center.align-items-center
      .col-12.col-lg-10
        #t_3_5.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.5 Portafolio de productos / servicios
        .mb-3
    
    .row.justify-content-center.align-items-center
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo__slider-2.p-4.mb-5
          SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-6.order-2.order-lg-1.mb-0
                h5.mb-3 Variedad
                p.mb-0 Amplitud de líneas de productos o servicios para atender diferentes segmentos de clientes.
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_26.png', class="img-fluid")
            .row.justify-content-center.align-items-center
              .col-12.col-lg-6.order-2.order-lg-1.mb-0
                h5.mb-3 
                h5.mb-3 Profundidad
                p.mb-0 Número de versiones, modelos o presentaciones dentro de cada línea.
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_27.png', class="img-fluid")
            .row.justify-content-center.align-items-center
              .col-12.col-lg-6.order-2.order-lg-1.mb-0
                h5.mb-3 Calidad y diferenciación
                p.mb-0 Características que hagan la oferta competitiva frente a la competencia.
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_28.png', class="img-fluid")
            .row.justify-content-center.align-items-center
              .col-12.col-lg-6.order-2.order-lg-1.mb-0
                h5.mb-3 Ciclo de vida
                p.mb-0 Etapas de introducción, crecimiento, madurez y declive para planificar estrategias de lanzamiento, mantenimiento o retiro.
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_29.png', class="img-fluid")
            .row.justify-content-center.align-items-center
              .col-12.col-lg-6.order-2.order-lg-1.mb-0
                h5.mb-3 Rentabilidad
                p.mb-0 Análisis de costos, precios y márgenes para asegurar sostenibilidad económica.
              .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_30.png', class="img-fluid")
            

    #t_3_6.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.6 Capacidades de producción
    .mb-3


    .row.justify-content-center.align-items-center
      .col-12.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema_3/img_34.png', class="img-fluid")
      .col-12.col-lg-8
        .custom-slider--fondo__slider-3.p-2.p-sm-3.mb-5(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6")
            .tarjeta--fondo__slider-3.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--18
                .tarjeta--slider__title.mb-3.fw-bold Capacidad instalada
                .tarjeta--slider__content.mb-4 Define cantidad disponible para clientes.
            .tarjeta--fondo__slider-3.h-95
              .row.justify-content-center.align-items-center.mb-0 
                .col-12.mb-3
                  .tarjeta--19
                .tarjeta--slider__title.mb-3.fw-bold Certificación de procesos
                .tarjeta--slider__content.mb-4 Aumenta la confianza en la oferta.
            .tarjeta--fondo__slider-3.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--20
                .tarjeta--slider__title.mb-3.fw-bold Flexibilidad operativa
                .tarjeta--slider__content.mb-4 Permite ofertas personalizadas o limitadas.
            .tarjeta--fondo__slider-3.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--20
                .tarjeta--slider__title.mb-3.fw-bold Escalabilidad
                .tarjeta--slider__content.mb-4 Facilita negociaciones con grandes clientes.
            .tarjeta--fondo__slider-3.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--20
                .tarjeta--slider__title.mb-3.fw-bold Tecnología aplicada
                .tarjeta--slider__content.mb-4 Impacta tiempos y costo en la propuesta.

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
