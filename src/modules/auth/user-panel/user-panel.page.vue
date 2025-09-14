<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 px-4">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
      <!-- Avatar -->
      <div class="flex justify-center mb-4">
        <div
          class="w-20 h-20 rounded-full bg-gradient-to-tr from-[#c34b16] to-[#f79e78] flex items-center justify-center text-white text-3xl font-bold shadow-md"
        >
          {{ initials }}
        </div>
      </div>

      <!-- User info -->
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Panel de Usuario</h2>

      <div v-if="user" class="space-y-2 text-gray-700">
        <p><strong>Nombre:</strong> {{ user.firstName }} {{ user.lastName }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p>
          <strong>Rol:</strong>
          <span
            class="px-2 py-1 rounded-full text-sm font-medium"
            :class="user.role === 'fullAdmin' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'"
          >
            {{ user.role }}
          </span>
        </p>

        <!-- Logout -->
        <button
          @click="logout"
          class="mt-6 w-full bg-[#c34b16] text-white py-2 px-4 rounded-lg hover:bg-[#f79e78] transition shadow-md"
        >
          Cerrar sesión
        </button>
      </div>

      <!-- Not logged -->
      <div v-else class="text-gray-600">
        <p class="mb-4">No estás logueado.</p>
        <router-link
          to="/iniciar-sesion"
          class="inline-block px-4 py-2 rounded-lg bg-[#c34b16] text-white hover:bg-[#f79e78] transition shadow-md"
        >
          Ir al Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const user = ref<any>(null)

const storedUser = localStorage.getItem("user")
if (storedUser) {
  user.value = JSON.parse(storedUser)
}

const initials = computed(() => {
  if (!user.value) return "?"
  return (
    (user.value.firstName?.[0] || "") +
    (user.value.lastName?.[0] || "")
  ).toUpperCase()
})

function logout() {
  localStorage.removeItem("user")
  user.value = null
  router.push("/iniciar-sesion")
}
</script>
