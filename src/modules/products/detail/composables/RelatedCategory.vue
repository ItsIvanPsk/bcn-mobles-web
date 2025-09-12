<template>
  <aside
    v-if="relatedCategories.length > 0"
    class="bg-white rounded-xl shadow-lg p-6 lg:top-12 h-fit"
  >
    <h2 class="text-xl font-semibold mb-4">Categorías relacionadas</h2>
    <div class="space-y-2 max-h-[500px] overflow-y-auto pr-2">
      <button
        v-for="category in relatedCategories"
        :key="category"
        class="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition text-gray-700 font-medium"
        @click="$emit('goToCategory', category)"
      >
        {{ category }}
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue"

const props = defineProps<{
  product: {
    id: number
    category: string
  }
}>()

defineEmits<{
  (e: "goToCategory", category: string): void
}>()

// mapa de relaciones de categorías
const relatedCategoriesMap: Record<string, string[]> = {
  "Salón": ["Decoración", "Iluminación"],
  "Comedor": ["Mesas", "Decoración"],
  "Dormitorio": ["Almacenaje", "Iluminación"],
  "Oficina": ["Sillas", "Almacenaje"],
  "Decoración": ["Salón", "Dormitorio"],
  "Iluminación": ["Decoración", "Salón"],
  "Mesas": ["Comedor", "Salón"],
  "Sillas": ["Comedor", "Oficina"],
  "Almacenaje": ["Dormitorio", "Oficina"],
}

const relatedCategories = computed(() => {
  if (!props.product) return []
  return relatedCategoriesMap[props.product.category] || []
})
</script>

<style scoped>
/* Scrollbar más fino y discreto */
.space-y-2::-webkit-scrollbar {
  width: 6px;
}
.space-y-2::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}
.space-y-2::-webkit-scrollbar-track {
  background: transparent;
}
</style>
