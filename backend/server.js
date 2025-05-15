const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const cors = require('cors')

app.use(cors())

app.use(express.json());
app.use(express.urlencoded())
const userRouter=require('./Routes/user')
const todoRouter=require('./Routes/todo')

app.use(userRouter)
app.use(todoRouter)

app.get('/', (req, res)=>{
  res.send('hello prathamesh!')
})

app.listen(3000, ()=>{
  console.log(`Server started on port number 3000!`);
})