//声明的时候需要声明对象的属性名和类型
let obj:{name:string,age:number}={name:"小明",age:18}

// 先声明，再赋值
let a2:{salary:number,address:string}
a2 = {salary:11,address:"dfdf"}

// 不能添加属性

// 变更属性值
a2.address = "aaaadddd"

// 加问号? 的属性，就是可选属性，可有可无，赋值的时候可以不传值
let a3:{age?:number, salary:number, address:string}={salary:1111,address:"dfdfdfdf"}

// 任意属性，在1个对象中只能有1个任意属性
// TS规定任意属性的类型必须是已经存在属性的父类
let a4:{name:string,[propName:string]:any}={name:"张三",age:"18",aa:666,bbb:"dssss"}


// readOnly关键字可以让属性变为只读
let obj2:{readonly name:string}
obj2 = {name:"sss"}

// 内置对象
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');