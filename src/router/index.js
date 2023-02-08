import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '../components/FrontPage.vue'
import AboutPage from '../components/AboutPage.vue'
import YearbookPhotos from '../components/YearbookPhotos.vue'
import InLovingMemory from '../components/InLovingMemory.vue'
import Memories2013 from '../components/Memories2013.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FrontPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/yearbook',
      name: 'yearbook',
      component: YearbookPhotos
    },
    {
      path: '/memories2013',
      name: 'memories2013',
      component: Memories2013
    },
    {
      path: '/inLovingMemory',
      name: 'inlovingmemory',
      component: InLovingMemory
    }
  ]
})

export default router
