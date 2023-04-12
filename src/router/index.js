import Vue from 'vue'
import VueRouter from 'vue-router'

import Buscar from '../views/Buscar.vue';


 

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/buscar',
    name: 'Buscar',
    component: Buscar
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: Favoritos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
