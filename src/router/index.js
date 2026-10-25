import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import CategoryPage from '../pages/CategoryPage.vue'
import PrivacyPage from '../pages/PrivacyPage.vue'
import ImprintPage from '../pages/ImprintPage.vue'


const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/speisekarte/:slug',
      name: 'category',
      component: CategoryPage,
      props: true
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: PrivacyPage
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: ImprintPage
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }

    return { top: 0 }
  }
})

export default router
