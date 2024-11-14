const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VocabSchema = new Schema({
  english: {
    type: String,
    required: [true, 'Enter the English word']
  },
  german: {
    type: String,
    required: [true, 'Enter the German word']
  },
  french: {
    type: String,
    required: [true, 'Enter the French word']
  }
}, {
  collection: 'vocab3'
});

module.exports = mongoose.model('Vocab', VocabSchema);
