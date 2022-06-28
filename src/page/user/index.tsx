import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Input, Modal, Button, Select, Table, Tag, Space, message } from 'antd'
const { Column, ColumnGroup } = Table
import { getUserList, removeUser, createUser, editUser } from '@/api/user'
import UserModel from './model'
// import '@/../mock/user' // mockjs模拟数据
import '@/assets/style/form.scss'

const { Option } = Select
interface DataType {
  id?: React.Key
  firstName?: string
  lastName?: string
  age?: number
  address?: string
  tags?: string[] | null
}

const App: React.FC = () => {
  const [data, setData] = useState<DataType[]>()
  const [ifEdit, setIfEdit] = useState<boolean>(true)
  const [Loading, setLoading] = useState<boolean>(true) // 加载动画
  const [form] = Form.useForm() //
  const [visible, setVisible] = useState<boolean>(false)
  const [currentRow, setCurrentRow] = useState<DataType>(Object)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('Content of the modal')
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setVisible(false)
  }
  const onFinish = (values: any) => {
    getUserList(values).then((res) => {
      setLoading(false) // 停止加载旋转
      if (res.status === 200) {
        setData(res.data)
      }
    })
  }
  const refresh = () => {
    document.getElementById('searchBtn')?.click()
  }
  const createModel = () => {
    setIfEdit(false)
    setVisible(true)
  }
  const editItem = (value: DataType) => {
    setCurrentRow(value)
    setIfEdit(true)
    setVisible(true)
  }

  const deleteItem = async (id: React.Key) => {
    const hide = message.loading('deleting')
    const obj: object = { id: id }
    try {
      removeUser(obj).then((res) => {
        document.getElementById('searchBtn')?.click()
      })
      message.success('deleting is successful')
    } catch {
      hide()
    }
  }
  const handleUpdate = async (fields: DataType) => {
    const hide = message.loading('editing')
    try {
      fields.id = currentRow.id
      await editUser(fields)
      hide()
      message.success('edit is successful')
      return true
    } catch (error) {
      hide()
      message.error('编辑失败')
      return false
    }
  }
  const handleCreate = async (fields: DataType) => {
    const hide = message.loading('creating')
    try {
      await createUser(fields)
      hide()
      message.success('create is successful')
      return true
    } catch (error) {
      hide()
      message.error('新增失败')
      return false
    }
  }
  useEffect(() => {
    // refresh()
  })
  const AdvancedSearchForm = (
    <Form
      form={form}
      name='advanced_search'
      className='ant-advanced-search-form'
      onFinish={onFinish}
      initialValues={{
        age: '',
        firstName: '',
        lastName: '',
        address: ''
      }}
    >
      <Row gutter={24}>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
          <Form.Item name='firstName' label='名字'>
            <Input placeholder='名字' />
          </Form.Item>
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
          <Form.Item name='lastName' label='姓氏'>
            <Input placeholder='姓氏' />
          </Form.Item>
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
          <Form.Item name='age' label='年龄'>
            <Input placeholder='年龄' />
          </Form.Item>
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
          <Form.Item name='address' label='地址'>
            <Input placeholder='地址' />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button
            type='primary'
            style={{ margin: '0 8px' }}
            onClick={() => {
              createModel()
            }}
          >
            create
          </Button>
          <Button type='primary' htmlType='submit' id='searchBtn'>
            Search
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields()
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  )
  const ResultList = (
    <Table dataSource={data} loading={Loading} rowKey='id'>
      {/* rowKey 实现每一个column都有Key 否则会报错 */}
      <ColumnGroup key='nameGroup' title='Name'>
        <Column title='First Name' dataIndex='firstName' key='firstName' />
        <Column title='Last Name' dataIndex='lastName' key='lastName' />
      </ColumnGroup>
      <Column title='Age' dataIndex='age' key='age' />
      <Column title='Address' dataIndex='address' key='address' />
      <Column
        title='Tags'
        dataIndex='tags'
        key='tags'
        render={(tags: string[] | null, record: object, index: number) =>
          tags instanceof Array ? (
            <>
              {tags.map((tag) => (
                <Tag color='blue' key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          ) : (
            <span />
          )
        }
      />
      <Column
        title='Action'
        key='id'
        render={(value: DataType, record: DataType) => (
          <Space size='middle'>
            <a
              onClick={() => {
                editItem(value)
              }}
            >
              Edit
            </a>
            <a
              onClick={() => {
                deleteItem(value.id ? value.id : '')
              }}
            >
              Delete
            </a>
          </Space>
        )}
      />
    </Table>
  )
  return (
    <div>
      {AdvancedSearchForm}
      {ResultList}
      <UserModel
        onSubmit={async (value) => {
          if (ifEdit) {
            const success = await handleUpdate(value)
            if (success) {
              setVisible(false)
              setCurrentRow({})
              refresh()
            }
          } else {
            const success = await handleCreate(value)
            if (success) {
              setVisible(false)
              setCurrentRow({})
              refresh()
            }
          }
        }}
        onCancel={() => {
          setVisible(false)
          if (ifEdit) {
            setCurrentRow({})
          }
        }}
        visible={visible}
        refresh={refresh}
        currentRow={currentRow}
      />
    </div>
  )
}
export default App
