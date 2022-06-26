import { axios } from '@/utils/request'

export interface LoginParam {
  username: string
  password: string
}

export interface searchParam {
  firstName?: string
  lastName?: string
  age?: number
  address?: string
}

export const Login = (param: LoginParam) => {
  return axios({
    url: '/user/login',
    method: 'post',
    data: param
  })
}
export const getUserList = (param: searchParam) => {
  console.log(param)
  return axios({
    url: '/express/user/list',
    method: 'post',
    data: param
  })
}

export const createUser = (param: object) => {
  return axios({
    url: '/express/user/create',
    method: 'post',
    data: param
  })
}

export const editUser = (param: object) => {
  return axios({
    url: '/express/user/edit',
    method: 'post',
    data: param
  })
}

export const removeUser = (param: object) => {
  return axios({
    url: '/express/user/remove',
    method: 'get',
    params: param
  })
}
