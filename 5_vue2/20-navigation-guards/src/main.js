import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
// 在这里引入导航守卫
import "./router/guard"

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
