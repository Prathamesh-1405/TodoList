import todo from '../model/Todo';
import user from '../model/User';
import connectDB from '../util/db';

export const getTodos = async (username: string) => {
  await connectDB();
  const User = await user.findOne({ username });
  if (!User) throw new Error('User not found');
  const todos = await todo.find({ userId: User._id, completed: false });
  return todos;
};

export const markTodoAsCompleted = async (tid: string) => {
  await connectDB();
  await todo.findByIdAndUpdate(tid, { completed: true });
};

export const addTodo = async (title: string, details: string, username: string) => {
  await connectDB();
  const User = await user.findOne({ username });
  if (!User) throw new Error('User not found');
  const newTodo = new todo({ title, details, userId: User._id });
  await newTodo.save();
};
