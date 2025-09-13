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
            :src="calendlyUrl"
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
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

// URL base de Calendly
const baseCalendly = "https://calendly.com/ivanfigueredo-et/presupuestos"

// Construimos la URL con query params si existen
const calendlyUrl = computed(() => {
  const params = new URLSearchParams()

  // 🔹 params que Calendly entiende
  if (route.query.name) params.set("name", route.query.name as string)
  if (route.query.email) params.set("email", route.query.email as string)
  if (route.query.description) params.set("a1", route.query.description as string)

  // 🔹 parámetros de embed obligatorios
  params.set("embed_domain", "bcn-mobles-web")
  params.set("embed_type", "Inline")
  params.set("locale", "es")

  return `${baseCalendly}?${params.toString()}`
})
</script>
