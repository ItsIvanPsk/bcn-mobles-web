<template>
  <section class="orange-gradient text-white">
    <div class="grid grid-cols-1 md:grid-cols-2 items-stretch">
      <!-- Imagen: primero en móvil, segundo en escritorio -->
      <div class="order-1 md:order-2">
        <img
          src="/shop/hero-image.jpg"
          alt="Servicio de mudanzas profesionales"
          class="shadow-md w-full h-80 md:h-full object-cover object-center"
          style="margin-left: -.4rem; width: 125rem;"
        />
      </div>

      <!-- Texto: segundo en móvil, primero en escritorio -->
      <div class="order-2 md:order-1 p-6 md:p-10 text-right flex flex-col justify-center">
        <h2 class="text-2xl font-bold mb-4 text-black">Mudanzas seguras y sin estrés</h2>
        <p class="mb-3 text-base text-black">
          Ofrecemos un <strong>servicio de mudanzas profesionales</strong>, diseñado para que el traslado de tus 
          pertenencias sea rápido, seguro y organizado. Nos encargamos de cada detalle, desde el 
          <strong>embalaje</strong> hasta el transporte y el montaje en tu nuevo hogar o empresa.
        </p>
        <p class="text-sm text-black">
          Con nuestro equipo de especialistas en mudanzas, puedes confiar en que tus objetos estarán protegidos en 
          todo momento, reduciendo tiempos y evitando preocupaciones.
        </p>
        <button
          class="mt-4 px-5 py-2 bg-[#c34b16] text-white rounded-md transition self-end"
        >
          Solicita presupuesto de mudanza
        </button>
      </div>
    </div>
  </section>
</template>
