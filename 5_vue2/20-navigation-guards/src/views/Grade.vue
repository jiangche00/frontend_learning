<template>
    <div>
        id: {{ id }}, score: 59.
        <button @click="update">update</button>
    </div>
</template>

<script>
    export default {
        name: 'Grade',
        methods: {
            update() {
                this.$router.push("/student/222222").catch(
                    error => {
                        if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation') && !error.message.includes('Redirected')) {
                            console.error(error);
                        }
                    }
                );
            }
        },
        data() {
            return {
                id: this.$route.params["id"]
            }
        },
        // beforeRouteUpdate专门用于动态路由的导航守护
        // 比如访问由/student/111 变为了 /student/222 时，触发
        beforeRouteUpdate(to, from, next){
            console.log("动态路由组件更新了");
            next();
            this.id = this.$route.params["id"];
        }
    }
</script>

<style scoped>

</style>