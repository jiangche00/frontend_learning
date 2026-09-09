<template>
    <div>
        <!-- 依据输入的菜单内容，递归生成菜单结构 -->
        <!-- 这里会根据菜单内容json,递归生成子菜单 -->
        <el-submenu v-if="menu.children" :index="menu.url" class="mit">
            <template slot="title">
                <i :class="menu.icon"></i>
                <span slot="title">{{ menu.name }}</span>          
            </template>
            <!-- 在这里进行递归, 组件的递归就是 组件自己调用自己 -->
            <!-- 需要知道组件名, 在 export default 里面 的 name 属性定义的，就是组件的名字 -->
            <nav-menu v-for="(item, index) in menu.children" :key="index" :menu="item"></nav-menu>
        </el-submenu>
        <el-menu-item v-else class="mit" :index="menu.url">
            <i :class="menu.icon"></i>
            <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
    </div>
</template>

<script>
    export default {
        // 这个name属性就是组件的名字，当组件内部自己需要用到自己(递归)时, 才会派上真正的用处
        name: "NavMenu",
        // 通过props接收每一条菜单内容, 输入的菜单内容为一个对象(json), 为必填
        props:{
            menu:{
                type: Object,
                required: true,
            }
        }
    }
</script>

<style lang="less" scoped>
/** 让 submenu 和 menu-item 宽度都为200px */
.mit{width: 200px;}
</style>