<template>
  <div class="p-6 max-w-3xl mx-auto h-[80vh]">
    <!-- Header con volver atrás -->
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold">
        {{ isNew ? 'Crear Categoría' : 'Editar Categoría' }}
      </h1>
      <button
        @click="goBack"
        class="text-sm text-[#c34b16] hover:underline"
      >
        ← Volver a Categorías
      </button>
    </div>

    <div class="space-y-4 bg-white shadow rounded-lg p-6">
      <div>
        <label class="block text-sm font-medium">Nombre</label>
        <input v-model="category.name" class="w-full border rounded px-3 py-2 mt-1" />
      </div>

      <button
        @click="save"
        class="bg-[#c34b16] text-white px-6 py-2 rounded hover:bg-[#f79e78]"
        :disabled="loading"
      >
        {{ loading ? 'Guardando...' : (isNew ? 'Crear categoría' : 'Guardar cambios') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const isNew = route.path.includes("/new")
const category = ref<any>(null)
const loading = ref(false)

const categoryId = Number(route.params.id || route.query.id)

if (isNew) {
  category.value = { id: Date.now(), name: "" }
} else if (categoryId) {
  category.value = { id: categoryId, name: `Categoría ${categoryId}` }
} else {
  category.value = { id: 0, name: "Categoría no encontrada" }
}

async function save() {
  loading.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 800))
    if (isNew) {
      console.log("Categoría creada (mock):", category.value)
    } else {
      console.log("Categoría actualizada (mock):", category.value)
    }
    router.push({ path: "/bo-panel", query: { panel: "categories" } })
  } catch (err) {
    alert("Error al guardar categoría (mock).")
  } finally {
    loading.value = false
  }
}

function goBack() {
  router.push({ path: "/bo-panel", query: { panel: "categories" } })
}
</script>
