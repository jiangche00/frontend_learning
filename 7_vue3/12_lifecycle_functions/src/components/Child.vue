<template>
    <div>
        <h1>This is child component, {{ num }}</h1>
        <h3>From root: {{ a }}</h3>
    </div>
</template>

<script>
    // traditional Options API format
    export default {
        props: ["a"],
        mounted() {
            console.log("child-mounted")
        },
        created() {
            console.log("child-created")
        },
        beforeCreate() {
            console.log("child-beforeCreate")
        },
        beforeMount() {
            console.log("child-beforeMount")
        },
        beforeUpdate() {
            console.log("child-beforeUpdate")
        },
        updated() {
            console.log("child-updated")
        },
        beforeUnmount() {
            console.log("child-beforeUnmount")
        },
        unmounted() {
            console.log("child-unmounted")
        },
        data() {
            return {
                num:1,
            }
        },
        methods:{
            fn(){
                this.a++;
                console.log(this.a)
            }
        },
    }
</script>

<style scoped>

</style>