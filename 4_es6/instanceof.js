// instanceof.js
function _instanceof(child, parent) {
    var left = child.__proto__;
    var right = parent.prototype;
    while(true) {
        if (left === null) {
            return false;
        }
        if (left === right) {
            return true;
        }
        // 如果left不等于right，则用left的父集和right比，如果还不相等则用left的父集的父集，以此在原型链上向上找
        left = left.__proto__;
    }
}
// 运行测试
console.log(_instanceof(new Date(), Array));
console.log(_instanceof(new Date(), Date));
console.log(_instanceof([], Object));