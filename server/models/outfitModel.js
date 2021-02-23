const mongoose = require('mongoose');
const { Schema } = mongoose;
const File = require('./fileModel');
const User = require('./userModel');

const outfitSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  img: {
    type: mongoose.Schema.Types.ObjectId,
    ref: File,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  }
});

module.exports = Outfit = mongoose.model('Outfit', outfitSchema)