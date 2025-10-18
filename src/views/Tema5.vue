<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Herramientas digitales
      
    .row.justify-content-center.align-items-center.mb-0
      .col-8.col-lg-3.mb-lg-0.mb-4(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_5/img_1.png", class="img-fluid")
      .col-12.col-lg-7(data-aos="zoom-in-right")
        p.mb-3 En un entorno comercial cada vez más visual, inmediato y multiformato, las herramientas digitales se han convertido en extensiones fundamentales del lenguaje empresarial. Ya no basta con definir una buena oferta: es necesario representarla mediante recursos multimedia que comuniquen con claridad, cautiven con estética y conecten emocionalmente con el cliente digital.
        p.mb-0 En esta parte se trata sobre el uso estratégico de formatos como imagen, video, audio y texto en propuestas comerciales, así como los criterios técnicos y comunicacionales que garantizan la calidad en sus documentos. Más allá del manejo técnico, se promueve una visión creativa y ética del uso de estas herramientas, reconociendo su papel en la construcción de relaciones comerciales sustentadas en el diseño, la autenticidad y la experiencia del usuario.

    separador

    .bg_img_7.mb-3
      #t_5_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 5.1 Imágenes, videos, audio y texto
      .mb-3

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          figure
            img(src='@/assets/curso/temas/tema_5/img_3.png')
        .bloque-texto-t__texto.col-10.mb-0.p-4
          p.mb-0 En la actualidad, las propuestas comerciales deben ser expresadas mediante formatos que faciliten la comprensión visual, auditiva y textual del contenido ofrecido. Las imágenes permiten representar productos, conceptos o testimonios con inmediatez; los videos conectan emocionalmente a través de narrativas breves y dinámicas; el audio puede complementar presentaciones con mensajes explicativos o emocionales; y el texto articula la lógica argumentativa y la formalidad del contenido.
  
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10(data-aos="zoom-in-right")
          h5 Se sugiere tener en cuenta las siguientes recomendaciones de uso para cada formato:   
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12.col-xl-8.order-2.order-lg-1.mb-0
        .custom-slider.p-2.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6")
            .tarjeta--fondo__slider-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--10
                .tarjeta--slider__title.mb-3.text-center.fw-bold Imagen
                .tarjeta--slider__content.text-center.mb-4 Alta resolución, buen contraste, uso de identidad visual.
            .tarjeta--fondo__slider-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--11
                .tarjeta--slider__title.mb-3.text-center.fw-bold Video
                .tarjeta--slider__content.text-center.mb-4 Duración breve, guion claro, subtítulos disponibles.
            .tarjeta--fondo__slider-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--12
                .tarjeta--slider__title.mb-3.text-center.fw-bold Audio
                .tarjeta--slider__content.text-center.mb-4 Voz clara, música libre de derechos, tono emocional preciso.
            .tarjeta--fondo__slider-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--13
                .tarjeta--slider__title.mb-3.text-center.fw-bold Texto
                .tarjeta--slider__content.text-center.mb-4 Redacción clara, sin ambigüedades ni tecnicismos excesivos. 
      .col-8.col-lg-6.col-xl-4.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/temas/tema_5/img_9.png', class="img-fluid")
       
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_5/img_10.png", class="img-fluid")
      .col-12.col-lg-7(data-aos="zoom-in-right")
        p.mb-3 Según Dahiya (2021), el uso de estos formatos debe responder a criterios de propósito comunicativo, claridad, coherencia visual y adaptabilidad al canal. No se trata únicamente de “embellecer” la propuesta, sino de amplificar su impacto, facilitar la toma de decisiones y generar una experiencia informativa positiva. 
        p.mb-0 Cada recurso cumple una función específica: una imagen de alta calidad puede reemplazar una larga descripción; un video testimonial puede generar confianza inmediata; y un texto claro, bien estructurado y sin ambigüedades respalda el profesionalismo. En conjunto, estos formatos consolidan la propuesta como una experiencia persuasiva, visualmente atractiva y funcional para el cliente digital.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-8
                p.cita-decorada__texto <B>Ejemplo empresarial.</B> La empresa Hatsu, especializada en bebidas naturales, integra videos cortos, imágenes de producto en alta resolución, audio musical emocional y textos narrativos en sus propuestas y campañas digitales. Este enfoque multimodal refuerza su identidad de marca, facilita la conexión emocional con el cliente y convierte cada presentación comercial en una experiencia sensorial.
              .col-12.col-lg-3.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_5/img_12.png',  class="img-fluid cita-decorada__imagen-flotante-9")

    separador

    .bg_img_7.mb-3
      #t_5_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 5.2 Calidad en los documentos 
      .mb-3

      .bloque-texto-g.color-acento-contenido-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_5/img_14.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La calidad en los documentos digitales implica la correcta presentación, legibilidad, coherencia y profesionalismo del contenido que se entrega al cliente. En el entorno digital, esto abarca aspectos como ortografía, gramática, estética visual, estructura lógica, coherencia gráfica y adecuación al público objetivo. 

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.mb-lg-0.mb-3(data-aos="zoom-in-right")
          .bloque-texto-b.color-secundario-10.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h4.mb-0.ps-3 Según Reimold y Campo (2017), un documento de alta calidad es aquel que comunica eficazmente, refleja la seriedad institucional y respeta la experiencia del lector. La calidad también se mide por la accesibilidad: que el documento sea fácil de abrir, visualizar en diferentes dispositivos y entender sin necesidad de explicaciones adicionales.
              i.fas.fa-quote-right
        .col-12.col-lg-4(data-aos="zoom-in-right")
          p.mb-0 En propuestas comerciales, un documento mal estructurado puede significar pérdida de credibilidad o incluso ruptura de una negociación; por ello, es fundamental aplicar estándares editoriales, revisar contenido antes de enviar y adaptar cada documento a su propósito específico, ya sea presentación en vivo, archivo adjunto o publicación en plataformas.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 6.
      span Criterios de calidad documental en propuestas comerciales digitales
    .tabla-a.mb-0(data-aos="zoom-in-right")
      table
        caption 
          p <b>Fuente:</b> Elaboración propia con base en Reimold & Campo, 2017.
        thead
          tr
            th.col-3.col-lg-3 Criterio
            th.col-4.col-lg-4 Descripción operativa
            th.col-4.col-lg-4 Impacto comercial
        tbody
          tr
            td Legibilidad
            td Uso adecuado de fuentes, tamaños y contrastes.
            td Facilita comprensión del contenido.
          tr
            td Coherencia gráfica
            td Uso consistente de colores, estilos y estructura.
            td Refuerza identidad institucional y estética.
          tr
            td Claridad lingüística
            td Redacción precisa, sin ambigüedades ni errores.
            td Evita malentendidos y mejora percepción profesional.
          tr
            td Accesibilidad digital
            td Compatibilidad con diferentes formatos y dispositivos.
            td Mejora experiencia del usuario.
          tr
            td Estructura lógica
            td Orden temático, jerarquía visual.
            td Permite lectura secuencial y entendible.
</template>

<script>
export default {
  name: 'Tema5',
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
