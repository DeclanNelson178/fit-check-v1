const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = Test = mongoose.model('test', testSchema);