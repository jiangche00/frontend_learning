var province = document.getElementById("province");
var city = document.getElementById("city");
var area = document.getElementById("area");

// load province
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("get", "/api/province", true);
xmlhttp.send(null);
xmlhttp.onreadystatechange = () => {
    if(xmlhttp.readyState===4&(xmlhttp.status>=200 & xmlhttp.status<300)) {
        data = xmlhttp.responseText;
        var provinceArr = data.split(",");
        for(var i = 0; i < provinceArr.length; i++) {
            var option = document.createElement("option");
            province.appendChild(option);
            option.innerHTML = provinceArr[i];
        }
    }
}

// get cities
province.onchange = () => {
    city.innerHTML = "<option>---请选择城市---</option>";
    area.innerHTML = "<option>---请选择区域---</option>";
    var currentProvince = province.value;
    xmlhttp.open("post", "/api/city", true);
    xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlhttp.send("province=" + currentProvince);
    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState===4&(xmlhttp.status>=200 & xmlhttp.status<300)) {
            data = xmlhttp.responseText;
            var citiesArr = data.split(",");
            for(var i = 0; i < citiesArr.length; i++) {
                var option = document.createElement("option");
                city.appendChild(option);
                option.innerHTML = citiesArr[i];
            }
        }
    }
}

// get areas
city.onchange = () => {
    area.innerHTML = "<option>---请选择区域---</option>"
    var currentProvince = province.value;
    var currentCity = city.value;
    xmlhttp.open("post", "/api/area", true);
    xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xmlhttp.send("province="+currentProvince+"&city="+currentCity);
    xmlhttp.onreadystatechange = () => {
        if(xmlhttp.readyState===4&(xmlhttp.status>=200 & xmlhttp.status<300)) {
            data = xmlhttp.responseText;
            var areasArr = data.split(",");
            for(var i = 0; i < areasArr.length; i++) {
                var option = document.createElement("option");
                area.appendChild(option);
                option.innerHTML = areasArr[i];
            }
        }
    }
}