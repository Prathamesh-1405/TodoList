import user from '../model/User';
import connectDB from '../util/db';
import registerSchema from '../joi/registerSchema';

export const registerUser = async (name: string, username: string, password: string) => {
  await connectDB();

  const { error } = registerSchema.validate({ name, username, password });
  if (error) throw new Error(error.details[0].message);

  const existingUser = await user.findOne({ username });
  if (existingUser) {
    return { existing: true, user: existingUser };
  }

  const newUser = new user({ name, username, password });
  await newUser.save();

  return { existing: false, user: newUser };
};

export const loginUser = async (username: string, password: string) => {
  await connectDB();

  const User = await user.findOne({ username });
  if (!User) {
    return { found: false };
  }

  if (User.password !== password) {
    return { found: true, validPassword: false };
  }

  return { found: true, validPassword: true, username: User.username };
};
