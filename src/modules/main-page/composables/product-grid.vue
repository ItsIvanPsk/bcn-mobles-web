<template>
  <div class="products-grid">
    <div
      v-for="p in products"
      :key="p.id"
      class="product-card"
    >
      <div class="image-wrapper">
        <img :src="p.mainImage" :alt="p.name" loading="lazy" />
        <button
          class="favorite-btn"
          @click="toggleFavorite(p.id)"
        >
          <span v-if="isFavorite(p.id)">❤️</span>
          <span v-else>🤍</span>
        </button>
      </div>

      <div class="info">
        <div class="title">{{ p.name }}</div>
        <div class="category">{{ p.category }}</div>
      </div>

      <div class="actions">
        <button @click="goToProduct(p)">Ver más</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { mockedProducts } from '../interfaces/ProductModel'
import { onMounted, ref } from 'vue'

const router = useRouter()
const products = mockedProducts

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
  router.push(`/productos/${p.id}-${slug}`)
}
</script>

<style scoped lang="scss">
.products-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.product-card {
  position: relative;
  width: 100%;
  max-width: 280px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
}

.image-wrapper {
  position: relative;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-bottom: 1px solid #eee;
  }
}

.favorite-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  transition: background 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }
}

.info {
  padding: 0.75rem 1rem;

  .title {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .category {
    font-size: 0.875rem;
    color: #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.actions {
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem 1rem 1rem;

  button {
    background: #c34b16;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;
    transition: background 0.2s ease;

    &:hover {
      background: #ff9264;
    }
  }
}
</style>
