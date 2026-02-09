/*
    事件对象：事件发生的时候，默认是传入函数的第一个参数

    给元素绑定事件的方式
        1. eleObj.onclick=fun(){}
        2. 元素开始标签里面绑定
            <div onclick="fn()"></div>
        3. eleObj.addEventListener("事件名"， 方法对象， 是否在捕获阶段触发)
            给元素绑定多个事件
            eleObj.addEventListener("click",fn,false)
            eleObj.addEventListener("click",fn2,false)

    取消绑定事件
        1. eleObj.onclick = null
        2. 如果绑定在元素开始标签里面，使用 eleObj.removeAttribute("onclick")
        3. eleObj.removeEventListener("事件名", "方法对象", "是否在捕获阶段触发")

        注意，如果元素绑定的方法对象是匿名函数，则没法用removeEventListener将其移除，因为匿名所以找不到函数句柄没法定位绑定时具体的函数堆栈


    事件触发周期： 一个事件发生的整个过程
        事件捕获阶段 -- 目标触发阶段 -- 事件冒泡阶段
        事件捕获：(从外到里找,先d1再d2再d3)
        事件冒泡：从里向外 


    事件对象里面重要的属性/方法
        1. stopPropagation 防止冒泡
        2. target
        3. offsetX offsetY
        4.  onKeydown 按下按键(过程)
            onkeyup 放开案件
            onkeypress 按下按键(结果) deprecated
            keyCode 键盘按键ascii码

*/

function fn2(){
    console.log(5);
}

var btn = document.getElementById("btn");
// btn.onclick = fn2;
// 绑定
btn.addEventListener("click", fn2, false);
// 移除
btn.removeEventListener("click", fn2, false);

var divs = document.getElementsByTagName("div");
for(var i = 0; i < divs.length; i++) {
    divs[i].onclick = function(e){
        console.log(e); // 访问事件源对象
        // this.style.backgroundColor="purple";
        e.target.style.backgroundColor = "purple";
        // alert(this.className);
        alert(e.target.className);
        // this.style.backgroundColor="";
        e.target.style.backgroundColor = "";
        e.stopPropagation(); // 阻止事件冒泡
    }
}

var box = document.getElementById("box");
box.onmousemove = function(e) {
    console.log(e.offsetX, e.offsetY);
}

var txt = document.getElementById("txt");
txt.onkeydown = function(e) {
    console.log("onKeydown");
    console.log(e.keyCode);
}
txt.onkeyup = function(e) {
    console.log("onKeyup");
}
txt.onkeypress = function(e) {
    console.log("onKeypress");
}

var bird = document.getElementById("bird");
document.onkeydown = function(e) {
    console.log(e.keyCode);
    var cssStyle = document.defaultView.getComputedStyle(bird, null);
    console.log(cssStyle.top);
    var top = parseInt(cssStyle.top);
    var bottom = parseInt(cssStyle.bottom);
    var left = parseInt(cssStyle.left);
    var right = parseInt(cssStyle.right);
    if(e.keyCode==38){
        top-=10;
        bird.style.top=top+"px";
    } else if(e.keyCode==40) {
        top+=10;
        bird.style.top=top+"px";
    } else if (e.keyCode==37) {
        left-=10;
        bird.style.left=left+"px";
    } else if (e.keyCode==39) {
        left+=10;
        bird.style.left=left+"px";
    }
}