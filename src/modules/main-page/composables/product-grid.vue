<template>
  <div class="q-gutter-md row justify-center items-start">
    <q-card
      v-for="p in products"
      :key="p.id"
      flat
      bordered
      class="col-12 col-sm-6 col-md-3 product-card"
    >
      <!-- Imagen -->
      <q-img :src="p.image" :ratio="1" loading="lazy">
        <!-- Botón de favorito arriba a la derecha -->
      </q-img>

      <q-btn
        class="absolute-top-right q-ma-sm"
        flat
        round
        dense
        :icon="isFavorite(p.id) ? 'favorite' : 'favorite_border'"
        color="red"
        @click="toggleFavorite(p.id)"
      />

      <!-- Info -->
      <q-card-section>
        <div class="text-subtitle1 ellipsis">{{ p.name }}</div>
        <div class="text-grey-7 ellipsis">{{ p.category }}</div>
      </q-card-section>

      <!-- Botón ver más -->
      <q-card-actions align="right">
        <q-btn flat color="primary" label="Ver más" @click="viewMore(p.id)" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { mainPageMockedProduct } from '../interfaces/ProductModel'

const products = mainPageMockedProduct

// favoritos persistidos en localStorage
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

function viewMore(id: number) {
  console.log(id)
}
</script>

<style scoped lang="scss">
.product-card {
  position: relative;
}
</style>
