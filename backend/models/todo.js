const { default: mongoose } = require('mongoose');
// const mongo = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  details: { type: String, required: true },
  completed: {type: Boolean, default: false},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
});

module.exports = mongoose.model('Todo', todoSchema);
