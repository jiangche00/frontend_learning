<template>
    <div>
        <h1>123</h1>
        <h1 class="box">{{ title }}</h1>
        <child :a="title"/>
    </div>
</template>

<script>
import Child from './Child.vue';
export default {
    name: 'Demo',
    data() {
        return {
            title:"this is a data from Demo component"
        }
    },
    components:{
        Child
    }
}
</script>

<!-- use scoped keyword below, to constraint the css style only in this component -->
<style scoped>
.box{color: blue;}
</style>