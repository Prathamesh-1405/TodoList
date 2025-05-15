// import { useState } from 'react'
import Register from './screens/Register'
import { ToastContainer } from 'react-toastify'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Todo from './screens/Todo'
import Login from './screens/Login'
import AddTodo from './screens/AddTodo'
import Navbar from './component/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <>
  
    <div
      style={{
        backgroundColor: 'lightgrey',
        'min-height': '100vh'
      }}
    >
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/addTodo" element={<AddTodo />} />
      </Routes>

      <ToastContainer />
    </div>
  </>
);

}

export default App
