import axios from "axios";
import { createUrl } from "../utils";

export async function register(name, username, password) {
  try{
    const url=createUrl('user/register')
    const body={
      name, username,  password,
    }
    const response=await axios.post(url, body)
    return {status: response.status, data: response.data}
  }
  catch(e){
    return {status: 'error', error:e}
  }
}

export async function login(email, password) {
  try{
    const url=createUrl('user/login')
    const body={
      email,  password,
    }
    const response=await axios.post(url, body)
    return {status: response.status, data: response.data}
  }
  catch(e){
    return {status: 'error', error:e}
  }
}

export async function googleLogin(token) {
  try{
    const url=createUrl('/api/auth/google')
    const body={
      token
    }
    const response=await axios.post(url, body)
    return {status: response.status, data: response.data}
  }
  catch(e){
    return {status: 'error', error:e}
  }
}




