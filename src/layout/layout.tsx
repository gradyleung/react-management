import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './layout.css'
import Main from './content'
import routes from '../router/route'

const { Header, Content, Footer } = Layout;

class Navigation extends React.Component {
  render(){
    return (
      <Layout>
      <BrowserRouter>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {
            routes.map( item => {
              if(item.menuShow) return <Menu.Item key={item.path}><Link to={item.path}>{item.name}</Link></Menu.Item>
            })
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
        <Main></Main>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </BrowserRouter>
  </Layout>
    )
  }
}

export default Navigation
