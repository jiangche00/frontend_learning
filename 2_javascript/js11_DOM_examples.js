var inputPassword = document.getElementById("password");
var hint = document.getElementById("pwd-hint");

/*
    判断输入密码的强度
    1 低强度：
        纯数字或者纯小写字母或者纯大写字母 ，用正则
    2 中强度：
        数字字母组合
    3 高强度：
        包含了特殊字符
 */

var numReg = /^\d+$/;
var lowercaseReg = /^[a-z]+$/;
var uppercaseReg = /^[A-Z]+$/;
var numlettermixReg = /^\w+$/;
var specialReg = /\W+/;

const checkPassword = (str) => {
    if(numReg.test(str)||lowercaseReg.test(str)||uppercaseReg.test(str)){
        return 1;
    } else if(numlettermixReg.test(str)){
        return 2;
    } else if(specialReg.test(str)) {
        return 3;
    }
}

// 判断输入密码强度
inputPassword.oninput = () => {
    if(inputPassword.value.length === 0) {
        hint.style.display = "none";
        hint.style.color = "black";
        hint.style.fontWeight = "lighter";
        hint.innerText = "密码强度低";
    }
    if(checkPassword(inputPassword.value) === 1){
        hint.style.display = "block";
        hint.style.color = "red";
        hint.style.fontWeight = "bold";
        hint.innerText = "密码强度低";
    } else if(checkPassword(inputPassword.value) === 2) {
        hint.style.display = "block";
        hint.style.color = "orange";
        hint.style.fontWeight = "bold";
        hint.innerText = "密码强度中";
    } else if(checkPassword(inputPassword.value) === 3) {
        hint.style.display = "block";
        hint.style.color = "green";
        hint.style.fontWeight = "bold";
        hint.innerText = "密码强度高";
    }
}