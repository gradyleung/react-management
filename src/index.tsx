import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Layout } from 'antd'

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <Layout />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// )
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(
  // Provider专门为多个容器组件传递store，不用每个容器组件单独传store
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
