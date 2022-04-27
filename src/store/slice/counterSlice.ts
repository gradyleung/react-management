import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/index'

// 定义 CounterState 的type
interface CounterState {
  value: number
}

// 定义 初始state
const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // PayloadAction 规定输入的类型，此为number类型
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
