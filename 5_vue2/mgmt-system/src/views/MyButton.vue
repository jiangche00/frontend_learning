<template>
    <div class="btn" :style="{backgroundColor: bgColor, borderRadius:round?'20px':'5px'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props:{
            // 规定type的类型为string，且必传
            type:{
                type: String,
                required: true,
            },
            round: Boolean,
        },
        computed:{
            bgColor(){
                if(this.type === "primary0") {
                    return "#409eff"
                } else if (this.type === "success") {
                    return "#85ce61"
                } else if (this. type === "danger") {
                    return "red"
                } else {
                    return "gray"
                }
            }
        }
    }
</script>

<style scoped>
.btn{display: inline-block; padding: 10px 20px; color: white; margin-right: 5px;}
</style>