<template>
  <div>
    <h1>{{ index }}</h1>
    <button @click="fn">button</button>
    <ChildReactive/>
    <WatchComputed/>
  </div>
</template>

<script setup>
// watch作用: 监听一些数据，当其发生变化之后，做一些操作
// watch 可以监听的数据: ref, reactive, 计算属性, getter函数
// 书写格式: watch(数据，()=>{ 要做的事情 })
// 对于ref和reactive，有的是浅层监听，有的是深层监听，如果有强制深层监听的需求,在watch的时候配置第三个参数
// watch(数据, ()=>{ 要做的事情 }, {deep:true})
// 如果想要watch在第一次加载页面的时候也要执行一次，将immediate:true加入到第三个参数里面，类似如下这种
// watch(数据, ()=>{ 要做的事情 }, {deep:true, immediate:true})
// watch(数据, ()=>{ 要做的事情 }, {immediate:true})
// .....
// .....


// watchEffect
// 和 watch 类似，也是监听某个对象，当其变化之后，做一些事情
// watchEffect(()=>{})
// watchEffect不需要指明依赖, 传入的函数中用到了哪些变量，会自动检测
// watchEffect第一次加载页面的时候默认会执行一次,(像watch里面添加了immediate:true)
// 和computed的区别: computed侧重于结果，因此必须要有返回值, watchEffect侧重于过程，不需要有返回值
// watchEffect是深度监听
// watchEffect返回值是个函数，调用这个函数就可以停止监听


// 当监听的数据来源非常清晰，使用watch
// 当监听的数据来源模糊, 使用watchEffect
// 实际中使用,首选watch，其次再用watchEffect

// ref定义的引用类型数据，是浅层监听
import { ref, watch } from 'vue';
import ChildReactive from '@/components/ChildReactive.vue';
import WatchComputed from '@/components/WatchComputed.vue';

let index = ref(0);
let count = ref(199);
const fn = () => {
  index.value++;
  count.value++;
}

watch(index, ()=>{
  console.log("index has been changed")
})

// 监听多个对象，用数组包裹起来
// 回调函数参数 newval 记录监听对象(如果是多个监听对象则是数组形式的)新值
// oldVal记录监听对象(如果是多个监听对象则是数组形式)旧值
watch([index,count], (newVal, oldVal)=>{
  console.log(`changed, old: ${oldVal}, new: ${newVal}`);
})

</script>

<style scoped>

</style>