/* eslint-disable @typescript-eslint/no-require-imports */
const bodyParser = require('body-parser')
const express = require('express')
const user = require('./modules/user.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: true })) // 自动解析urlencoded类型请求体
app.use(bodyParser.json()) // 解析json
app.use(user) // 引入封装的路由
app.listen(8081, () => {})

console.log('正在监听8081端口')
