<template>
    <div class="wrap">
        <input type="text" placeholder="搜索美食" v-model="searchValue" @keyup.enter="search">
        <button @click="recommend">加载推荐数据</button>
        <div class="tag">
            <div class="tags" v-for="(item, index) in list" :key="item.classid" @click="select(index)">{{ item.name }}</div>
            <div class="content">
                <div v-for="item in recList" :key="item.classid" @click="byClass(item.classid)">{{ item.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import jisuapi from '@/api/jisuapi';
    export default {
        data() {
            return {
                searchValue: "",
                list:[],
                recList:[],
            }
        },
        methods: {
            // 主页搜索,按回车之后，跳转到详情页面
            search(){
                this.$router.push(`/detail?search=${this.searchValue}`);
            },
            // 主页推荐
            recommend() {
                jisuapi.get("/class", {   
                }).then((res)=>{
                    console.log(res);
                    this.list = res.result;
                    this.recList = res.result[0].list.slice(0,10);
                }).catch((error)=>{
                    console.log(error);
                })
            },
            select(index) {
                this.recList = this.list[index].list.slice(0,10);
            },
            byClass(index) {
                this.$router.push(`/detail?class=${index}`);
            }
        }
    }
</script>

<style scoped>
.wrap{
    padding: 15px;
}
input{width: 100%; height: 50px;}
.tags{
    display: inline-block; 
    padding: 5px 10px; 
    background-color: burlywood; 
    margin-right: 2px; 
    border-radius: 5px;
    margin-top: 5px;
    color: #fff;
}
.content div{
    display: inline-block;
    width: 40%;
    height: 100px;
    background-color: aquamarine;
    text-align: center;
    line-height: 100px;
    border-radius: 10px;
    margin: 10px;
}
</style>