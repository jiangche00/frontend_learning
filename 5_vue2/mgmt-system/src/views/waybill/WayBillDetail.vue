<template>
  <div>
    <bread-crumb></bread-crumb>
    <el-card style="margin-top: 10px">
      <el-row :gutter="24">
        <el-col :span="12" style="text-align: left; margin-top: 5px">
          <span>运单编号: YGC20170110000001</span>
          <span>创建时间: 2022-08-24</span>
          <span>审核员： aaa</span>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <el-button type="primary" @click="back">返回</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 步骤条 -->
    <el-card>
      <el-steps :active="2" align-center>
        <el-step
          title="步骤1"
          description="未发货"
        ></el-step>
        <el-step
          title="步骤2"
          description="运输中"
        ></el-step>
        <el-step
          title="步骤3"
          description="已收货"
        ></el-step>
        <el-step
          title="步骤4"
          description="已完成"
        ></el-step>
      </el-steps>
    </el-card>
    <!-- 信息 -->
    <el-card style="margin-top: 10px;">
        <el-row :gutter="24">
            <h1>基础信息</h1>
            <el-col :span="6">
                <p>客户名称:诺来科技有限公司</p>
                <p>货物名称:口罩</p>
                <p>数量:8(吨)</p>
            </el-col>
            <el-col :span="6">
                <p>是否是易燃易爆品: 不是</p>
                <p>结算方式:现付</p>
                <p>运费:12000元</p>
            </el-col>
            <el-col :span="6">
                <p>发货单据:暂未上传</p>
                <p>接货单据:暂未上传</p>
                <p>所属业务员: aaa</p>
            </el-col>
            <el-col :span="6">
                <p>客户下单时间:2000-08-20</p>
                <p>是否需要接货:不需要</p>
            </el-col>
        </el-row>
        <!-- 分割线 -->
        <el-divider></el-divider>
        <el-row :gutter="24">
            <h1>基础信息</h1>
            <el-col :span="6">
                <p>客户名称:诺来科技有限公司</p>
                <p>货物名称:口罩</p>
                <p>数量:8(吨)</p>
            </el-col>
            <el-col :span="6">
                <p>是否是易燃易爆品: 不是</p>
                <p>结算方式:现付</p>
                <p>运费:12000元</p>
            </el-col>
            <el-col :span="6">
                <p>发货单据:暂未上传</p>
                <p>接货单据:暂未上传</p>
                <p>所属业务员: aaa</p>
            </el-col>
            <el-col :span="6">
                <p>客户下单时间:2000-08-20</p>
                <p>是否需要接货:不需要</p>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row :gutter="24">
            <h1>基础信息</h1>
            <el-col :span="6">
                <p>客户名称:诺来科技有限公司</p>
                <p>货物名称:口罩</p>
                <p>数量:8(吨)</p>
            </el-col>
            <el-col :span="6">
                <p>是否是易燃易爆品: 不是</p>
                <p>结算方式:现付</p>
                <p>运费:12000元</p>
            </el-col>
            <el-col :span="6">
                <p>发货单据:暂未上传</p>
                <p>接货单据:暂未上传</p>
                <p>所属业务员: aaa</p>
            </el-col>
            <el-col :span="6">
                <p>客户下单时间:2000-08-20</p>
                <p>是否需要接货:不需要</p>
            </el-col>
        </el-row>
    </el-card>
  </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb";
export default {
  components: {
    BreadCrumb,
  },
  methods: {
    back() {
        this.$router.push("/waybill/list");
    }
  }
};
</script>

<style lang="less" scoped>
</style>