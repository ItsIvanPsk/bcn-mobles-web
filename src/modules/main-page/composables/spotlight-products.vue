<template>
    <section class="p-6">
      <div class="flex justify-center">
        <h2 class="mb-4 font-medium">Productos destacados</h2>
      </div>
      <ProductGrid />
    </section>
</template>

<script setup lang="ts">
import ProductGrid from './product-grid.vue';
</script>