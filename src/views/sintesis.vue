<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-stard.mb-3
      .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/sintesis/img_1.png", class="img-fluid")
      .col-12.col-lg-8.mb-lg-0.mb-0(data-aos="fade-left")
        .row.justify-content-center.align-items-stard.mb-2
          .col-12.col-lg-10.mb-0
            p.mb-0 Este componente ofrece una visión integral del <i>storytelling</i> como herramienta estratégica para la creación de contenidos digitales con propósito. A lo largo de sus seis unidades temáticas, se abordan los fundamentos narrativos, su impacto en la comunicación y el <i>marketing</i>, así como las conexiones emocionales que fortalecen el vínculo entre marca y audiencia.
          .col-12.col-lg-2.d-none.d-lg-block.mb-0
            figure
              img(src="@/assets/curso/sintesis/img_2.png", class="img-fluid")  
        p.mb-0 Se exploran diversos tipos de narrativas y se analizan casos de éxito como Airbnb, Dove y Spotify, que demuestran cómo las historias bien construidas generan confianza, fidelización y posicionamiento. Además, se presentan técnicas para fortalecer el <i>engagement</i>, adaptando los relatos a formatos digitales como <i>blogs</i>, redes sociales, videos y experiencias interactivas.
    
    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
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
