const routes = [
  { path:"/", 
    name: "layout", 
    component: ()=>import("@/views/Layout"),
    // 设定只要访问 "/", 就重定向到 "/index"
    redirect: "/index",
    children: [
      // 子路由 /index
      {
        path:"/index",
        name:"index",
        component:()=>import("@/views/index/Home")
      },
      // 子路由 /personal 个人中心
      {
        path:"/personal",
        name:"personal",
        component:()=>import("@/views/personal/Index")
      },
      // 子路由 /orders/list 订单管理/订单列表
      {
        path:"/orders/list",
        name:"order_list",
        meta:{bread:["订单管理","订单列表"]},
        component:()=>import("@/views/orders/OrderList")
      },
      // 子路由 /waybill/list 运单管理/运单列表
      {
        path: "/waybill/list",
        name:"waybill_list",
        component:()=>import("@/views/waybill/WayBillList"),
        meta:{bread:["运单管理", "运单列表"],keepalive:true}
      },
      // 子路由 /waybill/list/detail
      {
        path: "/waybill/list/detail",
        name: "waybill_list_detail",
        component:()=>import("@/views/waybill/WayBillDetail"),
        meta:{bread:["运单管理","运单列表","运单详情"]}
      },
      // 子路由 /customer
      {
        path: "/customer",
        name: "customer",
        component:()=>import("@/views/customer/customerIndex"),
      }
    ], 
  },
  { path:"/login", name: "login", component: ()=>import("@/views/Login") },
  { path:"/register", name: "register", component: ()=>import("@/views/Register") },
]
export default routes