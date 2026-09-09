<template>
  <div>
    <h1>{{ obj }}</h1>
    <h2>{{ shallowCopy }}</h2>
    <button @click="fn">button</button>
  </div>
</template>

<script>
// shallowRef 只有整体替换，才能触发视图重新渲染
// shallowReactive 能监听到第一层级的变化，但是第二层及就检测不到了
// 比如下面那个obj, shallowReactive能检测name age改了能触发，但是like里面的改了就没法触发视图更新了
// shallowRef 和 shallowReactive 目的: 减少视图重新渲染的次数，提高性能

// triggerRef 强制触发一个浅层ref
// 用法： 当想保证减少视图渲染次数的同时，当遇到重要数据更新时又想要强制重新渲染视图时，可以手工trigger

// readOnly 把任意一个数据变成只读的, 无论是ref，reactive，还是普通数据，都适用
// readOnly 返回原始值的代理，并且这个只读是深层次的，就是对于对象里面还嵌套对象的复杂数据，依然生效
// 使用场景: 为防止有一些数据被篡改，就会套上这个readOnly

// shallowReadOnly 只有第一层级变成只读的

import { readonly, ref, shallowReadonly, shallowRef, triggerRef } from 'vue';
  export default {
    setup() {
      let obj = shallowRef({id:123123,name:"xiaoming",age:18,like:["aaa","bbb","ccc"]});
      let obj2 = ref({name:"xiaoming2", age:22, like:["c","d","e"]});
      // 这个 copy 返回只读的对象
      const copy = readonly(obj2);
      const shallowCopy = shallowReadonly(obj2);
      function fn() {
        obj.value.id=456;
        // 手动触发ref，让视图更新，因为这里觉得id比较重要一旦修改了必须得重新渲染视图
        triggerRef(obj);
        // 会报warning提示这个对象是只读的
        copy.value.name = "xiaohong";
        // 虽然第一层及的name, age没法改,但是这个shallowCopy的第二层及的这个数组的元素就可以修改
        shallowCopy.value.like[0] = "zzz";
      }
      return {
        obj,fn,copy,shallowCopy
      }
    }
  }
</script>

<style scoped>

</style>
