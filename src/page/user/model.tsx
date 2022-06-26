import { Button, Form, Input, Modal, Select } from 'antd'
import React, { useState, useEffect } from 'react'
import { createUser, editUser } from '@/api/user'
import axios from 'axios'
// 父组件传参
interface DataType {
  id?: React.Key
  firstName?: string
  lastName?: string
  age?: number
  address?: string
  tags?: string[] | null
}

interface IProps {
  refresh: () => void
  currentRow: DataType
  onSubmit: (fields: DataType) => Promise<void>
  onCancel: () => void
  visible: boolean
  // type: string
}
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
}

const App = (props: IProps) => {
  const [form] = Form.useForm()
  // const [initialValues, setValues] = useState<DataType>(Object)
  // const [visible, setVisible] = useState<boolean>(false)
  // const [formData, setFormData] = useState<DataType>(Object)
  // const [confirmLoading, setConfirmLoading] = useState(false)
  // const [modalText, setModalText] = useState('Content of the modal')
  // const handleOk = () => {
  //   setModalText('The modal will be closed after two seconds')
  //   setConfirmLoading(true)
  //   setTimeout(() => {
  //     setVisible(false)
  //     setConfirmLoading(false)
  //   }, 2000)
  // }

  // const handleCancel = () => {
  //   setVisible(false)
  // }
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
    // if (props.type === 'create') {
    //   createUser(values).then((res) => {
    //     console.log(res)
    //     if (res.status === 200) {
    //       console.log('')
    //       props.refresh()
    //     }
    //   })
    // } else if (props.type === 'edit') {
    //   values.id = props.currentRow.id
    //   editUser(values).then((res) => {
    //     console.log(res)
    //     if (res.status === 200) {
    //       console.log('')
    //       props.refresh()
    //     }
    //   })
    // }
  }
  useEffect(() => {
    form.setFieldsValue(props.currentRow)
    return () => {
      // 组件销毁触发
      form.resetFields()
    }
  })
  return (
    <Modal title='Title' visible={props.visible} onCancel={() => props.onCancel()}>
      <Form
        {...formItemLayout}
        form={form}
        initialValues={{
          id: props.currentRow.id,
          firstName: props.currentRow.firstName,
          lastName: props.currentRow.lastName,
          age: props.currentRow.age,
          address: props.currentRow.address,
          tags: props.currentRow.tags
        }}
        name='register'
        onFinish={props.onSubmit}
        scrollToFirstError
      >
        <Form.Item
          name='firstName'
          label='名字'
          tooltip='What do you want others to call you?'
          rules={[
            {
              required: true,
              message: '请输入你的名字!',
              whitespace: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='lastName'
          label='姓'
          tooltip='What do you want others to call you?'
          rules={[
            {
              required: true,
              message: '请输入你的姓氏!',
              whitespace: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='age'
          label='年龄'
          tooltip='What do you want others to call you?'
          rules={[
            {
              required: true,
              message: '请输入你的姓氏!',
              whitespace: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='address' label='地址'>
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
            Register
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default App
