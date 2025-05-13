const mongo=require('mongoose')

const connectDB= async () =>{
  try{
    await mongo.connect('mongodb://localhost:27017/todoApp')
    console.log('mongodb connected')
  }
  catch(err){
    console.error(err.message);
    process.exit(1);
  }
  
};
module.exports = connectDB

