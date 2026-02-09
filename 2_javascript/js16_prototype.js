/*
    创建对象的方式：
        1. 对象字面量
            var xm={name:"xiaoming", age:18};
        2. 构造函数方式
            var d = new Date();

    原型(prototype): 方法背后，专门保存由方法创建出来的对象的共有属性
        只有函数才有原型，

    构造函数/对象模板: 专门用来创建相同结构对象的专门方法
        1. 一定要返回一个对象
        2. 函数的首字母大写
        3. 构造函数调用： new 构造函数()
        4. new关键字原理
            (1). 创建一个空对象 var = obj{};
            (2). 改变this指向
            (3). 给该对象添加属性
            (4). 返回这个对象 return obj
        5. 关于属性
            自有属性：对象实例自身的属性
            共有属性：
        6. 继承：使用现有类型，创建出新的类型，新类型可以使用现有类型的属性和方法，也可以拓展出现有类型没有的属性和方法

        7. 原型链：一个对象的隐士原型指向父集的原型，而父集也有隐式原型，也会指向他的父集原型，...，一直指向null。这种层层指向的关系，构成原型链

    
    Function 是所有 function 的 父类
    隐式原型(__proto__):
        任何对象都有隐式原型
        任何一个对象的隐式原型都指向创建该对象的父级的原型
*/
function Student(name, age) {
    this.name = name;
    this.age = age;
}
// prototype里面保存共有属性
console.log(Student.prototype)

// 添加共有属性
Student.prototype.car = "bmw";

var xm = new Student("xiaoming", 18);
xm.car = "benz"; // 自有属性，若和共有属性同名，则使用该实例的自有属性
var xh  = new Student("xiaohong", 17);
console.log(xm)
console.log(xm.car);
console.log(xh); //这样打印不出共有属性 Student.prototype.car
console.log(xh.car); // 这样可以打印出来

/*
Object 是 Array 的父集
arr 是 Array的实例
arr调用sayHello()
原型链寻找过程：
arr在自身找 --> 到父集原型中找 --> 到父集的父集的原型中找
*/
Object.prototype.sayHello = function(){
    alert("hello");
}
var arr = new Array(1,2,3);
arr.sayHello();