import router from "./index";

// let flag=false; //true 模拟登陆了，false为没有登陆

// // 全局前置守卫，就是整个vue中任何路由跳转都会触发的一个方法
// router.beforeEach((to,from,next)=>{
//     // to 即将要跳转过去的路由对象
//     // from 从哪儿来的路由对象
//     // next 是个函数
//         /**
//          * 
//          *  next() 如果什么参数都不给，那么就代表放行
//          *  next(false) 中断导航，如果浏览器URL改变了，那么URL地质会重置到from路由对应的地址
//          *  next("路径") 无论原来想去哪儿，都给导航到指定路径
//          */

//     if(flag){
//         next();
//     } else {
//         if(to.path==="/login") {
//             next();
//         } else {
//             next("/login");
//         }
//     }
// })


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


