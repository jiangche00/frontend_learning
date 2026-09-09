import mockjs from "mockjs";

// 模拟网络延时0.5秒
mockjs.setup({
    timeout: 500,
})

// login接口进行验证
mockjs.mock("/api/login","post",(req)=>{

    const{username, password} = JSON.parse(req.body)
    if(username ==="admin"&&password==="1qaz@WSX"){
        return {
            code: 200,
            success: true,
            message: "登陆成功",
            nickname: "管理员",
            token:"6fdca5f4938fb3015bac",
            role:"boss",
        }
    } else {
        return {
            code: 401,
            success: false,
            message:"账号密码有误"
        }
    }
})

// 模拟admin登陆菜单返回
const menuList = [
    {
        name: "首页",
        icon: "el-icon-s-home",
        url: "/index"
    },
    {
        name: "订单管理",
        icon: "el-icon-s-order",
        url: "/order",
        children: [
            {
                name: "订单列表",
                icon: "el-icon-user",
                url: "/orders/list",
            }
        ]
    },
    {
        name: "运单管理",
        icon: "el-icon-menu",
        url: "/waybill",
        children: [
            {
                name: "运单录入",
                icon: "el-icon-notebook-2",
                url: "/waybill/in"
            },
            {
                name: "运单列表",
                icon: "el-icon-truck",
                url: "/waybill/list"
            }
        ]
    },
    {
        name: "发车管理",
        icon: "el-icon-s-order",
        url: "/depart",
        children: [
            {
                name: "发车数据单",
                icon: "el-icon-tickets",
                url: "/depart/data"
            }
        ]
    },
    {
        name: "承运商管理",
        icon: "el-icon-user",
        url: "/carrier",
        children: [
            {
                name: "承运商列表",
                icon: "el-icon-chat-square",
                url: "/carrier/list"
            },
            {
                name: "车辆列表",
                icon: "el-icon-bank-card",
                url: "/carrier/trucks"
            },
            {
                name: "承运司机列表",
                icon: "el-icon-bank-card",
                url: "/carrier/list"
            }
        ]
    },
    {
        name: "客户管理",
        icon: "el-icon-chat-dot-square",
        url: "/customer",
    },
    {
        name: "财务管理",
        icon: "el-icon-user",
        url: "/my",
        children: [
            {
                name: "客户对账单",
                icon: "el-icon-chat-square",
                url: "/customer/info"
            },
            {
                name: "承运商对账单",
                icon: "el-icon-bank-card",
                url: "/record"
            },
            {
                name: "承运司机列表",
                icon: "el-icon-bank-card",
                url: "/record"
            },
        ]
    },
    {
        name: "个人中心",
        icon: "el-icon-chat-dot-square",
        url: "/personal"
    },
    {
        name: "考勤页面",
        icon: "el-icon-chat-dot-square",
        url: "/attendance"
    },
    {
        name: "工资页面",
        icon: "el-icon-chat-dot-square",
        url: "/salary"
    }
]

// 返回菜单数据，这里模拟返回用上面的menuList对象
mockjs.mock("/api/menu", "get", ()=>{
    return {
        code: 200,
        success: true,
        message: "请求成功",
        data: menuList,
    }
})

// 入职日期接口
mockjs.mock("/api/in", "get", ()=>{
    return {
        code: 200,
        success: true,
        message: "请求成功",
        time: "2020-07-01 00:00:00",
    }
})

// 折线图图表接口
mockjs.mock("/api/linechart", "get", ()=>{
    return {
        code: 200,
        success: true,
        message: "请求成功",
        data:{
            "22-01":30,
            "22-02":84,
            "22-03":56,
            "22-04":47,
            "22-05":84,
            "22-06":61,
            "22-07":90,
        }
    }
})

// 订单列表数据
mockjs.mock("/api/orderList", "post", (req)=>{
    const { page, pageSize, keyword } = JSON.parse(req.body);
    console.log("接口收到数据", page,pageSize,keyword);
    return {
        code: 200,
        success: true,
        message: "成功",
        data: mockjs.mock({
            [`list|${pageSize}`]: [{
                'id|+1': 10000, // 订单号
                'status|1': [1,2,3,4], // 订单状态 1待审核 2已审核 3审核通过 4审核拒绝
                'date': mockjs.Random.date(), // 下单时间
                'name|1': ["诺来科技有限公司","辉华股份有限公司","川聚物流有限公司","成越材料有限公司","聚博纺织有限公司"], //模拟生成name,从给出的列表中随即选1个
                'start': mockjs.Random.city(true), //模拟生成城市
                'end': mockjs.Random.city(false),
                'cargo|1': ["日用品","纺织品","生鲜","建材","电器"], //模拟货物名称
                'count': mockjs.Random.integer(10,200),
                'unit|1': ["方","吨"],
                'price': mockjs.Random.integer(5000,50000), //模拟价格
                'from|1':["移动端","pc端"],
                'pay|1':[1,2], // 是否支付 1已支付 2未支付
            }],
            "total": 47
        })
    }
})

// 订单管理-新建订单
mockjs.mock("/api/addOrder", "post", (req)=>{
    const {name,start,end,cargo,count,unit,price,from,pay} = JSON.parse(req.body);
    console.log("新建订单接口受到参数:", name, start, end, cargo, count, unit, price, from, pay);
    return {
        code: 200,
        success: true,
        message: "新建成功",
    }
})


// 运单列表数据
// 实际后端逻辑可以如下查询
// SELECT * FROM table_name 
// WHERE condition = 'xxxxx'
// ORDER BY yyyy DESC
// LIMIT {pagesize} OFFSET zzzz -- OFFSET = (page - 1) * pageSize
mockjs.mock("/api/waybillList", "post", (req)=>{
    const { page, pageSize, waybillNo, name, startDate, endDate, status } = JSON.parse(req.body);
    console.log("服务端接收到参数", page, pageSize, waybillNo, name, startDate, endDate, status);
    return {
        code: 200,
        success: true,
        message: "成功",
        data: mockjs.mock({
            [`list|${pageSize}`]: [{ // 模拟生成一个list, 长度和pageSize一样
                'no|+1': 10000, // 模拟no 从10000开始,之后每模拟一个no加1
                'date': mockjs.Random.date(), //模拟生成下单时间
                'name|1':["诺来科技有限公司","辉华股份有限公司","川聚物流有限公司","成越材料有限公司","聚博纺织有限公司"], //模拟生成name,从给出的列表中随即选1个
                'cargo|1': ["日用品","纺织品","生鲜","建材","电器"], //模拟货物名称
                'count': mockjs.Random.integer(10,200),
                'start': mockjs.Random.city(true), //模拟生成城市
                'end': mockjs.Random.city(true),
                'price': mockjs.Random.integer(5000,50000), //模拟价格
                'needReceive|1':[1,2], // 需要接货 1需要 2不需要
                'plateNumber|1':["京123456","苏666666","鲁111111"],
                'driver': mockjs.Random.cname(),
                'tel|1': [18888888888,17777777777,16666666666,15555555555],
                'percent|1':[37,22,89,65,80,74,56]
            }],
            "total": 47 //这个是总的数据条数,用于给前端展示及处理分页逻辑
        })
    }
})

mockjs.mock("/api/getRole", "get", () => {
    return {
        code: 200,
        success: true,
        message: "成功",
        role: "boss",
    }
})