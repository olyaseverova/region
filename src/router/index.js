import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/improvement',
        name: 'homeImprovement',
        component: () => import(/* webpackChunkName: "about" */ '../views/HomeImprovement.vue')
      },
      {
        path: '/home/booty',
        name: 'homeBooty',
        component: () => import(/* webpackChunkName: "about" */ '../views/HomeBooty.vue')
      }
    ]
  },
  {
    path: '/production',
    name: 'Production',
    component: () => import(/* webpackChunkName: "about" */ '../views/Production.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue')
  },
  {
    path: '/booty',
    name: 'Booty',
    component: () => import(/* webpackChunkName: "about" */ '../views/Booty.vue')
  },
  {
    path: '/improvement',
    name: 'Improvement',
    component: () => import(/* webpackChunkName: "about" */ '../views/Improvement.vue')
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
