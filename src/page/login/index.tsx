import { useNavigate } from 'react-router-dom'
import { Tabs, Form, Input, Button, Checkbox, message } from 'antd'
import React, { useState } from 'react'
// import { axios } from '@/utils/request'
import { Login, Register, LoginParam } from '@/api/user'
// import '@/../mock/user' // mockjs模拟数据
import './index.scss'
import cookie from 'react-cookies'
const { TabPane } = Tabs

const LoginComponent: React.FC = () => {
  const navigate = useNavigate()
  const callback = (key: string) => {
    console.log(key)
  }
  const onFinish = (values: LoginParam) => {
    message.loading('登陆中').then(() => {
      Login(values).then((res) => {
        console.log(res)
        if (res.status === 200) {
          // cookie.save('Bear_Token', res.data.token, { path: '/' })
          message.destroy()
          message.success('欢迎回来')
          navigate('/')
        }
      })
    })
  }
  const onFinishFailed = () => {
    console.log('onFinishFailed')
  }
  const onRegister = (values: LoginParam) => {
    message.loading('注册中').then(() => {
      Register(values).then((res) => {
        console.log(res)
        if (res.status === 200) {
          message.destroy()
          message.success('欢迎使用')
          navigate('/')
        }
      })
    })
  }

  const onRegisterFailed = (value: any) => {
    console.log(value)
  }

  return (
    <div className='login_bg'>
      <div className='login_card'>
        <Tabs onChange={callback} type='card' centered className='login_tab'>
          <TabPane tab='密码登录' key='1'>
            <Form
              name='basic'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 19 }}
              initialValues={{ remember: true, username: 'gradyleung', password: 'abcd1234' }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
              <Form.Item
                label='Username'
                name='username'
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name='remember'
                valuePropName='checked'
                wrapperCol={{ offset: 0, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                <Button type='primary' htmlType='submit'>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab='注册' key='2'>
            <Form
              name='basic'
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 19 }}
              initialValues={{ remember: true }}
              onFinish={onRegister}
              onFinishFailed={onRegisterFailed}
              autoComplete='off'
            >
              <Form.Item
                label='Username'
                name='username'
                rules={[
                  { required: true, message: 'Please input your username!' },
                  { min: 8, message: '用户名至少需要8位!' }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' },
                  { min: 8, message: '密码至少需要8位!' }
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name='remember'
                valuePropName='checked'
                wrapperCol={{ offset: 0, span: 16 }}
              />
              <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                <Button type='primary' htmlType='submit'>
                  注册
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default LoginComponent
