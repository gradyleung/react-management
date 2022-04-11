import Home from '@page/Home'
import NotFound from '@page/NotFound'
import Personal from '@page/personal/Personal'
import { useRoutes } from 'react-router-dom' // 使用useRoutes包装路由，需要配置好path,element

type routeType = {
    path: string,
    element: any,
    name: string,
    menuShow: boolean, 
    children?: any
}
const menuRoutes:routeType[] = [
  {
    path: '/',
    element: <Home/>,
    name: "首页",
    menuShow: false, // 是否在菜单项显示
  },
  {
    path: '/home',
    element: <Home/>,
    name: "首页",
    menuShow: true, // 是否在菜单项显示
    children: [
      {
        path: 'person',
        element: <Personal/>,
        name: "个人",
        menuShow: true,
      },
    ]
  },
  {
    path: '/person',
    element: <Personal/>,
    name: "个人",
    menuShow: true,
  },
  {
    path: '*',
    element: <NotFound/>,
    name: "not found",
    menuShow: false,
  },
]
// const SetRoutes  = () => {
//   const Routes = useRoutes([
//     {
//       path: '/',
//       element: Home
//     },
//     {
//       path: 'personal',
//       element: <Personal/>
//     },
//     {
//       path: 'home',
//       element: <Home/>
//     },
//     {
//       path: '*',
//       element: <NotFound/>
//     }
//   ]);
//   return Routes
// }

const SetRoutes  = () => {
  const Routes = useRoutes(menuRoutes);
  return Routes
}



export {SetRoutes,menuRoutes} 