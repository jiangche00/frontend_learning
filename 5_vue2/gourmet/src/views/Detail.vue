<template>
    <div>
        <template v-if="page === 'search' || page === 'class'">
            <div v-for="item in list" :key="item.key">
                <h1>{{ item.name }}</h1>
                <img :src="item.pic" alt="">
                <p v-html="item.content"></p>
                <div v-for="i in item.material" :key="i.mname">
                    {{ i.mname }}: {{ i.amount }}
                </div>
                <h3>烹饪步骤</h3>
                <div v-for="(i, index) in item.process" :key="index">
                    <p v-html="i.pcontent"></p>
                    <img :src="i.pic" alt="" width="20%">
                </div>
            </div>
        </template>
        <template v-else>
            <div>
                blank
            </div>
        </template>
    </div>
</template>

<script>
    import jisuapi from '@/api/jisuapi';
    export default {
        data() {
            return {
                list: [],
                page: "blank",
            }
        },
        created() {
            // 通过搜索进来的
            if(this.$route.query.search) {
                this.page = "search";
                jisuapi.get("/search", {
                    params: {
                        num: 10,
                        start: 0,
                        keyword: this.$route.query.search,
                    }
                }).then((res)=>{
                    this.list = res.result.list;
                    console.log(res);
                }).catch((error)=>{
                    console.log(error);
                })
            // 通过点击分类进来的                
            } else if (this.$route.query.class) {
                this.page = "class";
                jisuapi.get("/byclass", {
                    params: {
                        num: 10,
                        start: 0,
                        classid: this.$route.query.class
                    }
                }).then((res)=>{
                    this.list = res.result.list;
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>

</style>