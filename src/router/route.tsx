import Home from '@page/Home'
import NotFound from '@page/NotFound'
import React from 'react'
import Layout from '@/layout/Layout'
import Goods from '@page/goods/index'
import User from '@page/user/index'
import Counter from '@page/counter/Counter'
import Login from '@page/login'
import { useRoutes, Navigate } from 'react-router-dom' // 使用useRoutes包装路由，需要配置好path,element

interface routeType {
  path: string
  element?: React.ReactElement
  name: string
  extra?: boolean
  menuShow: boolean
  children?: routeType[]
}
const menuRoutes: routeType[] = [
  {
    path: '/',
    element: <Home />,
    name: '首页',
    menuShow: false // 是否在菜单项显示
  },
  // {
  //   path: '/test/',
  //   name: '首页',
  //   menuShow: true, // 是否在菜单项显示
  //   children: [
  //     {
  //       path: 'personal',
  //       element: <Personal />,
  //       name: '个人',
  //       menuShow: true
  //     },
  //     {
  //       path: 'counter',
  //       element: <Counter />,
  //       name: '计数器',
  //       menuShow: true
  //     }
  //   ]
  // },
  {
    path: '/goods',
    element: <Goods />,
    name: '商品',
    menuShow: true
  },
  {
    path: '/counter',
    element: <Counter />,
    name: '计数器',
    menuShow: true
  },
  {
    path: '/user',
    element: <User />,
    name: '用户管理',
    menuShow: false
  },
  {
    path: '*',
    element: <NotFound />,
    name: 'not found',
    menuShow: false
  }
]
const fullRoutes: routeType[] = [
  {
    path: '/',
    element: <Layout />,
    name: '首页',
    menuShow: false, // 是否在菜单项显示
    children: menuRoutes
  },
  // {
  //   path: '/',
  //   element: <Navigate to='/login' />,
  //   name: '登录',
  //   menuShow: false
  // },
  // {
  //   path: '/home',
  //   element: <Layout />,
  //   name: '首页',
  //   menuShow: false, // 是否在菜单项显示
  //   children: menuRoutes
  // },
  {
    path: '/404',
    element: <NotFound />,
    name: 'not found',
    menuShow: false
  },
  {
    path: '/login',
    element: <Login />,
    name: 'login',
    menuShow: false
  },
  {
    path: '/*',
    element: <NotFound />,
    name: 'not found',
    menuShow: false
  }
  // {
  //   path: '/login',
  //   element: <Personal />,
  //   name: 'login',
  //   menuShow: false
  // }
]
const SetRoutes = () => {
  const Routes = useRoutes(fullRoutes)
  return Routes
}

const ContentRoutes = () => {
  return useRoutes(menuRoutes)
}

export { SetRoutes, ContentRoutes, menuRoutes }
export type { routeType }
