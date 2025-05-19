import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect('mongodb://localhost:27017/todoApp');
    console.log('mongodb connected');
  } catch (err: any) {
    console.error(err.message);
  }
};

export default connectDB;