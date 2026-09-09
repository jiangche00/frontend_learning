<template>
  <div>
    <h1>root</h1>
    <!-- 父组件到子组件传值 a="a from root" -->
    <!-- 使用自定义事件 diyEvents，子->父的传值 -->
    <MyChild a="a from root" , @diyEvents="fn" />
    <hr>
    <hr>
    <!-- 在template里面使用响应式数据, 不用加.value，会自动解包访问到msg.value -->
    <h3>{{ msg }}</h3>
    <h3>{{ obj }}</h3>
  </div>
</template>

<script>
// 想要创建响应式数据(变化之后会重新渲染视图， vue2里面默认都是响应式数据，但是vue3如果想让数据是响应式的需要手动设定)
// 通过ref函数处理的数据变成了一个响应式对象，其中的value属性指向的是实际数据
// ref默认是处理基本对象，但是还能作用于数组，object (因为ref在后台调用了后面介绍的reactive指令)
// ref是深层次的响应式
// 显式引入 import { ref } from 'vue';
import { ref } from 'vue';
// reactive可以专门将 数组 和 对象 转换成为响应式数据
// reactive也是深层次响应式
// reactive不能处理基本对性
// reactive弊端: 1. 支持的数据类型有限 2. 不允许整体重新赋值 3. 对解构赋值不友好
// 显式引入 import { reactive } from 'vue';
import { reactive } from 'vue';
import MyChild from './components/MyChild.vue';
export default {
  // 变量和函数都写在setup里面，这个setup是生命周期函数，在组件创建之前执行
  // setup里面拿不到this
  // setup必须return数据
  setup() {
    let msg = ref("aaaaa");
    // num 这个 ref 作为 响应式对象 reactive对象的属性，当引用时也会发生自动解包，不需要obj.num.value，直接obj.num即可
    let obj = reactive({ name: "xiaoming", age: 11, num: ref(1) });
    const fn = (data) => {
      // 更改响应式数据时，不能直接更改 msg = "bbbbb", 而是需要这么改 msg.value = "bbbbb"
      msg.value = "bbbbb";
      // 如果用reactive，不需要.value，直接修改即可
      obj.name = "xiaohong";

      obj.num = 2;

      let {name} = obj;
      // 这种方式不会改变obj里面的name
      name = "xiaohong2";

      console.log(data, obj.num);
    }
    // 吧定义的变量函数都return
    return {
      fn, msg, obj
    }
  },
  components: {
    MyChild,
  }
}
</script>

<style scoped></style>
