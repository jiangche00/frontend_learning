<template>
    <div>
        Page1, {{ msg }}
        欧元: {{ ou }}
        温度: {{ temp }}
        <div>
            {{ abcd }}, {{ moduleATxt }}, {{ moduleBTxt }}
        </div>
        <div>
            <button @click="changeTxt">change txt</button>
            <button @click="changeModuleBTxt">change moduleB txt</button>
        </div>
        <page-1-child></page-1-child>
        <button @click="update">change msg</button>
        <div>
            <button @click="buyKeyBoard">买键盘</button>
            <button @click="buyMonitor">买显示器</button>
            <button @click="getTemperature">获取温度</button>
        </div>
    </div>
</template>

<script>
    import Page1Child from './Page1Child.vue';
    import { mapState, mapMutations } from 'vuex';
    import {BUYMONITOR} from '@/store/mutation-type';
    export default {
        created() {
            console.log(this.$store.state.msg);
        },
        data() {
            return {
                temp: ""
            }
        },
        computed: {
            // 相当于下面msg()那段的简写
            // 注意如果这么用，需要保证mapstate形参数组里面的名字，需要和vuex里面要取的数据的名字一致
            // 比如这里...mapState(["msg"]) 的 msg，需要确保vuex的state里面也定义了一个msg，才能用
            // 可以写成这样的形式： ...mapState(["aaa", "bbb", "ccc"])
            ...mapState(["msg"]),
            // msg() {
            //     return this.$store.getters.sex;
            // },
            ou() {
                return this.$store.getters.exchange(10);
            },

            // 如下方式可以将vuex里面的txt映射为组件中名为abcd的计算属性
            // 相当于在组件的页面中使用 {{ abcd }} 就等效于使用rootTxt()那段创建了名为rootTxt的计算属性然后再 {{ rootTxt }} 这么在页面中使用
            ...mapState({
                abcd: "txt",
            }),
            // rootTxt() {
            //     return this.$store.state.txt;
            // },
            moduleATxt() {
                return this.$store.state.moduleA.txt;
            },
            moduleBTxt() {
                return this.$store.state.moduleB.txt;
            }
        },
        methods: {
            update() {

            },
            buyKeyBoard() {
                this.$store.commit("buyKeyBoard");
            },
            buyMonitor() {
                this.$store.commit({type:BUYMONITOR, money:200});
            },
            getTemperature() {
                this.$store.dispatch("changeAsync").then(()=>{
                    console.log("get temperature success");
                    console.log(this.$store.state.temperature);
                    this.temp = this.$store.state.temperature;
                }).catch((error)=>{
                    console.log("get temperature failure");
                    this.temp = -999;
                })
            },
            changeTxt() {
                this.$store.commit("changeTxt");
            },
            // 提交moduleB的changeTxt, 相当于changeModuleBTxt(){}这个函数
            ...mapMutations("moduleB",{changeModuleBTxt: "changeTxt"}),
            // changeModuleBTxt() {
            //     this.$store.commit("moduleB/changeTxt");
            // }
        },
        components: {
            Page1Child,
        }
    }
</script>

<style scoped>

</style>