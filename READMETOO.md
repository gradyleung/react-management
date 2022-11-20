### `npm install react-app-rewired customize-cra` 实现按需加载antd 

1. 将package.json的react-script 改为 react-rewired
2. npm install react-app-rewired customize-cra
3. npm install babel-plugin-import // 按需加载的插件
4. 在根目录新增config-overrides.js 文件并加入配置的代码

### `addWebpackAlias` 在config-overrides中不生效，在tsconfig重新配置路径生效，前提是用react-app-rewired启动

### `PureComponent` 实现兄弟组件其中一个重新渲染，其他组件不受影响，减少无效渲染的性能消耗

### `TypeScript` 使用typeScript 

### `配置路由` 使用element={<item.component></item.component>} 需要用中括号包起来，否则只是回传一个方法无法构成组件，原因待查
在配置中，link的组件需把父的路径加进去，否则无法跳转到嵌套路由

### `node.js` node.js的版本更新到16.14.2 否则报了个eslint的问题

### `webpack` 通过eject查看配置文件

### `env.js` 的主要目的在于读取env配置文件并将env的配置信息给到全局变量process.env
在根目录配置.env.development.local 来设置本地的环境变量配置文件
npm install cross-env后
"start": "cross-env REACT_APP_NODE_ENV=development react-app-rewired start",

在配置文件中，变量名需要在前面加前缀REACT_APP_,env.js文件才能把它加入到process.env中，原因是避免意外地在可能具有相同名称的计算机上公开私钥。更改任何环境变量都需要重新启动正在运行的开发服务器。

### `eslint` 在根目录加入.eslintrc.js 拓展配置文件 vscode需安装拓展 同prettier容易冲突
### `prettier` 在根目录加入.prettierrc.js 拓展配置文件 vscode需安装拓展

### `使用react-redux` 状态管理器

### `redux-saga` 一种处理更复杂的中间件，可取代redux-thunk

### `less` 在config-override配置容易出现问题，改用默认配置的scss

### `mockjs` 在page中引入mock文件，直接调用

### `react-cookie` 处理cookie

### `qs`库处理数据

### `express mysql body-parser` 搭建服务器，连接数据库
install babel-cli 去允许express使用es6的语法
nodemon 热启动server,文件修改不需要重启node
mysql 连接数据库
npm install concurrently 同时执行start/node 两个服务

### `setupProxy` 设置proxy 代理本地跨域以及网络请求
在src下添加setupProxy.js，cra的webpack config有配置这个文件
必须注意此方法只可解决本地跨域问题，原理在本地启动一个node服务去请求远方的服务，打包后无法启动此服务。在生产环境跨域依然建议通过nginx反向代理。

### `jsonwebtoekn + bcrypt + express-jwt` 登录，注册加入验证，加密等功能
express-jwt内部引用了jsonwebtoken，对其封装使用。 在实际的项目中这两个都需要引用，他们两个的定位不一样。jsonwebtoken是用来生成token给客户端的，express-jwt是用来验证token的。

### 跨域 
post 默认用的是application/json，因此需要转化格式