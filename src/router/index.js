import { createRouter, createWebHistory } from 'vue-router'
import MainCircle from '../views/MainCircle.vue'
import HomeContent from '../views/HomeContent.vue'
import ContactContent from '../views/ContactContent.vue'

const routes = [
  {
    path: '/',
    component: MainCircle,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeContent,
      },
      {
        path: 'contact',
        name: 'contact',
        component: ContactContent,
      }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
