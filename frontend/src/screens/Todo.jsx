
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getTodoItem } from "../services/todo"
import { toast } from "react-toastify"

 function Todo(){
  const [items, setItems]= useState([])
  const navigate =useNavigate()

  const onLoadItem= async ()=>{

    const result = await getTodoItem(sessionStorage.getItem('username'))
    if(result.status==200){
      setItems(result.data)
    }
    else{
      toast.error('No items found!')
    }
  }

  useEffect(()=>{
    console.log('component is mounted....')
    onLoadItem()
    return() =>{
      console.log('component is unmounted...')
    }


  }, [])

  const onAdd=()=>{
    navigate('/addTodo')
  }
  const onEdit=()=>{
    
  }


  return (
    <div style={{'backgroundColor': 'lightblue'}}>
      <div className="container">
        <table className="table table-hover">
          <thead>
            <th>sr.no.</th>
            <th>Title</th>
            <th>Details</th>
            <th>Status</th>
          </thead>
          <tbody>
            {
              items.map((item, i)=>{
                return (
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{item['title']}</td>
                    <td>{item['details']}</td>
                    <td><button onClick={onEdit}>Not Finished</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <button onClick={onAdd}>Add</button>
    </div>
  )
}

export default Todo