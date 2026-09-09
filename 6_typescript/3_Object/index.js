"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//声明的时候需要声明对象的属性名和类型
let obj = { name: "小明", age: 18 };
// 先声明，再赋值
let a2;
a2 = { salary: 11, address: "dfdf" };
// 不能添加属性
// 变更属性值
a2.address = "aaaadddd";
// 加问号? 的属性，就是可选属性，可有可无，赋值的时候可以不传值
let a3 = { salary: 1111, address: "dfdfdfdf" };
// 任意属性，在1个对象中只能有1个任意属性
// TS规定任意属性的类型必须是已经存在属性的父类
let a4 = { name: "张三", age: "18", aa: 666, bbb: "dssss" };
// readOnly关键字可以让属性变为只读
let obj2;
obj2 = { name: "sss" };
// 内置对象
let b = new Boolean(1);
let e = new Error('Error occurred');
let d = new Date();
let r = /[a-z]/;
let body = document.body;
let allDiv = document.querySelectorAll('div');
//# sourceMappingURL=index.js.map