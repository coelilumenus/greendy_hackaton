/**
 * Блок подключения модулей
 */
const {Router} = require('express');
const Barcode = require('../models/Barcodes');
const Classes = require('../models/Classes');

/**
 * Блок настройки приложения
 */
const ROUTER = Router();

/**
 * Блок определения констант
 */
const BARCODE_API_URI = 'https://api.barcodes-catalog.ru/barcode/free_search';

/**
 * Блок алгоритма работы
 */
ROUTER.get(
  '/:code',
  async (req, res) => {
    try {
      const {code} = req.params;
      const BARCODE = await Barcode.findOne({
        barcode: code
      })
        .select('-_id');
      if (BARCODE) {
        res.status(200).json({
          barcode: BARCODE.barcode,
          material: BARCODE.material.split(','),
        });
      } else {
        res.status(404).json({
          type: 'NOT_EXIST'
        });
      }
    } catch (err) {
      res.status(500).json({message: `Возникла непредвиденная ошибка, пожалуйста, повторите попытку позже, либо обратитесь к разработчику приложения`});
    }
  });

ROUTER.post(
  '/',
  async (req, res) => {
    try {
      if (req.body.type === 'class') {
        const CLASSES = await Classes.findOne({
          class: {
            $regex: req.body.value
          }
        });
        const ADD_RECORD = new Barcode({
          barcode: req.body.barcode,
          material: CLASSES.material,
        });
        await ADD_RECORD.save();
      } else {
        const ADD_RECORD = new Barcode({
          barcode: req.body.barcode,
          material: req.body.value,
        });
        await ADD_RECORD.save();
      }
      res.status(200).json({result: 'maless'});
    } catch (err) {
      res.status(500).json({message: `Возникла непредвиденная ошибка, пожалуйста, повторите попытку позже, либо обратитесь к разработчику приложения`});
    }
  });

module.exports = ROUTER;