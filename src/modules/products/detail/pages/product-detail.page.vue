<template>
  <div class="p-6">
    <div v-if="product" class="border rounded-lg shadow-md p-6 bg-white">
      <!-- Imagen -->
      <div class="relative">
        <img
          :src="product.image"
          alt="Imagen del producto"
          class="rounded-md w-full aspect-video object-cover"
        />
        <button
          class="absolute top-2 right-2 p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
          @click="toggleFavorite(product.id)"
        >
          <span v-if="isFavorite(product.id)">❤️</span>
          <span v-else>🤍</span>
        </button>
      </div>

      <!-- Info -->
      <div class="mt-4">
        <h2 class="text-xl font-semibold">{{ product.name }}</h2>
        <p class="text-sm text-gray-600 mt-1">{{ product.category }}</p>
        <p class="mt-3 text-gray-800">{{ product.shortDescription }}</p>
      </div>

      <!-- Botón volver -->
      <div class="flex justify-end mt-6">
        <button
          class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          @click="$router.push('/productos')"
        >
          Volver a productos
        </button>
      </div>
    </div>

    <!-- Loading -->
    <div v-else class="text-center py-10">
      <div class="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
      <p class="mt-4 text-gray-600">Cargando producto...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import { mockedProducts } from '../../../main-page/interfaces/ProductModel'

const route = useRoute()
const router = useRouter()

const param = route.params.id as string
const [rawId, rawSlug] = param.split('-')
const productId = parseInt(rawId ?? '', 10)

function toSlug(name: string) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

const product = computed(() => mockedProducts.value.find((p) => p.id === productId))

onMounted(() => {
  if (product.value) {
    const expectedSlug = toSlug(product.value.name)
    if (rawSlug !== expectedSlug) {
      router.replace(`/productos/${product.value.id}-${expectedSlug}`)
    }
  }
})

// SEO sin Quasar (usa vue-meta o @vueuse/head si quieres SSR)
onMounted(() => {
  if (product.value) {
    useHead({
      title: `${product.value.name} | Mi Tienda de Muebles`,
      meta: [
        { name: 'description', content: product.value.shortDescription },
        { property: 'og:title', content: product.value.name },
        { property: 'og:description', content: product.value.shortDescription },
        { property: 'og:image', content: product.value.image },
      ],
    })
  }
})

const favorites = ref<number[]>([])

onMounted(() => {
  const stored = localStorage.getItem('favorites')
  if (stored) {
    favorites.value = JSON.parse(stored)
  }
})

function saveFavorites() {
  localStorage.setItem('favorites', JSON.stringify(favorites.value))
}

function toggleFavorite(id: number) {
  if (favorites.value.includes(id)) {
    favorites.value = favorites.value.filter((f) => f !== id)
  } else {
    favorites.value.push(id)
  }
  saveFavorites()
}

function isFavorite(id: number) {
  return favorites.value.includes(id)
}


function useHead(arg0: { title: string; meta: ({ name: string; content: any } | { property: string; content: any })[] }) {
  throw new Error('Function not implemented.')
}
</script>
