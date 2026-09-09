<template>
    <div>
        <h1>This is Grand Child Component</h1>
    </div>
</template>

<script setup>
import { onUnmounted } from 'vue';

onUnmounted(()=>{
    console.log("grand child components has been unmounted");
})
</script>

<style scoped>

</style>