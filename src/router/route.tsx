import Home from '@page/Home'
import NotFound from '@page/NotFound'
import Personal from '@page/personal/Personal'

const routes = [
    {
        path: '/',
        component: Home,
        name: "首页"
    },
    {
        path: '/home',
        component: Home,
        name: "首页",
        menuShow: true // 是否在菜单项显示
    },
    {
        path: '/person',
        component: Personal,
        name: "个人",
        menuShow: true
    },
    {
        path: '*',
        component: NotFound,
        name: "not found",
        menuShow: false
    },
]

export default routes