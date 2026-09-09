<template>
    <div>
        <h1 @click="change">It's Child: {{info}}</h1>
        <grand-son></grand-son>
    </div>
</template>

<script setup>
import { inject } from 'vue'
import GrandSon from "./GrandSon.vue"
const info= inject("msg");
console.log("子组件",info.value)
const change = () => {
    info.value.name = "xiaowang from child"
}
</script>

<style scoped></style>