// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createProxyMiddleware: proxy } = require('http-proxy-middleware') // 固定写法

// eslint-disable-next-line prettier/prettier
module.exports = app => {
  app.use(
    proxy('/express', {
      target: 'http://localhost:8081',
      changeOrigin: true,
      pathRewrite: { '^/express': '' }
    })
  )
}

// import { createProxyMiddleware } from 'http-proxy-middleware'

// eslint-disable-next-line space-before-function-paren
// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware('/express', {
//       target: 'http://localhost:3002',
//       changeOrigin: true,
//       pathRewrite: { '^/express': '' }
//     })
//   )
// }
