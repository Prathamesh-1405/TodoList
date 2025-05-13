const express=require('express')

const router=express.Router()

const connectDB=require('../db')
const Todo=require('../models/todo')



router.get('/todo/my', (req, res)=>{
  response.send('list of my items')
})

router.post('/todo/', (req, res)=>{
  response.send('todo item created!')
})

module.exports=router;