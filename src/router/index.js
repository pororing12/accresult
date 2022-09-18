import { createRouter, createWebHistory } from 'vue-router'
import racingClub from '@/router/racingClub/index'

const routes = [
  ...racingClub
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
