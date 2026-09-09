// 混入, 面包屑导航
export default{
    data() {
        return {
            breadList: [],
        }
    },
    created(){
        this.getBreadCrumb();
    },
    watch:{
        $route() {
            this.getBreadCrumb();
        }
    },
    methods: {
        getBreadCrumb() {
            this.breadList = this.$route.meta.bread || []
        }
    }
}