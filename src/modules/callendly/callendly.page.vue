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
        <div class="w-full h-[40rem] md:w-[40rem] md:h-[50rem] border rounded-lg shadow bg-white overflow-hidden">
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
import { ref, computed, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

// URL base de Calendly
const baseCalendly = "https://calendly.com/ivanfigueredo-et/presupuestos"

// Datos del usuario
const userName = ref("")
const userEmail = ref("")
const userDesc = ref("")

onMounted(() => {
  // 1. Recuperar datos desde localStorage.user
  const storedUser = localStorage.getItem("user")
  if (storedUser) {
    try {
      const parsed = JSON.parse(storedUser)
      userName.value = `${parsed.firstName ?? ""} ${parsed.lastName ?? ""}`.trim()
      userEmail.value = parsed.email ?? ""
    } catch (e) {
      console.error("Error parseando usuario de localStorage:", e)
    }
  }

  // 2. Si viene descripción por query, añadirla
  if (route.query.description) {
    userDesc.value = route.query.description as string
  }

  // 3. Si no hay usuario en localStorage, redirigir a login
  if (!userEmail.value) {
    router.push("/login")
  }
})

const calendlyUrl = computed(() => {
  const params = new URLSearchParams()

  if (userName.value) params.set("name", userName.value)
  if (userEmail.value) params.set("email", userEmail.value)
  if (userDesc.value) params.set("a1", userDesc.value)

  // parámetros obligatorios
  params.set("embed_domain", "bcn-mobles-web")
  params.set("embed_type", "Inline")
  params.set("locale", "es")

  return `${baseCalendly}?${params.toString()}`
})
</script>
