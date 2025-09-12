<template>
  <section class="min-h-screen bg-gray-50 py-12 px-6">
    <div v-if="product" class="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
      
      <!-- Columna principal (galería + info) -->
      <div class="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
        <!-- Galería -->
        <div class="space-y-4">
          <div class="relative rounded-lg overflow-hidden shadow-md">
            <img
              :src="activeImage"
              :alt="product.name"
              class="w-full h-[28rem] object-cover transition-transform duration-300 hover:scale-105"
            />
            <!-- Favorito -->
            <button
              class="absolute top-3 right-3 p-2 rounded-full bg-white/90 shadow hover:bg-gray-100 transition"
              @click="toggleFavorite(product.id)"
            >
              <span v-if="isFavorite(product.id)">❤️</span>
              <span v-else>🤍</span>
            </button>
          </div>

          <!-- Miniaturas -->
          <div class="flex gap-3">
            <img
              v-for="(img, index) in product.images"
              :key="index"
              :src="img"
              :alt="`Miniatura ${index + 1}`"
              class="w-20 h-20 object-cover rounded-md border cursor-pointer hover:ring-2 hover:ring-blue-500"
              :class="{ 'ring-2 ring-blue-500': activeImage === img }"
              @click="activeImage = img"
            />
          </div>
        </div>

        <div class="mt-6">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ product.name }}</h1>
          <p class="text-gray-500 mb-4">{{ product.category }}</p>
          <p class="text-lg text-gray-700 mb-6 leading-relaxed">
            {{ product.shortDescription }}
          </p>
          <p class="text-2xl font-semibold text-[#c34b16] mb-2">
            {{ formatPrice(product.price ?? 299) }}
          </p>
        </div>

        <div class="mt-12 border-t pt-6">
          <h2 class="text-xl font-semibold mb-4">Detalles del producto</h2>
          <p class="text-gray-700 mb-4">{{ product.description }}</p>
          <ul class="space-y-2 text-gray-700">
            <li><strong>Tamaño:</strong> {{ product.size }}</li>
            <li><strong>Color:</strong> {{ product.color }}</li>
            <li><strong>Marca:</strong> {{ product.brand }}</li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <RelatedProducts
          :products="relatedProducts"
          @goToDetail="goToDetail"
        />

        <RelatedCategories
          class="mt-3"
          :product="product"
          @goToCategory="(cat: any) => $router.push({ path: '/productos', query: { category: cat } })"
        />
      </div>
    </div>

    <!-- Loading -->
    <div v-else class="text-center">
      <div class="animate-spin h-10 w-10 border-4 border-t-transparent rounded-full mx-auto"></div>
      <p class="mt-4 text-gray-600">Cargando producto...</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, onMounted, watch } from 'vue'
import { mockedProducts } from '../../../main-page/interfaces/ProductModel'
import RelatedProducts from '../composables/RelatedProducts.vue'
import RelatedCategories from '../composables/RelatedCategory.vue'

const route = useRoute()
const router = useRouter()

const param = route.params.id as string
const [rawId, rawSlug] = param.split('-')
const productId = parseInt(rawId ?? '', 0)

function toSlug(name: string) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

const product = ref<any>(mockedProducts.value.find((p) => p.id === productId))
const activeImage = ref<string>('')

onMounted(() => {
  if (product.value) {
    const expectedSlug = toSlug(product.value.name)
    if (rawSlug !== expectedSlug) {
      router.replace(`/productos/${product.value.id}-${expectedSlug}`)
    }
    activeImage.value = product.value.mainImage
  }
})

watch(
  () => route.params.id,
  (newId) => {
    const [rawId, rawSlug] = (newId as string).split("-")
    const productId = parseInt(rawId ?? "", 10)
    const newProduct = mockedProducts.value.find((p) => p.id === productId)
    if (newProduct) {
      product.value = newProduct
      activeImage.value = newProduct.mainImage
    }
  }
)

const relatedProducts = computed(() => {
  if (!product.value) return []
  console.log('Related products for category:', product.value.category)
  return mockedProducts.value
    .filter(
      (p) => p.category === product.value?.category && p.id !== product.value.id
    )
    .map((p) => ({
      id: p.id,
      name: p.name,
      image: p.mainImage,
      mainImage: p.mainImage,
      category: p.category,
      price: p.price,
    }))
})

const favorites = ref<number[]>([])

onMounted(() => {
  const stored = localStorage.getItem('favorites')
  if (stored) favorites.value = JSON.parse(stored)
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

function formatPrice(price: number) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)
}

function goToDetail(product: any) {
  const slug = toSlug(product.name)
  router.push(`/productos/${product.id}-${slug}`)
}
</script>
