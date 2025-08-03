import { createRouter, createWebHistory } from 'vue-router'
import MainCircle from '../views/MainCircle.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainCircle,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
