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
            p.mb-0 Este componente formativo ofrece una mirada integral al proceso de creación de propuestas comerciales digitales, abordando los fundamentos del <i>marketing</i>, la comprensión del cliente y la evaluación de capacidades empresariales como pilares esenciales. A través de contenidos secuenciados se aprenderá a identificar necesidades del entorno, estructurar soluciones estratégicas y traducirlas en propuestas coherentes, persuasivas y alineadas con los objetivos comerciales de cada organización.
          .col-12.col-lg-2.d-none.d-lg-block.mb-0
            figure
              img(src="@/assets/curso/sintesis/img_2.png", class="img-fluid")  
        p.mb-0 La formación integra el uso de recursos digitales para fortalecer la presentación de la propuesta, promover el valor de la oferta y facilitar la toma de decisiones del cliente. Se enfatiza el pensamiento estratégico, la comunicación empática y la redacción profesional como competencias clave en contextos de negociación digital
    
    
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
