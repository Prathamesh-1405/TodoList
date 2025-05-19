import mongoose, { Document, Schema } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  details: string;
  completed: boolean;
  userId: mongoose.Types.ObjectId;
}

const TodoSchema: Schema<ITodo> = new Schema({
  title: { type: String, required: true },
  details: { type: String, required: true },
  completed: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model<ITodo>('Todo', TodoSchema);
