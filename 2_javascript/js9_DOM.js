console.log("dom");
/*
    DOM: document object model 文档对象模型
    元素对象的属性：所有写在元素开始标签里的，都是该对象的属性
        1. 查找元素
            (1). document.getElementById("id名")
            (2). document.getElementsByClassName("class名")
            (3). document.getElementsByTagName("标签名")
            (4). document.getElementsByName("input标签中的name值") // 专门针对获取制定name的input标签
            (5). document.querySelector("css选择器") // 按css查找元素的方式进行查找，但是返回的永远都是1个对象，因此只能找到1个，如果重复了，找到的是第一个
            (6). document.querySelectorAll("css选择器") // 类似上述，但是返回含有所有满足条件的数组

        2. 改
            改属性：
                1. 对象.属性名="新值"
                2. setAttribute("属性名","属性值")
            改内容：
                1. innerText 返回元素开始标签到结束标签之间的文本内容, 只认文字
                2. innerHTML 返回元素开始标签到结束标签之间的所有内容, 文字和html标签都认


        3. 删
            删内容：innerHTML=""
            删属性：removeAttribute("属性名")
            删除单个元素: 父元素对象.removeChild(子元素对象)

        4. 增加
            增加属性
                (1). 对象.属性 = 值
                (2). setAttribute("属性名","属性值")
            增加内容
                innerHTML="..."
            增加元素步骤
                (1). 创建元素 createElement
                (2). 添加到相应位置 父元素对象.appendChild(所添加对象) // append到父元素的所有子元素的最后
                (3). 加属性和内容
*/
var eleObj=document.getElementById("box"); // 获取id为box的element
var eleObjs=document.getElementsByClassName("box") // 获取class为box的所有elements, 是一个collection,类似数组但不是数组
var eleObjs2=document.getElementsByTagName("div"); // 获取所有div
var eleObjs3=document.querySelector("#app"); // 按css方式查找id为app的元素
var eleObjs4=document.querySelectorAll("div"); // 按css方式找所有div元素
console.log(eleObjs4.length);


// 先获取app元素，再从app元素里面拿所有p标签元素
var app=document.getElementById("app");
var eleObjs=app.getElementsByTagName("p");

// 拿style ,类似下面这种app.style的方式，只能改内联样式，外部样式需要用其他方式进行修改
console.log(app.style);
console.log(app.style.height); // 拿宽度
console.log(app.style.backgroundColor); //拿背景色，所有css名称中有横线的都改为驼峰式命名方法
app.style.width = "500px"; // 改宽度
app.style.backgroundColor = "blue"; // 改背景颜色
app.style="width: 500px; height: 100px; background-color: brown;";

var app=document.getElementById("app");
app.setAttribute("id", "abcde");
app.setAttribute("class", "box");
app.setAttribute("style", "width: 500px; height: 200px; background-color: cyan;");
console.log(app);

console.log(app.innerText);
// app.innerText="modified content"; //覆盖掉原有的结构
console.log(app);
console.log(app.innerHTML);
var cname="title"
app.innerHTML="<h1 class=" + cname + ">modified content</h1>";
console.log(app);

// 删掉里面的内容
app.innerHTML = "";
// 删掉属性
app.removeAttribute("class");

app.setAttribute("class", "box");
app.innerHTML = `
hello js
<p>111</p>
<p>222</p>
<div class="a">1</div>
<div class="a">2</div>
<div class="a">3</div>
<div class="b">4</div>
<div class="b">5</div>
<div class="b">6</div>
`
// 删掉子元素
var childrens = app.querySelectorAll(".b");
childrens.forEach((element) =>{
    if(element.getAttribute("class") === "b") {
        app.removeChild(element);
    }
})
console.log(app)

// append元素
var week = [1,2,3,4,5,6,7];
var title = document.getElementById("title");
for(var i = 0; i < week.length; i++) {
    var div = document.createElement("div");
    title.appendChild(div);
    if(week[i] === 7){
        div.innerHTML="今天星期天";
    } else {
        div.innerHTML="今天星期" + week[i];
    }
    div.style.color="red";
}

// 动态添加数据到table里面
var data = [
    {name: "张三1", age: 18, salary: 4500, gender: "male"},
    {name: "张三2", age: 28, salary: 5500, gender: "male"},
    {name: "张三3", age: 38, salary: 6500, gender: "male"},
    {name: "张三4", age: 48, salary: 7500, gender: "male"},
    {name: "张三5", age: 58, salary: 8500, gender: "male"},
    {name: "张三6", age: 68, salary: 9500, gender: "male"},
    {name: "张三1", age: 18, salary: 4500, gender: "male"},
    {name: "张三2", age: 28, salary: 5500, gender: "male"},
    {name: "张三3", age: 38, salary: 6500, gender: "male"},
    {name: "张三4", age: 48, salary: 7500, gender: "male"},
    {name: "张三5", age: 58, salary: 8500, gender: "male"},
    {name: "张三6", age: 68, salary: 9500, gender: "male"},
]
var table = document.getElementById("list");
var tr = document.createElement("tr");
table.appendChild(tr);
// 表头
var td = document.createElement("td");
td.innerText = "No.";
tr.appendChild(td);
Object.keys(data[0]).forEach((key) => {
    var td = document.createElement("td");
    td.innerText = key;
    tr.appendChild(td);
})
// 数据
var pk = 1;
data.forEach((element) => {
    var tr = document.createElement("tr");
    table.appendChild(tr);
    var td = document.createElement("td");
    td.innerText = pk;
    tr.appendChild(td);
    pk++;
    Object.values(element).forEach((value) => {
        var td = document.createElement("td");
        td.innerText = value;
        tr.appendChild(td);
    })
})
console.log(table);
