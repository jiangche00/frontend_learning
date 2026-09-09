function fn(m:string,n:number):string{
    return m+n;
}
fn("str",1)

// void 表示函数没有返回值
function fn2():void{
}
fn2();

// 箭头函数形式
const fn3 = (m:string,n:number):string => {
    return m+n;
}
fn3("str",1)

// ##### 一般采用上面的方法来创建函数


// 定义函数类型的箭头函数形式
const fn33:(m:string,n:number)=>string = (m:string,n:number):string => {
    return m+n
}
fn33("str",1)

// 如果要单独定义函数类型
let fn4:(a:number)=>number
fn4=function(a:number){
    return a
}


// 函数类型定义的时候定义了几个参数
// 函数赋值的时候可以省略，不会报错
let fnn:(a:number, b:number) => number;
fnn = (a:number) => a;



// 可选形参，放到最后的位置
function fn5(m:string,n?:number):string{
    return m+n;
}

// rest 参数为数组
function joinNumbers(...nums:number[]) {
// ...
}
// rest 参数为元组
function f(...args:[boolean, number]) {
// ...
}