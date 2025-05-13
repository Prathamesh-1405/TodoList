const express = require('express')
const router = express.Router()

const connectDB=require('../db')
const User=require('../models/user')

router.post('/user/register', async (req, res)=>{

  try{
    connectDB();
    const {name, username, password }=req.body;

    const newUser=new User({name, username,  password})
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
    
  }
  catch(err){
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
  //res.send('user registered!');

})

router.post('/user/login', (req, res)=>{
  res.send('user logged in!');
  
})

module.exports=router;