import { toast, ToastContainer } from "react-toastify"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import { login } from "../services/user"

function Login(){
  
  const [username, setUsername]= useState('')
  // const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  


  const navigate=useNavigate()

  const onRegister= async()=>{
    
    if(username.length===0){
      toast.warning('Please Enter username!')
    }
    // else if(email.length===0){
    //   toast.warning('Please Enter Email!')
    // }
    else if(password.length===0){
      toast.warning('Please Enter Password!')
    }
    else{
      const result=await login(username, password)
      if(result['status']=='success'){
        toast.success('Login Successful!')

        navigate('/login')
      }
    }
  }




  return (
    
    <div style={{'backgroundColor':'lightblue'}}>
      <h2 className="heading">Login</h2>
      <div className='row'>
        <div className="col-3"></div>
        <div className="col-6">
          <div className="row">
              <div className="mb-3">
                <label htmlFor="">Username</label>
                <input 
                onChange={(e)=>setUsername(e.target.value)}
                type="text" 
                className="form-control" />
              </div>
            {/*</div> */}
          </div>
          



          
          <div className="row">
            {/* <div className="col"> */}
              <div className="mb-3">
                <label htmlFor="">Password</label>
                <input 
                onChange={(e)=>setPassword(e.target.value)}
                type="password" 
                className="form-control" />
              </div>
            {/*</div> */}
           {/* </div> */}
          

          {/*<div className="row"> */}
            {/* <div className="col"> */}
              <div className="mb-3">
                Already have an account? <Link to='/loign'>Login</Link>
              </div>
              <div className="mb-3">
                <button onClick={onRegister}>Register</button>
              </div>
              
            {/*</div> */}
          </div>

          
        </div>
      </div>

    </div>
    
  )
}

export default Login;