function Student(name, age) {
    this.name = name;
    this.age = age;
}

function _new() {
    let obj={};
    // 取出所有形参
    let params = Array.prototype.slice.call(arguments, 1);
    // 取出构造函数
    let fn = arguments[0];
    // obj的原型指向fn的原型
    obj.__proto__ = fn.prototype;
    // obj的原型的构造函数指向fn
    obj.__proto__.constructor = fn;
    //修改this指向,让obj运行按参数来运行构造函数
    fn.apply(obj, params);
    return obj;
}

// 运行测试
const xiaoming = _new(Student, "xiaoming", 10);
console.log(xiaoming);