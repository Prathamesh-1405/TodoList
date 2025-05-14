

import axios from "axios";
import { createUrl } from "../utils";

export async function getTodoItem(username) {
  try{
    const url=createUrl('todo')
    
    const response=await axios.get(url, {params: {'username': username}})
    return {status: response.status, data: response.data}
  }
  catch(e){
    return {status: 'error', error:e}
  }
  
}

export async function addTodoItem(title, details, username) {
  try{
    const url=createUrl('todo/add')
    const body={
      title,
      details,
      username,
    }
    
    const response=await axios.post(url,body )
    return {status: response.status, data: response.data}
  }
  catch(e){
    return {status: 'error', error:e}
  }
  
}
