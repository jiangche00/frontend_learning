<template>
  <div id="app">
    <div class="box">123123</div>
    <div v-for="(item,index) in 10" :key="index">{{ item }}</div>
    <demo/>
  </div>
</template>

<script>
// 新功能，import进来
import Demo from './Demo.vue';

export default {
  name: 'App',
  components: {
    Demo // 引入 Demo
  }
}
</script>

<style scoped>
.box{color: red;}
</style>
