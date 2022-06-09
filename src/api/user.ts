import { axios } from '@/utils/request'

export interface LoginParam {
  username: string
  password: string
}

export const Login = (param: LoginParam) => {
  return axios({
    url: '/user/login',
    method: 'post',
    data: param
  })
}
export const getUserList = () => {
  return axios({
    url: '/user/list',
    method: 'post'
  })
}

export const createUser = (param: object) => {
  return axios({
    url: '/express/user/create',
    method: 'post',
    data: param
  })
}
