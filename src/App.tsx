import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Layout from '@/layout/Layout'
import NotFound from './page/NotFound'
import { SetRoutes } from './router/route'

function App() {
  return (
    <div className='App'>
      <Router>
        {/* <Layout /> */}
        <SetRoutes />
      </Router>
    </div>
  )
}

export default App
