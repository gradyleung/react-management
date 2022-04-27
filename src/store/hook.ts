import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './index'

// use hook 节约每次引入type的工作
// useSelector: 节约配置RootState type
// useDispatch: 加入了中间件的type的定义

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
