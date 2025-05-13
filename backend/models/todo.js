const { default: mongoose } = require('mongoose');
// const mongo = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  details: { type: String, required: true },
  userId: { type: Number, required: true},
});

module.exports = mongoose.model('Todo', todoSchema);
