import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/layout/Layout'
import NotFound from './page/NotFound'
import { SetRoutes } from './router/route'

function App() {
  return (
    <div className='App'>
      {/* <Router> */}
      {/* <SetRoutes /> */}
      <Layout />
      {/* </Router> */}
    </div>
  )
}

export default App
