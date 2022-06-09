/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express')
const conn = require('../db.js')
// 连接数据库
const jsonWrite = (res, ret) => {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

const router = express.Router()
router.get('/user/list', (req, res) => {
  conn.query('SELECT * FROM USER', (err, result) => {
    if (err) {
      console.log('获取失败')
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
router.post('/user/create', (req, res) => {
  const { firstName, lastName, age, address } = req.body
  const sql = `INSERT INTO user (first_name,last_name,age,address) values(${firstName},${lastName},${age},${address})`
  conn.query(sql, (err, result) => {
    if (err) {
      throw err
    }
    const obj = {
      msg: '创建成功',
      result: result
    }
    jsonWrite(res, result)
  })
})

// export { router as user }
module.exports = router
