const routes = [
    { path:"/", component: { render: h=> h() } },
    { path:"/home", component: ()=>import("@/views/Home") },
    { 
        path:"/about", 
        component: ()=>import("@/views/About"),
        // 独享守卫, 只守卫 /about 路由， 其他的不守卫
        beforeEnter:(to, from, next) => {
            console.log("about的独享守卫触发了");
            next("/login");
        },
    },
    { path:"/student/:id", name:"grade", component: ()=>import("@/views/Grade")},
    { path:"/login", component: ()=>import("@/views/Login") },
]

export default routes;
