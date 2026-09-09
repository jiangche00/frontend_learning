<script setup>
import { customRef } from 'vue'
const _ref = (value) => {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()//追踪当前数据的变化
        return value
      },
      set(val) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = val;
          trigger()//触发响应,即更新界面
        }, 1000)
      }
    }
  })
}

let count = _ref(0);
const changeCount = () => {
  count.value++
}
</script>

<template>
  <h1 @click="changeName">{{ count }} </h1>
  <button @click="changeCount">添加商品数量</button>
</template>

<style scoped></style>
