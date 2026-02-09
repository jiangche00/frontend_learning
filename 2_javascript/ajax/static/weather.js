var input = document.getElementById("input");
var button = document.getElementById("btn");
var h1 = document.getElementById("h1");
var httpClient = new XMLHttpRequest();

button.onclick = () => {
    if(input.value.trim() === "") {
        return
    }
    httpClient.open("get", "https://restapi.amap.com/v3/weather/weatherInfo?key=4bdc6b1ae8b8cdd031369bc3c112da9f&extensions=all&city="+input.value.trim(), true);
    httpClient.send(null);
    httpClient.onreadystatechange = () => {
        if(httpClient.readyState===4&(httpClient.status>=200 & httpClient.status<300)){
            h1.innerHTML = "";
            var p = document.createElement("p");
            h1.appendChild(p);
            p.innerText = "查询结果: " + input.value.trim();
            var retObj = JSON.parse(httpClient.responseText);
            if(Number(retObj.count) < 1) {
                var h2 = document.createElement("h2");
                h1.appendChild(h2);
                h2.innerText = "未查询到天气数据";
            } else {
                var forecastArr = retObj.forecasts[0].casts;
                for(var i = 0; i < forecastArr.length; i++) {
                    var h2 = document.createElement("h2");
                    h1.appendChild(h2);
                    h2.innerText = "date: " + forecastArr[i].date + " week: " + forecastArr[i].week + " 白天气象: " + forecastArr[i].dayweather + " 夜间气象: " + forecastArr[i].nightweather + " 白天温度: " + forecastArr[i].daytemp + " 夜间温度: " + forecastArr[i].nighttemp;
                }
            }
        }
    }
}