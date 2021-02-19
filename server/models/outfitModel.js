const mongoose = require('mongoose');
const { Schema } = mongoose;

const outfitSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = Outfit = mongoose.model('outfit', outfitSchema)