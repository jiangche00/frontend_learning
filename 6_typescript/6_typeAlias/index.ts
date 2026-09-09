// 在TypeScript中,类型别名是给现有类型取一个新的名字。它可以用于提高代码的可读性和可维护性,以及
// 减少重复的类型定义

type myObj = {name:string,age:number,hobby:string[],run:()=>void}
let obj:myObj={name:"zhangsan",age:18,hobby:["basketball","swimming"],run:function(){console.log("run")}}

type c = {a:string,b:number,c:()=>void}
const fn = ():c => {
    return {a:"aaa",b:222,c:()=>{console.log("ccc")}}
}

// 使用值类型
type Directions = 'up' | 'Down' | 'Left' |'Right'
let toWhere : Directions ='Down'

// 联合类型可以使用类型别名
type cc = myObj | c | string