<template>
  <div>
    <div class="top">
      <el-dropdown class="fr" @command="handleClick">
        <span class="el-dropdown-link">
          欢迎您, {{ nickname }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="b">修改密码</el-dropdown-item>
          <el-dropdown-item command="c">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <p class="date fr">今天是你在公司的第 <span>{{ getWorkingDays }}</span> 天</p>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import { Api } from '@/utils/api';
export default {
  data() {
    return {
      // 从sessionStorage里面把nickname取出来
      nickname: sessionStorage.getItem("nickname"),
      onboardTime: new Date(),
    }
  },
  created() {
    this.getWorkingTime();
  },
  methods: {
    async getWorkingTime() {
      try {
        const {time} = await Api.get("/in");
        this.onboardTime = time;
      } catch(error) {
        console.log(error);
      }
    },
    handleClick(command) {
      if(command === "c") {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("nickname");
        this.$router.push("/login");
      }
    }
  },
  computed: {
    getWorkingDays() {
      let now = new Date();
      let target = new Date(this.onboardTime);
      return Math.floor((now - target)/(1000*60*60*24));
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  height: 60px;
  line-height: 60px;
  float: right;
  .date{
    margin-right: 20px;
    span{
      font-size: 24px;
      color: #5696ff;
    }
  }
}
</style>