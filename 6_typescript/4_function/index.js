"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn(m, n) {
    return m + n;
}
fn("str", 1);
// void 表示函数没有返回值
function fn2() {
}
fn2();
// 箭头函数形式
const fn3 = (m, n) => {
    return m + n;
};
fn3("str", 1);
// 定义函数类型的箭头函数形式
const fn33 = (m, n) => {
    return m + n;
};
fn33("str", 1);
// 如果要单独定义函数类型
let fn4;
fn4 = function (a) {
    return a;
};
//# sourceMappingURL=index.js.map