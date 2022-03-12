const {Schema, model} = require('mongoose');

const schema = new Schema({
  barcode: {type: String},
  material: {type: String},
})

module.exports = model('Barcodes', schema)