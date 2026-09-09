<template>
  <div>
    <el-container>
      <!-- 设置侧边栏为宽度200px -->
      <el-aside width="200px" class="aside">
        <nav-left></nav-left>
      </el-aside>
      <el-container class="rpart">
        <!-- 顶部 -->
        <el-header>
          <top-header></top-header>
        </el-header>
        <!-- 首页main部分 -->
        <el-main>
          <!-- 在main部分启动二级路由,菜单中其他的页面也都要显示在这里面 -->
          <!-- 二级路由 -->
          <!-- 使用keepalive缓存部分路由视图, 当路由的meta定义了keepalive属性为true则需要缓存, 如果没定义则不缓存 -->
          <keep-alive>
            <router-view v-if="$route.meta.keepalive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepalive"></router-view>
        </el-main>
        <el-footer>
          备案信息xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavLeft from "@/components/NavLeft";
import TopHeader from "@/components/TopHeader";
export default {
  components: {
    NavLeft,
    TopHeader,
  },
};
</script>

<style lang="less" scoped>
/* 把菜单栏的滚动条给隐藏了 */
::-webkit-scrollbar {
  display: none;
}
.aside {
  /** 当父集为body的时候，设置全屏高度 100% 可能不生效 */
  /** 这里使用 100vh 设置全屏高度 设置全屏宽度用 100vw */
  height: 100vh; /** 高度设置全屏 */
  background-color: #001529;
}
body.dark .el-aside {
  background-color: #001529;
}
.rpart {
  background-color: #e9eef3;
}
.el-header {
  background-color: #fff;
  padding: 0 20px;
}
.dark {
  .el-header {
    background-color: #222;
  }
}
// 设定el-main部分只占屏幕70% 超出部分会使用滚动条
.el-main{height: 70vh;}

.el-footer{text-align: center; font-size: 12px; color: #222; margin-top: 10px;}
</style>