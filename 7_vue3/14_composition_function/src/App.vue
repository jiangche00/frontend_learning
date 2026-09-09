<script setup>

// 组合式函数 要有返回值，厘米可以用组件中的hooks,computed,watch等
// 命名规则: 必须以use开头
// 组合式函数使用场景: 如果需要封装的功能，囊括数据,方法,生命周期。如果只是处理单纯的逻辑不涉及生命周期等，则使用普通函数

import Child from './components/Child.vue';
import useCount from './hooks/count'; // 引入组合式函数
import useAxios from './hooks/useAxios.js';
import { ref } from "vue";
let city = ref("北京");
const {count,add} = useCount()
const {weather,ccity} = useAxios(city)
</script>
<template>
  <h1>{{ count }}</h1>
  <button @click="add">button</button>
  <br>
  <input type="text" v-model.lazy="city">
  <ul>
    <li v-for="item in weather" :key="item.date">{{ ccity }} - {{ item.date }} : {{ item.dayweather }}</li>
  </ul>
  <br>
  <Child/>
</template>

<style scoped></style>
