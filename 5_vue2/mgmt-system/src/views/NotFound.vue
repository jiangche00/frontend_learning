<template>
  <div>
    <el-empty description="页面不存在">
        <el-button type="primary" @click="toHome">返回首页</el-button>
    </el-empty>
  </div>
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push("/");
        }
    }
};
</script>

<style lang="less" scoped>
</style>