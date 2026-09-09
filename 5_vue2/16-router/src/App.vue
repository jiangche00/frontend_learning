<template>
  <div id="app">
    <!-- router-link 本质是a标签, 修改a标签的样式也就是修改了router-link的样式 -->
    <button>
      <router-link to="/home">home</router-link>
    </button>
    <button @click="about">about</button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    about() {
      // 拿到路由实例,使用push方法进行跳转
      // 把跳转相同页面的报错给屏蔽掉
      this.$router.push("/about").catch(
        error => {
          if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation')) {
            console.error(error);
          }
        }
      );
    }
  }
}
</script>

<style>
a{text-decoration: none; color: black;}
</style>
