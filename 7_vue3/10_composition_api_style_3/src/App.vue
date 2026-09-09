<template>
  <div>
    <!-- 模板这里直接用toRef定定义的name，age，无须使用obj.name和obj.age，简化代码 -->
    <h1>name: {{ name }}</h1>
    <h1>age: {{ age }}</h1>
    <h1>name2: {{ name2 }}</h1>
    <h1>age2: {{ age2 }}</h1>
    <button @click="fn">button</button>
  </div>
</template>

<script>
import { isRef, reactive, toRef, toRefs } from 'vue';

// isRef 判断一个数据书不是ref包装过的数据

// unRef 如果是ref，则把ref给拆了并返回原始值， 如果不是ref，则直接返回
// unRef 等价于 isRef(val) ? val.value : val

// toRef toRef("想操作的对象","想操作的对象的属性") 把对象的某一个属性变成响应式

// toRefs 让对象的每一个属性都变成响应式


  export default {
    setup() {
      let obj1 = reactive({name:"aaa",age:1})
      let obj2 = reactive({name2:"bbb",age2:2})
      let name = toRef(obj1, "name")
      let age = toRef(obj1, "age")
      function fn() {
        console.log(isRef(obj1));
        // 这里改obj1的属性
        obj1.name = "xiaohong";
        obj1.age = 555;
        // 这里改obj2的属性
        obj2.name2 = "ccccc";
        obj2.age2 = 33333333;
      }
      return {
        obj1,
        fn,
        name,
        age,
        ...toRefs(obj2), // 这里直接解构，显得十分方便
      }
    }
  }
</script>

<style scoped>

</style>