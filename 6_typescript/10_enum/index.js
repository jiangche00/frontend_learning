"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Start"] = 1] = "Start";
    OrderStatus[OrderStatus["Unpaid"] = 2] = "Unpaid";
    OrderStatus[OrderStatus["Shipping"] = 3] = "Shipping";
    OrderStatus[OrderStatus["Shipped"] = 4] = "Shipped";
    OrderStatus[OrderStatus["Complete"] = 5] = "Complete";
})(OrderStatus || (OrderStatus = {}));
//取值语法 OrderStatus.Start
console.log(OrderStatus.Start);
console.log(OrderStatus.Shipped);
//手动赋值
var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["Error"] = 500] = "Error";
})(Status || (Status = {}));
// 数字枚举在定义值的时候,可以使用计算值和常量。但是要注意,如果某个字段使用了计算值或常
// 量,那么该字段后面紧接着的字段必须设置初始值,这里不能使用默认的递增值了,
const getValue = () => {
    return 0;
};
var ErrorIndex;
(function (ErrorIndex) {
    ErrorIndex[ErrorIndex["a"] = getValue()] = "a";
    // b, // error 枚举成员必须具有初始化的值
    // c
})(ErrorIndex || (ErrorIndex = {}));
var RightIndex;
(function (RightIndex) {
    RightIndex[RightIndex["a"] = getValue()] = "a";
    RightIndex[RightIndex["b"] = 1] = "b";
    RightIndex[RightIndex["c"] = 2] = "c";
})(RightIndex || (RightIndex = {}));
const Start = 1;
var Index;
(function (Index) {
    Index[Index["a"] = 1] = "a";
    Index[Index["b"] = 2] = "b";
    Index[Index["c"] = 3] = "c";
})(Index || (Index = {}));
// 反向映射 我们定义一个枚举值的时候,可以通过 Enum[‘key’]或者 Enum.key 的形式获取到对应的值
// value。TypeScript 还支持反向映射,但是反向映射只支持数字枚举,我们后面要讲的字符串枚举是不支持的
// enum Status {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }
console.log(Status["Success"]); // 200
console.log(Status[200]); // 'Success'
console.log(Status[Status["Success"]]); // 'Success'
// 字符串枚举
// 字符串枚举值要求每个字段的值都必须是字符串字面量,或者是该枚举值中另一个字符串枚举成员
var Message;
(function (Message) {
    Message["Error"] = "Sorry, error";
    Message["Success"] = "Hoho, success";
})(Message || (Message = {}));
console.log(Message.Error); // 'Sorry, error'
//订单
var OrederStatus;
(function (OrederStatus) {
    OrederStatus["Detail"] = "/api/detail";
    OrederStatus["List"] = "/api/data/list";
    OrederStatus["Owner"] = "/user/owner";
})(OrederStatus || (OrederStatus = {}));
// 异构枚举 (不推荐)
// 简单来说异构枚举就是枚举值中成员值既有数字类型又有字符串类型,如下 :
var Result;
(function (Result) {
    Result[Result["Faild"] = 0] = "Faild";
    Result["Success"] = "Success";
})(Result || (Result = {}));
//# sourceMappingURL=index.js.map