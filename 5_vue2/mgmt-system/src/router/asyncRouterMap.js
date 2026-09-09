const asyncroutes = [
    {
        // 考勤页面
        path: "/attendance",
        name: "attendance",
        component: ()=>import("@/views/authview/Attendance"),
        // 在meta里面记录权限
        meta:{auth:["boss","administrative"]}
    },
    {
        // 工资页面
        path: "/salary",
        name: "salary",
        component: ()=>import("@/views/authview/Salary"),
        meta:{auth:["boss","finance"]}
    },
    { 
        // 404页面
        path:"*", 
        name: "not_found", 
        component: ()=>import("@/views/NotFound"),
        meta:{auth:["boss","finance","administrative"]}
    }
]

export default asyncroutes