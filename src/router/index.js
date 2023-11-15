import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MainPage.vue')
    },
    {
      path: '/generator',
      name: 'generator',
      component: () => import('@/views/GeneratorPage.vue')
    },
    {
      path: '/tic-tac-toe',
      name: 'tic-tac-toe',
      component: () => import('@/views/TicTacToePage.vue')
    },
    {
      path: '/your-days-old',
      name: 'your-days-old',
      component: () => import('@/views/YourDaysOldPage.vue')
    }
  ]
})

export default router
