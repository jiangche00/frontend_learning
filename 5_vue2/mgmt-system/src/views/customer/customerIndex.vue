<template>
  <div>
    <el-card style="margin-top: 10px;">
      <el-row :gutter="24">
        <el-col :span="18">
          <el-row :gutter="24">
            <el-col :span="8">
              <el-input placeholder="用户昵称"></el-input>
            </el-col>
            <el-col :span="8">
              <el-input placeholder="客户ID"></el-input>
            </el-col>
            <el-col :span="8">
              <el-input placeholder="联系电话"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="24" style="margin-top: 10px;" v-show="show">
            <el-col :span="8">
              <el-input placeholder="车牌号"></el-input>
            </el-col>
            <el-col :span="8">
              <el-input placeholder="客户类型"></el-input>
            </el-col>
            <el-col :span="8">
              <el-input placeholder="配送区域"></el-input>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <span style="color: #5696ff;" @click="show = !show">
            {{ show ? "收起" : "展开" }}<i :class="`el-icon-arrow-${show?'up':'down'}`"></i>
          </span>
        </el-col>
        <el-col :span="4" style="text-align: right;">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  }
};
</script>

<style lang="less" scoped>
.el-dropdown-link{
  cursor: pointer;
  color: #409eff;
}
</style>