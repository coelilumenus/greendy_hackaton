const {Schema, model} = require('mongoose');

const schema = new Schema({
  email: {type: String},
  password: {type: String},
  name: {type: String},
  phone: {type: String},
  scanned_count: {type: Number},
  stats: {type: Array},
});

module.exports = model('Users', schema);