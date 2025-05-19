import express from 'express'
import todo from './routes/todo.router'
import user from './routes/user.router'
import cors from 'cors'
const app=express()
app.use(cors())
app.use(express.json())
console.log("PRATH")

app.use('/todo',todo)
app.use('/user', user)

app.listen(3000,()=>{
  console.log("Server is running on : http://localhost:3000")
})