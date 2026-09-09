import router from "./index";
// 引入动态路由表
import asyncroutes from "./asyncRouterMap";
// 引入vuex的store
import store from "@/store"


// 全局导航守卫
router.beforeEach(async (to, from, next) => {
    // 简单的判断，实际生产中需要增加逻辑
    // 判断准则, 如果有sessionStorage里面有token:
    //  1. 若要访问/login，则跳转回主页
    //  2. 若要访问其他, 放行
    // 如果sessionStorage里面没有token:
    //  1. 若要访问/login，放行(没有token的只能让他访问login)
    //  2. 若要访问其他，则强制跳转到/login(没login拿token，其他的页面不能访问)
    const hasToken = sessionStorage.getItem("token")
    if (hasToken) {
        // 每次都使用store.dispatch，调用getRole action，让store中存储role
        await store.dispatch("getRole");
        if (to.path === "/login") {
            next("/");
        } else {
            // 设计思路:
            // 由于route.addRoute是异步操作
            // 为防止在路由条目还没添加上之前，就next()导致报错
            // 添加一个循环，只要是to.name == null (即还没添加上所要去往的路由)
            // 就重复进行路由添加的操作， 并且重新来一遍 next({ ...to })
            if (to.name == null) {
                // 动态添加路由 router.addRoute()
                // 判断权限
                // 筛选路由，筛选路由项中, meta.auth里面 含有 store.state.role 角色字符串 的 路由项
                let f = asyncroutes.filter(item => item.meta.auth.includes(store.state.role))
                for (let i = 0; i < f.length; i++) {
                    router.addRoute("layout",f[i]); //添加到父路由"layout"下面
                }
                next({ ...to, replace:true}) // 重新跳到to, 并且设置replace为true，就是替换当前导航的作用，让浏览器的回退功能失效(各种浏览器上都有个回退按钮，点那个按钮就是回退到上一页)
            } else {
                next();
            }
        }
    } else {
        if (to.path === "/login") {
            next();
        } else {
            next("/login");
        }
    }
})