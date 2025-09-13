<template>
  <section>
    <BcnDiscountHero
      :dateText="'Hasta el 30 de junio'"
      :title="'Descuentos de verano'"
      :subtitle="'Aprovecha nuestras ofertas exclusivas en muebles seleccionados.'"
      :cta="'Ver ofertas'"
    />
  </section>
  
  <section class="p-6 relative">
    <!-- Productos -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="group border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white cursor-pointer"
        @click="goToDetail(product)"
      >
        <div class="relative w-full aspect-[4/3] bg-gray-100">
          <img
            src="/public/shop/hero-image.jpg"
            :alt="product.name" 
            class="w-full h-full object-cover transition-transform duration-300"
          />
        </div>
        <div class="p-4">
          <h3 class="text-base md:text-lg font-semibold mb-1">{{ product.name }}</h3>
          <p class="text-sm text-gray-600">Categoría: {{ product.category }}</p>
          <p class="text-sm text-gray-600">Tamaño: {{ product.size }}</p>
          <p class="text-sm text-gray-600">Color: {{ product.color }}</p>
        </div>
      </div>

    </div>

    <!-- Loader infinito -->
    <div ref="infiniteTrigger" class="h-12 flex justify-center items-center mt-8">
      <span v-if="loading">Cargando más...</span>
    </div>

    <button
      v-if="!showFilters"
      @click="showFilters = true"
      class="fixed top-1/3 right-0 transform -translate-y-1/2 bg-[#c34b16] text-white p-3 rounded-l-md shadow-lg hover:bg-[#f79e78] z-50"
      aria-label="Abrir filtros"
    >
      <span class="material-symbols-outlined text-2xl">filter_alt</span>
    </button>



    <!-- Drawer de filtros -->
    <transition name="slide-filters">
      <aside
        v-if="showFilters"
        class="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 flex flex-col"
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b">
          <h3 class="text-lg font-semibold">Filtros</h3>
          <button
            @click="showFilters = false"
            class="text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        <!-- Contenido filtros -->
        <div class="flex-1 overflow-y-auto p-4 space-y-3">
          <input
            v-model="localFilters.name"
            type="text"
            placeholder="Buscar por nombre"
            class="border p-2 rounded w-full"
          />
          <select v-model="localFilters.category" class="border p-4 rounded w-full">
            <option value="">Categoría</option>
            <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
          </select>
          <select v-model="localFilters.size" class="border p-4 rounded w-full">
            <option value="">Tamaño</option>
            <option v-for="s in sizes" :key="s" :value="s">{{ s }}</option>
          </select>
          <select v-model="localFilters.color" class="border p-4 rounded w-full">
            <option value="">Color</option>
            <option v-for="c in colors" :key="c" :value="c">{{ c }}</option>
          </select>
        </div>

        <!-- Footer botones -->
        <div class="p-4 border-t flex gap-2">
          <button
            @click="applyFilters"
            class="flex-1 bg-[#c34b16] hover:bg-[#f79e78] text-white py-2 rounded-md transition"
          >
            Buscar
          </button>
          <button
            @click="clearFilters"
            class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-md transition"
          >
            Limpiar
          </button>
        </div>
      </aside>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mockedProducts } from '../../../main-page/interfaces/ProductModel'
import BcnDiscountHero from '../../../../components/BcnDiscountHero.vue'

const route = useRoute()
const router = useRouter()

const products = ref<any[]>([])
const allProducts = ref<any[]>([])
const page = ref(1)
const perPage = 8
const loading = ref(false)

const showFilters = ref(false)

const filters = reactive({
  name: '',
  category: '',
  size: '',
  color: ''
})

const localFilters = reactive({ ...filters })

const categories = ['Sillas', 'Muebles', 'Armarios', 'Mesas']
const sizes = ['Pequeño', 'Mediano', 'Grande']
const colors = ['Roble', 'Roble claro', 'Acaccia', 'Roble oscuro', 'Negro', 'Negro mate', 'Blanco']
const types = ['2 asientos', '3 asientos', '4 asientos', '5 asientos', '4 asientos + cheslon']

onMounted(() => {
  allProducts.value = Array.isArray(mockedProducts) ? mockedProducts : mockedProducts.value

  if (route.query.name) filters.name = String(route.query.name)
  if (route.query.category) filters.category = String(route.query.category)
  if (route.query.size) filters.size = String(route.query.size)
  if (route.query.color) filters.color = String(route.query.color)

  Object.assign(localFilters, filters)

  resetAndFetch()
})

async function fetchProducts(reset = false) {
  loading.value = true
  await new Promise((r) => setTimeout(r, 400)) 

  let filtered = [...allProducts.value]
  if (filters.name) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(filters.name.toLowerCase())
    )
  }
  if (filters.category) {
    filtered = filtered.filter((p) => p.category === filters.category)
  }
  if (filters.size) {
    filtered = filtered.filter((p) => p.size === filters.size)
  }
  if (filters.color) {
    filtered = filtered.filter((p) => p.color === filters.color)
  }

  // aplicar paginación
  const start = (page.value - 1) * perPage
  const end = start + perPage
  const pageData = filtered.slice(start, end)

  if (reset) products.value = []
  products.value.push(...pageData)
  loading.value = false
}

function loadMore() {
  page.value++
  fetchProducts()
}

function resetAndFetch() {
  page.value = 1
  fetchProducts(true)
}

const infiniteTrigger = ref<HTMLElement | null>(null)
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !loading.value) loadMore()
  }, { threshold: 1.0 })
  if (infiniteTrigger.value) observer.observe(infiniteTrigger.value)
})

// aplicar filtros (desde el drawer)
function applyFilters() {
  Object.assign(filters, localFilters)
  router.replace({ query: { ...filters } })
  resetAndFetch()
  showFilters.value = false // 👈 cerrar drawer tras aplicar
}

// limpiar filtros
function clearFilters() {
  Object.keys(filters).forEach((k) => (filters[k] = ''))
  Object.keys(localFilters).forEach((k) => (localFilters[k] = ''))
  router.replace({ query: {} })
  resetAndFetch()
}

// slugify para detalle
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function goToDetail(product: any) {
  const slug = slugify(product.name)
  router.push({
    name: 'product-detail',
    params: { slug },
    query: { id: product.id }
  })
}

onMounted(() => {
  allProducts.value = Array.isArray(mockedProducts) ? mockedProducts : mockedProducts.value

  syncFiltersWithQuery()
  resetAndFetch()
})

function syncFiltersWithQuery() {
  if (route.query.name) filters.name = String(route.query.name)
  else filters.name = ''

  if (route.query.category) filters.category = String(route.query.category)
  else filters.category = ''

  if (route.query.size) filters.size = String(route.query.size)
  else filters.size = ''

  if (route.query.color) filters.color = String(route.query.color)
  else filters.color = ''

  Object.assign(localFilters, filters)
}

watch(
  () => route.query,
  () => {
    syncFiltersWithQuery()
    resetAndFetch()
  },
  { deep: true }
)
</script>

<style scoped>
.slide-filters-enter-active,
.slide-filters-leave-active {
  transition: all 0.3s ease;
}
.slide-filters-enter-from,
.slide-filters-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
