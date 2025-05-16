const express = require('express')
const router = express.Router()

const connectDB=require('../db')
const User=require('../models/user')
const { find } = require('../models/todo')

router.post('/user/register', async (req, res)=>{

  try{
    connectDB();
    const {name, username, password }=req.body;
    const user= await User.find({username: username})
    console.log(user)
    if(!(user==[])){
      const newUser=new User({name, username,  password})
      await newUser.save();
      res.status(201).json({ message: 'User created successfully', user: newUser });
    }
    else{
      res.status(200).json({ message: 'Username used', user});
    }
  }
  catch(err){
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }

})

router.post('/user/login', async (req, res)=>{

  try{
    connectDB();
    const {username, password }=req.body;

    const user= await User.findOne({username: username})
    
    if(!user){
      return res.status(201).json({message: 'User not found!'})
    }

    if(user.password!==password){
      return res.status(202).json({message: 'Invalid password!'})
    }
    
    return res.status(200).json({message: 'Login Successful', username: user.username})
  }
  catch(err){
    console.error(err);
    res.status(500).json({message:'Server Error!', error: 'Server error' });
  }
  
})

module.exports=router;