const {Schema, model} = require('mongoose');

const schema = new Schema({
  _id: {type: O},
  name: {type: String},
  koordinat: {type: String},
  plastik: {type: String},
  metal: {type: String},
  bymaga: {type: String},
  steklo: {type: String},
  odegda: {type: String},
  batareiki: {type: String},
  lampochki: {type: String},
  technika: {type: String},
  krishechki: {type: String},
  shini: {type: String},
  inoe: {type: String},
  zubnie_shetki: {type: String},
  gradusniki: {type: String},
  kol_vo_sectorov_diagrav: {type: String},
  cvet: {type: String},
  multipole: {type: String},
})

module.exports = model('Addresses', schema)