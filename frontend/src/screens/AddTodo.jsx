import { toast, ToastContainer } from "react-toastify"
import { useState, useEffect } from "react"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import { addTodoItem } from "../services/todo"
import Navbar from "../component/Navbar"


function AddTodo(){
  const [title, setTitle] = useState('')
  const [details, setDetails]= useState('')


  const navigate=useNavigate()
  
  useEffect(() => {
    if(!sessionStorage.getItem('username')){
      toast.error('Please login to your account!')
      navigate('/login')
    }
    return;
  }, [navigate]);
  const onAdd= async()=>{
    if(title.length===0){
      toast.warning('Please Enter Title!')
    }
    else if(details.length===0){
      toast.warning('Please Enter Details!')
    }

    else{
      const result=await addTodoItem(title, details, sessionStorage.getItem('username'))
      console.log(result.status)
      if(result.status==201){
        toast.success('Item Added!')

        navigate('/todo')
      }
    }
  }




  return (
    
    <div style={{'backgroundColor':'	#D3D3D3'}}>
      <Navbar/>
      <br /><br />
      <div className="container" style={{backgroundImage: 'linear-gradient(to bottom, 	#D3D3D3 ,rgb(123, 117, 117))', maxWidth: '600px'}}>
      <h2 className="heading" style={{color:'gray'}}>Add New Task</h2>
      <div className='row'>
        <div className="col-3"></div>
        <div className="col-6">
          <div className="row">
            
              <div className="mb-3" style={{textAlign:'left', fontSize:'18px'}}>
                <label htmlFor="">Title</label>
                <input 
                onChange={(e)=>setTitle(e.target.value)}
                type="text" 
                className="form-control" />
              </div>
              <div className="mb-3" style={{textAlign:'left'}}>
                <label htmlFor="" style={{fontSize:'18px'}}>Details</label>
                <input 
                onChange={(e)=>setDetails(e.target.value)}
                type="text" 
                className="form-control" />
              </div>

              <div className="mb-3">
                <button onClick={onAdd}>Add</button>
              </div>
          </div>

          
        </div>
      </div>
</div>
    </div>
    
  )
}

export default AddTodo;