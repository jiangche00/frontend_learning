<template>
    <div>
        <div>Home component</div>
        <div>
            <button @click="home1">Home1</button>
            <button @click="home2">Home2</button>
            <button @click="home3">Home3</button>
            <button @click="student">Student</button>
            <button @click="query">Query</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        methods: {
            home1() {
                // 通过path对象方式跳转
                this.$router.push({path:"/home/home1"}).catch(
                    error => {
                        if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation')) {
                            console.error(error);
                        }
                    }
                );
            },
            home2() {
                // 一般字符串方式跳转
                this.$router.push("/home/home2").catch(
                    error => {
                        if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation')) {
                            console.error(error);
                        }
                    }
                );
            },
            home3() {
                // 通过name对象方式跳转
                this.$router.push({name:"home3"}).catch(
                    error => {
                        if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation')) {
                            console.error(error);
                        }
                    }
                );
            },
            student() {
                this.$router.push({name:"student", params:{student: "student1", id: 11101}}).catch(
                    error => {
                        if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation')) {
                            console.error(error);
                        }
                    }
                );
            },
            query() {
                this.$router.push({name:"query", query:{name: "zhangsan", gender: "male"}}).catch(
                    error => {
                        if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation')) {
                            console.error(error);
                        }
                    }
                );               
            },
        }
    }
</script>

<style scoped>

</style>