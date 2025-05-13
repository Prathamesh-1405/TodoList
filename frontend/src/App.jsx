// import { useState } from 'react'
import Register from './screens/Register'
import { ToastContainer } from 'react-toastify'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<Register/>}/>
        </Routes>
        <ToastContainer/>
        
      </div>
      
    </>
  )
}

export default App
