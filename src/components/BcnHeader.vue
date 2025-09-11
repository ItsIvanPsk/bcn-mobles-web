<template>
  <div class="row items-center justify-between q-px-md q-py-sm wrap site-header">
    <!-- Logo -->
    <div class="col-grow row">
      <a href="/">
        <img src="" alt="BcnMobles Logo" />
      </a>
    </div>

    <!-- Search -->
    <div class="col-grow col-3 q-px-md row justify-end search-wrapper">
      <transition name="fade">
        <q-input
          v-if="searchOpen"
          v-model="q"
          dense
          rounded
          outlined
          debounce="300"
          placeholder="¿Qué estás buscando?"
          class="search-input"
          @blur="onBlur"
        >
          <template #append>
            <q-icon name="close" class="cursor-pointer" @click="closeSearch" />
          </template>
        </q-input>
      </transition>

      <q-btn v-if="!searchOpen" flat round icon="search" @click="searchOpen = true" />

      <!-- Dropdown filtrado con scroll infinito -->
      <div v-if="q && paginatedProducts.length" class="results-dropdown" @scroll="handleScroll">
        <div
          v-for="p in paginatedProducts"
          :key="p.id"
          class="result-item"
          @mousedown.prevent="goToProduct(p)"
        >
          <div class="img-wrapper">
            <img :src="p.image" alt="product" class="result-img" />
          </div>
          <div class="q-ml-sm text-wrapper">
            <div class="result-name">{{ p.name }}</div>
            <div class="result-desc">{{ p.shortDescription }}</div>
          </div>
        </div>
        <div v-if="loading" class="loading">Cargando más...</div>
        <div v-if="finished" class="end">No hay más resultados</div>
      </div>
    </div>

    <!-- User & favorites -->
    <div class="row items-center">
      <q-btn flat round icon="favorite_border" />
      <q-btn flat round icon="person_outline" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { mockedProducts } from 'src/modules/main-page/interfaces/ProductModel'
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

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
  console.log('Navigating to product', p.id, slug)
  closeSearch()
  router.push(`/productos/${p.id}-${slug}`)
}
</script>

<style scoped lang="scss">
.site-header {
  position: relative;
  z-index: 10;
}

.search-wrapper {
  position: relative;
}

.results-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  width: 320px;
  max-height: 300px;
  overflow-y: auto;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.result-item {
  display: flex;
  align-items: stretch;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;

  &:hover {
    background: #f5f5f5;
  }
}

.img-wrapper {
  padding: 0.25rem;
  display: flex;
  align-items: center;
}

.result-img {
  height: 100%;
  width: 60px;
  object-fit: cover;
  border-radius: 4px;
}

.text-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
}

.result-name {
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.result-desc {
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.loading,
.end {
  text-align: center;
  padding: 8px;
  font-size: 12px;
  color: #666;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleX(0.5);
}
.search-input {
  width: 250px;
  max-width: 100%;
}
</style>
