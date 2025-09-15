<template>
  <section class="min-h-screen bg-gray-50 py-12 px-6">
    <!-- Loading -->
    <div v-if="loading" class="text-center">
      <div class="animate-spin h-10 w-10 border-4 border-t-transparent rounded-full mx-auto"></div>
      <p class="mt-4 text-gray-600">Cargando producto...</p>
    </div>

    <div v-else-if="product" class="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
      <!-- Columna principal (galería + info) -->
      <div class="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
        <!-- Galería -->
        <div class="space-y-4">
          <div class="relative rounded-lg overflow-hidden shadow-md">
            <img
              :src="activeImage?.src"
              :alt="activeImage?.alt"
              class="w-full h-[28rem] object-cover transition-transform duration-300 hover:scale-105"
            />
            <button
              class="absolute top-3 right-3 p-2 rounded-full bg-white/90 shadow hover:bg-gray-100 transition"
              @click="toggleFavorite(product.id)"
            >
              <span v-if="isFavorite(product.id)">❤️</span>
              <span v-else>🤍</span>
            </button>
          </div>

          <div class="flex gap-3">
            <img
              v-for="(img, index) in product.images"
              :key="index"
              :src="img.src"
              :alt="img.alt"
              class="w-20 h-20 object-cover rounded-md border cursor-pointer hover:ring-2 hover:ring-blue-500"
              :class="{ 'ring-2 ring-blue-500': activeImage?.src === img.src }"
              @click="activeImage = img"
            />
          </div>
        </div>

        <!-- Info -->
        <div class="mt-6">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ product.name }}</h1>
          <p class="text-gray-500 mb-4">
            {{ product.categories.map(c => c.name).join(', ') }}
          </p>
          <p class="text-lg text-gray-700 mb-6 leading-relaxed">
            {{ product.shortDescription }}
          </p>
          <p class="text-2xl font-semibold text-[#c34b16] mb-2">
            {{ formatPrice(product.price ?? 0) }}
          </p>
        </div>

        <!-- Detalles -->
        <div class="mt-12 border-t pt-6">
          <h2 class="text-xl font-semibold mb-4">Detalles del producto</h2>
          <p class="text-gray-700 mb-4">{{ product.description }}</p>
          <ul class="space-y-2 text-gray-700">
            <li><strong>Marca:</strong> {{ product.brand }}</li>
            <li v-if="product.defaultSize"><strong>Tamaño por defecto:</strong> {{ product.defaultSize }}</li>
            <li v-if="product.defaultColor"><strong>Color por defecto:</strong> {{ product.defaultColor }}</li>
          </ul>
        </div>
      </div>

      <!-- Panel lateral -->
      <div class="flex flex-col gap-6">
        <!-- Panel de aviso -->
        <div class="bg-blue-50 border border-blue-200 rounded-md p-4 flex items-start gap-3">
          <span class="material-symbols-outlined text-blue-500 mt-0.5" translate="no">help</span>
          <div class="flex-1">
            <p class="text-sm text-blue-700 mb-2">
              Para poder comprarlo, pide una cita en tienda para finalizar la compra.
            </p>
            <button
              class="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
              @click="goToBooking"
            >
              Solicitar cita
            </button>
          </div>
        </div>

        <!-- Panel de personalización -->
        <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6">
          <h2 class="text-xl font-semibold">Personaliza tu mueble</h2>

          <!-- Tamaños -->
          <div v-if="product.sizes?.length > 0">
            <label class="block text-sm font-medium mb-2">Tamaño</label>
            <select v-model="selected.size" class="w-full border rounded p-2">
              <option v-for="size in product.sizes" :key="size" :value="size">
                {{ size }}
              </option>
            </select>
          </div>

          <!-- Colores -->
          <div v-if="product.colors?.length > 0">
            <label class="block text-sm font-medium mb-2">Colores</label>
            <div class="flex gap-3 flex-wrap">
              <button
                v-for="colorObj in product.colors"
                :key="colorObj.name"
                @click="selected.color = colorObj.name"
                class="w-10 h-10 rounded-full border-2 transition relative"
                :class="selected.color === colorObj.name ? 'border-black scale-110' : 'border-gray-300'"
                :style="colorObj.texture 
                  ? { backgroundImage: `url(${colorObj.texture})`, backgroundSize: 'cover' } 
                  : { backgroundColor: colorObj.color ?? '#ccc' }"
                :title="colorObj.name"
              ></button>
            </div>
          </div>

          <!-- Tipos -->
          <div v-if="product.types?.length > 0">
            <label class="block text-sm font-medium mb-2">Tipo</label>
            <select v-model="selected.type" class="w-full border rounded p-2">
              <option v-for="type in product.types" :key="type" :value="type">
                {{ type }}
              </option>
            </select>
          </div>

          <!-- Medidas -->
          <div v-if="product.measures?.length > 0">
            <label class="block text-sm font-medium mb-2">Medidas</label>
            <select v-model="selected.measure" class="w-full border rounded p-2">
              <option v-for="m in product.measures" :key="m" :value="m">{{ m }}</option>
            </select>
          </div>

          <!-- Extensible -->
          <div v-if="product.extensible !== undefined">
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="selected.extensible" class="mr-2" />
              Mesa extensible
            </label>
          </div>

          <button
            class="bg-[#c34b16] text-white py-2 px-4 rounded hover:bg-[#a03d13] transition"
            @click="goToBooking"
          >
            Solicitar cita para este producto
          </button>
        </div>
      </div>
    </div>

    <!-- Related -->
    <div v-if="!loading && product" class="max-w-7xl mx-auto mt-12">
      <RelatedProducts :products="relatedProducts" @goToDetail="goToDetail" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import { mockedProducts } from '../../../main-page/interfaces/ProductModel'
import RelatedProducts from '../composables/RelatedProducts.vue'

const route = useRoute()
const router = useRouter()

const product = ref<any>(null)
const activeImage = ref<{ src: string; alt: string } | null>(null)
const loading = ref(true)

const selected = ref({
  size: '',
  color: '',
  type: '',
  measure: '',
  extensible: false,
})

// Mock de API
function fetchProductMock(id: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockedProducts.value.find(p => p.id === id) || null)
    }, 1000) // simula 1s de retraso
  })
}

onMounted(async () => {
  const param = route.params.id as string
  const [rawId, rawSlug] = param.split('-')
  const productId = parseInt(rawId ?? '', 10)

  const result: any = await fetchProductMock(productId)
  product.value = result
  loading.value = false

  if (product.value) {
    const expectedSlug = toSlug(product.value.name)
    if (rawSlug !== expectedSlug) {
      router.replace(`/productos/${product.value.id}-${expectedSlug}`)
    }

    activeImage.value = product.value.mainImage
    selected.value = {
      size: product.value.sizes?.[0] ?? '',
      color: product.value.colors?.[0]?.name ?? '',
      type: product.value.types?.[0] ?? '',
      measure: product.value.measures?.[0] ?? '',
      extensible: product.value.extensible ?? false,
    }
  }
})

function toSlug(name: string) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

const relatedProducts = computed(() => {
  if (!product.value) return []
  return mockedProducts.value
    .filter(p =>
      p.categories.some((c: any) =>
        product.value.categories.some((pc: any) => pc.id === c.id)
      ) && p.id !== product.value.id
    )
    .map(p => ({
      id: p.id,
      name: p.name,
      image: p.mainImage.src,
      mainImage: p.mainImage.src,
      price: p.price,
    }))
})

const favorites = ref<number[]>([])

function toggleFavorite(id: number) {
  if (favorites.value.includes(id)) {
    favorites.value = favorites.value.filter(f => f !== id)
  } else {
    favorites.value.push(id)
  }
  localStorage.setItem('favorites', JSON.stringify(favorites.value))
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

function goToDetail(prod: any) {
  const slug = toSlug(prod.name)
  router.push(`/productos/${prod.id}-${slug}`)
}

function goToBooking() {
  if (!product.value) return

  const config = `
    Producto: ${product.value.name}
    Tamaño: ${selected.value.size || '-'}
    Color: ${selected.value.color || '-'}
    Tipo: ${selected.value.type || '-'}
    Medida: ${selected.value.measure || '-'}
    Extensible: ${selected.value.extensible ? 'Sí' : 'No'}
  `.trim()

  router.push({
    path: '/pedir-cita',
    query: { description: config },
  })
}
</script>
