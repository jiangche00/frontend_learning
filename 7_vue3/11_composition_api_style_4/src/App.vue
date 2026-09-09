<template>
  <div>
    <button @click="fn">button</button>
  </div>
</template>

<script>
// toValue 获取函数的返回值
// isProxy 返回boolean，判断数据是不是代理 哪些情况会创建代理? reactive readonly shallowReactive shallowReadonly就是把原对象变成了一个新的代理
// isReactive 返回boolean，判断数据是不是reactive或者shallowReactive
// isReadonly 返回boolean, 判断数据是不是readonly或者shallowReadonly
// toRaw 返回一个你所创建的代理的原始对象
// markRaw 标记一个对象，让他永远不会成为响应式对象
import { isReactive, markRaw, reactive, toRaw, toValue } from 'vue';
export default {
  setup() {
    let b = reactive([1,2,3]);
    console.log(b); // Proxy(Array){0:1,1:2,2:3}
    // 返回代理对象的原始对象
    console.log(toRaw(b)); // [1,2,3]

    let c = markRaw({a:"1",b:"2"});
    console.log(isReactive(reactive(c))); // 返回false因为c被使用了markRaw所以无法变成reactive了


    // 让部分属性无法变成响应式的方法
    // 如下, d为响应式reactive，但新添加的append_d属性，通过markRaw设定为非响应式
    // 所以最终的d, 属性a和b是响应式，属性append_d不是响应式
    // 实际使用用途: 外部引入的第三方库的数据我们如果只希望变化指定的数据才能够触发视图更新，那么就可以将其他不关心的属性标记为markRaw
    let d = reactive({a:"1",b:"2"});
    let append_d = ["1","2"];
    d.append_d = markRaw(append_d);
    console.log(d);

    function fn() {
      console.log(toValue(()=>"hello"));
    }
    return {
      fn
    }
  }
}
</script>

<style scoped></style>