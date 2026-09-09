//数组,其中只能存同一种类型的元素
let arr1:string[]=["a","b"]

//先声明，再赋值
let arr2:number[]
arr2=[1,2,3]

// 数组的另外一种声明方式(泛型方式)
let arr3:Array<number>=[1,2,3]

// js里面对于数组的反法都能用
arr1.push("c", "d")
arr2.push(4)

// 数组里面的元素还是数组(二维数组)
let arr4:string[][]=[["a","b","c"],["e","f"]]

// 数组里面的元素是对象
let arr5:{name:string,age?:number,[propName:string]:any}[]
arr5 = [{name:"aaa"},{name:"bbb",age:18},{name:"ccc",age:22,number:111222333}]

// 数组里面的元素是函数
let arr6:(()=>number)[]=[function(){return 123},function(){return 456}]

// 使用联合类型，让数组里面存储不同类型的数据
const arr7: (number | string)[] = [1, "string", 2];

// 元组，专门用于存不同类型的数据
// 需要规定每一个元素的类型，存多少个数据，就要规定多少个数据类型。类型，顺序，数量都规定了
let tuple1:[string,number]=["A",123]

// 先声明，再赋值
let tuple2:[boolean,string]
tuple2 = [true,"hello"]
tuple2[0] = false
tuple2[1] = "hello2"

// 用push可以往tuple里面添加数据，但是添加的类型只能是声明时所定义的类型

// any数组(不推荐使用)
let arr1000:any[] = ["a",123,{a:"1",b:"2"}]