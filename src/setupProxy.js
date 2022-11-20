// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createProxyMiddleware: proxy } = require('http-proxy-middleware') // 固定写法

// eslint-disable-next-line prettier/prettier
// proxy 只能在开发环境使用，打包后无法使用。
module.exports = (app) => {
  app.use(
    proxy('/express', {
      target: 'http://120.24.97.46:8081 ',
      changeOrigin: true,
      pathRewrite: { '^/express': '' }
    })
  )
  app.use(
    proxy('/api', {
      // api在request的baseUrl设置好，为转发所有请求使用
      target: process.env.REACT_APP_TARGET_API,
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    })
  )
}
