import { toast, ToastContainer } from "react-toastify"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import { register } from "../services/user"

function Register(){
  const [name, setName] = useState('')
  const [username, setUsername]= useState('')
  // const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [confirmPassword, setConfirmPassword]= useState('')


  const navigate=useNavigate()

  const onRegister= async()=>{
    if(name.length===0){
      toast.warning('Please Enter Name!')
    }
    else if(username.length===0){
      toast.warning('Please Enter username!')
    }
    // else if(email.length===0){
    //   toast.warning('Please Enter Email!')
    // }
    else if(password.length===0){
      toast.warning('Please Enter Password!')
    }
    else if(confirmPassword.length===0){
      toast.warning('Please Enter Confirm Password!')
    }
    
    else if(!(password===confirmPassword)){
      toast.warning('Password and Confirm Password must be same!')
    }

    else{
      const result=await register(name, username, password)
      if(result['status']=='success'){
        toast.success('User Registered Successfully!')

        navigate('/login')
      }
    }
  }




  return (
    
    <div style={{'backgroundColor':'lightblue'}}>
      <h2 className="heading">Register</h2>
      <div className='row'>
        <div className="col-3"></div>
        <div className="col-6">
          <div className="row">
            {/* <div className="col"> */}
              <div className="mb-3">
                <label htmlFor="">Name</label>
                <input 
                onChange={(e)=>setName(e.target.value)}
                type="text" 
                className="form-control" />
              </div>
            {/*</div> */}
          {/* </div>
          <div className="row"> */}
            {/* <div className="col"> */}
              <div className="mb-3">
                <label htmlFor="">Username</label>
                <input 
                onChange={(e)=>setUsername(e.target.value)}
                type="text" 
                className="form-control" />
              </div>
            {/*</div> */}
          </div>
          {/*<div className="row"> */}
            {/* <div className="col"> */}
              {/* <div className="mb-3">
                <label htmlFor="">Email</label>
                <input 
                onChange={(e)=>setEmail(e.target.value)}
                type="email" 
                className="form-control" />
              </div> */}
            {/*</div> */}
           {/* </div> */}
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
                <label htmlFor="">Confirm Passsword</label>
                <input 
                onChange={(e)=>setConfirmPassword(e.target.value)}
                type="text" 
                className="form-control" />
              </div>
            {/*</div> */}
          {/* </div>
          <div className="row"> */}
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

export default Register;