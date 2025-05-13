import axios from "axios";
import { createUrl } from "../utils";

export async function register(name, username, password) {
  try{
    const url=createUrl('user/register')
    const body={
      name, username,  password,
    }
    const response=await axios.post(url, body)
    return response.data
  }
  catch(e){
    return {status: 'error', error:e}
  }
  
}

export async function login(username, password) {
  try{
    const url=createUrl('user/login')
    const body={
      username,  password,
    }
    const response=await axios.post(url, body)
    return response.data
  }
  catch(e){
    return {status: 'error', error:e}
  }
  
}


