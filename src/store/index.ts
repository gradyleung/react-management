import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
// import additionalMiddleware from 'additional-middleware'
// import logger from 'redux-logger'
import counterSlice from './slice/counterSlice'

export const store = configureStore({
  // 每个reducer代表一个模块的状态管理器
  reducer: {
    counter: counterSlice
  }
  // middleware: new MiddlewareArray().concat(additionalMiddleware, logger)
})
// RootState作用是返回store的方法getState的类型 function
export type RootState = ReturnType<typeof store.getState>

// AppDispatch 作用是拿到Store的方法的类型 function
export type AppDispatch = typeof store.dispatch
