// get DOM objects
var username = document.getElementById("username");
var password = document.getElementById("password");
var rePassword = document.getElementById("re-password");
var nameCheck = document.getElementById("namecheck");
var pwdCompliance = document.getElementById("pwdcompliance");
var pwdCheck = document.getElementById("pwdcheck");
var registerButton = document.getElementById("register_btn");
var regResult = document.getElementById("regresult");
var pwdIcon = document.getElementById("pwd_icon");
var pwdCheckIcon = document.getElementById("pwd_check_icon");

// regex
var userReg = /^\w{4,8}$/; // 4-8 length, letter or number
var psdReg = /^\d{6}$/; // 6 digits number

// functions
const checkFunction1 = (obj1, obj2, reg, text) => {
    if(obj1.value.length === 0) {
        obj2.style.display = "none";
        obj2.innerText = "";
        return
    }
    if(reg.test(obj1.value)) {
        obj2.style.display = "none";
        obj2.innerText = "";
    } else {
        obj2.style.display = "inline";
        obj2.innerText = text;
    }
}

const checkFunction2 = (obj1, obj2, obj3, text) => {
    if(obj1.value.length === 0) {
        obj3.style.display = "none";
        obj3.innerText = "";
    } else {
        if(obj1.value != obj2.value) {
            obj3.style.display = "inline";
            obj3.innerText = text;
        } else {
            obj3.style.display = "none";
            obj3.innerText = "";
        }
    }
}

const iconChange = (obj1, obj2) => {
    if(obj1.type === "password") {
        obj1.type = "text";
        obj2.src = "img/eye-open.svg";
    } else if(obj1.type === "text") {
        obj1.type = "password";
        obj2.src = "img/eye-close.svg";
    }
}

// events
username.onblur = () => {
    checkFunction1(username, nameCheck, userReg, "invalid username, must be 4-8 lengh, characters or numbers");
}

password.onblur = () => {
    checkFunction1(password, pwdCompliance, psdReg, "invalid password, must be 6-digits number");
}

rePassword.onblur = () => {
    checkFunction2(rePassword, password, pwdCheck, "password mismatch");
}

pwdIcon.onclick = () => {
    iconChange(password, pwdIcon);
}

pwdCheckIcon.onclick = () => {
    iconChange(rePassword, pwdCheckIcon);
}

registerButton.onclick = () => {
    if(username.value.length != 0 && password.value.length != 0 && rePassword.value.length != 0) {
        if(nameCheck.style.display === "none" && pwdCompliance.style.display === "none" && pwdCheck.style.display === "none") {
            regResult.style.display = "inline";
            regResult.style.color = "green";
            regResult.innerText = "register successful";
        } else {
            regResult.style.display = "inline";
            regResult.style.color = "red";
            regResult.innerText = "invalid username or password";
        }
    } else {
        regResult.style.display = "inline";
        regResult.style.color = "red";
        regResult.innerText = "empty value is prohibited";
    }
}

