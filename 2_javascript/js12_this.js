var divs = document.getElementsByClassName("1111");
for(var i = 0; i < divs.length; i++) {
    divs[i].onclick = function() {
        alert(this.innerHTML);
    }
}

// const 箭头函数，没有this

//错误例子如下：
// for(var i = 0; i < divs.length; i++) {
//     divs[i].onclick = () => {
//         alert(divs[i].innerHTML);
//     }
// }
// 上述例子的分析:
/**
 * 对于
 * <body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
   </body>
 * divs是所有div的collection
 * for循环对每一个div添加onclick事件
 * 所有click事件添加完毕之后，i的值变成了4
 * 当点击任意的div时，触发其onclick事件
 * 由于i是全局变量，因此触发事件所执行的alert(divs[i].innerHTML),
 * 永远是divs[4]，但实际上div[4]并不存在
 * 
 */


/**
 * this对象：
 * 一般写在函数里面
 *  谁调用，this就是谁
 * 
 * window是全局对象
 */
var name="global";
const intr2 = () => {
    console.log(this.name);
}
var obj = {
    name: "xiaoming",
    intr: intr,
    intr2: intr2
}
function intr() {
    console.log(this);
}
console.log(obj);

intr2(); // global

var c = obj.intr2;
c(); // 全局调用，因此this.name为全局的name，是"global"

tags = document.getElementsByClassName("tag");
contents = document.getElementsByClassName("content");
// 添加事件
for(var i = 0; i < tags.length; i++) {
    tags[i].index = i; // 每个对象添加一个index标签
    // 点击，显示相同index的content，并且改变自身backgroud-color
    tags[i].onclick = function() {
        for(var k = 0; k < tags.length; k++) {
            tags[k].style.background = "gray";
        }
        this.style.backgroundColor = "red";
        for (var j = 0; j < contents.length; j++) {
            contents[j].style.display = "none"
        }
        contents[this.index].style.display = "block";
    }
}
