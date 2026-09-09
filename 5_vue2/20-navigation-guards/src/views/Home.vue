<template>
    <div>
        Home
    </div>
</template>

<script>
    export default {
        name: 'Home',

        // 组件内守卫
        // 进入该组件时触发
        // 没有this, 因为当守卫执行前，组件实例还没有创建
        beforeRouteEnter() {
            console.log("触发beforeRouteEnter组件内守卫");
        },
        // 更新该组件视图时触发
        beforeRouteUpdate() {
            console.log("触发beforeRouteUpdate组件内守卫, 2.2新增")
        },
        // 离开该组件时触发
        beforeRouteLeave() {
            console.log("触发beforeRouteLeave组件内守卫")
        }
    }
</script>

<style scoped>

</style>