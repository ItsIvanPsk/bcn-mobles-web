<template>
    <section class="brands p-10 bg-white text-center">
        <div class="flex justify-center">
            <h3 class="text-2xl font-bold mb-6">Marcas disponibles en nuestra tienda</h3>
        </div>

        <div class="flex flex-wrap justify-center gap-6 brands-logos">
            <div
            v-for="brand in props.brands"
            :key="brand.id"
            class="brand-logo flex justify-center items-center w-[140px] h-[80px]"
            >
            <img :src="brand.logo" :alt="brand.name" class="max-h-[60px] max-w-[120px] object-contain" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{ brands: any[] }>();
</script>