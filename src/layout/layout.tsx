import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './layout.css'
import { SetRoutes,menuRoutes } from '../router/route'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Item from 'antd/lib/list/Item';
import { log } from 'console';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

class Navigation extends React.Component {
  render(){
    return (
      <Layout>
      <Router>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {
          this.menuPackage(menuRoutes)
          }
        </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {/* 利用useRouter封装的路由 */}
        <SetRoutes/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Router>
  </Layout>
    )
  }
  menuPackage = (menuList:any) => {
    return menuList.reduce( ( pre: any[] , next: any ) => {
      if(!next.children){
        pre.push(
          <Menu.Item key={next.path}>
            <Link to={next.path}>{next.name}</Link>
          </Menu.Item>
        )
        return pre
      }else{
        console.log(next);
        pre.push(
          <SubMenu key={next.key} icon={<UserOutlined />} title={next.name}>
            {
              next.children.map( (item:any) => {
                return (
                  <Menu.Item key={item.path}><Link to={item.path}>{item.name}</Link></Menu.Item>
                )
              })
            }
          </SubMenu>
        )
        return pre
      }
    },[])
  }
}

export default Navigation
