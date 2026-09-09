# 27-vuex-demo

## versions of vuex
for vue2.x, need to use vuex 3. Now, for vue3.x need to use vuex 4

## Brief Definition
用于集中管理数据，就是让一些数据统一管理，然后不同的组件，可以存取

作用: 解决复杂组件间传值的问题

简单传值: 父子传值，子父传值

复杂传值: 多层父子传值，多层子父传值,同级之间传值

实际生产中，一般都是比较复杂的项目，所以基本上都会使用vuex

脚手架安装时，在```@/store/index.js```里面定义了和vuex相关的
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
```
如果后期用```npm install```安装，需要自己手动创建编写```@/store/index.js```相关的配置

state里面定义共享数据
```javascript
  state: {
    msg: "我是共享的数据",
    gender: 1,
  },
```

getters里面定义类似于computed的，对于state数据的计算，供其他组件使用
```javascript
  getters: {
    sex(state,getters) {
      return state.gender === 1 ? "男" : "女";
    }
  },
```

```javascript
<script>
    export default {
        created() {
            console.log(this.$store.state.msg);
        },
        computed: {
            msg() {
                return this.$store.getters.sex;
            }
        }
    }
</script>
```

从vuex里面获取的数据，也可在组件中使用计算属性(computed)直接进行逻辑运算，不使用getter。然后在template里面直接使用该计算属性,

getter 和 computed处理vuex数据目的，是为了避免使用者在组件的template里面写过多的逻辑运算

在组件中，同一个data里面定义的数据不能相互调用使用，例如data里面定义了aa: 123, 再定义bb: this.aa，是不行的。

在组件中，同一个computed里面定义的计算属性可以相互调用使用

在组件中，同一个methods里面定义的函数可以相互调用使用

对于vuex，在getters中定义的计算属性可以相互调用使用，利用getters形参，如下
```javascript
  getters: {
    sex(state,getters) {
      return state.gender === 1 ? "男" : "女" + getters.title;
    }
    title() {
      return "aaaaa";
    }
  },
```

计算属性和getters原则上不能传参，但是可以tweak，让return一个带参数的函数即可

```javascript
  getters: {
    exchange(state) {
      return (ratio) => {
        return state.totalSum / ratio;
      }
    }
  },
```

```javascript
  computed: {
    mei() {
        return this.$store.getters.exchange(7);
    }
  }
```

在vuex里面修改数据唯一的办法是提交mutation, mutation方法中第一个参数是所有的state，第二个参数是提交mutation时传入过来的参数. 如果想传多个参数，则可以通过传一个对象的方式，将所有参数都放到对象里面

```javascript
  mutations: {
    buyKeyBoard(state){
      state.totalSum -= 50;
    },
    buyMonitor(state) {
      state.totalSum -= 500;
    },
    cost(state,money) {
      state.totalSum -= money;
    },
    cost2(state,obj) {
      state.totalSum += obj.a * obj.b;
    }
  },
```

在组件的methods调用时，使用commit
```javascript
  methods: {
      buyKeyBoard() {
          this.$store.commit("buyKeyBoard");
      },
      buyMonitor() {
          this.$store.commit("buyMonitor");
      },
      cost(money) {
        this.$store.commit("cost", money);
      },
      cost2(){
        const COST2 = "cost2";
        this.$store.commit(COST2, {a:11, b:12});
      }
  },
```

提交mutation的2种写法
```bash
1. this.$store.commit("mutation名字",参数)
2. this.$store.commit({type:"mutation名字",参数键值对...})
```

推荐使用常量替代mutation事件类型,即用const记录所有mutation的名字，保存在一个文件里面例如```@/store/mutation-type.js```，然后组件里面如果有使用到某个mutation，就从mutation-type.js里面将名字import进来使用

使用常量的好处:
```bash
1. 好找错误
2. 方便维护
3. 有代码提示，不容易敲错
```

mutation中原则上不允许异步操作，比如有个场景: 先用axios从外网拿数据，然后根据拿到的数据的值，update vuex里面store的值. 这个axios由于是基于Promise的所以是异步请求，所以原则上不允许通过axios拿到数据之后再更新uex
```bash
原因:
  1. 数据的变化不好追踪 (vue devtools插件没法追踪mutation里面的异步操作, 这个插件从chrome 和 firefox应用商店里面可以下载安装, 搜索 vue devtools, vue2的下载版本号是6.x或者以下的，vue3的下载最新版的即可)
```

在actions里面，是允许写异步操作的. actions里面写的是不能够直接修改数据，原则依然是, ```在vuex里面修改数据唯一的办法是提交mutation```, 在actions里面，先写异步，异步操作之后提交mutation改数据


# 其他

遇到了一个在使用axios报错的问题，报错内容如下
```
Uncaught ReferenceError: __WEBPACK_DEFAULT_EXPORT__ is not defined
    at eval (parseHeaders.js:55:34)
    at ./node_modules/axios/lib/helpers/parseHeaders.js (chunk-vendors.js:2597:1)
```
似乎是和webpack有关? 在咨询了大神之后，大神给了我一份配置
```
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: false,
  configureWebpack: {
    resolve: {
      alias: {
        axios: path.resolve(__dirname, 'node_modules/axios/dist/browser/axios.cjs'),
      },
    },
  },
})
```
好像意思是让webpack从指定的路径下面加载axios，而不是自行判断
很奇怪前几天用axios还没问题现在确出现了问题，可能是axios包里面的文件结构这几天发生变化了?