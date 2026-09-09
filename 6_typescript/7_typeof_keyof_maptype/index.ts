// javascript中的typeof运算符可以得到的 8种 结果
typeof undefined; // "undefined"
typeof true; // "boolean"
typeof 1337; // "number"
typeof "foo"; // "string"
typeof {}; // "object"
typeof parseInt; // "function"
typeof Symbol(); // "symbol"
typeof 127n // "bigint"

// TypeScript 将 typeof 运算符移植到了类型运算,它的操作数依然是一个值,但是返回的不是字符串,而是该值的TypeScript 类型。
const a = { x: 0 };
type T0 = typeof a; // { x: number }
type T1 = typeof a.x; // number


let aa = {name:"张三",age:18}
type c = typeof aa // typeof aa 返回的就是 {name:string,age:number}
let obj:c={name:"aa",age:18}



// keyof运算符接受一个对象类型作为参数,返回该对象的所有键名组成的联合类型。
type Person={name:string,age:number}
type MyType = keyof Person // "name"|"age"
let aaa:MyType="name"


// 映射类型
//基本使用
type My="a"|"b"|"c"
type MyType2={[key in My]:number} //{a:number,b:number,c:number}
//配合keyof使用
type Props={a:number,b:string,c:boolean}
type MyType3={[key in keyof Props]:Props[key]} //{a:number,b:string,c:boolean}
//此时的key不是关键字,可以随便命名
let obj2:MyType3={a:123,b:"2",c:true}

// 只读属性
type MyType4={readonly [key in My]:number} //{readonly a:number,readonly b:number,readonly c:number}
let obj3:MyType4={a:123,b:2,c:88}
// obj.a=888 //报错