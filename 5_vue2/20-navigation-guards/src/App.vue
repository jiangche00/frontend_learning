<template>
  <div id="app">
    <button @click="goToHome">Home</button>
    <button @click="goToAbout">About</button>
    <button @click="dynamicRoute">Student</button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    goToHome() {
      this.$router.push("/home").catch(
        error => {
          if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation') && !error.message.includes('Redirected')) {
            console.error(error);
          }
        }
      );
    },
    goToAbout() {
      this.$router.push("/about").catch(
        error => {
          if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation') && !error.message.includes('Redirected')) {
            console.error(error);
          }
        }
      );
    },
    dynamicRoute() {
      this.$router.push({name: "grade", params:{id: 111222}}).catch(
        error => {
          if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation') && !error.message.includes('Redirected')) {
            console.error(error);
          }
        }
      );
    }
  }
}
</script>

<style>
</style>
