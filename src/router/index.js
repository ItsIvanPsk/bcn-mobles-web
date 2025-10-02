import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../modules/main-page/main-page.page.vue'
import PageNotFound from '../pages/ErrorNotFound.vue'
import ProductList from '../modules/products/list/pages/product-list.page.vue'
import ProductDetail from '../modules/products/detail/pages/product-detail.page.vue'
import CallendlyPage from '../modules/callendly/callendly.page.vue'
import LegalAdvice from '../pages/legal/LegalAdvice.vue'
import Cookies from '../pages/legal/Cookies.vue'
import PrivacyPolice from '../pages/legal/PrivacyPolice.vue'
import FavoritesListPage from '../modules/favorites/favorites-list.page.vue'
import FAQs from '../pages/FAQs.vue'
import LoginPage from '../modules/auth/login/login.page.vue'
import RegisterPage from '../modules/auth/register/register.page.vue'
import BoMainPage from '../modules/back-office/bo-main-panel/pages/bo-main.page.vue'
import UserPanelPage from '../modules/auth/user-panel/user-panel.page.vue'
import BoEditProductPage from '../modules/back-office/bo-edit-product/bo-edit-product.page.vue'
import BoEditCategoryPage from '../modules/back-office/bo-edit-category/bo-edit-category.page.vue'
import ContactPage from '../modules/contact-page/contact.page.vue'

// 🔹 Nuevas páginas de servicios
import PresupuestosAMedida from '../pages/services/PresupuestosAMedida.vue'
import Mudanzas from '../pages/services/Mudanzas.vue'
import MueblesAMedida from '../pages/services/MueblesAMedida.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPage,
    },
    {
      path: '/productos',
      name: 'product-list',
      component: ProductList,
    },
    {
      path: '/productos/:id-:slug',
      name: 'product-detail',
      component: ProductDetail,
    },
    {
      path: '/productos-favoritos',
      name: 'productos-favoritos',
      component: FavoritesListPage,
    },
    {
      path: '/pedir-cita',
      name: 'reservations',
      component: CallendlyPage,
    },
    {
      path: '/aviso-legal',
      name: 'legal-advice',
      component: LegalAdvice,
    },
    {
      path: '/politica-de-privacidad',
      name: 'privacy',
      component: PrivacyPolice,
    },
    {
      path: '/acuerdo-de-cookies',
      name: 'cookies',
      component: Cookies,
    },
    {
      path: '/preguntas-frecuentes',
      name: 'faq',
      component: FAQs,
    },
    {
      path: '/iniciar-sesion',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/crear-cuenta',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/user-panel',
      name: 'user-panel',
      component: UserPanelPage,
    },
    {
      path: '/contacto',
      name: 'contact',
      component: ContactPage,
    },

    // 🔹 Servicios
    {
      path: '/servicios/presupuestos-a-medida',
      name: 'presupuestos-a-medida',
      component: PresupuestosAMedida,
    },
    {
      path: '/servicios/mudanzas',
      name: 'mudanzas',
      component: Mudanzas,
    },
    {
      path: '/servicios/muebles-a-medida',
      name: 'muebles-a-medida',
      component: MueblesAMedida,
    },

    // 🔹 Backoffice
    {
      path: '/bo-panel',
      name: 'bo-panel',
      component: BoMainPage,
    },
    {
      path: '/bo-panel/product/new',
      name: 'bo-new-product',
      component: BoEditProductPage,
    },
    {
      path: '/bo-panel/category/new',
      name: 'bo-new-category',
      component: BoEditCategoryPage,
    },
    {
      path: '/bo-panel/product/edit/:id',
      name: 'bo-edit-product',
      component: BoEditProductPage,
    },
    {
      path: '/bo-panel/category/edit/:id',
      name: 'bo-edit-category',
      component: BoEditCategoryPage,
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PageNotFound,
    },
  ],
})

import { useAuthStore } from '../store/auth';

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  const backofficeRoutes = [
    '/bo-panel',
    '/bo-panel/product/new',
    '/bo-panel/category/new',
    '/bo-panel/product/edit/:id',
    '/bo-panel/category/edit/:id',
  ];
  // Si la ruta es de backoffice y el usuario no es fullAdmin, redirige al login
  if (backofficeRoutes.some(r => to.path.startsWith(r.replace(':id', '')))) {
    if (!auth.isFullAdmin) {
      next('/iniciar-sesion');
      return;
    }
  }
  next();
});

export default router
