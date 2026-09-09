"use strict";
//泛型(Generics)是指在定义函数、接口或类的时候,不预先指定具体的类型,而在使用的时候再指定
//类型的一种特性
//简单来说泛型其实就是类型参数
//在定义的时候定义形参(类型变量) ,使用的时候传入实参(实际的类型)
Object.defineProperty(exports, "__esModule", { value: true });
// 泛型在函数中使用
function identity(arg) {
    console.log(arg);
    return arg;
}
identity(100);
//或者identity(100) 在 TypeScript 中,在调用泛型函数时,如果没有显式地指定泛型类型参数,
//编译器会进行类型推断。根据传入的实际参数类型,编译器可以推断出泛型类型参数的类型,使得函数调用仍然是正确的
//多个类型参数
function identity2(arg, arg2) {
    console.log(arg2);
    return arg;
}
identity2(4, "hello");
const xiong = {
    name: "xiong",
    age: "18"
    // age: 18 //报错
};
console.log(xiong);
// 类中使用泛型
class Person2 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const xiong2 = new Person2('xiong', 18);
console.log(xiong2.name, xiong2.age);
// 泛型除了能使用基本类型 string number boolean等,同时也可以是接口,数组等
function fn(a) {
    return a;
}
// 用函数作为泛型的实际类型
fn(() => { console.log(1); });
// 用接口作为泛型的实际类型
fn({ name: "小明", age: 18 });
// 用type作为泛型的实际类型
fn("b");
// 用数组作为泛型的实际类型
fn(["a", "b"]);
let obj = { value: "hello" };
// 类型参数可以设定默认值
// 默认类型为string，但也可以覆盖
function fn2(m) {
    return m;
}
fn2(123); //正确 因为类型推断覆盖掉了默认类型
console.log(fn2(true));
// 类型参数默认值多用于class中
class Person4 {
    list = [];
    add(t) {
        this.list.push(t);
    }
}
let xm = new Person4();
xm.add("4"); //正确
// xm.add(4)//错误
// 泛型约束，就是约束一下泛型具体能使用哪些类型
// 下面这个例子是限制T的类型只能为string
function fn3(a) {
    console.log(a.length);
    return a;
}
fn3("hello");
//# sourceMappingURL=index.js.map