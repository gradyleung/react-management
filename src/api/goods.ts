import { axios } from '@/utils/request'
import React from 'react'

export interface searchParam {
  name: string
  type: string
}

export interface updateParam extends searchParam {
  id: React.Key
}

export const getGoodsList = (data: searchParam) => {
  return axios({
    url: '/goods/list',
    method: 'get',
    params: data
  })
}
export const createGoods = (param: searchParam) => {
  return axios({
    url: '/goods',
    method: 'post',
    data: param
  })
}

export const editGoods = (param: updateParam) => {
  return axios({
    url: '/goods',
    method: 'put',
    data: param
  })
}

export const removeGoods = (param: { id: React.Key }) => {
  return axios({
    url: '/goods',
    method: 'delete',
    data: param
  })
}
