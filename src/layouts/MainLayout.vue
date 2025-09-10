<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-dark header-shadow">
      <BcnHeader />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white text-dark">
      <BcnFooter />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import BcnFooter from 'src/components/BcnFooter.vue'
import BcnHeader from 'src/components/BcnHeader.vue'
</script>

<style lang="scss" scoped>
.header-shadow {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}
</style>
