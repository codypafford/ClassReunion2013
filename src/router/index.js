import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '../components/FrontPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FrontPage
    }
  ]
})

export default router