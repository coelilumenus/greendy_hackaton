const {Schema, model} = require('mongoose');

const schema = new Schema({
  material: {type: String},
  class: {type: String},
})

module.exports = model('Classes', schema)