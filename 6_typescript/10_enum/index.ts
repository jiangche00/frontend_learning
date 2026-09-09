enum OrderStatus {
    Start = 1,
    Unpaid,
    Shipping,
    Shipped,
    Complete,
}
//取值语法 OrderStatus.Start
console.log(OrderStatus.Start);
console.log(OrderStatus.Shipped);


//手动赋值
enum Days { Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat };
console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

enum Status {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// 数字枚举在定义值的时候,可以使用计算值和常量。但是要注意,如果某个字段使用了计算值或常
// 量,那么该字段后面紧接着的字段必须设置初始值,这里不能使用默认的递增值了,
const getValue = () => {
    return 0;
};
enum ErrorIndex {
    a = getValue(),
    // b, // error 枚举成员必须具有初始化的值
    // c
}
enum RightIndex {
    a = getValue(),
    b = 1,
    c
}
const Start = 1;
enum Index {
    a = Start,
    b, // error 枚举成员必须具有初始化的值
    c
}

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
enum Message {
    Error = "Sorry, error",
    Success = "Hoho, success"
}
console.log(Message.Error); // 'Sorry, error'

//订单
enum OrederStatus {
    Detail = "/api/detail",
    List = "/api/data/list",
    Owner = "/user/owner",
}

// 异构枚举 (不推荐)
// 简单来说异构枚举就是枚举值中成员值既有数字类型又有字符串类型,如下 :
enum Result {
    Faild = 0,
    Success = "Success"
}