const mongoose = require('mongoose');
const { Schema } = mongoose;
const File = require('./fileModel');
const User = require('./userModel');

const outfitSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
  },
  rating: {
    type: Number,
    required: true,
  },
  attributes: {
    type: Array,
    required: true,
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
  },
},
  {
    timestamps: true,
  }
);

module.exports = Outfit = mongoose.model('Outfit', outfitSchema)