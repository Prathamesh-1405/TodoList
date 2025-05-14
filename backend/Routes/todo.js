const express=require('express')

const router=express.Router()

const connectDB=require('../db')
const Todo=require('../models/todo')
const User = require('../models/user')
// const todo = require('../models/todo')

router.get('/todo', async (req, res)=>{
  // response.send('list of my items')
  try{
    connectDB();
    const {username}=req.query;
    if(!username){
      return res.status(400).json({message: 'username is required!'})
    }
    const user = await User.findOne({username: username})
    
    const userId=user._id
    const todos = await Todo.find({userId});
    res.status(200).json(todos)
  }
  catch(err){
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }

  


})

router.post('/todo/add', async (req, res)=>{
  // response.send('todo item created!')
  try{
    connectDB();
    const {title, details, username}=req.body;
    const user = await User.findOne({username: username})

    const userId=user._id

    const newTodo=new Todo({title, details, userId})
  console.log(`newTodo: ${newTodo}`)
    await newTodo.save();
    res.status(201).json({ message: 'Item added to the list!' });
    console.log('item added to the list')
  }
  catch(err){
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
})

module.exports=router;