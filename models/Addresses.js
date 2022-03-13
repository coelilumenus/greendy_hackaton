const {Schema, model} = require('mongoose');

const schema = new Schema({
  name: {type: String},
  koordinat: {type: String},
  plastik: {type: Boolean},
  metal: {type: Boolean},
  bymaga: {type: Boolean},
  steklo: {type: Boolean},
  odegda: {type: Boolean},
  batareiki: {type: Boolean},
  lampochki: {type: Boolean},
  technika: {type: Boolean},
  krishechki: {type: Boolean},
  shini: {type: Boolean},
  inoe: {type: Boolean},
  zubnie_shetki: {type: Boolean},
  gradusniki: {type: Boolean},
  kol_vo_sectorov_diagrav: {type: String},
  cvet: {type: String},
  multipole: {type: String},
})

module.exports = model('Addresses', schema)