import { axios } from '@/utils/request'

export interface searchParam {
  firstName?: string
  lastName?: string
  age?: number
  address?: string
}

export interface LoginParam {
  username: string
  password: string
}

export const Login = (param: LoginParam) => {
  return axios({
    url: 'express/user/login',
    method: 'post',
    data: param
  })
}

export const LoginOut = (param: LoginParam) => {
  return axios({
    url: 'express/user/loginOut',
    method: 'post',
    data: param
  })
}

export const Register = (param: LoginParam) => {
  return axios({
    url: 'express/user/register',
    method: 'post',
    data: param
  })
}

export const getUserList = (param: searchParam) => {
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
