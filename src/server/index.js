/* eslint-disable @typescript-eslint/no-require-imports */
const bodyParser = require('body-parser')
const express = require('express')
const user = require('./modules/user.js')
const { jwtVerify } = require('./util') // 验证token有效

const app = express()
app.use(jwtVerify)
// app.use(
//   jwt({
//     secret: secret,
//     algorithms: ['HS256']
//   }).unless({
//     path: ['/user/login'] // 除了这个地址，其他的URL都需要验证
//   })
// )
// app.use((req, res, next) => {
//   // 任何路由信息都会执行这里面的语句
//   console.log('this is a api request!')
//   // 把它交给下一个中间件，注意中间件的注册顺序是按序执行
//   next()
// })
app.use(bodyParser.urlencoded({ extended: true })) // 自动解析urlencoded类型请求体
app.use(bodyParser.json()) // 解析json
app.use(user) // 引入封装的路由
app.listen(8081, () => {})

console.log('正在监听8081端口')
