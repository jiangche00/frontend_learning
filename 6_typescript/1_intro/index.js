"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let a = 1;
let a = 2;
// 原始数据类型 boolean,number,string,undefined,null,symbol
// 对象类型 object, Array, Tuple, enum, function
// 其他类型 any, never known void 值类型
let b = "aaa";
const d = "bb";
var boo = true;
// undefined即是类型又是数据
let u = undefined;
// null即是类型又是数据
let nu = null;
// symbol 类型
let s = Symbol();
// 一些特殊的类型
// Any类型，存什么都可以
let aa = "string";
aa = 4321;
// 要是不确定这个是什么类型，使用Unknown类型，类似golang里面的interface
let aaa = "hello";
if (typeof (aaa) === "number") {
    console.log(aaa * 2);
}
else if (typeof (aaa) === "string") {
    aaa.substring(1);
}
// 永远不会有返回值的(函数抛异常，死循环),是never类型
function fn() {
    throw new Error();
    console.log(123); // 这个永远不会执行
}
// 值类型
let bb = 456;
// 编译，如果显式使用es6进行编译:
// tsc index.ts --target es6
// 让tsc检测ts文件，发生变化则自动编译，添加-w，如： tsc index.ts -w
// tsc --init 生成tsconfig.json配置文件
//# sourceMappingURL=index.js.map