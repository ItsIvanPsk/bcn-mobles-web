<template>
  <div class="layout">
    <header class="header">
      <BcnHeader />
    </header>
    <main class="main-container">
      <RouterView />
    </main>
    <BcnFooter />
  </div>
</template>

<script setup>
import BcnFooter from './components/BcnFooter.vue';
import BcnHeader from './components/BcnHeader.vue';

</script>
