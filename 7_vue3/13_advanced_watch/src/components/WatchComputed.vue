<template>
    <div>
        <h3>{{ fullName }}</h3>
        <button @click="fn">button</button>
    </div>
</template>

<script setup>
// 监听computed
// computed里面用到的变量只要有变化，便会生成一个新的computed对象，因此即使是变动了相关的部分变量，也会触发重新渲染
import { computed, ref } from 'vue';
let firstName = ref("aaa")
let lastName = ref("bbb")
const fullName = computed(()=>({
    firstName:firstName.value,
    lastName:lastName.value
}))

const fn = () => {
    firstName.value = "ccc"
}



</script>

<style scoped>

</style>