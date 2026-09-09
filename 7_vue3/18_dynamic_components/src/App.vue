<!-- 

动态组件:
  使用component标签, 在标签中使用:is属性来绑定指定的组件，将is绑定的组件名称设置为变量之后，则会形成动态组件绑定的效果
  如果没有被渲染的component会被销毁
-->


<script setup>
import { onUnmounted, onUpdated, shallowRef } from 'vue';
import Child from './Child.vue';
import GrandChild from './GrandChild.vue';

// shallowRef仅watch .value
const com = shallowRef(Child)

onUpdated(()=>{
  console.log("root component has been updated");
})

const changeCom = () => {
  if(com.value === Child) {
    com.value = GrandChild
  } else if(com.value === GrandChild) {
    com.value = Child
  }
}

</script>

<template>
  <h1>this is root component</h1>
  <component :is="com"></component>
  <button @click="changeCom">change component</button>
</template>

<style scoped></style>
