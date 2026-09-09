import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routerMap' // 具体的路由表

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
