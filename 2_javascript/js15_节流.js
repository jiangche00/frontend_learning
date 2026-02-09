/*
    节流： 短时间内连续触发多次事件，会减少执行次数
 */

var btn = document.getElementById("btn");

// var flag = true;
// btn.onclick=function(){
//     if(!flag){
//         return
//     } else {
//         flag = false;
//         setTimeout(function(){
//             console.log("123");
//             flag = true;
//         },1000);
//     }
// }

//把上面的节流封装成函数
const throttle = (fn) => {
    var flag = true;
    return function(){
        if(!flag) {
            return
        } else {
            flag = false;
            setTimeout(function(){
                fn();
                flag = true;
            },1000);
        }
    }
}
//测试
const a = () => {
    console.log(123);
}
btn.onclick = throttle(a);