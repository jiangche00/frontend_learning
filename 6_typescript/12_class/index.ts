//ts中class类构造函数里用到的所有属性,必须提前定义类型
class Person {
    //实例属性
    name: string = "张三";//可以在定义的时候直接赋初始值
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    //类属性(静态属性) 只能通过类名访问和修改,对象实例访问不到
    static count: number = 100
    //只读属性
    readonly sex: string = "boy"
    eat() {
        console.log("我在吃饭")
    }
    //静态方法
    static sleep() {
        console.log("我睡觉呢")
    }
}


// 继承
// 通过继承可以将多个类中共有的代码写在一个父类中
// 这样就只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
// 如果子类和父类名字相同,则会覆盖掉父类方法(方法重写)
class Animal {
    name: string;
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    eat() {
        console.log("我在吃饭")
    }
    sleep() {
        console.log("我在睡觉")
    }
}
class Dog extends Animal {
    gender: string
    constructor(name: string, age: number, gender: string) {
        super(name, age)
        this.gender = gender
    }
    //方法的重写
    eat() {
        console.log("我在吃⻣头")
    }
}
let wc = new Dog("旺财", 2, "boy")
wc.eat()



// 访问修饰符
// TypeScript 可以使用三种访问修饰符(Access Modifiers),分别是 public、private 和 protected。
// public 修饰的属性或方法是公有的,可以在任何地方被访问到,默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的,不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的,它和 private 类似,区别是它在当前类和子类中也是允许被访问的
class Animal2 {
    name: string; //默认就是public 没有使用限制
    protected age: number //只能在当前类和子类中用
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    private eat() { //只能在当前类中用
        console.log("我在吃饭")
    }
    sleep() {
        console.log("我在睡觉")
    }
}
class Dog2 extends Animal2 {
    constructor() {
        super("a", 8)
        // super.age // 没法访问
    }
}






// 抽象类
// 抽象方法:就是没有方法体的方法
// 抽象方法只能出现在抽象类中 ,包含了抽象方法的类,就一定是抽象类
// 抽象类中的抽象方法必须被子类(可以是间接子类)实现的。
// 抽象类中不一定包含抽象方法
abstract class Animal3 {
    abstract eat(): void
    abstract fn(): void
    sleep() {
        console.log(1)
    }
}
abstract class Cat extends Animal3 {
}
abstract class Mimi {
}


// implement关键字
// 在TypeScript中, implements 关键字用于检查一个类是否遵循特定的接口。接口(Interface)在TypeScript中是
// 一个非常强大的工具,它描述了一组方法和属性的形状(Shape),但没有实现它们。
interface PPerson {
    id: number,
    name: string, 
    play: () => void
}
interface PPerson1 {
    gender: boolean
}
class XiaoMing implements PPerson, PPerson1 {
    id: number
    name: string
    play: () => void
    gender: boolean
    age: number
    constructor(a: number, b: string, c: () => void) {
        this.id = a;
        this.name = b;
        this.play = c;
        this.gender = false;
        this.age = 11;
    }
}