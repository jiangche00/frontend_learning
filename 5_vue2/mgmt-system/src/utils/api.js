import axios from "axios";
import { Message } from 'element-ui'; // 单独引入Message，如果在组件中使用时，不需要单独引入

const Api = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000,
    validateStatus: (status) => {
        return status >=200 && status < 400;
    }
})

// 请求拦截器主要是加上token做请求
// token一般会加在 1. 作为请求参数添加 2. 放在http请求头里面
Api.interceptors.request.use(config=>{
    // 有token,则带上, 没token，就不带. 兼容login的时候没有token的情况
    if (sessionStorage.getItem("token")) {
        config.headers.token = sessionStorage.getItem("token");
    }
    return config
})

Api.interceptors.response.use(
    (response) => {
        console.log(response);
        const data = response.data;
        console.log(data);
        if(data.success) {
            return data
        } else {
            Message({
                message:data.message||"请求错误",
                type:"error",
            })
            // 主动抛出异常
            return Promise.reject(new Error(Result.message||"请求错误"))
        }
    },
    (error) => {
        if (error.response) {
            const status = error.response.status;
            const data = error.response.data;
            if (status === 401) {
                const message = data?.message || 'Unauthorized'
                Message({
                    message:message||"请求错误",
                    type:"error",
                })
            }
        }
        return Promise.reject(error);
    }
)

export {Api}