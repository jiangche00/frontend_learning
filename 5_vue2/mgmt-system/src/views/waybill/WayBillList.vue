<template>
  <div>
    <bread-crumb></bread-crumb>
    <!-- 运单号input, 客户input, 时间选择器, 查询重置按钮 -->
    <el-card style="margin-top: 10px">
      <el-row :gutter="24">
        <el-col :span="6">
          <el-input
            v-model="params.waybillNo"
            placeholder="请输入运单号"
          ></el-input>
        </el-col>
        <el-col :span="6">
          <el-input
            v-model="params.name"
            placeholder="请输入客户名称"
          ></el-input>
        </el-col>
        <el-col :span="6">
          <el-date-picker
            style="width: 100%"
            v-model="date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <el-button type="primary" @click="loadData">查询</el-button>
          <el-button type="primary" @click="reset">重置</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 按钮单选框 -->
    <el-card style="margin-top: 10px">
      <el-radio-group v-model="params.status" @input="change">
        <el-radio-button :label="1">全部运单</el-radio-button>
        <el-radio-button :label="2">装货中</el-radio-button>
        <el-radio-button :label="3">运输中</el-radio-button>
        <el-radio-button :label="4">已完成</el-radio-button>
        <el-radio-button :label="5">运单异常</el-radio-button>
      </el-radio-group>
    </el-card>
    <!-- 数据表格 -->
    <el-card style="margin-top: 10px">
      <el-table
        :data="tableData"
        v-loading="loading"
        element-loading-background="rgba(0,0,0,0.3)"
      >
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column label="运单号" prop="no"></el-table-column>
        <el-table-column label="下单时间" prop="date"></el-table-column>
        <el-table-column label="客户名称" prop="name"></el-table-column>
        <el-table-column label="货物名称" prop="cargo"></el-table-column>
        <el-table-column label="件数" prop="count"></el-table-column>
        <el-table-column label="起始地" prop="start"></el-table-column>
        <el-table-column label="目的地" prop="end"></el-table-column>
        <el-table-column label="运费" prop="price"></el-table-column>
        <el-table-column label="需要接货" prop="needReceive">
          <template slot-scope="scope">
            {{ scope.row.needReceive === 1 ? "需要" : "不需要" }}
          </template>
        </el-table-column>
        <el-table-column label="车牌号" prop="plateNumber"></el-table-column>
        <el-table-column label="司机姓名" prop="driver"></el-table-column>
        <el-table-column label="司机电话" prop="tel"></el-table-column>
        <el-table-column label="运输进度" prop="percent">
          <template slot-scope="scope">
            <el-progress :percentage="scope.row.percent"></el-progress>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template>
            <el-button size="mini" @click="redirectTo">详情</el-button>
            <el-button size="mini" type="danger">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 current-change绑定当前页变化时触发的事件, size-change绑定当多少条每页变化时触发的事件 -->
      <el-pagination
        class="fr"
        style="margin-top: 10px"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageData.page"
        :page-sizes="[20, 40, 60, 80]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
      <div class="clear"></div>
    </el-card>
  </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb";
import moment from "moment";
import { Api } from "@/utils/api";
export default {
  components: {
    BreadCrumb,
  },
  created() {
    this.loadData();
  },
  destroyed() {
    console.log("destroyed");
  },
  // 离开路由的守卫
  beforeRouteLeave(to, from, next) {
    // 在路由离开的时候进行判断,如果去详情页，什么都不做
    // 如果去其他页面，清除掉keep-alive缓存
    if(to.path!=="/waybill/list/detail") {
      this.clearCache();
    }
    next();
  },
  data() {
    return {
      params: {
        waybillNo: "",
        name: "",
        status: "1",
      },
      date: [],
      pageData: {
        page: 1,
        pageSize: 10,
      },
      tableData: [],
      total: 0,
      loading: false,
    };
  },
  methods: {
    async loadData() {
      this.loading = true;
      const startDate = this.date[0]
        ? moment(this.date[0]).format("YYYY-MM-DD")
        : "";
      const endDate = this.date[1]
        ? moment(this.date[1]).format("YYYY-MM-DD")
        : "";
      try {
        const {
          data: { list, total },
        } = await Api.post("/waybillList", {
          ...this.params,
          ...this.pageData,
          startDate: startDate,
          endDate: endDate,
        });
        this.tableData = list;
        this.total = total;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    handleCurrentChange(page) {
      this.pageData.page = page;
      this.loadData();
    },
    handleSizeChange(pageSize) {
      this.pageData.pageSize = pageSize;
      this.loadData();
    },
    change() {
      this.loadData();
    },
    redirectTo() {
      this.$router.push("/waybill/list/detail");
    },
    reset() {
      this.params = {
        waybillNo: "",
        name: "",
        status: 1,
      };
      this.date = [];
      this.pageData = {
        page: 1,
        pageSize: 10,
      };
      this.loadData();
    },
    // 主动销毁缓存的函数
    clearCache() {
      let vnode = this.$vnode;
      let parentVnode = vnode && vnode.parent;
      if (
        parentVnode &&
        parentVnode.componentInstance &&
        parentVnode.componentInstance.cache
      ) {
        var key =
          vnode.key == null
            ? vnode.componentOptions.Ctor.cid +
              (vnode.componentOptions.tag
                ? `::${vnode.componentOptions.tag}`
                : "")
            : vnode.key;
        var cache = parentVnode.componentInstance.cache;
        var keys = parentVnode.componentInstance.keys;
        if (cache[key]) {
          this.$destroy();
          if (keys.length) {
            var index = keys.indexOf(key);
            if (index > -1) {
              keys.splice(index, 1);
            }
          }
          cache[key] = null;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>