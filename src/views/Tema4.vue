<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Propuestas comerciales

    .tarjeta.color-primario-10.rounded-0.p-lg-0.p-3.mb-5(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0
          figure.p-0
            img(src="@/assets/curso/temas/tema_4/img_1.png", class="img-fluid").p-0
        .col-12.col-lg-7.p-lg-3.p-5
          p.mb-0 Según Gitomer (2019), una propuesta comercial efectiva debe ser relevante, específica y emocionalmente convincente, ya que en medios digitales el tiempo de atención del cliente es limitado y competitivo. La propuesta funciona como carta de presentación, argumento de venta y prueba de profesionalismo, ya sea que se estructure en formato PDF, presentación interactiva o landing page. 

    separador

    .bg_img_7.mb-3
      .row.justify-content-center.align-items-center
        .col-12.col-lg-10
          #t_4_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 4.1 Concepto
          .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-7.order-2.order-lg-1.mb-0(data-aos="zoom-in-right")
          p.mb-0 Una propuesta comercial es un documento o presentación estratégica que una empresa o profesional elabora para ofrecer productos, servicios o soluciones a un cliente potencial, con el objetivo de generar una relación comercial. Su función principal es convencer al cliente de que la oferta presentada es la mejor opción para satisfacer sus necesidades o resolver un problema específico.
        .col-12.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_4/img_3.png", class="img-fluid")
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10.mb-3(data-aos="zoom-in-right")
          .cita-decorada
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
              .row.justify-content-center.align-items-center
                .col-12.col-lg-11
                  p.cita-decorada__texto Su propósito principal es persuadir desde la lógica de necesidades, no desde el impulso transaccional, integrando contenidos que faciliten la decisión del cliente de manera autónoma, informada y confiable. Además, la propuesta actúa como filtro operativo: delimita lo que la empresa está en capacidad de ofrecer y en qué condiciones, evitando malentendidos y fortaleciendo la transparencia del proceso comercial.
                  h5 Otros propósitos de la propuesta comercial digital son:

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_4/img_5.png", class="img-fluid")
        .col-12.col-lg-6(data-aos="zoom-in-right")
          p.mb-3
          ul.lista-ul--color-primario.lista-ul--separador-color-primario
            li 
              i.fas.fa-feather
              span Comunicar valor
              span Mostrar beneficios y diferenciadores del producto o servicio. Genera interés auténtico.
            li 
              img(src="@/assets/curso/temas/tema_4/img_6.svg", class="img-fluid" )
              span Item lista no ordenada
            li 
              i.fas.fa-kiwi-bird
              span Item lista no ordenada    
            li 
              i.fas.fa-kiwi-bird
              span Item lista no ordenada   
            li 
              i.fas.fa-kiwi-bird
              span Item lista no ordenada   

    separador
 
    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2 Elementos que la componen
    .mb-3

    .bloque-texto-g.color-terciario-10.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una propuesta comercial bien estructurada incluye varios elementos clave que permiten comunicar de forma integral y estratégica la oferta empresarial. Estos elementos se organizan generalmente en: introducción o contextualización del cliente, descripción de la solución ofrecida, beneficios diferenciadores, aspectos técnicos y operativos, condiciones económicas, garantías, y canales de contacto.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-6.mb-lg-0.mb-3
        .bloque-texto-b.color-secundario-10.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0.ps-3 Según Anderson, Narus y van Rossum (2020), cada componente debe aportar a la narrativa de valor, anticipar preguntas frecuentes y reforzar los motivos por los cuales esa oferta es la más adecuada frente a otras opciones del mercado.
            i.fas.fa-quote-right
      .col-12.col-lg-4
        p.mb-0 Además, en el entorno digital, se sugiere incorporar recursos multimedia como infografías, videos breves o testimonios que refuercen la credibilidad. La organización de estos elementos debe responder al perfil del cliente: una propuesta para un emprendedor puede ser más visual y directa, mientras que una dirigida a una corporación requiere mayor profundidad técnica y referencias legales.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-8
                p.cita-decorada__texto <B>Ejemplo empresarial.</B> La empresa Sempli, dedicada al financiamiento de negocios, estructura sus propuestas comerciales para emprendedores en formato web interactivo. Incluye descripción del crédito, beneficios comparativos, simulador de cuotas, condiciones de desembolso y testimonios. Esto facilita que el cliente recorra la propuesta como si fuera una experiencia digital, aumentando su comprensión y disposición a concretar.
              .col-12.col-lg-3.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_4/img_9.png',  class="img-fluid cita-decorada__imagen-flotante-8")
      

    .row.justify-content-center.align-items-center
      .col-12.col-lg-10
        figure
          img(:src="require('@/assets/curso/temas/tema_4/img_10.svg')", alt='Imagen principal de la infografía')
        ImagenInfograficaB.color-primario
          template(v-slot:imagen)
          figure
            img(:src="require('@/assets/curso/temas/tema_4/img_10.svg')", alt='Imagen principal de la infografía')

          div(x="0%" y="23%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row.justify-content-center.align-items-center
                .col-lg-7
                  .h4 Porcinos
                  p.mb-3 La producción porcícola se desarrolla en múltiples climas y altitudes, en sistemas que pueden ser extensivos e intensivos.
                  p.mb-3 Estas explotaciones se orientan principalmente a la producción de carne, con destino al consumo directo y a la industria. Igualmente, es común la producción de lechones.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/tema_4/img_11.png")

          div(x="0%" y="40%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row.justify-content-center.align-items-center
                .col-lg-7
                  .h4 Avícola
                  p.mb-3 Esta es una de las industrias más grandes que existen en el mundo, pues es una de las proteínas de origen animal más consumidas. En la industria avícola destacan la producción de huevo, pollo de engorde y pollo de levante.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/tema_4/img_11.png")

          div(x="0%" y="55%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row.justify-content-center.align-items-center
                .col-lg-7
                  .h4 Búfalos
                  p.mb-3 La producción de carne y leche de búfalo se desarrolla, principalmente, en zonas de trópico bajo, donde se dan condiciones de alta temperatura. Son una fuente importante de proteína.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/tema_4/img_11.png")

          div(x="0%" y="70%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row.justify-content-center.align-items-center
                .col-lg-7
                  .h4 Equinos
                  p.mb-3 A este grupo pertenecen, principalmente, caballos, asnos y mulares. Estos animales se utilizan a menudo como apoyo en las labores del campo, en el deporte, las exposiciones, la producción de genética, la recreación y la producción de carne.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/tema_4/img_11.png")

          div(x="0%" y="88%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row.justify-content-center.align-items-center
                .col-lg-7
                  .h4 Ovinos
                  p.mb-3 Es uno de los sistemas de ganadería más antiguos y conocidos del mundo. Estos animales, por lo general, se destinan para la obtención de carne, especialmente los camuros, y lana, como en el caso de las ovejas. Estos animales poseen un amplio rango de adaptación climática.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/tema_4/img_11.png")

          div(x="100%" y="5%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row.justify-content-center.align-items-center
                .col-lg-7
                  .h4 Caprinos
                  p.mb-3 Junto con los ovinos, los caprinos también pertenecen al grupo de los pequeños rumiantes y son una de las explotaciones pecuarias más populares debido a su gran capacidad adaptativa. En este grupo se destaca la producción de cabras doble propósito.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/tema_4/img_11.png")

          div(x="100%" y="23%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row.justify-content-center.align-items-center
                .col-lg-7
                  .h4 Otras aves
                  p.mb-3 Además del pollo de engorde y la gallina ponedora, existen otras aves que igualmente se consideran de importancia económica debido a su participación en el ámbito comercial.
                  p.mb-3 Entre estas se encuentran pavos, patos, codornices, gansos, palomas y aves ornamentales. Estos animales se encuentran en múltiples rangos de altitud y temperatura, lo cual resulta muy favorable desde el punto de vista técnico.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/tema_4/img_11.png")

          div(x="100%" y="40%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row.justify-content-center.align-items-center
                .col-lg-7
                  .h4 Otras especies menores
                  p.mb-3 Dentro de este grupo de especies menores destacan actividades productivas como la cunicultura y la producción de cuy.
                  p.mb-3 Estos animales se constituyen en fuente importante de alimento a muy bajo costo. Además de la carne, su piel también es aprovechable.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/tema_4/img_11.png")

          div(x="100%" y="55%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row.justify-content-center.align-items-center
                .col-lg-7
                  .h4 Peces
                  p.mb-3 Este es otro de los grandes grupos de especies animales capaces de constituir proyectos productivos con altos niveles de rentabilidad.
                  p.mb-3 Este tipo de proteínas tienen una alta demanda en diversos espacios, además que estos montajes se adaptan a diversas condiciones agroecológicas.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/tema_4/img_11.png")

          div(x="100%" y="70%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row.justify-content-center.align-items-center
                .col-lg-7
                  .h4 Especies no convencionales
                  p.mb-3 Recientemente, algunas especies animales han empezado a adquirir relevancia en el escenario productivo debido a su potencial alimenticio.
                  p.mb-3 Dentro de este grupo destacan reptiles como iguanas, babillas y tortugas hicoteas. También existen explotaciones de caracoles, avestruces, llamas y alpacas.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/tema_4/img_11.png")

          div(x="100%" y="88%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row.justify-content-center.align-items-center
                .col-lg-7
                  .h4 Insectos y anélidos
                  p.mb-3 Existen iniciativas de cría de mariposas con fines ornamentales; explotación apícola para la obtención de miel y polen, larvas de gusano de seda, lombriz roja californiana para la producción de proteína animal o para la transformación de los subproductos de la industria agropecuaria.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/tema_4/img_11.png")


    .bg_img_6.mb-3

      separador
 
      #t_4_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 4.3 Aplicación en planes de mercadeo
      .mb-3



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
