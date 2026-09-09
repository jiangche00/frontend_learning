<template>
    <div>
        <h1 class="title">child component {{ a }}</h1>
        <button @click="fn(),childFn()">child button</button>
    </div>
</template>

<script>
export default {
    props: ["a"],
    // setup函数的第一个参数props
    // 第二个参数context上下文对象, 这里面有emit
    // 或者直接解构赋值得到emit
    setup(props,{emit}) {
        const fn = () => {
            console.log(props.a);
        }
        const childFn = () => {
            // 触发自定义事件
            emit("diyEvents", "b from child");
        }
        return {
            fn,
            childFn,
        }
    }
}
</script>

<style scoped>
.title {
    color: blue;
}
</style>