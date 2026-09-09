"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// javascript中的typeof运算符可以得到的 8种 结果
typeof undefined; // "undefined"
typeof true; // "boolean"
typeof 1337; // "number"
typeof "foo"; // "string"
typeof {}; // "object"
typeof parseInt; // "function"
typeof Symbol(); // "symbol"
typeof 127n; // "bigint"
// TypeScript 将 typeof 运算符移植到了类型运算,它的操作数依然是一个值,但是返回的不是字符串,而是该值的TypeScript 类型。
const a = { x: 0 };
//# sourceMappingURL=index.js.map