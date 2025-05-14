import { toast, ToastContainer } from "react-toastify"
import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import { addTodoItem } from "../services/todo"


function AddTodo(){
  const [title, setTitle] = useState('')
  const [details, setDetails]= useState('')


  const navigate=useNavigate()

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
    
    <div style={{'backgroundColor':'lightblue'}}>
      <h2 className="heading">Register</h2>
      <div className='row'>
        <div className="col-3"></div>
        <div className="col-6">
          <div className="row">
            
              <div className="mb-3">
                <label htmlFor="">Title</label>
                <input 
                onChange={(e)=>setTitle(e.target.value)}
                type="text" 
                className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="">Details</label>
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
    
  )
}

export default AddTodo;