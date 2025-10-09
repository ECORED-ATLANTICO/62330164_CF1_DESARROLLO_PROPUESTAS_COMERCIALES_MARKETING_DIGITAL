<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cliente Digital

    .tarjeta.color-primario-10.rounded-0.p-lg-0.p-3.mb-5(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0
          figure.p-0
            img(src="@/assets/curso/temas/tema_2/img_1.png", class="img-fluid").p-0
        .col-12.col-lg-7.p-lg-3.p-5
          p.mb-3 El cliente es el eje central de toda actividad comercial, pues representa a la persona o entidad que adquiere productos o servicios para satisfacer necesidades, resolver problemas o cumplir deseos específicos. Su importancia radica en que sus preferencias, expectativas y comportamientos determinan las estrategias de venta, el diseño de la oferta y la manera en que las empresas se relacionan con el mercado. Comprender quién es el cliente y cómo actúa permite desarrollar propuestas comerciales más efectivas, orientadas a generar valor, fidelización y ventajas competitivas.

    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.mb-0
        #t_2_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.1 Concepto y perfil
        .mb-0

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_2/img_2.png", class="img-fluid")
      .col-12.col-lg-7(data-aos="zoom-in-right")
        p.mb-0 El cliente es la persona natural o jurídica que adquiere bienes o servicios para satisfacer una necesidad, resolver un problema o cumplir un deseo específico. En el contexto comercial, el cliente no solo es quien realiza la compra, sino también quien define las características de la oferta a través de sus expectativas, comportamientos, intereses y capacidad de pago. Entender al cliente implica reconocer sus motivaciones de consumo, su proceso de decisión y la percepción de valor que tiene frente al producto o servicio.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-3(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-11
                p.cita-decorada__texto El perfil del cliente consiste en la identificación, segmentación y representación de las características que definen a un usuario en función de su comportamiento, necesidades, valores y contexto; este proceso permite agrupar audiencias en subtipos que facilitan la personalización de propuestas comerciales, el diseño de contenidos y la aplicación de estrategias de marketing más precisas. 
                h5 Para cada uno de estos tipos de datos, podemos definir un uso estratégico en marketing:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-6.col-xl-4.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_2/img_4.png', class="img-fluid")
      .col-12.col-lg-12.col-xl-8.mb-0
        .custom-slider.p-2.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6")
            .tarjeta--fondo__slider-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--1
                .tarjeta--slider__title.mb-3.text-center.fw-bold Demográfico
                .tarjeta--slider__content.text-center.mb-4
                  span Edad.<br>
                  span Género.<br>
                  span Nivel educativo.<br>
                  span Ingresos.<br>
                  span Ocupación.<br>
                  span Estado civil.<br>
            .tarjeta--fondo__slider-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--2
                .tarjeta--slider__title.mb-3.text-center.fw-bold Geográfico
                .tarjeta--slider__content.text-center 
                  span Ubicación.<br>
                  span Clima.<br>
                  span Región.<br>
                  span Entorno Urbano o rural.<br>
            .tarjeta--fondo__slider-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--3
                .tarjeta--slider__title.mb-3.text-center.fw-bold Psicográficas
                .tarjeta--slider__content.text-center 
                  span Estilo de vida<br>
                  span Valores.<br>
                  span Intereses.<br>
                  span Personalidad.<br>
            .tarjeta--fondo__slider-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--4
                .tarjeta--slider__title.mb-3.text-center.fw-bold Conductual
                .tarjeta--slider__content.text-center 
                  span Hábitos de compra.<br>
                  span Frecuencia de consumo.<br>
                  span Fidelidad y sensibilidad al precio.<br>
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cajon.color-adicional-1.p-4.mb-0
          .row.justify-content-center.align-items-center
            .col-12.col-lg-10
              p.mb-3 Un perfil bien definido es fundamental para diseñar propuestas comerciales personalizadas y efectivas.
              p.mb-0 Existen varios tipos de perfilamiento, como el sociográfico, basado en la red social del individuo; el tecnográfico, que analiza la tecnología que utiliza; y el predictivo, que anticipa necesidades futuras según patrones históricos.
    
    .bg_img_2.mb-3
      .row.justify-content-center.align-items-center
        .col-12.col-lg-10.mb-5
          #t_2_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 2.2 Técnicas de análisis
          .mb-3
      
      
    

</template>

<script>
export default {
  name: 'Tema2',
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
