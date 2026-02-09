/*
产品经理: 提需求
UI设计师: 美化
前端：前端页面app开发
后端：看不见的(服务器)
测试：找bug
运维：项目上线，服务器维护
    

    ajax：前端向后端取数据而无需刷新页面的技术
        是异步的
    
    ajax的使用步骤
        1. 创建ajax 核心对象 XMLHttpRequest
        2. 创建请求 open("请求方式", "请求地址", 是否异步)
        3. 发送请求参数
            get方式：参数在请求地址后面写，以?连接, send时填null
            post方式：参数格式一定是key=value形式的字符串
           多个参数以&符号连接
        4. 接收响应
            readyState(请求的状态): 0(尚未初始化) 1(正在发送请求) 2(请求完毕) 3(正在响应) 4(响应完毕)
            status(服务器返回的http状态码)
            onreadystatechange(事件)

        get 和 post区别
        (1) 请求参数位置不同
        (2) post需要设置请求头
        (3) get参数需要添加到地址栏里，post不用
        (4) get更快更简单
        (5) get有参数数量限制，post没有参数数量限制
        (6) post更安全稳定(表单提交推荐用post)

        6. json
            JSON.parse() 将json格式的字符串转成对象
            JSON.stringify() 将对象转换为json格式字符串

        7. 跨域问题
            浏览器有安全策略，同源策略: 同协议同域名同端口号
        
           跨域问题的解决方案
            (1). jsonp
            (2). 请求代理: 本地搭建一个代理(nginx, apache, fiddler之类的)，前端请求先到本地的代理,再由本地的代理转发到远端服务器
                    原理：跨域是浏览器到服务端的请求的安全限制，但是服务端到服务端的请求是没有跨域限制的
                    该方法为常用方法，在前端调试时经常使用(本地前端和后端的一个接口做联调， 没必要在本地部署一套后端， 直接将请求发给后端接口)
            (3). 后端设置白名单，把某几个域名设置为白名单允许跨域
*/
// // 1. 创建请求
// var xmlhttp = new XMLHttpRequest();
// // 2. 创建请求
// xmlhttp.open("get", "/hello", true);
// // 3. 发送请求参数(post)
// xmlhttp.send("username=zhangsan&password=123456")

// // 发送get请求时参数写在请求地址后面以问号连接
// xmlhttp.open("get", "127.0.0.1?user=1&password=2")
// xmlhttp.send(null)

// // 4. 接收响应
// xmlhttp.onreadystatechange=function(){
//     if(xmlhttp.readyState===4&xmlhttp.status===200){
//         var data = xmlhttp.responseText
//     }
// }

// 服务端在main.go, 运行: go run main.go

// get请求示例
var h1 = document.getElementById("txt");
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("get", "/api/hello", true);
xmlhttp.send(null);
xmlhttp.onreadystatechange=function(){
    if(xmlhttp.readyState===4&(xmlhttp.status>=200 & xmlhttp.status<300)){
        var data = xmlhttp.responseText;
        h1.innerText = data;
    }
}

// get携带query param请求参数实例
var xmlhttp2 = new XMLHttpRequest();
xmlhttp2.open("get", "/api/hello?username=abc&password=123", true);
xmlhttp2.send(null);
xmlhttp2.onreadystatechange=function(){
    if(xmlhttp2.readyState===4&(xmlhttp2.status>=200 & xmlhttp2.status<300)){
        var data = xmlhttp2.responseText;
        console.log(data);
    }
}

// post请求示例
var like = document.getElementById("like");
var h2 = document.getElementById("txt2");
like.onblur = () => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("post", "/api/hobby", true);
    // 设置请求头为x-www-form-urlencoded
    xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlhttp.send("hobby=" + like.value);
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4 && (xmlhttp.status >= 200 && xmlhttp.status < 300)) {
            var data = xmlhttp.responseText;
            h2.innerText = data;
        }
    }
}

// json返回处理示例
var xmlhttp3 = new XMLHttpRequest();
xmlhttp3.open("get", "/api/user", true);
xmlhttp3.send(null);
xmlhttp3.onreadystatechange=function(){
    if(xmlhttp3.readyState===4&(xmlhttp3.status>=200 & xmlhttp3.status<300)) {
        var data = xmlhttp3.responseText;
        data = JSON.parse(data);
        console.log(data);
        console.log(data.name);
        console.log(data.age);
    }
}

var obj = {hobby:"basketball", car:"bmw"};
console.log(JSON.stringify(obj));