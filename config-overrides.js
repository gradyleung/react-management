const {
  override,
  fixBabelImports,
  addWebpackAlias,
  overrideDevServer,
  removeModuleScopePlugin
} = require('customize-cra')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

const devConfig = () => {
  return {
    proxy: {
      '/mock': {
        target: path.resolve(__dirname, './mock/index')
      }
    }
  }
}

module.exports = {
  webpack: override(
    // 实现ant-design的按需加载
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }),
    removeModuleScopePlugin(), // 取消限制无法从外部引入文件
    addWebpackAlias({
      // 快捷路径 在tsconfig.json配置了
      '@': path.resolve(__dirname, './src'),
      '@page': path.resolve(__dirname, 'src/page')
    })
  ),
  derServer: overrideDevServer(devConfig()) // 配置api proxy
}
