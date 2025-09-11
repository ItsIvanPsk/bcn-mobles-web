<template>
  <section class="hero fit row items-center justify-center">
    <div class="col-12 text-center">
      <div class="date">{{ props.dateText }}</div>
      <h1 class="title q-mt-md">{{ props.title }}</h1>
      <div class="subtitle q-mt-sm">{{ props.subtitle }}</div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  dateText: string
  title: string
  subtitle: string
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.hero {
  background: #c34b16;
  padding: 96px 16px;
  color: #fff;
}
.date {
  font-size: 0.95rem;
  letter-spacing: 0.15rem;
  opacity: 0.95;
}
.title {
  font-size: clamp(2rem, 6vw, 4.5rem);
  font-weight: 800;
  letter-spacing: 0.12rem;
}
.subtitle {
  font-size: clamp(1.2rem, 3vw, 2rem);
  opacity: 0.95;
}
</style>
