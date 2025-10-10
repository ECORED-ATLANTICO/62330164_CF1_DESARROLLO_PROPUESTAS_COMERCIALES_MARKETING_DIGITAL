<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Marketing Digital 
      
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_1/img_1.png", class="img-fluid")
      .col-12.col-lg-9(data-aos="zoom-in-right")
        p.mb-3 El marketing digital se refiere al conjunto de estrategias y acciones comerciales que utilizan plataformas digitales y tecnologías de la información para promover productos, servicios o experiencias; este enfoque trasciende el objetivo tradicional de venta, ya que se basa en crear relaciones interactivas y medibles entre la marca y el consumidor, aprovechando medios como redes sociales, motores de búsqueda, sitios web, correo electrónico y publicidad en línea. 
        .row.justify-content-center.align-items-center.mb-3
          .col-12.col-lg-6.mb-lg-0.mb-3
            .bloque-texto-b.color-secundario-10.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-0.ps-3 Según Chaffey y Smith (2017), el marketing digital implica una planificación orientada por datos, enfocada en audiencias segmentadas, con un fuerte componente de personalización y automatización.
                i.fas.fa-quote-right
          .col-12.col-lg-6
            p.mb-0 Esta evolución ha transformado la comunicación comercial, permitiendo que las empresas respondan de manera más precisa y ágil a los cambios del mercado y al comportamiento del consumidor. Además, el marketing digital integra la capacidad de recolectar, interpretar y usar información en tiempo real para tomar decisiones estratégicas basadas en evidencia, lo que representa una ventaja competitiva frente a modelos de marketing tradicionales. 
        p.mb-0 La naturaleza del medio digital también potencia la interacción y retroalimentación inmediata, fomentando una relación más cercana con el cliente. El uso de herramientas digitales bien estructuradas permite conectar la propuesta de valor de la empresa con los intereses del público de forma relevante y empática.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-8
                p.cita-decorada__texto <B>Ejemplo empresarial.</B> La empresa colombiana Crepes & Waffles ha adoptado el marketing digital como eje estratégico de comunicación con sus clientes. A través de campañas en Instagram y TikTok, utiliza contenidos emocionales y visuales para destacar su compromiso social y ambiental, mientras promueve productos nuevos. La personalización de sus mensajes, el seguimiento de comentarios y la rapidez de interacción demuestran una estrategia digital orientada a fortalecer vínculos más que a realizar ventas inmediatas, lo que contribuye al posicionamiento de marca y fidelización de usuarios.
              .col-12.col-lg-3.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_1/img_3.png',  class="img-fluid cita-decorada__imagen-flotante-1")
                
    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 1.
      span Tipos de marketing digital y sus características
    .tabla-a.mb-5(data-aos="zoom-in-right")
      table
        caption 
          p <b>Fuente:</b>  Adaptado de Chaffey y Smith, 2017.
        thead
          tr
            th.col-3.col-lg-3 Tipo de marketing digital
            th.col-5.col-lg-5 Características principales
            th.col-4.col-lg-4 Canal o herramienta común
        tbody
          tr
            td Marketing de contenidos
            td Ofrece valor educativo o emocional antes de vender
            td Blogs, infografías, videos, podcasts
          tr
            td Email marketing
            td Comunicación directa, automatizada y personalizada
            td Plataformas de mailing (mailchimp, Brevo, MailerLite, HubSpot, etc.)
          tr
            td Publicidad programática
            td Compra automatizada de espacios publicitarios por subasta
            td Google Ads, Meta Ads
          tr
            td Social Media Marketing
            td Promueve la marca a través de redes sociales y comunidades
            td Facebook, Instagram, LinkedIn
          tr
            td SEO (optimización en buscadores)
            td Mejora visibilidad orgánica en motores de búsqueda.
            td Google, Bing, herramientas SEO.
          tr
            td Influencer marketing
            td Utiliza líderes de opinión digitales para ganar credibilidad.
            td YouTube, Instagram, TikTok

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Concepto y principios
    .mb-3
    
    .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los principios fundamentales del marketing digital orientan las acciones comerciales en entornos digitales hacia una comunicación más eficiente, personalizada y medible. A diferencia de enfoques publicitarios masivos, el marketing digital opera bajo bases estratégicas como la segmentación avanzada, la experiencia del usuario, la optimización continua y la interactividad. 
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.mb-lg-0.mb-3(data-aos="zoom-in-right")
        .bloque-texto-b.color-secundario-10.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0.ps-3 Según Kotler, Kartajaya y Setiawan (2021), uno de los pilares es la humanización de las tecnologías, que propone usar los recursos digitales para conectar emocionalmente con el consumidor, comprendiendo sus valores y comportamientos.
            i.fas.fa-quote-right
      .col-12.col-lg-4(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-2.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/tema_1/img_5.svg", class="img-fluid")
          .col-12.col-lg-10
            p.mb-0 Otro principio relevante es la adaptabilidad, ya que las campañas deben ajustarse en tiempo real a los cambios del entorno, a partir de datos obtenidos mediante herramientas de análisis.
        
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_1/img_6.png", class="img-fluid")
      .col-12.col-lg-10(data-aos="zoom-in-right")
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10
                p.cita-decorada__texto También se destaca la relevancia del contenido, entendido como el insumo principal que permite atraer, educar y convertir al cliente desde diferentes etapas del proceso de compra. Estos principios configuran un ecosistema donde las decisiones se basan en evidencia y donde la marca adquiere una voz más cercana, empática y contextual. En este sentido, la integración entre estrategia, tecnología y creatividad se vuelve indispensable para generar propuestas comerciales que no solo sean persuasivas, sino también pertinentes y sostenibles.
              
    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 2.
      span Principios clave del marketing digital y su aplicación empresarial
    .tabla-a.mb-5(data-aos="zoom-in-right")
      table
        caption 
          p <b>Fuente:</b> Elaboración propia con base en Kotler, 2021, y Ryan, 2020.
        thead
          tr
            th.col-3.col-lg-3 Principios clave del marketing digital y su aplicación empresarial
            th.col-5.col-lg-5 Descripción operativa
            th.col-4.col-lg-4 Aplicación empresarial
        tbody
          tr
            td.fw-bold Segmentación avanzada
            td Dividir audiencias según intereses, comportamiento y contexto
            td Envío de promociones por ubicación y hábitos de compra
          tr
            td.fw-bold Personalización del contenido
            td Adaptar mensajes a cada perfil de cliente.
            td Ofertas exclusivas en apps y correos electrónicos.
          tr
            td.fw-bold Interactividad y feedback
            td Promover comunicación bidireccional en tiempo real.
            td Atención vía WhatsApp y redes sociales.
          tr
            td.fw-bold Adaptabilidad basada en datos
            td Ajustar campañas según métricas y análisis digital.
            td Cambios en productos destacados por demanda del canal digital.
          tr
            td.fw-bold Experiencia centrada en el usuario
            td Diseñar navegación y contenidos útiles y amigables.
            td Aplicaciones con menús intuitivos y recomendaciones personalizadas.

    separador

    .bg_img_1.mb-3

      #t_1_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.2 Análisis del entorno
      .mb-3
    
      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          figure
            img(src='@/assets/curso/temas/tema_1/img_9.png')
        .bloque-texto-t__texto.col-10.mb-0.p-4
          p.mb-0 El análisis del entorno permite identificar factores que inciden directa o indirectamente en las decisiones estratégicas del marketing comercial. En este contexto, el entorno se entiende como el conjunto de variables externas e internas que influyen en el comportamiento del mercado y en la capacidad de la empresa para generar valor desde plataformas digitales. 
    
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_1/img_10.png", class="img-fluid")
        .col-12.col-lg-8(data-aos="zoom-in-right")
          p.mb-0 Esta evaluación implica estudiar aspectos como las tendencias tecnológicas, los cambios en el comportamiento del consumidor online, la evolución de los canales de comunicación, la competencia digital y el marco legal del entorno virtual. Para Kotler y Keller (2016), el análisis digital debe contemplar indicadores como tráfico web, tasas de conversión, tiempo de permanencia, interacciones en redes sociales, e incluso reputación digital, como señales de rendimiento y oportunidad.   

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-9.order-2.order-lg-1(data-aos="zoom-in-right")
          p.mb-0 La observación activa de estas variables permite anticipar movimientos de la competencia, reconocer nuevas necesidades del cliente y ajustar los mensajes comerciales de manera oportuna. En la práctica, herramientas como Google Trends, SEMrush o Meta Business Suite facilitan este proceso al ofrecer métricas en tiempo real, segmentadas por ubicación, interés o comportamiento. Además, la adaptabilidad del entorno digital requiere que este análisis sea frecuente y dinámico, de modo que las propuestas comerciales respondan con agilidad y pertinencia a las condiciones cambiantes del mercado.
        .col-12.col-lg-1.order-1.order-lg-2.mb-lg-0.mb-3.d-none.d-lg-block(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_1/img_11.png", class="img-fluid")

    .row.justify-content-center.align-items-center
      .col-12.col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="zoom-in-right")
          h5 Figura 1.
          span Herramientas para el análisis del entorno digital y su aplicación
        figure(data-aos="zoom-in-right")
          img(src='@/assets/curso/temas/tema_1/img_12.svg', class="img-fluid d-none d-lg-block mb-3")
          img(src='@/assets/curso/temas/tema_1/img_13.svg', class="img-fluid d-block d-lg-none mb-3")
        figcaption(data-aos="zoom-in-right") 
          <b>Fuente:</b> Elaboración propia con base en Kotler & Keller, 2016, y documentación oficial de cada herramienta.
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
