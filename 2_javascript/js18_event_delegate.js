
/*
    事件委托/事件代理：
    如果嵌套元素都有相同的事件要触发，我们只需要在父级绑定事件，
    内部元素就可以使用事件
    内部元素可以通过事件对象来准确拿到触发事件的那个元素对象
*/
var d1 = document.querySelector(".d1");
d1.onclick=function(ev){
    alert(ev.target.className);
}