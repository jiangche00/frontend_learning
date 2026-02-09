/**
 * 
 * 常用框架：
 *  vue, react, angular
 *  
 * jquery: js库 (封装好的现成功能的js代码)
 * 
 * https://www.runoob.com/jquery/jquery-ref-selectors.html
 * 
 *  1. 选择器
 *      $("*") 获取所有dom元素
 *      $("#id") 获取指定id的dom元素
 *      $(选择器：first) 获取第一个
 * 
 *      上述返回的是一个自动循环的迭代器，里面有满足条件的元素
 * 
 *      .html()  获取html
 *      .hide()  隐藏dom元素
 * 
 * 
 *  2. 事件:
 *      和原生javascript相比, 去掉了前缀on
 *          click, focus, blur, mousemove, ....
 *      this 变为 $(this)
 * 
 *      或者，用.on
 * 
 *  3. 显示/隐藏
 *      hide() show() toggle()
 *      fadeIn() fadeOut() fadeToggle()
 *      slideUp() slideDown() slideToggle()
 * 
 *  4. 修改样式
 *      css("属性名"，“属性值”)
 *      css({
 *          "属性名": "属性值",
 *          ......
 *      })
 * 
 *      animate: 用法同css方法，唯一的不同是他的样式变化都是有动画效果的
 * 
 *      stop: 停止当前的动态效果
 * 
 *      jquery 的所有方法都支持链式调用
 * 
 *      dom操作方法
 *          text() innerText
 *          html() innerHTML
 *          val() 表单的value
 *          attr() setAttribute getAttribute
 *          append() 后面追加，支持添加标签形式的字符串从而达到类似appendChild的效果
 *          prepend() 前面追加
 *          after() 前面添加
 *          before() 后面添加
 *          remove() 删除元素
 *          empty() 内容清空
 *          样式相关: addClass() removeClass() toggleClass()
 * 
 * 
 *      jq的遍历方法
 *          parent(css选择器): 返回的是特定的备选元素的直接父集 
 *          parents(css选择器): 返回的是特定的所选元素的所有父集
 *          parentsUntil(css选择器): 返回的是到指定对象之间的父极
 * 
 *          children(css选择器): 返回的是所选元素的所有直接子集
 *          find(css选择器):css选择器必须传, 
 *              find("*") 所有子集 
 * 
 *          siblings(css选择器): 所有同级 不包含自己
 *          next(css选择器): 下一个同级
 *          nextAll():下面所有同级
 *          nextUntil(选择器): 下面直到某个指定对象之间的所有同级
 *          prev(css选择器): 上一个同级
 *          prevAll(css选择器): 上面所有同级
 *          prevUntil(css选择器): 上面直到某个元素之间的所有同级
 *          
 *          first(): 完全等效于 :first 不能传参
 *          last()
 *          eq()
 *          filter(css选择器)
 *          not(css选择器)
 * 
 * 
 *       jq ajax
 * 
 *          $.ajax({
 *              url: "请求地址",
 *              type: "请求方式get/post",
 *              data:{
 *                  key: value,
 *              },
 *              timeout: 5000,
 *              dataType: 预期的服务器响应的数据类型
 *              success:function(data){
 *                  // data是后端返回的数据
 *              },
 *              error:function(err){
 *                  // err是报错内容
 *              }
 *          })
 *      
 */

var box = $("#box");
// var a = $(".title").hide();
console.log(box);

// 获取第一个div
console.log($("div:first"));
$(".title p:first").hide(1000);

// $("#box").click(function(){
//     alert(1);
// })

$("#box").on("click", ()=>{
    alert(1);
})

$("button").on("click", function(){
    $("#block").slideToggle(3000);
})

// rgb to hex, purple = #800080, green = #008000
const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

$("#box2").on("click", ()=>{
    var colorHex = rgb2hex($("#block").css("background-color"));
    if(colorHex === "#800080") {
        $("#block").css({
            width: "100px",
            height: "100px",
            backgroundColor: "green"
        });
    } else if (colorHex === "#008000") {
        $("#block").css({
            width: "200px",
            height: "200px",
            backgroundColor: "purple"
        });
    }
})

$("#stop").on("click", ()=>{
    $("#block").stop().slideToggle();
    $("#box").text("你好");
    $("#box").html("<h1>你好</h1>");
    console.log($(this).parent().attr("class", "aaa"));
})

// jq ajax请求
$.ajax({

})