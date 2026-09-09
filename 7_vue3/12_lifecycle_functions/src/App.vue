<script setup>
// in composition API format, 
// Vue 3 replaces both beforeCreate and created hooks with the setup scope. 
// Any code you would normally write in the created hook is executed synchronously just by placing it directly inside your <script setup> block.
import Child from './components/Child.vue';
// 组合式API的生命周期函数可以根据业务需求，重复调用多次
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
import { ref } from 'vue';

let message = ref("root message");
let num = ref(9);

const updateNum = () => {
  num.value++;
}

console.log("created");
onBeforeMount(()=>{
  console.log("beforeMount");
})
onMounted(()=>{
  console.log("onMounted");
})
onBeforeUpdate(()=>{
  console.log("beforeUpdate");
})
onUpdated(()=>{
  console.log("onUpdated");
})
onBeforeUnmount(()=>{
  console.log("beforeUnmount");
})
onUnmounted(()=>{
  console.log("Unmounted");
})
</script>

<template>
  <h1>This is root component, {{ num }}</h1>
  <button @click="updateNum">click</button>
  <Child :a="num"/>
</template>

<style scoped></style>