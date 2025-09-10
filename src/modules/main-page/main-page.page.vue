<template>
  <q-page class="q-pa-none">
    <BcnHero
      date-text="02.09 / 10.09"
      title="LIQUIDACIÓN STOCKS"
      subtitle="hasta -50%"
      cta="COMPRAR AHORA"
    />

    <section class="q-pa-md">
      <div class="row justify-center">
        <h3 class="q-mb-md text-weight-medium">Destacados Liquidación Stocks</h3>
      </div>
      <ProductGrid />
    </section>

    <section class="why-us q-pa-xl q-mt-xl">
      <div class="row items-center q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <q-img
            src="https://via.placeholder.com/600x400"
            alt="Por qué nosotros"
            ratio="16/9"
            class="rounded-borders shadow-2"
          />
        </div>

        <div class="col-12 col-md-6">
          <h3 class="text-h4 text-weight-bold q-mb-md">¿Por qué elegirnos?</h3>
          <p class="text-body1 q-mb-sm">
            Somos una empresa comprometida con la <strong>calidad</strong> y la
            <strong>satisfacción del cliente</strong>. Ofrecemos productos únicos, cuidadosamente
            seleccionados para garantizar la mejor experiencia de compra.
          </p>
          <p class="text-body2 text-grey-7">
            Nuestro equipo está siempre disponible para ayudarte, y trabajamos con proveedores de
            confianza para que recibas lo mejor.
          </p>
          <q-btn label="Conócenos más" color="primary" class="q-mt-md" no-caps unelevated />
        </div>
      </div>
    </section>

    <section class="brands q-pa-xl">
      <div class="row justify-center">
        <h3 class="text-h4 text-weight-bold q-mb-lg">Marcas disponibles en nuestra tienda</h3>
      </div>

      <div class="row justify-center q-gutter-lg brands-logos">
        <div v-for="brand in brands" :key="brand.id" class="brand-logo q-ml-xl">
          <q-img :src="brand.logo" :alt="brand.name" contain />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import ProductGrid from './composables/product-grid.vue'
import BcnHero from 'src/components/BcnHero.vue'

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
.why-us {
  background: #f5f5f5;
  width: 100%;
}
.brands {
  background: #fff;
  width: 100%;
  text-align: center;
}

.brands-logos {
  flex-wrap: wrap;
}

.brand-logo {
  width: 140px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }

  img {
    max-height: 60px;
    max-width: 120px;
    object-fit: contain;
  }
}
</style>
