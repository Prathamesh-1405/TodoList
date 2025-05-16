import { toast, ToastContainer } from "react-toastify"
import { useState, useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import { login } from "../services/user"

function Login(){
  
  const [username, setUsername]= useState('')
  const [password, setPassword]= useState('')
  const navigate=useNavigate()

  useEffect(() => {

        if(sessionStorage.getItem('username')){
          navigate('/todo')
        }
        return;
      }, [navigate]);

  const onLogin= async()=>{
    
    if(username.length===0){
      toast.warning('Please Enter username!')
    }
    else if(password.length===0){
      toast.warning('Please Enter Password!')
    }
    else{
      const result=await login(username, password)
      if(result.status==200){
        toast.success('Login Successful!')

        navigate('/todo')
        sessionStorage.setItem('username', username)
        
      }
      else if(result.status==201){
        toast.error('User not found!')
        setUsername('')
        setPassword('')
      }

      else if(result.status==202){
        toast.error('Invalid Password!')
        setPassword('')
      }

      else{
        toast.error('Under mentainance! Try after some time.')
        setUsername('')
        setPassword('')
      }
      

      
      
    }
  }
  return (
    
    <div style={{'backgroundColor':'#434343', minHeight: '100vh'}}>
      <br /><br /><br />
      <div className="container" style={{
    backgroundImage: 'linear-gradient(to bottom ,rgb(42, 37, 37), #434343 )', maxWidth: '600px',
  }}>
      <h2 className="heading" style={{color:'whitesmoke'}}>Login</h2>
      <div className='row'>
        <div className="col-3"></div>
        <div className="col-6">
          <div className="row">
              <div className="mb-3" style={{color:'coral', textAlign:'left'}}>
                <label htmlFor="">Username</label>
                <input 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                type="text" 
                className="form-control" />
              </div>
          </div>
          <div className="row">
              <div className="mb-3" style={{color:'coral', textAlign:'left'}}>
                <label htmlFor="">Password</label>
                <input 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password" 
                className="form-control" />
              </div>
              <div className="mb-3" style={{color:'whitesmoke'}}>
                Don't have an account? <Link to='/'>Register</Link>
              </div>
              <div className="mb-3">
                <button onClick={onLogin}>Login</button>
              </div>
          </div>
        </div>
      </div>
</div>
    </div>
    
  )
}

export default Login;