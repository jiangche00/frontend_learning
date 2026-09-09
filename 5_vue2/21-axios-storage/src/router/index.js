import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: "/localstorage", name: "localstorage", component: ()=>import("@/views/LocalStorage")}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router