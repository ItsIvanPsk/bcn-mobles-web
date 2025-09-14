<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white flex flex-col">
      <div class="p-4 text-lg font-bold border-b border-gray-700">
        Backoffice
      </div>
      <nav class="flex-1 p-2">
        <ul class="space-y-1">
          <li>
            <button
              @click="setActivePanel('products')"
              class="w-full text-left px-3 py-2 rounded hover:bg-gray-700"
              :class="activePanel === 'products' ? 'bg-gray-700' : ''"
            >
              Productos
            </button>
          </li>
          <li>
            <button
              @click="setActivePanel('categories')"
              class="w-full text-left px-3 py-2 rounded hover:bg-gray-700"
              :class="activePanel === 'categories' ? 'bg-gray-700' : ''"
            >
              Categorías
            </button>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main content -->
    <main class="flex-1 p-6">
      <!-- Header con título y botón -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">
          {{ activePanel === 'products' ? 'Gestión de Productos' : 'Gestión de Categorías' }}
        </h1>

        <button
          @click="addItem"
          class="bg-[#c34b16] text-white px-4 py-2 rounded hover:bg-[#f79e78] transition"
        >
          + Añadir
        </button>
      </div>

      <!-- 🔎 Toolbar filtros (solo en productos) -->
      <div
        v-if="activePanel === 'products'"
        class="bg-white rounded-lg shadow p-4 mb-6 flex flex-wrap gap-4 items-end"
      >
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input
            v-model="filters.name"
            type="text"
            placeholder="Buscar producto..."
            class="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Marca</label>
          <select v-model="filters.brand" class="border rounded px-3 py-2">
            <option value="">Todas</option>
            <option v-for="m in brands" :key="m" :value="m">{{ m }}</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
          <select v-model="filters.category" class="border rounded px-3 py-2">
            <option value="">Todas</option>
            <option v-for="c in categories" :key="c.id" :value="c.name">{{ c.name }}</option>
          </select>
        </div>

        <button
          @click="applyFilters"
          class="bg-[#c34b16] text-white px-4 py-2 rounded hover:bg-[#f79e78] transition"
        >
          Buscar
        </button>
        <button
          @click="clearFilters"
          class="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Limpiar
        </button>
      </div>

      <!-- Panel Productos -->
      <div
        v-if="activePanel === 'products'"
        class="space-y-4 overflow-y-auto pr-2"
        style="height: 80vh"
      >
        <div
          v-for="p in filteredProducts"
          :key="p.id"
          class="flex items-center justify-between bg-white shadow rounded-lg p-4"
        >
          <div class="flex items-center gap-4">
            <img
              :src="p.mainImage?.src"
              :alt="p.mainImage?.alt || p.name"
              class="w-16 h-16 object-cover rounded"
            />
            <div>
              <h2 class="font-semibold text-gray-800">{{ p.name }}</h2>
              <p class="text-sm text-gray-500">{{ p.shortDescription }}</p>
            </div>
          </div>

          <!-- Menú acciones -->
          <div class="relative">
            <button @click="toggleMenu(p.id)" class="p-2 hover:bg-gray-100 rounded-full">
              <span class="material-symbols-outlined" translate="no">more_vert</span>
            </button>

            <div
              v-if="openMenu === p.id"
              class="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border z-10"
            >
              <button
                @click="editProduct(p.id)"
                class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Editar
              </button>
              <button
                @click="deleteProduct(p.id)"
                class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
              >
                Eliminar
              </button>
              <button
                @click="toggleVisibility(p.id)"
                class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                {{ p.hidden ? 'Mostrar en tienda' : 'Ocultar en tienda' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Panel Categorías -->
      <div
        v-if="activePanel === 'categories'"
        class="space-y-4 overflow-y-auto pr-2"
        style="height: 80vh"
      >
        <div
          v-for="c in categories"
          :key="c.id"
          class="flex items-center justify-between bg-white shadow rounded-lg p-4"
        >
          <span class="font-medium text-gray-800">{{ c.name }}</span>

          <!-- Menú acciones -->
          <div class="relative">
            <button @click="toggleMenuCategory(c.id)" class="p-2 hover:bg-gray-100 rounded-full">
              <span class="material-symbols-outlined" translate="no">more_vert</span>
            </button>

            <div
              v-if="openMenuCategory === c.id"
              class="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border z-10"
            >
              <button
                @click="editCategory(c.id)"
                class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Editar
              </button>
              <button
                @click="deleteCategory(c.id)"
                class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue"
import { useRouter, useRoute } from "vue-router"
import { mockedProducts } from "../../../main-page/interfaces/ProductModel"

const router = useRouter()
const route = useRoute()

const products = mockedProducts
const openMenu = ref<number | null>(null)
const openMenuCategory = ref<number | null>(null)
const activePanel = ref<"products" | "categories">(
  (route.query.panel as "products" | "categories") || "products"
)

// filtros
const filters = ref({
  name: "",
  brand: "",
  category: ""
})

const brands = ["IKEA", "Conforama", "Maisons du Monde"]

const categories = ref([
  { id: 1, name: "Sillas" },
  { id: 2, name: "Mesas" },
  { id: 3, name: "Armarios" },
  { id: 4, name: "Sofás" },
])

const filteredProducts = computed(() => {
  return products.value.filter((p) => {
    const byName = filters.value.name
      ? p.name.toLowerCase().includes(filters.value.name.toLowerCase())
      : true
    const byBrand = filters.value.brand ? p.brand === filters.value.brand : true
    const byCategory = filters.value.category
      ? p.categories?.some((c: any) => c.name === filters.value.category)
      : true
    return byName && byBrand && byCategory
  })
})

function applyFilters() {
  console.log("Aplicando filtros:", filters.value)
}
function clearFilters() {
  filters.value = { name: "", brand: "", category: "" }
}

watch(
  () => route.query.panel,
  (newPanel) => {
    if (newPanel === "products" || newPanel === "categories") {
      activePanel.value = newPanel
    }
  }
)

function setActivePanel(panel: "products" | "categories") {
  activePanel.value = panel
  router.push({ path: "/bo-panel", query: { panel } })
}

function toggleMenu(id: number) {
  openMenu.value = openMenu.value === id ? null : id
  openMenuCategory.value = null
}

function editProduct(id: number) {
  router.push(`/bo-panel/product/edit/${id}`)
}

function deleteProduct(id: number) {
  alert(`Producto ${id} eliminado (mock).`)
  openMenu.value = null
}

function toggleVisibility(id: number) {
  const product = products.value.find((p) => p.id === id)
  if (product) {
    product.hidden = !product.hidden
  }
  openMenu.value = null
}

function toggleMenuCategory(id: number) {
  openMenuCategory.value = openMenuCategory.value === id ? null : id
  openMenu.value = null
}

function editCategory(id: number) {
  router.push(`/bo-panel/category/edit/${id}`)
}

function deleteCategory(id: number) {
  const index = categories.value.findIndex((c) => c.id === id)
  if (index !== -1) {
    alert(`Categoría ${categories.value[index].name} eliminada (mock).`)
    categories.value.splice(index, 1)
  }
  openMenuCategory.value = null
}

function addItem() {
  if (activePanel.value === "products") {
    router.push("/bo-panel/product/new")
  } else {
    router.push("/bo-panel/category/new")
  }
}
</script>
