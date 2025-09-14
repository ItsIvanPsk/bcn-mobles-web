<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 px-4">
    <div class="text-center">
      <!-- Número grande -->
      <h1 class="text-9xl font-extrabold text-[#c34b16] drop-shadow-lg">404</h1>

      <!-- Mensaje -->
      <p class="mt-4 text-2xl font-semibold text-gray-800">Oops... página no encontrada</p>
      <p class="mt-2 text-gray-600">La página que buscas no existe o fue movida.</p>

      <!-- Botón volver -->
      <router-link
        to="/"
        class="inline-block mt-6 px-6 py-3 rounded-lg bg-[#c34b16] text-white font-medium shadow-md hover:bg-[#f79e78] transition"
      >
        Volver al inicio
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// no necesitamos lógica aquí
</script>
