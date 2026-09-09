<template>
    <div>
        student {{ student }}, id {{ id }}, final score: 59.
    </div>
</template>

<script>
    export default {
        data() {
            return {
                student: this.$route.params["student"],
                id: this.$route.params["id"],
            }
        },
        name: 'Grade',
    }
</script>

<style scoped>

</style>