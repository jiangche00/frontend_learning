<script setup>
// 在父子组件传递数据时，通常使用的是 props 和 emit，父传子时，使用的是 props，
// 如果是父组件传孙组件时，就需要先传给子组件，子组件再传给孙组件，如果多个子组件或多个孙组件使用时，就需要传很多次，会很麻烦。
// 像这种情况，可以使用 provide 和 inject 解决这种问题，不论组件嵌套多深，父组件都可以为所有子组件或孙组件提供数据，
// 父组件使用 provide 提供数据，子组件或孙组件 inject 注入数据。同时兄弟组件之间传值更方便。
// 如果父组件链上多个组件对同一个 key 提供了值，那么离得更近的组件将会“覆盖”链上更远的组件所提供的值。
// 如果没有能通过 key 匹配到值，`inject()` 将返回 `undefined`
import { provide, readonly, ref } from "vue";
import Child from "./components/Child.vue";
const person = ref({
  name:"xiaoming",
  age:18
})
const change = () => {
  person.value.name = "xiaohong"
}
provide("msg",readonly(person)) // 设置readonly防止其他组件修改
provide("change", change) // 提供change方法，让其他组件可以执行该方法
</script>

<template>
  <h1 @click="change">It's Root: {{ person }}</h1>
  <Child/>
</template>

<style scoped></style>
