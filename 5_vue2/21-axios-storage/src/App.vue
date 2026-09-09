<template>
  <div id="app">
    <div>
      city: {{ city }}, weather: {{ weather }}, temperature: {{ temperature }}
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

  export default{
    data(){
      return {
        city: "",
        weather: "",
        temperature: "",
      }
    },
    // 生命周期created创建组件之后，进行操作。在created阶段，还没有页面结构生成
    created(){
      // 默认axios实例
      axios.get("http://localhost:10000/ping").then((res)=>{
        console.log(res);
      })
      // axios 自定义实例
      const _axios = axios.create({
        baseURL: "https://restapi.amap.com/",
        timeout: 3000,
        headers: {
          "Content-Type": "application/json",
        }
      })

      // 请求拦截器, 在请求发送之前会执行
      // 箭头函数里面的型参config里面存的是请求的相关配置 请求头 请求参数 地址 方式......
      // 在拦截器里面，可以集中统一的修改config的配置
      // 在最后，需要 return config，放行
      _axios.interceptors.request.use((config)=>{
        console.log("请求被拦截了");
        config.headers
        return config;
      })

      // 响应拦截器，在response回到浏览器的时候会执行
      // 2个函数作为参数，1个是处理成功response的，1个是处理error的
      // 成功或者error的界定，通过axios里面的validateStatus来界定
      // 处理成功的函数最后返回 response
      // 实际生产中，还会根据业务在响应拦截器里面加上数据是否为空的判断
      // 在响应拦截器里面的一个技巧，对于成功的返回，直接返回response.data数据部分
      // 处理error的函数，通过Promise.reject(error)抛出
      _axios.interceptors.response.use((response)=>{
        console.log("响应被拦截了, 成功");
        if (!response.data.lives.length) {
          return {
            msg: "empty data"
          }
        } else {
          return response.data;
        }
      }, (error)=>{
        console.log("响应被拦截了, 响应失败");
        return Promise.reject(error);
      })

      // 使用自定义的实例调用接口
      // validator中界定成功响应与失败响应的状态码
      _axios.get('/v3/weather/weatherInfo', {
        params: {
          city: "110101",
          key: "4bdc6b1ae8b8cdd031369bc3c112da9f"
        },
        validateStatus: (status) => {
          return status >= 200 && status <= 399;
        }
      }).then((res)=>{
        // 配合了响应拦截器，这里的res实际上就是response.data
        if ("msg" in res && res.msg === "empty data") {
          return
        } else {
          this.city = res.lives[0].province;
          this.weather = res.lives[0].weather;
          this.temperature = res.lives[0].temperature;
        }
      }).catch((error)=>{
        console.error(error);
      })
    },
    // mounted生命周期，此时生成了页面结构
    mounted(){

    }
}
</script>