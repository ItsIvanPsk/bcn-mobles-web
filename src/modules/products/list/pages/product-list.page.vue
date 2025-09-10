<template>
  <q-page class="q-pa-none">
    <BcnHero
      date-text="02.09 / 10.09"
      title="LIQUIDACIÓN STOCKS"
      subtitle="hasta -50%"
      cta="COMPRAR AHORA"
    />

    <section class="q-pa-md">
      <h6 class="q-mb-md text-weight-medium">Destacados Liquidación Stocks</h6>
      <ProductGrid />
    </section>
  </q-page>
</template>

<script setup lang="ts">
import ProductGrid from 'src/modules/main-page/composables/product-grid.vue'
import BcnHero from 'src/components/BcnHero.vue'
</script>
