import axios from "axios";

const api = axios.create({
    baseURL: "https://restapi.amap.com/v3/weather",
    timeout: 5000,
    params: {
        key: "4bdc6b1ae8b8cdd031369bc3c112da9f",
    }
})

export default api