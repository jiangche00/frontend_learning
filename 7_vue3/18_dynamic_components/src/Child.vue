<template>
    <div>
        <h1>This is Child component</h1>
    </div>
</template>

<script setup>
import { onUnmounted } from 'vue';

onUnmounted(()=>{
    console.log("child component has been unmounted");
})
</script>

<style scoped>

</style>