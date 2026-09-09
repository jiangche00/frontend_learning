<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- el-card里面左边搜索框右边按钮 -->
    <el-card style="margin-top: 10px">
      <el-row>
        <el-col :span="6">
          <el-input
            placeholder="请输入内容"
            v-model="params.keyword"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search" @click="loadData"></el-button>
          </el-input>
        </el-col>
        <el-col :span="8" :offset="10" style="text-align: right">
          <el-button type="primary" @click="createNewOrder">新建订单</el-button>
          <el-button :disabled="!selection.length" @click="operate(1)">审核</el-button>
          <el-button :disabled="!selection.length" @click="operate(2)">修改</el-button>
          <el-button :disabled="!selection.length" @click="operate(3)">作废</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-top: 10px">
      <!-- table的数据从tableData里面取, 添加loading效果和loading时的背景遮罩 -->
      <el-table :data="tableData" style="width: 100%" v-loading="loading" element-loading-background="rgba(0,0,0,0.3)" @selection-change="handleSelectionChange">
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="订单号" prop="id" width="100"></el-table-column>
        <el-table-column label="序号" type="index" width="50"></el-table-column>
        <el-table-column label="状态" prop="status">
          <!-- 作用域插槽(deprecated by vue) -->
          <template slot-scope="scope">
            <span v-if="scope.row.status === 1">待审核</span>
            <span v-else-if="scope.row.status === 2">已审核</span>
            <span v-else-if="scope.row.status === 3">审核通过</span>
            <span v-else>审核拒绝</span>
          </template>
        </el-table-column>
        <el-table-column label="下单时间" prop="date"></el-table-column>
        <el-table-column label="客户名称" prop="name"></el-table-column>
        <el-table-column label="起始城市" prop="start"></el-table-column>
        <el-table-column label="目的城市" prop="end"></el-table-column>
        <el-table-column label="货物名称" prop="cargo"></el-table-column>
        <el-table-column label="件数" prop="count"></el-table-column>
        <el-table-column label="单位" prop="unit"></el-table-column>
        <el-table-column label="运费" prop="price"></el-table-column>
        <el-table-column label="订单来源" prop="from"></el-table-column>
        <el-table-column label="是否支付" prop="pay" width="80">
          <template slot-scope="scope">
            <span v-if="scope.row.pay === 1">已支付</span>
            <span v-else>未支付</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <!-- 点击 编辑 按钮，将当前行的数据作为参数传到函数里面，使用scope.row获取当前行的数据 -->
            <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 current-change绑定当前页变化时触发的事件, size-change绑定当多少条每页变化时触发的事件 -->
      <el-pagination class="fr" style="margin-top: 10px;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20, 40, 60, 80]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
      <div class="clear"></div>
    </el-card>
    <order-model :visible="visible" @hide="visible=false" @reload="loadData"></order-model>
  </div>
</template>

<script>
import BreadCrumb from "@/mixins/BreadCrumb";
import { Api } from "@/utils/api";
import OrderModel from "./OrderModel";
import { mapMutations } from "vuex";
export default {
  mixins: [BreadCrumb],
  components: {
    OrderModel,
  },
  data() {
    return {
      loading: false,
      tableData: [],
      currentPage: 1,
      total: 20,
      params:{
        page: 1,
        pageSize: 20,
        keyword: ""
      },
      selection: [],
      visible: false,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    // 拿到vuex里面定义的setRow mutation
    ...mapMutations(["setRow"]),
    async loadData() {
      try {
        this.loading = true;
        const {
          data: { list, total },
        } = await Api.post("/orderList", this.params);
        this.tableData = list;
        this.total = total;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    handleCurrentChange(page) {
      this.params.page = page;
      this.loadData();
    },
    handleSizeChange(pageSize) {
      this.params.pageSize = pageSize;
      this.loadData();
    },
    handleSelectionChange(selection) {
      this.selection = selection;
    },
    operate(num) {
      const nos = this.selection.map(item=>item.id)
      this.$notify({
        title: "操作成功",
        message: nos,
        type: "success"
      })
    },
    edit(row) {
      // 点击编辑，打开弹窗, 即设置visible为true
      this.visible = true;
      // 提交mutation修改数据
      this.setRow(row);
    },
    createNewOrder() {
      this.visible = true;
      // 点击 新建订单 时，清空vuex里面的row, 保证新建订单点击之后弹出的对话框里面没有数据
      this.setRow({});
    }
  },
};
</script>

<style lang="less" scoped>
</style>