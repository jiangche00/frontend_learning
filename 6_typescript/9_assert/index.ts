// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候,我们只能访问此联合类型的所有类型
// 中共有的属性或方法
// type C=string|number
function fn(m: string | number) {
    (m as string).substring(1) // 将m断言为string类型
}
fn(100)//错误


// 注意:类型断言只能欺骗ts编译器,让他不报错,无法避免项目运行时的错误,所以使用断言要谨慎
interface Boy {
    name: string,
    make: () => number
}
interface Girl {
    name: string,
    cost: () => void
}
function fn2(obj: Boy | Girl) {
    (obj as Boy).make() // 报错
}

let student = {} as { name: string }
student.name = "张三"

// 将任何一个类型断言为any
let num: number = 1;
console.log((num as any).length)

// 将any断言为任意类型
let a: any = 5;
// console.log((a as number).length) //报错

// 将父类断言为子类
class Students {
    make() {
        console.log("make")
    }
}
class Xm extends Students {
    run() {
        console.log("run")
    }
}
let aa = new Students();
(a as Xm).run() //编译通过,运行报错

// 非空断言
type MyFn = () => number
function fn3(m: MyFn | undefined) {
    let num = m!() // 叹号
    // let num2=m()//错误写法
}

// 双重断言(不推荐使用)
interface Girl2 {
    name: string,
    cost: () => void
}
interface Boy2 {
    name: string,
    make: () => void
}
function fn4(obj: Girl) {
    obj as any as Boy
}