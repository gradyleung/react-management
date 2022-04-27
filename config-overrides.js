const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = override(
  // 实现ant-design的按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addWebpackAlias({
    // 快捷路径 在tsconfig.json配置了
    '@': path.resolve(__dirname, './src'),
    '@page': path.resolve(__dirname, 'src/page')
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true
    }
  })
)
