<template>
    <div>
        Page1 Child {{ msg }}
    </div>
</template>

<script>
    export default {
        computed: {
            msg() {
                return this.$store.state.msg; 
            }
        }    
    }
</script>

<style scoped>

</style>