/*
    1. 点击事件onclick
    2. 鼠标移入事件onmouseover, 移出事件onmouseout
    3. 鼠标移动事件onmousemove

    (表单相关)
    4. 获得焦点事件(onfocus)
    5. 失去焦点事件(onblur)
    6. 值改变事件(onchange)
    7. 输入事件(oninput)

*/

var fn = (m) => {
    alert(m);
}

var app = document.getElementById("app");
// onclick事件，这里使用匿名函数
app.onclick = () => {
    fn(5);
}

var box = document.getElementById("box");
box.onmouseenter = () => {
    box.style.backgroundColor = "green";
}
box.onmouseout = () => {
    box.style.backgroundColor = "purple";
}

var user = document.getElementById("user");
user.onfocus = () => {
    console.log("获得焦点了");
}
user.onblur = () => {
    console.log("失去焦点了")
}
user.onchange = () => {
    console.log("值发生了改变")
}
user.oninput = () => {
    console.log("输入事件")
}