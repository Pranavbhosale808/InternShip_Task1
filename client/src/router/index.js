import { createRouter, createWebHistory } from 'vue-router'
import Signup from '@/views/SignupView.vue'
import Login from '@/views/Login.vue'
import Home from '@/views/HomeView.vue'
import AfterHome from '@/views/HomeAfter.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/afterhome',
      name: 'afterhome',
      component: AfterHome
    },
  ]
})

export default router
