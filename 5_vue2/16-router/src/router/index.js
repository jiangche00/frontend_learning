// 路由代码
// 路由的本质: 路经与视图的对应关系

// 引入Vue
import Vue from "vue";
// 引入VueRouter
import VueRouter from "vue-router";

// @符号就代表src目录
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Home2 from "@/views/Home2.vue";

// 让Vue注册VueRouter插件
Vue.use(VueRouter);

/**
 * 
 * 路由模式:
 *  1. hash模式
 *      基于hash值做的路由，一定会带#号，纯前端，#号后面的不会带到后段去请求
 *      例如, http://localhost:8080/#/home，这个/#/home不会真的去请求到后端接口的/#/home，而只会请求localhost:8080
 *  2. history模式
 *      基于浏览器的history对象, 会按照这个路径去找后端
 *      例如, http://localhost:8080/home, 是会请求到后端 localhost:8080/home接口的
 *     history模式，可能会遇到刷新404
 *     解决方式: 后端nginx/apfgfgache，将404重新定向到主页
 * 
 * 
 * 创建路由的流程
 *  1. src目录里面创建router文件夹,里面创建index.js文件, 引入vue, vue-router 注册插件
 *  2. src目录里面创建views文件夹，里面创建路由实例，即 .vue文件
 *  3. 在index.js里面定义routes数组，里面是若干对象，对象中都是path定义路径 component 定义组件
 *  4. 导出路由，在根实例中引入
 *  5. 定义router-view, 来决定路由页面的显示位置
 * 
 * 
 * 路由的跳转
 *  方法1: router-link标签 to 的方式进行跳转，适合用户点击之后马上跳转的那种场景
 *  方法2: js方式，给对象的click事件绑定method，在method里面使用this.$router.push(“路径”)的方式进行跳转，适合用户点击之后系统做一些判断(比如判断输入是否正确，或者延时几秒钟之类的)，然后再跳转
 * 
 *  to或者push里面的写法
 *      1. 路径字符串 如 "/home" this.$router.push("/home1") <router-link to="/home1"></router-link>
 *      2. 路径对象 如 {path:"/home"} <router-link :to="{path:'/home'}"></router-link>
 *      3. name对象 如 {name:"/home"} <router-link :to="{name:'/home'}"></router-link>
 * 
 *  this.$router.back() 相当于点击浏览器回退按钮
 *  this.$router.go() 相当于点击浏览器前进按钮
 * 
 * 嵌套路由
 *  1. 需要在路由配置项中加入children配置项
 *  2. 需要在想显示的路由视图的位置上再添加一个router-view，也就是说，路由有几级，就要有几个router-view
 *  3. 子路由路径建议在父路由的基础上去添加
 *  4. 如果子路由开头不加斜杠，那么默认，路径就是再父路由基础上继续拼接
 * 
 * 动态路由: 多个路由对应同一个页面
 *  本质上是路由的每一部分都可以设置成为变量，以冒号形式书写如 /home/:id/:name
 *  在路由组件中可以通过this.$route对象中的params对象拿到我们传入的动态路径
 * 
 * 查询参数query:
 *  拼接在地址后面以?链接如 /home?a=1&b=2
 * 
 * 通配符
 *  path:"*" 可以匹配任意路径，一般是写一个404页面。放在最后。版本更新之后似乎先后顺序无所谓了，但是建议还是原则性将通配放在最后
 * 
 * 重定向: 当用户访问一个路径的时候自动给你跳转到另一个路径
 * 
 * 别名: alias
 * 
 * 导航守卫
 */


/**
 * 
 * 完整的导航解析流程
 * 
 * 1. 导航被触发
 * 2. 在失活的组件里调用beforeRouteLeave守卫
 * 3. 调用全局的beforeEach守卫
 * 4. 在重用的组件里调用beforeRouteUpdate守卫
 * 5. 在路由配置里调用beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件里面调用beforeRouteEnber
 * 8. 调用全局的beforeResolve守卫
 * 9. 导航被确认
 * 10.调用全局afterEach钩子
 * 11.触发DOM更新
 * 12. 调用beforeRouteEnter守卫中传给next的回调函数,创建好的组件实例会作为回调函数的参数传入
 * 
 */



/**
 * 
 * 路由表中有多少配置项
 * path
 * component
 * children
 * name
 * redirect
 * alias
 * meta
 */

// 路由项中的meta携带一些元信息，内容是个对象，对象里面的内容随便写
// 在实际开发项目中，meta一般携带每个路由所特有的信息。meta中的内容并不影响组件的任何方法和行为
// meta使用案例：面包屑导航
//   页面左上角的 类似 "列表页 / 搜索列表 / 项目" 这种提示当前页面位置的东西



// 写路径和视图的对应关系
const routes = [
    // 当访问 "/" 时，不在router-view里面渲染任何东西
    { path:"/", component: { render: h=> h() } },
    { 
        path:"/home", 
        component: Home,
        // 嵌套的二级路由
        children: [
            // 在父路由的基础上，拼接上去
            // home1的引入方式称为路由懒加载，不在上面引用而是在这里用箭头函数的方式引入
            // 路由懒加载的方式，性能会相对高一些
            { path: "/home/home1", component: ()=>import("@/views/Home1") },
            { 
                path: "/home/home2",
                // 路由别名，访问/home/home2 和 /home222 等效
                alias: "/home222",
                component: Home2 
            },
            { path: "/home/home3", name: "home3", component: ()=>import("@/views/Home3.vue") },
            // 动态路由，加冒号
            { path: "/home/:student/:id", name: "student", component: ()=>import("@/views/Grade") },
            // Query
            { path: "/home/query", name: "query", component: ()=>import("@/views/Query") },
        ]
    },
    { 
        path:"/about",
        // 访问/about, 重定向到 /home/home1
        redirect:"/home/home1",
        component: About, 
    },
    // 通配符*号匹配所有路径 vue3.x放在最后，vue4.x似乎可以放在前面
    { path:"*", component: ()=>import("@/views/Default") },
]

// 创建router实例, 使用history模式的路由(默认为hash路由)
const router = new VueRouter({
    routes: routes,
    mode: "history",
})

export default router;
