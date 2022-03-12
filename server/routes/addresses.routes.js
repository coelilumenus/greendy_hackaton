const {Router} = require('express');
const Addresses = require('../models/Addresses');
const {check, validationResult} = require('express-validator');
const CONFIG = require('config');
const ROUTER = Router();
const ObjectId = require('mongoose').Types.ObjectId;

ROUTER.get(
  '/:code',
  async (req, res) => {
    try {
      const ADDRESSES = await Addresses.find();
      res.status(200);
    } catch (err) {
      res.status(500).json({message: `Возникла непредвиденная ошибка, пожалуйста, повторите попытку позже, либо обратитесь к разработчику приложения`});
    }
  });

module.exports = ROUTER;