import { useAppDispatch, useAppSelector } from '@/store/hook'
import { increment, decrement } from '@/store/slice/counterSlice'

export default function Counter() {
  const { value } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        {value}
      </button>
      <hr />
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >
        {value}
      </button>
    </div>
  )
}
