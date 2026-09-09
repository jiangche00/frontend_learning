//泛型(Generics)是指在定义函数、接口或类的时候,不预先指定具体的类型,而在使用的时候再指定
//类型的一种特性
//简单来说泛型其实就是类型参数
//在定义的时候定义形参(类型变量) ,使用的时候传入实参(实际的类型)

// 泛型在函数中使用
function identity<T>(arg: T): T {
    console.log(arg);
    return arg;
}
identity<Number>(100)
//或者identity(100) 在 TypeScript 中,在调用泛型函数时,如果没有显式地指定泛型类型参数,
//编译器会进行类型推断。根据传入的实际参数类型,编译器可以推断出泛型类型参数的类型,使得函数调用仍然是正确的
//多个类型参数
function identity2<T, U>(arg: T, arg2: U): T {
    console.log(arg2);
    return arg;
}
identity2<Number, String>(4, "hello")


// 接口中使用泛型
interface Person<N> {
    name: string;
    age: N;
}
const xiong: Person<string> = {
    name: "xiong",
    age: "18"
    // age: 18 //报错
};
console.log(xiong);


// 类中使用泛型
class Person2<T> {
    name: T;
    age: number;
    constructor(name: T, age: number) {
        this.name = name;
        this.age = age;
    }
}
const xiong2 = new Person2<string>('xiong', 18)
console.log(xiong2.name, xiong2.age)


// 泛型除了能使用基本类型 string number boolean等,同时也可以是接口,数组等
function fn<T>(a: T): T {
    return a
}
interface Person3 {
    name: string,
    age: number
}
type C = "a" | "b" | "c"
// 用函数作为泛型的实际类型
fn<(() => void)>(() => { console.log(1) })
// 用接口作为泛型的实际类型
fn<Person3>({ name: "小明", age: 18 })
// 用type作为泛型的实际类型
fn<C>("b")
// 用数组作为泛型的实际类型
fn<string[]>(["a", "b"])


// 类型别名中使用泛型
type CC<T> = { value: T }
let obj: CC<string> = { value: "hello" }

// 类型参数可以设定默认值
// 默认类型为string，但也可以覆盖
function fn2<T = string>(m: T) {
    return m
}
fn2<number>(123)//正确 因为类型推断覆盖掉了默认类型
console.log(fn2<boolean>(true));
// 类型参数默认值多用于class中
class Person4<T = string> {
    list: T[] = [];
    add(t: T) {
        this.list.push(t)
    }
}
let xm = new Person4()
xm.add("4")//正确
// xm.add(4)//错误



// 泛型约束，就是约束一下泛型具体能使用哪些类型
// 下面这个例子是限制T的类型为string
function fn3<T extends string>(a: T): T {
    console.log(a.length)
    return a
}
// 大类型 extends 更具体的类型
// 例如 any extends number 
// 大类型必须要包含后面更具体的类型
// 用的时候，尖括号里面是大类型，得包含函数定义时候那个extends的类型，比如尖括号里面是any，extends的是string，因为any包含string，所以说这是OK的
fn3<any>("hello");


// 泛型还可以嵌套泛型
// 形如 <A<b>> 的嵌套写法表示在 TypeScript 中使用泛型进行多层嵌套。
// 在泛型中,可以使用尖括号 < 和 > 将泛型参数括起来。当出现多层嵌套时,例如 <A<b>> ,它表示泛型类型 A
// 中的一个参数 b 是另一个泛型类型或带有泛型参数的类型。
// 这种嵌套写法主要用于更复杂的数据结构和算法设计,它可以在泛型中引用其他泛型类型的参数,以实现更灵活和
// 抽象的泛型约束。
interface Box2<T> {
    item: T
}
interface PersonName<T> {
    name: T
}
let obj3: Box2<PersonName<string>> = {
    item: {
        name: "hello"
    }
}