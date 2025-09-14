<template>
  <section class="min-h-screen bg-gray-50 py-12 px-6">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
      <!-- Columna 1 (detalle del producto) -->
      <div class="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 space-y-12">
        <!-- Header -->
        <div class="flex items-center justify-between border-b pb-4">
          <h1 class="text-2xl font-bold">
            {{ isNew ? 'Crear Producto' : 'Editar Producto' }}
          </h1>
          <div class="flex gap-4">
            <button
              v-if="!isNew"
              @click="goToPublic"
              class="text-sm text-blue-600 hover:underline"
            >
              🔗 Ir a ver el producto
            </button>
            <button
              @click="goBack"
              class="text-sm text-[#c34b16] hover:underline"
            >
              ← Volver a Productos
            </button>
          </div>
        </div>

        <!-- Nombre -->
        <section>
          <h2 class="text-xl font-semibold mb-1">Nombre</h2>
          <input v-model="product.name" class="w-full min-h-[3rem] max-h-[3rem] border rounded px-3 py-2" />
        </section>

        <!-- Descripción corta -->
        <section>
          <h2 class="text-xl font-semibold mb-1 ">Descripción corta</h2>
          <input v-model="product.shortDescription" class="w-full min-h-[3rem] max-h-[3rem] border rounded px-3 py-2" />
        </section>

        <!-- Descripción -->
        <section>
          <h2 class="text-xl font-semibold mb-1">Descripción</h2>
          <textarea v-model="product.description" class="w-full min-h-[7rem] max-h-[7rem] border rounded px-3 py-2"></textarea>
        </section>

        <!-- Precio -->
        <section>
          <h2 class="text-xl font-semibold mb-1">Precio (€)</h2>
          <input type="number" v-model="product.price" class="w-full min-h-[3rem] max-h-[3rem] border rounded px-3 py-2" />
        </section>

        <!-- Guardar -->    
        <div class="flex gap-4">
          <button
            @click="save"
            class="bg-[#c34b16] text-white px-6 py-2 rounded hover:bg-[#f79e78]"
          >
            {{ isNew ? 'Crear producto' : 'Guardar cambios' }}
          </button>
        </div>
      </div>

      <!-- Columna 2 -->
      <div class="flex flex-col gap-10 ">
        <!-- Categorías -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Categorías</h2>
          <div class="flex gap-2">
            <select v-model="newCategoryId" lang="en" class="border rounded px-3 py-2 flex-1">
              <option disabled value="">Selecciona una categoría</option>
              <option v-for="c in categories" :key="c.id" :value="c.id">
                {{ c.name }}
              </option>
            </select>
            <button
              @click="addCategory"
              class="bg-gray-200 px-3 py-1 rounded text-sm"
            >
              Añadir
            </button>
          </div>
          <div class="flex flex-wrap gap-2 mt-3 min-h-[8rem] max-h-[8rem] overflow-y-auto pr-2">
            <span
              v-for="(cat, i) in product.categories"
              :key="cat.id"
              class="px-2 py-1 bg-gray-100 rounded text-sm flex items-center gap-1 min-h-[2.5rem] max-h-[2.5rem]"
            >
              {{ cat.name }}
              <button @click="removeCategory(i)" class="text-red-500 text-xs">✕</button>
            </span>
          </div>
        </div>

        <!-- Tamaños -->
        <div class="bg-white rounded-xl min-h-[20rem] max-h-[20rem] shadow-lg p-6">
            <h2 class="text-xl font-semibold mb-4">Tamaños</h2>
            <div class="flex gap-2">
                <input
                    v-model="newSize"
                    lang="en"
                    placeholder="Añadir tamaño..."
                    class="border rounded px-3 py-2 flex-1"
                    autocomplete="off"
                    autocorrect="off"
                    spellcheck="false"
                />
                <button
                    type="button"
                    @click="addSize"
                    class="bg-gray-200 px-3 py-1 rounded text-sm"
                >
                Añadir
                </button>
            </div>

            <!-- scroll interno -->
            <div class="flex flex-wrap gap-2 mt-3 min-h-[6rem] max-h-[12rem] overflow-y-auto pr-2">
                <span
                    v-for="s in product.sizes"
                    :key="s"
                    class="px-2 py-1 bg-gray-100 min-h-[2.5rem] max-h-[2.5rem] rounded text-sm flex items-center gap-1"
                >
                {{ s }}
                <button
                    type="button"
                    @click.stop="removeSizeByValue(s)"
                    class="text-red-500 text-xs"
                    aria-label="Eliminar tamaño"
                    title="Eliminar"
                >
                    ✕
                </button>
                </span>
            </div>
        </div>

        <!-- Colores -->
        <div class="bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Colores</h2>
          <div class="flex gap-2">
            <input
              v-model="newColorName"
              lang="en"
              placeholder="Nombre color"
              class="border rounded px-3 py-2 flex-1"
            />
            <input type="color" v-model="newColorHex" lang="en" class="w-12 h-10 border rounded" />
            <button
              @click="addColor"
              class="bg-gray-200 px-3 py-1 rounded text-sm"
            >
              Añadir
            </button>
          </div>
          <div class="flex flex-col gap-2 mt-3 min-h-[8rem] max-h-[8rem] overflow-y-auto pr-2">
            <div
              v-for="(c, i) in product.colors"
              :key="i"
              class="flex items-center gap-2 px-2 py-1 border rounded min-h-[2.5rem] max-h-[2.5rem]"
            >
              <div :style="{ backgroundColor: c.color }" class="w-6 h-6 rounded"></div>
              <span>{{ c.name }}</span>
              <button @click="removeColor(i)" class="text-red-500 text-xs">✕</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección imágenes fuera del grid principal -->
    <div class="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Imagen principal -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Imagen principal</h2>
        <input
          v-model="product.mainImage.src"
          lang="en"
          placeholder="URL de la imagen"
          class="w-full border rounded px-3 py-2 mb-2"
        />
        <input
          v-model="product.mainImage.alt"
          lang="en"
          placeholder="Texto alternativo"
          class="w-full border rounded px-3 py-2 mb-2"
        />
        <input type="file" lang="en" @change="onMainImageUpload" />
        <img
          v-if="product.mainImage.src"
          :src="product.mainImage.src"
          :alt="product.mainImage.alt"
          class="w-32 h-32 object-cover mt-2 rounded"
        />
      </div>

      <!-- Galería -->
      <div class="bg-white rounded-xl shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Galería</h2>
        <div class="space-y-2 min-h-[20rem] max-h-[20rem] overflow-y-auto pr-2">
          <div
            v-for="(img, i) in product.images"
            :key="i"
            class="flex items-center gap-2"
          >
            <input
              v-model="product.images[i].src"
              lang="en"
              class="flex-1 border rounded px-3 py-2"
              placeholder="URL"
            />
            <input
              v-model="product.images[i].alt"
              lang="en"
              class="flex-1 border rounded px-3 py-2"
              placeholder="Texto alternativo"
            />
            <button
              @click="removeImage(i)"
              class="text-red-600 hover:underline text-sm"
            >
              Eliminar
            </button>
          </div>
        </div>

        <div class="mt-3 flex gap-2">
          <input type="file" lang="en" @change="onGalleryUpload" />
          <button
            @click="addImage"
            class="bg-gray-200 px-3 py-1 rounded text-sm"
          >
            + Añadir por URL
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { mockedProducts } from "../../main-page/interfaces/ProductModel"

const route = useRoute()
const router = useRouter()

const categories = [
  { id: 1, name: "Sillas" },
  { id: 2, name: "Mesas" },
  { id: 3, name: "Armarios" },
  { id: 4, name: "Sofás" },
]

const isNew = route.path.includes("/new")
const productId = Number(route.params.id)
const product = ref<any>(null)

if (isNew) {
  product.value = {
    id: Date.now(),
    name: "",
    shortDescription: "",
    description: "",
    mainImage: { src: "", alt: "" },
    images: [],
    categories: [],
    price: 0,
    sizes: [],
    colors: [],
  }
} else {
  const found = mockedProducts.value.find((p) => p.id === productId) || null
  if (found) {
    product.value = {
      ...found,
      categories: Array.isArray(found.categories) ? [...found.categories] : [],
      sizes: Array.isArray(found.sizes) ? [...found.sizes] : [],
      colors: Array.isArray(found.colors) ? [...found.colors] : [],
      mainImage: found.mainImage ?? { src: "", alt: "" },
      images: Array.isArray(found.images) ? [...found.images] : [],
    }
  }
}

// ---------------------- CATEGORÍAS ----------------------
const newCategoryId = ref("")
function addCategory() {
  const cat = categories.find(c => c.id === Number(newCategoryId.value))
  if (cat && !product.value.categories.some(c => c.id === cat.id)) {
    product.value.categories.push({ ...cat })
    newCategoryId.value = ""
  }
}
function removeCategory(i: number) {
  product.value.categories.splice(i, 1)
}

// ---------------------- IMÁGENES ----------------------
function onMainImageUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    product.value.mainImage.src = URL.createObjectURL(file)
    product.value.mainImage.alt = file.name
  }
}
function onGalleryUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    product.value.images.push({ src: URL.createObjectURL(file), alt: file.name })
  }
}
function addImage() {
  product.value.images.push({ src: "", alt: "" })
}
function removeImage(i: number) {
  product.value.images.splice(i, 1)
}

// ---------------------- TAMAÑOS ----------------------
const newSize = ref("")

function addSize() {
  const size = newSize.value.trim()
  if (!size) return
  if (!product.value.sizes.includes(size)) {
    product.value.sizes = [...product.value.sizes, size]
  }
  newSize.value = ""
}

function removeSizeByValue(size: string) {
  product.value.sizes = product.value.sizes.filter(s => s !== size)
}

// ---------------------- COLORES ----------------------
const newColorName = ref("")
const newColorHex = ref("#000000")
function addColor() {
  const name = newColorName.value.trim()
  if (name) {
    product.value.colors.push({ name, color: newColorHex.value })
    newColorName.value = ""
    newColorHex.value = "#000000"
  }
}
function removeColor(i: number) {
  product.value.colors.splice(i, 1)
}

// ---------------------- GUARDAR ----------------------
function save() {
  if (isNew) {
    mockedProducts.value.push({ ...product.value })
    alert("Producto creado (mock).")
  } else {
    const index = mockedProducts.value.findIndex((p) => p.id === product.value.id)
    if (index !== -1) {
      mockedProducts.value[index] = { ...product.value }
    }
    alert("Producto actualizado (mock).")
  }
  router.push({ path: "/bo-panel", query: { panel: "products" } })
}

function goBack() {
  router.push({ path: "/bo-panel", query: { panel: "products" } })
}

function goToPublic() {
  if (!product.value) return
  const slug = toSlug(product.value.name)
  router.push(`/productos/${product.value.id}-${slug}`)
}

function toSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}
</script>
