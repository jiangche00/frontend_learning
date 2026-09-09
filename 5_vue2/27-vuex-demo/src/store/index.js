import Vue from 'vue'
import Vuex from 'vuex'
import {BUYMONITOR, GETWEATHER} from '@/store/mutation-type'
import axios from 'axios'
import moduleA from './moduleA'
import moduleB from './moduleB'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: "我是共享的数据",
    gender: 1,
    totalSum: 1000,
    temperature: -999,
    txt: "text from root module",
  },
  getters: {
    // 相当于是vuex中的计算属性
    // 这个sex()是根据state里面的gender判断1就返回男否则返回女
    sex(state) {
      return state.gender === 1 ? "男" : "女";
    },
    exchange(state) {
      return (ratio) => {
        return state.totalSum / ratio;
      }
    }
  },
  mutations: {
    // 在vuex中，修改数据的唯一办法是提交mutation
    // mutations定义一些修改数据的方法
    // 第一个默认参数是state
    buyKeyBoard(state){
      state.totalSum -= 50;
    },
    // 属性名转成变量 套中括号
    [BUYMONITOR](state,payload) {
      if (payload.money) {
        state.totalSum -= payload.money;
      } else {
        state.totalSum -= 500;
      }
      console.log(payload);
    },
    [GETWEATHER](state,payload) {
      console.log("mutation触发了");
      state.temperature = payload.temperature;
    },
    changeTxt1(state) {
      state.txt = "data changed in root";
    }
  },
  // 在actions里面写异步操作
  // 和mutations类似，这里面也是写一堆函数
  // actions中的函数有一个默认参数，类似于store对象
  actions: {
    // 如果函数中含有异步操作，函数加上async关键字
    // 如果不加async关键字，在组件中使用dispatch调用之后，不保证代码的执行顺序
    // 如不添加async关键字，在组件中dispatch changeAsync之后console.log打印一行任意内容
    // 则无法保证在changeAsync执行完毕之后再打印，有可能会出现先打印，然后changeAsync才执行完毕的现象
    // 添加async关键字，是要保证在组件中，changeAsync执行完毕之后，再执行console.log打印
    async changeAsync({commit}){
      console.log("changeAsync触发了");
      // 具体异步操作的步骤前面加上await
      await axios({
        url: "https://restapi.amap.com/v3/weather/weatherInfo",
        method: "get",
        params: {
          city: "110101",
          key: "4bdc6b1ae8b8cdd031369bc3c112da9f"
        }
      }).then((res)=>{
        commit({type: GETWEATHER, temperature: res.data.lives[0].temperature});
      }).catch((error)=>{
        return Promise.reject(error);
      })
    }
  },
  // 在modules里面可以引入其他modules，例如同级中的moduleA.js
  // 这个store/index.js相当于是根store，引入的module都是子store
  // 在子store里面定义的state, getters, mutations, actions引入到根store里面
  modules: {
    /**
     * 1. 访问模块里的数据 this.$store.state.模块名.数据
     * 2. 如果模块中还有子模块 this.$store.state.模块名.子模块名.数据名
     * 3. 模块中的actions, mutations, getters都是默认注册在全局根模块的. 只有state是注册在模块里的
     *      数据是局部的
     *      如果mutations 根模块 和 子模块 有同名的，在组件中触发this.$store.commit("mutation名字")时，
     *      根模块 和 子模块 的 同名mutation都会被执行，根模块的mutation修改根模块的数据，子模块的mutation修改子模块的数据
     *      所以 不冲突
     * 
     * 4. 如果希望actions, mutations, getters个属于自己模块互不干扰，可以开启命名空间, namespaced: true
     *    开了命名空间之后，actions, mutations, getters就不合并到根模块里面了
     *    commit调用方法: "模块名/方法名"， 比如一个namespaced的模块moduleA里面定义了一个mutation名字叫abc，在组件中调用this.$store.commit("moduleA/abc")
     *    如何调用子模块里面的方法: this.$store.getters["模块名/方法名"]
     * 
     *    子模块的getters如果想要拿到根模块的数据,需要用到getters里面的第三个参数，形式如下:
     *      getterInstance(state,getters,rootState,rootGetters){
     *        return rootState.数据
     *      }
     *    上面的第四个参数rootGetters能拿到根模块的getters
     * 
     *    对于mutations，子模块的mutation没有办法拿到根模块的mutation
     * 
     *    对于actions，子模块的actions 可以拿到 根模块的 actions
     * 
     * 5. 一般来说子模块 和 根模块 很少有互动，设计原则上应该尽量避免 子模块 和 根模块的互动
     * 
     */
    moduleA,
    moduleB,
  }
})

/**
 * 
 * 辅助函数 mapState mapGetters mapActions mapMutations
 * 这几个辅助函数的返回值都是对象
 * 
 * 使用 mapActions mapMutations需要传参时，不需要在函数中定义，而是在调用时直接传即可，注意多个参数要写成对象形式
 * 
 * 比如这个mutations, 这个事先定义了 export const GETWEATHER = "getWeather" :
 * 
 * [GETWEATHER](state,payload) {
      console.log("mutation触发了");
      state.temperature = payload.temperature;
      state.windrank = payload.windrank;
   },

   在组件中这么用:
   methods:{
     ...mapMutations([GETWEATHER]),
   }

   在template里面使用时, 这么用,直接传对象，对象里面写上参数:
   <template>
     <div>
       <button @click="getWeather({temperature:20, windrank:'rank2'})"></button>
     </div>
   </template>
 * 
 */
