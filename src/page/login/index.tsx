import { useNavigate } from 'react-router-dom'
import { Tabs, Form, Input, Button, Checkbox, message } from 'antd'
import React, { useState } from 'react'
import axios from 'axios'
import '@/../mock/user' // mockjs模拟数据
import './index.scss'
const { TabPane } = Tabs

const Login: React.FC = () => {
  const navigate = useNavigate()
  const callback = (key: string) => {
    console.log(key)
  }
  const onFinish = (values: any) => {
    console.log(values)
    message.loading('登陆中').then(() => {
      axios
        .post('/getData', {
          username: values.username,
          password: values.password
        })
        .then((res) => {
          console.log(res)

          if (res.status === 200) {
            message.destroy()
            message.success('欢迎回来')
            navigate('/')
          } else {
            message.error(res.statusText || '登录异常')
          }
        })
    })
  }
  const onFinishFailed = () => {
    console.log('onFinishFailed')
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
              initialValues={{ remember: true }}
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

              <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                <Button type='default' htmlType='submit'>
                  注册
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab='验证码登录' key='2'>
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default Login
