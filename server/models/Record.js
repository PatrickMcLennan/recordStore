const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  band: {
    type: String,
    required: true
  }
});

const Record = mongoose.model('Record', RecordSchema);

module.exports = Record;
