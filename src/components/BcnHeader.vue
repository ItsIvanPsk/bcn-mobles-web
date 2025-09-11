<template>
  <header class="flex items-center justify-between px-4 py-2 bg-white border-b border-lightgray min-h-[60px]">
    <!-- Logo -->
    <div class="flex-shrink-0">
      <a href="/">
        <img src="/public/logo.jpg" alt="BcnMobles Logo" class="h-10" />
      </a>
    </div>

    <!-- User, favorites & search -->
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-2 pe-3">
        <button
          class="flex items-center justify-center pe-3"
          aria-label="Mesas"
          @click="router.push({ path: '/productos', query: { category: 'Mesas' } })"
        >
          <span class="text-darkgray">Mesas</span>
        </button>

        <button
          class="flex items-center justify-center pe-3"
          aria-label="Armarios"
          @click="router.push({ path: '/productos', query: { category: 'Armarios' } })"
        >
          <span class="text-darkgray">Armarios</span>
        </button>
      </div>

      <!-- Search -->
      <div class="relative flex items-center">
        <transition name="fade">
          <div
            v-if="searchOpen"
            class="flex items-center bg-white border border-lightgray rounded-full px-3 shadow-sm"
          >
            <input
              v-model="q"
              type="text"
              placeholder="¿Qué estás buscando?"
              class="w-52 py-1 px-2 text-sm text-darkgray focus:outline-none"
              @blur="onBlur"
            />
            <button
              type="button"
              class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100"
              @click="closeSearch"
              aria-label="Cerrar"
            >
              <span class="material-symbols-outlined text-darkgray">close</span>
            </button>
          </div>
        </transition>

        <button
          v-if="!searchOpen"
          class="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100"
          @click="searchOpen = true"
          aria-label="Buscar"
        >
          <span class="material-symbols-outlined text-darkgray">search</span>
        </button>

        <!-- Dropdown -->
        <div
          v-if="q && paginatedProducts.length"
          class="absolute top-full right-0 mt-2 w-72 max-h-72 overflow-y-auto bg-white border border-lightgray rounded-lg shadow-lg z-50"
          @scroll="handleScroll"
        >
          <div
            v-for="p in paginatedProducts"
            :key="p.id"
            class="flex items-center p-2 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
            @mousedown.prevent="goToProduct(p)"
          >
            <img :src="p.image" alt="product" class="w-14 h-10 object-cover rounded mr-2" />
            <div class="flex-1 min-w-0">
              <div class="text-sm font-semibold truncate">{{ p.name }}</div>
              <div class="text-xs text-mediumgray truncate">{{ p.shortDescription }}</div>
            </div>
          </div>
          <div v-if="loading" class="text-center py-2 text-xs text-mediumgray">Cargando más...</div>
          <div v-if="finished" class="text-center py-2 text-xs text-mediumgray">No hay más resultados</div>
        </div>
      </div>

      <!-- Favorites -->
      <button
        class="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100"
        aria-label="Favoritos"
      >
        <span class="material-symbols-outlined text-darkgray">favorite</span>
      </button>

      <!-- Cuenta -->
      <button
        class="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100"
        aria-label="Cuenta"
      >
        <span class="material-symbols-outlined text-darkgray">person</span>
      </button>
    </div>
  </header>
</template>


<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { mockedProducts } from '../modules/main-page/interfaces/ProductModel'

const q = ref('')
const searchOpen = ref(false)
const router = useRouter()

const products = mockedProducts

const page = ref(1)
const pageSize = 5
const loading = ref(false)
const finished = ref(false)

const filteredProducts = computed(() =>
  products.value.filter((p) => p.name.toLowerCase().includes(q.value.toLowerCase())),
)

const paginatedProducts = ref<typeof products.value>([])

watch(q, () => {
  resetPagination()
  loadMore()
})

function resetPagination() {
  page.value = 1
  paginatedProducts.value = []
  finished.value = false
}

function loadMore() {
  if (loading.value || finished.value) return
  loading.value = true

  setTimeout(() => {
    const start = (page.value - 1) * pageSize
    const end = page.value * pageSize
    const nextItems = filteredProducts.value.slice(start, end)

    if (nextItems.length) {
      paginatedProducts.value.push(...nextItems)
      page.value++
    } else {
      finished.value = true
    }

    loading.value = false
  }, 500)
}

function handleScroll(e: Event) {
  const el = e.target as HTMLElement
  if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
    loadMore()
  }
}

function closeSearch() {
  searchOpen.value = false
  q.value = ''
  resetPagination()
}

function onBlur(evt: Event) {
  const related = (evt as FocusEvent).relatedTarget as HTMLElement | null
  if (!related || !related.closest('.results-dropdown')) {
    closeSearch()
  }
}

function slugify(text: string) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function goToProduct(p: { id: number; name: string }) {
  const slug = slugify(p.name)
  closeSearch()
  router.push(`/productos/${p.id}-${slug}`)
}
</script>
