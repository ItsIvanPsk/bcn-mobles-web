<template>
  <section class="hero fit row items-center justify-center">
    <div class="col-12 text-center">
      <div class="date">{{ dateText }}</div>
      <h1 class="title q-mt-md">{{ title }}</h1>
      <div class="subtitle q-mt-sm">{{ subtitle }}</div>
      <q-btn class="cta q-mt-xl" no-caps outline rounded size="md" :label="cta" />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  dateText: string
  title: string
  subtitle: string
  cta: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)), var(--hero-bg);
  padding: 96px 16px;
  color: $color-white;
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
.cta {
  border: 2px solid $color-white;
  color: $color-white;
  padding: 0.9rem 1.6rem;
  font-weight: 600;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
}
</style>
