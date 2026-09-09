// 接口定义
interface Person {
    name: string,
    age: number,
    readonly salary: number,
    like: string[],
    run?: () => void, // 可选属性
    [propName: string]: string | number | string[] | (() => void) // 任意属性, 使用联合类型
}
let obj: Person = { name: "张三", age: 18, salary: 3500, like: ["aaa"] }

// 接口继承
interface Girl extends Person {
    height: number,
    hobby: string[]
}
interface Pro {
    phone: string,
    coat: string
}
interface Boy extends Person, Pro {
    salary: number,
    car: string
}
let obj2: Girl = { name: "张三", age: 18, salary: 3500, like: ["aaa"], height: 111, hobby: ["bbb"] }
let obj3: Boy = { name: "张三", age: 18, salary: 3500, like: ["aaa"], height: 111, hobby: ["bbb"], phone: "111", coat: "yes", car: "111" }


// 名字相同的接口不会冲突,而是会合并为一个
interface Person2 {
    name: string,
    age: number,
    address: string
}
interface Person2 {
    salary: number
}
let xm: Person2 = { name: "小明", age: 17, address: "beijng", salary: 3500 }

// 接口也可以用于定义数组, 但是不推荐,定义数组还是优先使用我们之前讲的方式
interface MyArr {
    [index: number]: string
}
let arr: MyArr = ["@", "3"]

// 接口也可以定义函数
interface MyFunc {
    (a: number): number
}
let fn: MyFunc = function (a: number) { return 123 }


// interface 与 type 的区别有下面几点。
// (1) type 能够表示非对象类型,而 interface 只能表示对象类型(包括数组、函数等)。
// (2) interface 可以继承其他类型, type 不支持继承。
// (3)同名 interface 会自动合并,同名 type 则会报错
// (4) interface 不能包含属性映射(mapping), type 可以
