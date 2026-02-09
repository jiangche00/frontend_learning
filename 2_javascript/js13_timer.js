/**
 * timer定时器
 * 让网页自动运行的唯一方法
 * 周期性定时器：每隔一段时间执行
 *  setInterval(干什么，间隔毫秒数)
 *  setTimeout(干什么， 等待毫秒数)
 * 一次性定时器：在指定时间执行
 * 
 * 
 * 定时器是异步的
 * 
 * 在js中，主线程永远是最先执行的
 * 
 * 
 * 关闭定时器
 *  clearInterval(线程号)
 *  clearTimeout(线程号)
 * 
 * 定时器是有返回值的，返回的是线程号
 * 
 * 案例1：倒计时
 * 案例2：验证码
 * 案例3：小广告
 * 
 * parseInt() 识别字符串开头的整数部分
 * parseFloat() 识别字符串开头的浮点数部分
 * onload() 当网页加载完毕之后再执行
 */

var timer = setInterval(() =>{
    console.log(123);
}, 5000);

clearInterval(timer);

var txt = document.getElementById("txt");
var hour = document.getElementById("h");
var minute = document.getElementById("m");
var second = document.getElementById("s");
var colons = document.getElementsByClassName("colon");
var target = new Date("2025-10-23 20:00:00");
const clock = () => {
    var now = new Date();
    var ms = target - now;
    if(ms > 0) {
        var h = Math.floor(ms / 1000 / 3600);
        var m = Math.floor((ms - h * 1000 * 3600) / 1000 / 60);
        var s = Math.floor((ms - h * 1000 * 3600 - m * 1000 * 60) / 1000);
        hour.innerText = h;
        minute.innerText = m;
        second.innerText = s;
        for(var i = 0; i < colons.length; i++) {
            console.log(colons[i].innerHTML);
            if(colons[i].innerHTML === ":"){
                colons[i].innerHTML = "&nbsp;";
            } else if (colons[i].innerHTML=== "&nbsp;") {
                colons[i].innerHTML = ":";
            }
        }
    } else {
        clearInterval(timer2);
        txt.innerHTML = "下课了";
    }
}
var timer2 = setInterval(clock, 1000);

console.log(456);


var btn = document.getElementById("btn");
var timer3;
var n = 5;
const clock2 = () => {
    if(n > 0) {
        n--;
        btn.innerHTML = n+"s后重新获取";
    } else {
        clearInterval(timer3);
        btn.innerHTML = "获取验证码";
        btn.style.cursor = "pointer";
        btn.disabled = false;
        n = 5;
    }
}
btn.onclick=()=>{
    btn.disabled=true;
    btn.style.cursor="not-allowed";
    timer3=setInterval(clock2,1000);
}


var adv = document.getElementById("adv");
var advBtn = document.getElementById("adv_btn");
var advTimer1 = null; // 周期性定时器
var advTimer2 = null; // 一次性定时器

// 广告向上走的方法
const advMoveUp = () => {
    // document.defaultView.getComputedStyle(object,null), 可以拿到object的所有样式
    var cssStyle = document.defaultView.getComputedStyle(adv, null);
    var bottom = parseInt(cssStyle.bottom);
    if(bottom < 0) {
        bottom+=10;
        adv.style.bottom = bottom+"px";
    } else {
        clearInterval(advTimer1);
        advTimer1 = null; //释放内存
    }
}
// 广告向下走的方法
const advMoveDown = () => {
    var cssStyle = document.defaultView.getComputedStyle(adv, null);
    var bottom = parseInt(cssStyle.bottom);
    if(bottom >= -300) {
        bottom -= 10;
        adv.style.bottom = bottom+"px";
    } else {
        clearInterval(advTimer1);
        advTimer1 = null; //释放内存
    }
}
// 打开页面，资源加载完毕之后再等3秒，弹出广告
window.onload=function(){
    advTimer2 = setTimeout(()=>{
        advTimer1 = setInterval(advMoveUp, 30);
    },3000);
}

// 点击按钮之后，广告向下沉, 等10秒后，广告又弹出来
advBtn.onclick=()=>{
    advTimer1 = setInterval(advMoveDown, 30);
    advTimer2 = setTimeout(()=>{
        advTimer1 = setInterval(advMoveUp, 30);
    },10000);
}