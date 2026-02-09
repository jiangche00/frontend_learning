/**
 * 
 * 防抖： 防止手抖
 *  概念：短时间内连续触发多次事件（例如点击多次、鼠标滑动多次，键盘敲击事件，等等......)，只执行1次
 *  核心思想：延迟执行
 * 
 */

var btn = document.getElementById("btn");

/**
 * 多次点击时，定时器类似如下：
 * 开停开停开停开停开停开停开停开...
 * 解释：
 * (开停开停开停开停开停开停开停)开
 * 括号里面的开了又停了，只留下最后一个括号之外的开
 * 因此实现了短时间内点击多次，只执行最后一个 开 的操作，即只执行一次
 * 
 * 
 * 在项目中，可能在多个地方需要使用防抖，因此最好将防抖封装成函数
 */

// var timer = null;
// btn.onclick=()=>{
//     clearTimeout(timer);
//     timer=setTimeout(()=>{
//         console.log("下单了");
//     }, 1000);
// }


// 封装一个防抖函数
function debounce(fn){
    var timer=null; //使用闭包，防止全局污染
    return function(){
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn();
        }, 1000);
    }
}
//使用
const a = () => {
    console.log("下单");
}
btn.onclick=debounce(a);


/*
    有变量不想放全局，但又想在函数外部声明
    实际用的时候，每个想调用该函数的实体，所面临的该变量各不相同
    这种场景下，可以使用闭包
    function里面声明变量，return一个匿名的function，该匿名function对变量进行操作
*/