import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

// 引入导航守卫的代码
import "@/router/guard"

// 引入默认清除的样式
import '@/common/reset.css'

// 引入mock 只在 development 情况下引入mock
if (process.env.NODE_ENV === 'development') {
  require('@/mock/mock')
}

// 引入主题
import 'element-ui/lib/theme-chalk/index.css'

// 引入dark的css
import './assets/dark.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.config.productionTip = false

// --------- 判断 浏览器 主题 -------------
function applyTheme(isDark) {
  document.body.classList.toggle('dark', isDark)
}

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

applyTheme(mediaQuery.matches)

if (mediaQuery.addEventListener) {
  mediaQuery.addEventListener('change', (e) => {
    applyTheme(e.matches)
  })
} else if (mediaQuery.addListener) {
  mediaQuery.addListener((e) => {
    applyTheme(e.matches)
  })
}
// --------------------------------------

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
