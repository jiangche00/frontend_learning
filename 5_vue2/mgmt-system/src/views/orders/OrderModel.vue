<template>
  <div>
    <el-dialog :title="title" :visible="visible" width="50%" @close="close">
      <el-row :gutter="24">
        <el-form
          :model="ruleForm"
          label-width="80px"
          :rules="rules"
          ref="ruleForm"
        >
          <!-- 左列 -->
          <el-col :span="12">
            <el-form-item label="客户名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="起始城市" prop="start">
              <el-input v-model="ruleForm.start"></el-input>
            </el-form-item>
            <el-form-item label="目的城市" prop="end">
              <el-input v-model="ruleForm.end"></el-input>
            </el-form-item>
            <el-form-item label="货物名称" prop="cargo">
              <el-input v-model="ruleForm.cargo"></el-input>
            </el-form-item>
            <el-form-item label="件数" prop="count">
              <el-input v-model="ruleForm.count"></el-input>
            </el-form-item>
          </el-col>
          <!-- 右列 -->
          <el-col :span="12">
            <el-form-item label="单位" prop="unit">
              <el-input v-model="ruleForm.unit"></el-input>
            </el-form-item>
            <el-form-item label="运费" prop="price">
              <el-input v-model="ruleForm.price"></el-input>
            </el-form-item>
            <el-form-item label="订单来源" prop="from">
              <el-radio-group v-model="ruleForm.from">
                <el-radio label="移动端"></el-radio>
                <el-radio label="pc端"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="是否支付" prop="pay">
              <el-radio-group v-model="ruleForm.pay">
                <el-radio :label="1">已支付</el-radio>
                <el-radio :label="2">未支付</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="save"
          >保 存</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Api } from '@/utils/api';
import { computed } from 'vue';
export default {
  data() {
    return {
      title: "",
      ruleForm: {
        name: "",
        start: "",
        end: "",
        cargo: "",
        count: "",
        unit: "",
        price: "",
        from: "",
        pay: "",
      },
      rules: {
        name:[{required:true,message:"不能为空",trigger:"blur"}],
        start:[{required:true,message:"不能为空",trigger:"blur"}],
        end:[{required:true,message:"不能为空",trigger:"blur"}],
        cargo:[{required:true,message:"不能为空",trigger:"blur"}],
        count:[{required:true,message:"不能为空",trigger:"blur"}],
        unit:[{required:true,message:"不能为空",trigger:"blur"}],
        price:[{required:true,message:"不能为空",trigger:"blur"}],
        from:[{required:true,message:"不能为空",trigger:"change"}],
        pay:[{required:true,message:"不能为空",trigger:"change"}],
      },
    };
  },
  computed: {
    // 拿到vuex里面定义的row state
    ...mapState(["row"])
  },
  props: ["visible"],
  watch: {
    // 当visible属性发生变化
    "visible"(newVal, oldVal) {
        if(newVal === true && oldVal === false) {
            // 动态生成对话矿标题，"新建订单" 或 "编辑订单"
            // 将数据填写到表单里面
            const { name, start, end, count, unit, price, from, pay, cargo } = this.row;
            this.title=name?"编辑订单":"新建订单";
            this.ruleForm = { name, start, end, count, unit, price, from, pay, cargo };
        }
    }
  },
  methods: {
    close() {
      this.$emit("hide");
      this.clearForm();
    },
    clearForm() {
        this.ruleForm = {
        name: "",
        start: "",
        end: "",
        cargo: "",
        count: "",
        unit: "",
        price: "",
        from: "",
        pay: "",
      };
    },
    save() {
        this.$refs.ruleForm.validate(async valid=>{
            if(valid){
                // 新建订单成功
                try {
                    const { message } = await Api.post("/addOrder", this.ruleForm);
                    this.$message({
                        title: "操作成功",
                        message: message,
                        type: "success",
                    })
                    this.close();
                    this.clearForm();
                    // 通知父组件调用自定义事件reload
                    this.$emit("reload");
                } catch (error) {
                    this.$message({
                        title: "操作失败",
                        message: message,
                        type: "error",
                    })
                    console.log(error);
                    this.close();
                    this.clearForm();
                }
            }
        })
    },
  },
};
</script>

<style lang="less" scoped>
</style>