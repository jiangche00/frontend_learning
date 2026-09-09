import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 单页面应用
// 只有一个html页面的应用，其中的'页面切换'，实际上是由router做的操作
// 比如后台管理系统，就是比较经典的单页面应用，其中不同的功能选项卡子页面啥的，是通过路由功能完成的

// 多页面比如大型的电商网站，一般会有多个域名对应，每个域名对应一个主页

// Vue擅长于对单页面应用进行开发

new Vue({

  // render是个缩写，原函数写法为
  // render: function(createEelment){return createElement(App)}
  // createElement功能: 把组件创建出来，并且把组件中的标签内容渲染到页面中

  render: h => h(App)
}).$mount('#app')
