<script setup>
import { computed, onMounted, ref, watch } from 'vue';
// 模拟商品
let products = ref([
  { id: 1001, name: "iphone16", price: 10000 },
  { id: 1002, name: "ps5", price: 5000 },
  { id: 1003, name: "alienware", price: 20000 },
  { id: 1004, name: "lipstick", price: 30 },
])
let isAllSel = ref(false)

// 在onMounted生命周期阶段，往商品数组里面添加一些属性
onMounted(() => {
  products.value.forEach(item => {
    item.count = 0;
    item.check = false;
  })
})

// 方法
// 点击+号添加商品
const add = (index) => {
  products.value[index].count++
}
// 点击-号减掉商品
const sub = (index) => {
  products.value[index].count > 0 ? products.value[index].count-- : true
}
// checkbox发生变化时执行
const handleChange = () => {
  products.value.forEach(item => item.check = isAllSel.value)
}
// 删除商品条目
const del = (index) => {
  products.value.splice(index, 1)
}

// 计算属性
// 计算check的商品的数量
const selNum = computed(() => products.value.filter(item => item.check).length)
// 计算总价
const totalSum = computed(()=>{
  let Sum = 0;
  products.value.forEach((item) => {
    if (item.check) {
      Sum += item.price * item.count
    }
  })
  return Sum
})

// watch监听
// 监听每一个数据的check属性
watch(() => products.value.map(item => item.check), () => {
  if (selNum.value === products.value.length) {
    isAllSel.value = true
  } else {
    isAllSel.value = false
  }
})
</script>

<template>
  <ul>
    <li v-for="(item, index) in products" :key="item.id">
      <input type="checkbox" name="" id="" v-model="item.check">
      <span>{{ item.name }}</span>
      <span>{{ item.price }}</span>
      <button @click="add(index)">+</button>
      <a>{{ item.count }}</a>
      <button @click="sub(index)">-</button>
      <button @click="del(index)">delete</button>
    </li>
  </ul>
  <div>
    <input type="checkbox" name="" id="" v-model="isAllSel" @change="handleChange">
    <span>selected: {{ selNum }}</span>
    <span>total: {{ totalSum }}</span>
    <button :disabled="totalSum===0">check out</button>
  </div>
</template>

<style scoped>
span,
button {
  margin: 0 10px;
  width: 100px;
  display: inline-block;
}
</style>
