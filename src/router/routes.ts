import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../modules/main-page/main-page.page.vue') },
      {
        path: '/sobre-nosotros',
        component: () => import('../modules/about-us-page/about-us-page.page.vue'),
      },
      {
        path: '/contacto',
        component: () => import('../modules/contact-page/contact-page.page.vue'),
      },
      {
        path: '/productos',
        component: () => import('../modules/products/list/pages/product-list.page.vue'),
      },
      {
        path: '/productos/:id-:slug',
        component: () => import('../modules/products/detail/pages/product-detail.page.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
