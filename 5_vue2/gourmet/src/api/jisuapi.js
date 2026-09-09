import axios from 'axios'

const jisuapi = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
  params: {
    appkey: process.env.VUE_APP_KEY,
  },
  validateStatus: function (status) {
    return status >= 200 && status < 400
  }
})

// response interceptor
jisuapi.interceptors.response.use(
  (response) => {
    console.log('SUCCESS:', response.status, response.config.url)
    return response.data
  },
  (error) => {
    console.log('ERROR:', error.response?.status, error.config?.url)

    if (error.response && error.response.status === 401) {
      console.log('Unauthorized')
    }

    return Promise.reject(error)
  }
)

export default jisuapi