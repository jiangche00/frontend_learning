<template>
    <div>
        name: {{ name }}, gender: {{ gender }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: this.$route.query["name"],
                gender: this.$route.query["gender"],
            }
        },
        name: 'Query',
    }
</script>

<style scoped>

</style>