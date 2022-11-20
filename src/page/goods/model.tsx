import { Button, Form, Input, Modal, Select } from 'antd'
import React, { useState, useEffect } from 'react'
import { updateParam } from '@/api/goods'
import '@/assets/style/form.scss'
// 父组件传参
const { Option } = Select
interface IProps {
  refresh: () => void
  currentRow: updateParam
  onSubmit: (fields: updateParam) => Promise<void>
  onCancel: () => void
  visible: boolean
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
      span: 20
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
      span: 20,
      offset: 4
    }
  }
}

const App = (props: IProps) => {
  const [modelForm] = Form.useForm()
  useEffect(() => {
    if (props.visible) {
      // 待组件渲染后再触发form的方法
      console.log(props.currentRow)

      modelForm.setFieldsValue(props.currentRow)
    }
    return () => {
      // 组件销毁触发
      if (props.visible) {
        modelForm.resetFields()
      }
    }
  })
  return (
    <Modal
      getContainer={false}
      title='商品更新'
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={null}
    >
      <Form
        {...formItemLayout}
        form={modelForm}
        name='register'
        onFinish={props.onSubmit}
        scrollToFirstError
      >
        <Form.Item
          name='name'
          label='商品名称'
          rules={[
            {
              required: true,
              message: '请输入商品名称!',
              whitespace: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='type'
          label='类型'
          rules={[
            {
              required: true,
              message: '请选择商品类型!',
              whitespace: true
            }
          ]}
        >
          <Select>
            <Select.Option value='1'>衣服</Select.Option>
            <Select.Option value='2'>鞋子</Select.Option>
            <Select.Option value='3'>帽子</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
            确认
          </Button>
          <Button type='default' onClick={props.onCancel}>
            取消
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default App
