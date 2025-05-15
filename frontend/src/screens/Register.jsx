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
      console.log(result.status)
      if(result.status==201){
        toast.success('User Registered Successfully!')

        navigate('/login')
      } 
    }
  }




  return (
    
    <div style={{'backgroundColor':'lightgrey', minHeight: '100vh'}}>
      <br /><br /><br />
      <div className="container" style={{
    backgroundImage: 'linear-gradient(to right, #000000, #434343)', maxWidth: '700px',
  }}>
    <br />
      <h2 className="heading" style={{color:'whitesmoke'}}>Register</h2>
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
              <div className="mb-3" style={{color: 'whitesmoke'}}>
                Already have an account? <Link to='/login'>Login</Link>
              </div>
              <div className="mb-3">
                <button onClick={onRegister}>Register</button>
              </div>
              
            {/*</div> */}
          </div>

          
        </div>
      </div>
</div>
    </div>
    
  )
}

export default Register;