/**
 * Created by win10 on 2017/11/22.
 */
import axios from 'axios'
import cookies from 'vue-cookies'

// 配置的默认值defaults
axios.defaults.timeout = 20000
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.common['openId'] = 'tfl'
axios.defaults.withCredentials = true // 默认携带cookie

// 创建一个axios实例, 设置实例的默认值defaults
const instance = axios.create({
  // baseURL: 'http://192.168.8.126:8083',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

// 添加请求拦截器，并赋予全局axios
axios.interceptors.request.use = instance.interceptors.request.use
instance.interceptors.request.use(config => {
  if (cookies.get('openId')) {
    config.headers.common['openId'] = cookies.get('openId')
  }
  config.url = '/api' + config.url
  return config
}, err => {
  return Promise.reject(err) // 对请求错误做点什么
})
instance.interceptors.response.use(response => {
  return response // 对响应数据做点什么
}, err => {
  return Promise.reject(err) // 对响应错误做点什么
})
export default instance
