const {Router} = require('express');
const Barcode = require('../models/Barcode');
const {check, validationResult} = require('express-validator');
const CONFIG = require('config');
const ROUTER = Router();

ROUTER.get(
  '/get/:code',
  [
    check('password', 'Некорректный пароль')
      .isLength({min: 8})
  ],
  async (req, res, next) => {
    try {
      const {code} = req.params;
      console.log(code);
      res.send({
        id: '1',
        name: '123'
      });
    } catch (err) {
      res.status(500).json({message: `Возникла непредвиденная ошибка, пожалуйста, повторите попытку позже, либо обратитесь к разработчику приложения`});
    }
  });

module.exports = ROUTER;