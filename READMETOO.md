### `npm install react-app-rewired customize-cra` 实现按需加载antd 

1. 将package.json的react-script 改为 react-rewired
2. npm install react-app-rewired customize-cra
3. npm install babel-plugin-import // 按需加载的插件
4. 在根目录新增config-overrides.js 文件并加入配置的代码

### `addWebpackAlias` 在config-overrides中不生效，在tsconfig重新配置路径生效，前提是用react-app-rewired启动

### `PureComponent` 实现兄弟组件其中一个重新渲染，其他组件不受影响，减少无效渲染的性能消耗

### `TypeScript` 使用typeScript 

### `配置路由` 使用element={<item.component></item.component>} 需要用中括号包起来，否则只是回传一个方法无法构成组件，原因待查

### `node.js` node.js的版本更新到16.14.2 否则报了个eslint的问题