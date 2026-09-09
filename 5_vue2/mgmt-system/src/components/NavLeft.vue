<template>
  <div>
    <h1 class="title">物流平台</h1>
    <!-- 根据后端的返回, 动态生成菜单 -->
    <!-- 在组件MenusVue.vue里面，通过递归的方式，生成菜单 -->
    <!-- router属性: 是否使用vue-router模式, 启用该模式会在激活导航时以index作为path进行路由跳转 -->
    <el-menu background-color="#001529" text-color="#fff" active-text-color="#fff" :router="true">
      <menus-vue
        v-for="(item, index) in menuData"
        :menu="item"
        :key="index"
      ></menus-vue>
    </el-menu>
  </div>
</template>

<script>
import { Api } from "@/utils/api";
import MenusVue from "./MenusVue";
export default {
  created() {
    this.getMenu();
  },
  data() {
    return {
      menuData: [],
    };
  },
  methods: {
    // 获取menu
    async getMenu() {
      try {
        // 直接解构出data数据
        let { data } = await Api.get("/menu");
        this.menuData = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    MenusVue,
  },
};
</script>

<style lang="less" scoped>
h1{
  font-size: 20px;
  text-align: center;
}
.title {
  background-color: #001529;
  line-height: 80px;
  color: #e5eaf3;
}
</style>