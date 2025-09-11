<template>
  <section class="relative w-full h-[500px] overflow-hidden">
    <!-- Slides -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="absolute inset-0 transition-opacity duration-700"
      :class="{ 'opacity-100 z-10': currentIndex === index, 'opacity-0 z-0': currentIndex !== index }"
    >
      <img
        :src="slide.image"
        alt="hero"
        class="w-full h-full object-cover"
      />

      <!-- Overlay + content -->
      <div
        class="absolute inset-0 flex flex-col justify-center items-start px-8"
        :class="slide.overlayClass ?? 'bg-black/40 text-white'"
      >
        <div :class="slide.wrapperClass">
          <h2 :class="slide.titleClass ?? 'text-3xl font-bold mb-2'">
            {{ slide.title }}
          </h2>
          <p v-if="slide.subtitle" :class="slide.subtitleClass ?? 'text-lg mb-4'">
            {{ slide.subtitle }}
          </p>
          <button
            v-if="slide.cta"
            @click="slide.action && slide.action()"
            :class="slide.ctaClass ?? 'bg-primary text-white px-4 py-2 rounded hover:bg-primary-2 transition'"
          >
            {{ slide.cta }}
          </button>
          <!-- Contenido totalmente custom si se define -->
          <component v-if="slide.customContent" :is="slide.customContent" />
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div v-if="slides.length > 1" class="absolute inset-0 flex items-center justify-between px-4">
      <button
        class="bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60"
        @click="prevSlide"
      >
        <span class="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        class="bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60"
        @click="nextSlide"
      >
        <span class="material-symbols-outlined">chevron_right</span>
      </button>
    </div>

    <!-- Dots -->
    <div v-if="slides.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(slide, i) in slides"
        :key="i"
        class="w-3 h-3 rounded-full"
        :class="i === currentIndex ? 'bg-white' : 'bg-gray-400/70'"
        @click="goToSlide(i)"
      ></button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, defineComponent } from 'vue'

interface Slide {
  image: string
  title: string
  subtitle?: string
  cta?: string
  action?: () => void

  // custom styles
  overlayClass?: string
  wrapperClass?: string
  titleClass?: string
  subtitleClass?: string
  ctaClass?: string

  // componente arbitrario
  customContent?: ReturnType<typeof defineComponent>
}

const props = defineProps<{
  slides: Slide[]
  interval?: number
}>()

const currentIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length
}
function prevSlide() {
  currentIndex.value =
    (currentIndex.value - 1 + props.slides.length) % props.slides.length
}
function goToSlide(i: number) {
  currentIndex.value = i
}

function startTimer() {
  if (props.slides.length > 1 && props.interval) {
    timer = setInterval(() => {
      nextSlide()
    }, props.interval)
  }
}
function stopTimer() {
  if (timer) clearInterval(timer)
}

onMounted(startTimer)
onBeforeUnmount(stopTimer)

watch(
  () => props.interval,
  () => {
    stopTimer()
    startTimer()
  }
)
</script>
