import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path:"/page1", name: "page1", component: ()=>import("@/views/Page1")},
  { path:"/page2", name: "page2", component: ()=>import("@/views/Page2")},
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
