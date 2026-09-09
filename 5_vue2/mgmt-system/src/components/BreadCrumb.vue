<!-- 用组件的方式封装面包屑导航 -->
<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
    data() {
        return {
            breadList: [],
        }
    },
    created(){
        this.getBreadCrumb();
    },
    watch:{
        $route() {
            this.getBreadCrumb();
        }
    },
    methods: {
        getBreadCrumb() {
            this.breadList = this.$route.meta.bread || []
        }
    }
};
</script>

<style lang="less" scoped>
</style>