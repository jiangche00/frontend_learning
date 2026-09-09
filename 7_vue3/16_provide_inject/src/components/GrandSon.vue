<template>
    <div>
        <h2 @click="change">GrandSon {{ info }}</h2>
    </div>
</template>

<script setup>
import { inject } from 'vue';
const info= inject("msg");
const change = inject("change")
console.log("孙子组件",info.value)
</script>

<style scoped>

</style>