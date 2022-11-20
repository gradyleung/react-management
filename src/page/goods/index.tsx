import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Input, Modal, Button, Select, Table, Tag, Space, message } from 'antd'
import GoodsModel from './model'
import {
  searchParam,
  updateParam,
  getGoodsList,
  removeGoods,
  createGoods,
  editGoods
} from '@/api/goods'

const { Column } = Table
const initValue: updateParam = {
  // 每行的初始值
  id: '',
  name: '',
  type: ''
}
const Goods = () => {
  const [form] = Form.useForm()
  const [data, setData] = useState<updateParam[]>()
  const [ifEdit, setIfEdit] = useState<boolean>(true)
  const [Loading, setLoading] = useState<boolean>(true)
  const [currentRow, setCurrentRow] = useState<updateParam>(initValue)
  const [visible, setVisible] = useState<boolean>(false)
  const createModel = () => {
    setIfEdit(false)
    setVisible(true)
  }
  const refresh = () => {
    document.getElementById('searchBtn')?.click()
  }
  const editItem = (value: updateParam) => {
    setCurrentRow(value)
    setIfEdit(true)
    setVisible(true)
  }

  const handleUpdate = async (fields: updateParam) => {
    // 编辑
    const hide = message.loading('editing')
    try {
      fields.id = currentRow.id
      await editGoods(fields)
      hide()
      message.success('编辑成功')
      return true
    } catch (error) {
      hide()
      message.error('编辑失败')
      return false
    }
  }
  const handleCreate = async (fields: searchParam) => {
    // 新建
    const hide = message.loading('creating')
    try {
      await createGoods(fields)
      hide()
      message.success('新增成功')
      return true
    } catch (error) {
      hide()
      message.error('新增失败')
      return false
    }
  }
  const deleteItem = async (id: React.Key) => {
    // 删除
    const hide = message.loading('deleting')
    const obj = { id: id }
    try {
      await removeGoods(obj)
      hide()
      setVisible(false)
      setCurrentRow(initValue)
      message.success('删除成功')
      refresh()
    } catch {
      hide()
    }
  }
  const onFinish = (values: updateParam) => {
    // 查询
    getGoodsList(values).then((res) => {
      setLoading(false) // 停止加载旋转
      if (res.status === 200) {
        setData(res.data)
      }
    })
  }
  useEffect(() => {
    refresh()
  }, [])
  const AdvancedSearchForm = (
    <Form
      form={form}
      name='advanced_search'
      className='ant-advanced-search-form'
      onFinish={onFinish}
      initialValues={{
        type: '',
        name: ''
      }}
    >
      <Row gutter={24}>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
          <Form.Item name='name' label='商品名'>
            <Input placeholder='商品名' />
          </Form.Item>
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
          <Form.Item name='type' label='分类'>
            <Input placeholder='分类' />
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
      <Column title='商品名称' dataIndex='name' key='name' />
      <Column title='类型' dataIndex='type' key='type' />
      <Column
        title='Action'
        key='id'
        render={(value: updateParam, record: updateParam) => (
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
      <GoodsModel
        onSubmit={async (value) => {
          if (ifEdit) {
            const success = await handleUpdate(value)
            if (success) {
              setVisible(false)
              setCurrentRow(initValue)
              refresh()
            }
          } else {
            const success = await handleCreate(value)
            if (success) {
              setVisible(false)
              setCurrentRow(initValue)
              refresh()
            }
          }
        }}
        onCancel={() => {
          setVisible(false)
          if (ifEdit) {
            setCurrentRow(initValue)
          }
        }}
        visible={visible}
        refresh={refresh}
        currentRow={currentRow}
      />
    </div>
  )
}

export default Goods
