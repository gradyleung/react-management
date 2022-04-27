import { useState, useEffect } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `${count}次`
    return () => {
      console.log('组件卸载')
    }
  })
  return (
    <div>
      <p>click {count} times</p>
      <button onClick={() => setCount(count + 1)}>加1</button>
    </div>
  )
}

export default Home
