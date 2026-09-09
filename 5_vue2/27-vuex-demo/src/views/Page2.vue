<template>
    <div>
        Page2, {{ msg }}
        美元 {{ mei }}
    </div>
</template>

<script>
    export default {
        created() {
            console.log(this.$store.state.msg);
        },
        computed: {
            msg() {
                return this.$store.getters.sex;
            },
            mei() {
                return this.$store.getters.exchange(7);
            }
        }
    }
</script>

<style scoped>

</style>