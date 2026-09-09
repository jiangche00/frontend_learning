<template>
    <div>
        <h1>Child Component</h1>
        <div>
            <h2>{{ count }}</h2>
            <button @click="add">child button</button>
        </div>
    </div>
</template>

<script setup>
import useCount from '@/hooks/count';
const {count,add} = useCount()
</script>

<style scoped>

</style>