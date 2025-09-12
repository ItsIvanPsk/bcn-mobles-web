<template>
  <div class="flex flex-col min-h-screen">
    <!-- Contenido principal -->
    <main class="flex-1 flex items-center justify-center bg-gray-50 px-6 lg:px-20">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <!-- Texto -->
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Presupuestos personalizados para tus muebles
          </h2>
          <p class="text-lg text-gray-700 mb-4">
            En <strong>BCN Mobles</strong> ofrecemos <span class="font-semibold">presupuestos a medida</span>
            para ayudarte a amueblar tu hogar con estilo y sin sorpresas.
          </p>
          <p class="text-lg text-gray-700 mb-6">
            Si necesitas orientación o quieres resolver dudas, puedes
            <span class="font-semibold">reservar una reunión en tienda</span> con nuestros profesionales.
          </p>
          
        </div>

        <!-- Calendly embed -->
        <div class="w-[40rem] h-[50rem] border rounded-lg shadow bg-white overflow-hidden">
          <iframe
            src="https://calendly.com/ivanfigueredo-et/presupuestos?embed_domain=bcn-mobles-web&embed_type=Inline&locale=es"
            width="100%"
            height="100%"
            frameborder="0"
        />

        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
function openCalendly() {
  window.open("https://calendly.com/ivanfigueredo-et/presupuestos?embed_domain=bcn-mobles-web&embed_type=Inline&locale=es", "_blank");
}
</script>
