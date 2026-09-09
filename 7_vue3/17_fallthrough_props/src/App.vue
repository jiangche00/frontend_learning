<script setup>
// 当我使用一个组件，直接给组件身上加class或者id属性或者style属性
// 最终结果：我们会发现我们没有定义props接收这个属性，但是子组件也能正常使用。
// id, class, style, v-on 这些属性可以直接加


// 如果一个子组件的根元素已经有了 `class` 或 `style` attribute，它会和从父组件上继承的值合并
// 同样的规则也适用于 `v-on` 事件监听器

// 如果要禁用透传，在有需求的子组件的<script setup>里面开启这个. 开启之后，子组件的根元素就不会继承了：
// defineOptions({
//   inheritAttrs: false
// })


// 如果是多根节点的情况，如这个MultiRootChild.vue, 需要在这个子组件中手动指定,详见MultiRootChild.vue
// <div v-bind="$attrs"></div>


// 注意：多根节点的组件，Vue 3 默认不支持将从父组件传入的所有属性默认传递到所有根节点，如果非要支持，需要配合attrs属性实现
import Child from './components/Child.vue';
import MultiRootChild from './components/MultiRootChild.vue';

</script>

<template>
  <div>
    <!-- 给子组件加id, class, style，不用单独使用props, 这些会透传到子组件的根元素上，参见Child.vue的根元素是div -->
    <Child id="aa" class="bb" style="width:100px" />
    <!-- 多根节点的组件的情况 -->
    <MultiRootChild id="aa", class="bb"/>
  </div>
</template>

<style scoped></style>
