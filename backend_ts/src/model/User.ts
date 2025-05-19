import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  username: string;
  password: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model<IUser>('User', UserSchema);
