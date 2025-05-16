import { toast, ToastContainer } from "react-toastify"
import { useState, useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import { register } from "../services/user"
import { registerSchema } from "../yup/registerSchema"
import { ValidationError } from "yup"

function Register(){
  const [name, setName] = useState('')
  const [username, setUsername]= useState('')
  const [password, setPassword]= useState('')
  const [confirmPassword, setConfirmPassword]= useState('')


  const navigate=useNavigate()

  useEffect(() => {
      if(!sessionStorage.getItem('username')){
        console.log('')
      }
      else{
        navigate('/login')
      }
      return;
    }, [navigate]);

  const onRegister= async()=>{
    try{
    await registerSchema.validate(
      {name, username, password, confirmPassword},
      {abortEarly: false}
    )
    

   
      const result=await register(name, username, password)
      console.log(result.status)
      if(result.status==201){
        toast.success('User Registered Successfully!')

        navigate('/login')
      } 
      else if(result.status==200){
        toast.error('Username used')
      }
      else{
        toast.error('Under Mentainanc! Please try after some time')
        setName('')
        setUsername('')
        setPassword('')
        setConfirmPassword('')
      }
    }
    catch(e){
      if(e.inner){
        e.inner.forEach((ValidationError)=>{
          toast.warning(ValidationError.message)
        })
      }
    }
  }




  return (
    
    <div style={{'backgroundColor':'#434343', minHeight: '100vh'}}>
      <br /><br /><br />
      <div className="container" style={{
    backgroundImage: 'linear-gradient(to top, #434343 ,rgb(42, 37, 37))', maxWidth: '700px',
  }}>
    <br />
      <h2 className="heading" style={{color:'whitesmoke'}}>Register</h2>
      <div className='row'>
        <div className="col-3"></div>
        <div className="col-6">
          <div className="row">
              <div className="mb-3" style={{color: 'coral', textAlign:'left'}}>
                <label htmlFor="">Name</label>
                <input 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text" 
                className="form-control" />
              </div>
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
              <div className="mb-3" style={{color: 'coral', textAlign:'left'}}>
                <label htmlFor="">Password</label>
                <input 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password" 
                className="form-control" />
              </div>
              <div className="mb-3" style={{color: 'coral', textAlign:'left'}}>
                <label htmlFor="">Confirm Passsword</label>
                <input 
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                type="text" 
                className="form-control" />
              </div>
              <div className="mb-3" style={{color: 'whitesmoke'}}>
                Already have an account? <Link to='/login'>Login</Link>
              </div>
              <div className="mb-3">
                <button onClick={onRegister}>Register</button>
              </div>
              
          </div>

          
        </div>
      </div>
</div>
    </div>
    
  )
}

export default Register;