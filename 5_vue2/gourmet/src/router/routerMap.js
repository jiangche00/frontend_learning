const routes = [
    { path:"/", name: "home", component: ()=>import("@/views/Home") },
    { path:"/detail", name: "detail", component: ()=>import("@/views/Detail") },
]

export default routes;