import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Floorman from '../views/Floorman.vue'
import SetupForm from '../views/SetupForm.vue'
import InfoDisplay from '../views/InfoDisplay.vue'
import GamePage from '../views/GamePage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home Page',
    component: Floorman,
  },
  {
    path: '/setup',
    name: 'Setup Page',
    component: SetupForm
  },
  {
    path: '/info',
    name: 'Info Page',
    component: InfoDisplay
  },
  {
    path: '/game',
    name: 'Game Page',
    component: GamePage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
