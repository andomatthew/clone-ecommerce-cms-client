import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, '======')
  if (to.name !== 'LoginPage' && !localStorage.getItem('access_token')) {
    next({ name: 'LoginPage' })
  } else if (localStorage.getItem('access_token') && to.name === 'LoginPage') {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
