//联合类型使用 | 分隔每个类型。
let val:string | number | string[] | (()=>number)
val = 12 //ok
val = "hello" //ok

// 数组中可以存储number，也可以存储string
const arr: (number | string)[] = [1, "string", 2];
console.log(arr)

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候
// 我们只能访问此联合类型的所有类型里共有的属性或方法:

// function getLength(something: string | number): number {
// return something.length;
// }
// // index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string
// | number'.
// // Property 'length' does not exist on type 'number'

// 访问 string 和 number 的共有属性是没问题的
function getString(something: string | number): string {
return something.toString();
}

// 联合类型的写法
let a:string|number|string[]|{name:string,age:number}|(()=>string);
a="hello";
a=123;
a=["a","b","c"]
a={name:"张三",age:18}
a=function(){
return "hello"
}