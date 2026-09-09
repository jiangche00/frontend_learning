<template>
    <!-- 
     这种样子的就是多根节点，在template里面有多个下一级的div
     但是其实vue不推荐使用这种设计模式

     vue2中是不允许这么写的
    -->
    <div>
        <!-- 使用h1Attr中的id和class -->
        <h1 :id="h1Attr.id" :class="h1Attr.class">root1</h1>
    </div>
    <!-- 添加 v-bind="$attrs", 使用属性绑定 -->
    <div v-bind="$attrs">
        <h1>root2</h1>
    </div>
</template>

<script setup>
import { useAttrs, computed } from 'vue';
// 获取属性
const attrs = useAttrs();
// 提取出需要的id和class存储到h1Attr
const h1Attr = computed(()=>{
    return {
        id: attrs.id,
        class: attrs.class,
    }
})
</script>

<style scoped>

</style>