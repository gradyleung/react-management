/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express')
const conn = require('../db.js')
const jsonWrite = require('../util.js') // 处理返回体，同时把下划线转为驼峰

const router = express.Router()
router.post('/user/list', (req, res) => {
  const { firstName, lastName, age, address } = req.body
  let ageSql
  if (age === '') {
    // 对age类型进行精确/模糊双重匹配
    ageSql = `and age like '%%'`
  } else {
    ageSql = `and age = '${age}'`
  }
  const sql = `select * from user where first_name like '%${firstName}%' and last_name like '%${lastName}%' and address like '%${address}%' ${ageSql};`
  conn.query(sql, (err, result) => {
    if (err) {
      throw new Error('获取失败')
    }
    if (result) {
      jsonWrite(res, result, '获取用户列表成功')
    }
  })
})
router.post('/user/create', (req, res) => {
  const { firstName, lastName, age, address } = req.body
  const sql = `INSERT INTO user (first_name,last_name,age,address) values('${firstName}','${lastName}','${age}','${address}');`
  conn.query(sql, (err, result) => {
    if (err) {
      throw err
    }
    jsonWrite(res, result, '新增用户成功')
  })
})

router.post('/user/edit', (req, res) => {
  const { id, firstName, lastName, age, address } = req.body
  const sql = `UPDATE user set first_name = '${firstName}',last_name = '${lastName}',age = '${age}',address = '${address}' WHERE id = '${id}';`
  conn.query(sql, (err, result) => {
    if (err) {
      throw new Error()
    }
    jsonWrite(res, result, '编辑用户成功')
  })
})
router.get('/user/remove', (req, res) => {
  const { id } = req.query
  const sql = `DELETE FROM user WHERE id = '${id}';`
  conn.query(sql, (err, result) => {
    if (err) {
      throw new Error()
    }
    jsonWrite(res, result, '删除用户成功')
  })
})

module.exports = router
