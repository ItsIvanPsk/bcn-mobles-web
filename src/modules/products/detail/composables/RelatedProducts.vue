<template>
  <aside
    v-if="products.length > 0"
    class="shadow-lg p-6 lg:top-12 h-fit"
  >
    <h2 class="text-xl font-semibold mb-4">Productos relacionados</h2>
    <div class="space-y-4 max-h-[500px] overflow-y-auto pr-2">
      <div
        v-for="related in products"
        :key="related.id"
        class="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition"
        @click="$emit('goToDetail', related)"
      >
        <img
          :src="related.mainImage || related.image"
          :alt="related.name"
          class="w-20 h-20 object-cover rounded-md border flex-shrink-0"
        />
        <div>
          <h3 class="font-medium text-gray-800">{{ related.name }}</h3>
          <p class="text-sm text-gray-500">{{ formatPrice(related.price) }}</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue"

const props = defineProps<{
  products: Array<{
    id: number
    name: string
    image?: string
    mainImage?: string
    price: number
  }>
}>()

defineEmits<{
  (e: "goToDetail", product: any): void
}>()

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(price)
}
</script>

<style scoped>
/* Scrollbar más fino y discreto */
.space-y-4::-webkit-scrollbar {
  width: 6px;
}
.space-y-4::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}
.space-y-4::-webkit-scrollbar-track {
  background: transparent;
}
</style>
