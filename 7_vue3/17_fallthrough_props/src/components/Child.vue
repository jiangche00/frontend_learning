<template>
    <!-- 属性透传，会将属性直接加到跟组件div上面 -->
    <div>
        <h1 :id="attrsForFirstRoot.id" :class="attrsForFirstRoot.class">Child</h1>
        <h1 :style="attrsForSecondRoot.style">123123</h1>
    </div>
</template>

<script setup>
import { useAttrs, computed } from 'vue';

// 禁止根元素(这里是div)使用属性透传
defineOptions({
  inheritAttrs: false
})

const attrs = useAttrs()
const attrsForFirstRoot = computed(() => {
    return {
    id: attrs.id,
    class: attrs.class
    };
});
const attrsForSecondRoot = computed(() => {
    return {
    style: attrs.style
    };
})
</script>

<style scoped>

</style>