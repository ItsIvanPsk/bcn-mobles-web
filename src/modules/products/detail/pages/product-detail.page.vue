<template>
  <div class="q-pa-md">
    <q-card v-if="product" flat bordered class="q-pa-md">
      <q-img :src="product.image" :ratio="16 / 9" class="rounded-borders">
        <q-btn
          class="absolute-top-right q-ma-sm"
          flat
          round
          dense
          :icon="isFavorite(product.id) ? 'favorite' : 'favorite_border'"
          color="red"
          @click="toggleFavorite(product.id)"
        />
      </q-img>

      <q-card-section>
        <div class="text-h5">{{ product.name }}</div>
        <div class="text-subtitle2 text-grey-7 q-mt-xs">{{ product.category }}</div>
        <div class="q-mt-md">{{ product.shortDescription }}</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Volver a productos"
          color="primary"
          @click="$router.push('/productos')"
        />
      </q-card-actions>
    </q-card>

    <div v-else class="text-center q-pa-lg">
      <q-spinner color="primary" size="2em" />
      <div class="q-mt-md">Cargando producto...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { mockedProducts } from 'src/modules/main-page/interfaces/ProductModel'
import { ref, computed, onMounted } from 'vue'
import { useMeta } from 'quasar'

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

useMeta(() => {
  if (!product.value) return {}
  return {
    title: `${product.value.name} | Mi Tienda de Muebles`,
    meta: {
      description: { name: 'description', content: product.value.shortDescription },
      ogTitle: { property: 'og:title', content: product.value.name },
      ogDescription: { property: 'og:description', content: product.value.shortDescription },
      ogImage: { property: 'og:image', content: product.value.image },
    },
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
</script>
