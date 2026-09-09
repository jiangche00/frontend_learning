"use strict";
// 在TypeScript中,类型别名是给现有类型取一个新的名字。它可以用于提高代码的可读性和可维护性,以及
// 减少重复的类型定义
Object.defineProperty(exports, "__esModule", { value: true });
let obj = { name: "zhangsan", age: 18, hobby: ["basketball", "swimming"], run: function () { console.log("run"); } };
const fn = () => {
    return { a: "aaa", b: 222, c: () => { console.log("ccc"); } };
};
//# sourceMappingURL=index.js.map