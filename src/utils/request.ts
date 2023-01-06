import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'antd'
import cookie from 'react-cookies'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'
const service: AxiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BASEURL_API, // 后缀api是为了proxy转发请求
  baseURL: 'http://120.24.97.46:8081/', // 后缀api是为了proxy转发请求
  timeout: 10000
  // withCredentials: true // 允许把cookie传递到后台
  // 如果content-Type 是 "application/x-www-form-urlencoded" 需要对 data 进行字符转义
  // transformRequest: [
  //   (data, headers) => {
  //     return qs.stringify(data)
  //   }
  // ]
})

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据进行处理
    const { data, headers } = response
    if (headers.authorization) {
      // 判断是否授权
      cookie.save('Bear_Token', headers.authorization, { path: '/' })
    } else {
      if (data?.data.token) {
        // 另一种情况token放在返回data中
        cookie.save('Bear_Token', data.data.token, { path: '/' })
      }
    }
    switch (data.status) {
      case 808:
        message.error('该用户已被冻结，请联系工作人员')
        break
      case 504:
        message.error('网络超时')
        break
      case 200:
        break
      default:
        message.success(data.message)
    }
    return data
  },
  (error) => {
    const { response } = error
    if (response) {
      if (response.status === 401) {
        message.error('登录失效')
        setTimeout(() => {
          window.location.href = '/login'
        }, 500)
        return Promise.reject(error)
      }
      message.error(error.message)
      return Promise.reject(error)
    } else {
      message.error('网络连接异常,请稍后再试!')
      return Promise.reject(error)
    }
  }
)
// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 请求之前做些什么
    const token = cookie.load('Bear_Token')
    const { headers } = config
    if (token && headers) headers.Authorization = `Bearer ${token}` // 增加header作为判断，因改版本的headers定义不包含undefined会报错
    // 后台能够直接处理的数据格式，是一种经过序列化的键值对数据
    // post 默认用的是application/json，因此需要转化格式
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { service as axios }
