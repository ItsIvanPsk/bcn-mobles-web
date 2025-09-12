import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../modules/main-page/main-page.page.vue'
import PageNotFound from '../pages/ErrorNotFound.vue'
import ProductList from '../modules/products/list/pages/product-list.page.vue'
import ProductDetail from '../modules/products/detail/pages/product-detail.page.vue'
import CallendlyPage from '../modules/callendly/pages/callendly.page.vue'
import LegalAdvice from '../pages/LegalAdvice.vue'
import Cookies from '../pages/Cookies.vue'
import PrivacyPolice from '../pages/PrivacyPolice.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/:pathMatch(.*)*', 
      name: 'not-found', 
      component: PageNotFound 
    }, 
    {
      path: '/',
      name: 'main-page',
      component: MainPage,
    },
    {
      path: '/productos',
      name: 'product-list',
      component: ProductList
    },
    {
      path: '/productos/:id-:slug',
      name: 'product-detail',
      component: ProductDetail
    },
    {
      path: '/pedir-cita',
      name: 'reservations',
      component: CallendlyPage
    },
    {
      path: '/aviso-legal',
      name: 'legal-advice',
      component: LegalAdvice
    },
    {
      path: '/politica-de-privacidad',
      name: 'privacity',
      component: PrivacyPolice
    },
    {
      path: '/acuerdo-de-cookies',
      name: 'cookies',
      component: Cookies
    }
  ]
})

export default router
