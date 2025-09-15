<template>
    <section class="p-6">
      <div class="flex justify-center">
        <h2 class="mb-4 font-medium" style="font-size: 2rem;">Productos destacados de la temporada</h2>
      </div>
      <ProductGrid class="pb-7" />
    </section>
</template>

<script setup lang="ts">
import ProductGrid from './product-grid.vue';
</script>