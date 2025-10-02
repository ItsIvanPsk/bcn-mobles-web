<template>
  <header
    class="flex items-center justify-between px-4 py-2 bg-white border-b border-lightgray min-h-[60px]"
  >
    <!-- Logo -->
    <div class="flex-shrink-0">
      <a href="/">
        <img src="/logo.jpg" alt="BcnMobles Logo" class="h-10" />
      </a>
    </div>

    <!-- Navegación (pegada a la derecha) -->
    <nav class="flex items-center gap-6 relative ml-auto">
      <!-- Productos -->
      <div class="group relative">
        <button class="text-darkgray">Productos</button>
        <div
          class="absolute right-0 top-full hidden group-hover:block bg-white border border-lightgray rounded shadow-md min-w-[200px] z-50"
        >
          <ul>
            <li
              v-for="category in categories"
              :key="category.id"
              class="relative"
            >
              <!-- Cada categoría es su propio hover -->
              <div class="px-4 py-2 hover:bg-gray-100 cursor-pointer group/category">
                {{ category.name }}
                <!-- Submenú de marcas -->
                <ul
                  class="absolute right-full top-0 hidden group-hover/category:block bg-white border border-lightgray rounded shadow-md min-w-[200px]"
                >
                  <li
                    v-for="brand in category.brands"
                    :key="brand.id"
                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    @click="goToBrand(category, brand)"
                  >
                    {{ brand.name }}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <!-- Servicios -->
      <div class="group relative mr-4">
        <button class="text-darkgray">Servicios</button>
        <div
          class="absolute right-0 top-full hidden group-hover:block bg-white border border-lightgray rounded shadow-md min-w-[200px] z-50"
        >
          <ul>
            <li
              v-for="service in services"
              :key="service.id"
              class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              @click="goToService(service)"
            >
              {{ service.name }}
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- User, favorites & search -->
    <div class="flex items-center gap-2">
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
              <span
                class="material-symbols-outlined text-darkgray"
                translate="no"
                >close</span
              >
            </button>
          </div>
        </transition>

        <button
          v-if="!searchOpen"
          class="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100"
          @click="searchOpen = true"
          aria-label="Buscar"
        >
          <span class="material-symbols-outlined text-darkgray" translate="no"
            >search</span
          >
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
            <img
              :src="p.mainImage.src"
              :alt="p.mainImage.alt"
              class="w-14 h-10 object-cover rounded mr-2"
            />
            <div class="flex-1 min-w-0">
              <div class="text-sm font-semibold truncate">{{ p.name }}</div>
              <div class="text-xs text-mediumgray truncate">
                {{ p.shortDescription }}
              </div>
            </div>
          </div>
          <div v-if="loading" class="text-center py-2 text-xs text-mediumgray">
            Cargando más...
          </div>
          <div v-if="finished" class="text-center py-2 text-xs text-mediumgray">
            No hay más resultados
          </div>
        </div>
      </div>

      <!-- Favorites -->
      <button
        class="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100"
        aria-label="Favoritos"
        @click="router.push('/productos-favoritos')"
      >
        <span class="material-symbols-outlined text-darkgray" translate="no"
          >favorite</span
        >
      </button>

      <!-- User -->
      <button
        class="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100"
        aria-label="Usuario"
        @click="goUserPanel"
      >
        <span class="material-symbols-outlined text-darkgray" translate="no"
          >person</span
        >
      </button>

      <!-- Admin -->
      <button
        v-if="isUserAdmin"
        class="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100"
        aria-label="Admin"
        @click="router.push('/bo-panel')"
      >
        <span class="material-symbols-outlined text-darkgray" translate="no"
          >settings</span
        >
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { mockedProducts } from "../modules/main-page/interfaces/ProductModel";

const q = ref("");
const searchOpen = ref(false);
const router = useRouter();

import { useAuthStore } from '../store/auth';
const auth = useAuthStore();
const isUserAdmin = computed(() => auth.isFullAdmin);


const categories = ref<any[]>([]);
const services = ref<any[]>([]);

async function fetchHeaderData() {
  return new Promise<{ categories: any[]; services: any[] }>((resolve) => {
    setTimeout(() => {
      resolve({
        categories: [
          {
            id: 1,
            name: "Sillas",
            brands: [
              { id: "ikea", name: "Ikea" },
              { id: "conforama", name: "Conforama" },
              { id: "bcnmobles", name: "BCN Mobles" },
            ],
          },
          {
            id: 2,
            name: "Mesas",
            brands: [
              { id: "ikea", name: "Ikea" },
              { id: "conforama", name: "Conforama" },
              { id: "bcnmobles", name: "BCN Mobles" },
            ],
          },
        ],
        services: [
          { path: "presupuestos-a-medida", name: "Presupuestos a medida" },
          { path: "mudanzas", name: "Mudanzas" },
          { path: "muebles-a-medida", name: "Muebles a medida" },
        ],
      });
    }, 800);
  });
}

async function reloadHeaderData() {
  const data = await fetchHeaderData();
  categories.value = data.categories;
  services.value = data.services;
}

// Cargar al montar
onMounted(() => {
  reloadHeaderData();
});

// ------------------ Búsqueda productos ------------------ //
const products = mockedProducts;
const page = ref(1);
const pageSize = 5;
const loading = ref(false);
const finished = ref(false);
const paginatedProducts = ref<typeof products.value>([]);

const filteredProducts = computed(() =>
  products.value.filter((p) =>
    p.name.toLowerCase().includes(q.value.toLowerCase())
  )
);

const isLoggedIn = computed(() => {
  return !!localStorage.getItem("user");
});

// Ya importado y declarado arriba para el botón admin

function goUserPanel() {
  if (isLoggedIn.value) {
    router.push("/user-panel");
  } else {
    router.push("/iniciar-sesion");
  }
}

watch(q, () => {
  resetPagination();
  loadMore();
});

function resetPagination() {
  page.value = 1;
  paginatedProducts.value = [];
  finished.value = false;
}

function loadMore() {
  if (loading.value || finished.value) return;
  loading.value = true;

  setTimeout(() => {
    const start = (page.value - 1) * pageSize;
    const end = page.value * pageSize;
    const nextItems = filteredProducts.value.slice(start, end);

    if (nextItems.length) {
      paginatedProducts.value.push(...nextItems);
      page.value++;
    } else {
      finished.value = true;
    }

    loading.value = false;
  }, 500);
}

function handleScroll(e: Event) {
  const el = e.target as HTMLElement;
  if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
    loadMore();
  }
}

function closeSearch() {
  searchOpen.value = false;
  q.value = "";
  resetPagination();
}

function onBlur(evt: Event) {
  const related = (evt as FocusEvent).relatedTarget as HTMLElement | null;
  if (!related || !related.closest(".results-dropdown")) {
    closeSearch();
  }
}

function slugify(text: string) {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function goToProduct(p: { id: number; name: string }) {
  const slug = slugify(p.name);
  closeSearch();
  router.push(`/productos/${p.id}-${slug}`);
}

function goToBrand(category: any, brand: any) {
  router.push({
    path: "/productos",
    query: { category: category.name, brand: brand.name },
  });
}

function goToService(service: any) {
  router.push({
    path: `/servicios/${service.path}`,
  })
}
</script>
