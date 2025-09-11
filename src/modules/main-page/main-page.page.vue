<template>
  <div class="w-full">
    <BcnHero
      :slides="[
        {
          image: '/public/shop/hero-image.jpg',
          title: 'Presupuestos a medida',
          cta: 'Leer más',
          ctaClass: 'bg-[#c34b16] hover:bg-[#c44c17] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300',
          action: () => router.push('/productos'),
          wrapperClass: 'text-center max-w-lg mx-auto',
        },
        {
          image: '/public/shop/hero-image-2.jpg',
          title: 'Nuevos productos',
          cta: 'Descubrir',
          ctaClass: 'bg-[#c34b16] hover:bg-[#c44c17] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300',
          action: () => router.push('/productos'),
          wrapperClass: 'text-center max-w-lg mx-auto',
        }
      ]"
      :interval="7000"
    />

    <SpotlightProducts />

    <WhoWeAre />
    
    <RelatedCompanies :brands="brands" />
  </div>
</template>

<script setup lang="ts">
import BcnHero from '../../components/BcnHero.vue'  
import { useRouter } from 'vue-router'
import WhoWeAre from './composables/who-we-are.vue'
import RelatedCompanies from './composables/related-companies.vue'
import SpotlightProducts from './composables/spotlight-products.vue'
const router = useRouter()
const brands = [
  {
    id: 1,
    name: 'Nike',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
  },
  {
    id: 2,
    name: 'Adidas',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
  },
  {
    id: 3,
    name: 'Reebok',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Reebok_2019_logo.svg',
  },
]
</script>

<style scoped lang="scss">
.brands-logos .brand-logo {
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
}
</style>
