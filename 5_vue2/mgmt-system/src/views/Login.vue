<template>
    <div>
        <!-- 使用 el-row 布局, flex, 将 card 剧中 -->
        <el-row type="flex" justify="center">
          <el-col :span="8">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <h1>物流管理后台系统</h1>
                </div>
                <!-- 输入用户名密码的表单 -->
                <!-- 复制粘贴 elementUI 的 From 样例进来，然后删掉不需要的，只保2个from-item用于留输入用户名密码 -->
                <!-- 推荐el-from 绑定model到一个对象,这个对象里面保存用户名密码 from-item再用v-model双向绑定对象中的具体属性 -->
                <!-- el-from绑定rules， 按照elementUI官方文档的写法，写入规则  -->
                <!-- el-from设置一个ref, 目的是为了在之后的表单验证中，使用this.$refs["rumeForm"]拿到该DOM对象 -->
                <!-- vue不推荐直接操作DOM对象，但在一些特定的场景下，可能需要ref的方式拿到该DOM对象进行下一步操作，比如这种表单验证的场景 -->
                <!-- ref 和 document.getelementById的不同, ref能获取组件对象, document.getElementById只能获取元素对象，原组件中的data methods就没法使用了 -->
                <el-form :model="ruleForm" label-width="80px" :rules="rules" ref="ruleForm">
                    <el-form-item label="用户名: " prop="username">
                        <!-- 双向绑定到对象中的username -->
                        <el-input v-model="ruleForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码: " prop="password">
                        <!-- 双向绑定到对象中的password -->
                        <el-input type="password" v-model="ruleForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <!-- 登陆按钮, click绑定login -->
                        <!-- 绑定loading, true的时候转圈, false的时候不转圈 -->
                        <el-button type="primary" style="width:100%" @click="login" :loading="loading">登陆</el-button>
                    </el-form-item>
                </el-form>
                <!-- 增加 第三方验证 和 注册跳转页，后期补充 -->
                <el-row type="flex" justify="space-around">
                    <el-col :span="8">
                        <el-link type="primary" :underline="false" style="width: 100%;">第三方验证</el-link>
                    </el-col>
                    <el-col :span="8">
                        <el-link type="primary" href="/register" :underline="false" style="width: 100%;">没有账号? 点击注册</el-link>
                    </el-col>
                </el-row>
            </el-card>
          </el-col>
        </el-row>
    </div>
</template>

<script>
    import {Api} from '@/utils/api'
    import { mapMutations } from 'vuex';
    export default {
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { pattern:/^\w{4,8}$/, message: '用户名要求4-8位数字字母组合', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, message: '密码要求至少8位,并含有至少1个大写字符,小写字符,数字', trigger: 'blur' }
                    ]
                },
                loading: false,
            }
        },
        methods: {
            ...mapMutations(["setRole"]),
            // 登陆函数
            login() {
                // 使用表单验证函数
                this.$refs.ruleForm.validate(async valid=>{
                    if(valid) {
                        this.loading=true;
                        // 验证通过，发请求给后端
                        await Api.post("/login", this.ruleForm).then(({token,nickname})=>{
                            this.loading=false;
                            // 将token存起来
                            sessionStorage.setItem("token", token);
                            // 将nickname存起来
                            sessionStorage.setItem("nickname", nickname);
                            // 将role存到vuex里面
                            this.setRole(role);
                            this.$router.push("/");
                        })
                        .catch(error=>{
                            console.log(error);
                            this.loading=false;
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
.box-card{
    margin-top: 200px;
    h1{
        text-align: center;
        font-size: 24px;
    }
}
.register{
    width: 100%;
}
</style>