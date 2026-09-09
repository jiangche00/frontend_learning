<template>
    <div>
        <h2>{{ obj }}</h2>
        <button @click="fn">button</button>
    </div>
</template>

<script setup>
// reactive定义的数据默认是深度监听，获取不到旧数据
// reactive定义的对象数据中的某个特定属性 浅层监听
import { reactive, watch } from 'vue';
let obj = reactive({
    name:"xiaoming",
    age:18,
    like:["a","b","c"],
})

const fn = () => {
    obj.age = 22
}

watch(obj,()=>{
    console.log("data has been changed");
})

// 监听对象中的特定的属性
watch(()=>obj.age, (n,o)=>{
    console.log(`obj.age changed old: ${o}, new: ${n}`);
})

watch([()=>obj.age,()=>obj.like], (n,o)=>{
    console.log(`obj.age or obj.like changed old: ${o}, new: ${n}`);
})

</script>

<style scoped>

</style>