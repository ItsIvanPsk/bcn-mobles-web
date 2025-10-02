<template>
  <div class="w-full">
    <BcnHero
      :slides="[
        {
          image: '/shop/hero-image.jpg',
          title: 'Presupuestos a medida',
          cta: 'Leer más',
          ctaClass: 'bg-[#c34b16] hover:bg-[#c44c17] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300',
          action: () => router.push('/pedir-cita'),
          wrapperClass: 'text-center max-w-lg mx-auto',
        },
        {
          image: '/shop/hero-image-2.jpg',
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

    <div v-if="showDialog" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center animate-fade-in">
        <h2 class="text-2xl font-bold text-[#c34b16] mb-2">¡Suscríbete a nuestra newsletter gratuita!</h2>
          <p class="mb-4 text-gray-700">Recibe ofertas, novedades y consejos exclusivos directamente en tu correo.</p>
          <form @submit.prevent="handleSubscribe">
            <input v-model="email" type="email" required placeholder="Tu email" class="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#c34b16]" />
            <button type="submit" class="w-full bg-[#c34b16] text-white py-2 px-4 rounded-lg hover:bg-[#f79e78] transition font-semibold">Suscribirme</button>
              <p class="mt-2 text-xs text-gray-500">
                Al suscribirte aceptas los <router-link to="/legal/newsletter-terms" class="text-[#c34b16] underline">Términos y Condiciones</router-link> de la newsletter.
              </p>
          </form>
        <button @click="closeDialog" class="mt-4 text-sm text-gray-500 hover:text-[#c34b16]">No, gracias</button>
      </div>
    </div>

    <WhoWeAre />

    <MovingService />
    
    <CustomFurniture />
    
    <RelatedCompanies :brands="brands" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useNewsletterDialog } from '../../composables/useNewsletterDialog';
import { useRouter } from 'vue-router'
import BcnHero from '../../components/BcnHero.vue'  
import WhoWeAre from './composables/who-we-are.vue'
import RelatedCompanies from './composables/related-companies.vue'
import SpotlightProducts from './composables/spotlight-products.vue'
import MovingService from './composables/moving-service.vue'
import CustomFurniture from './composables/custom-furniture.vue'
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
const { showDialog, checkAndPrompt, closeDialog, subscribe } = useNewsletterDialog();
const email = ref('');
function handleSubscribe() {
  subscribe(email.value);
  email.value = '';
}
onMounted(() => {
  checkAndPrompt();
});
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
