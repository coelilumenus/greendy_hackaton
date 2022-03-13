const {Router} = require('express');
const Users = require('../models/Users');
const ROUTER = Router();

ROUTER.post(
  '/reg',
  async (req, res) => {
    try {
      const ADD_USER = new Users({
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        scanned_count: req.body.scanned_count,
        stats: req.body.stats,
      });
      await ADD_USER.save();
      res.status(200).json({result: 'success'});
    } catch (err) {
      res.status(500).json({message: `Возникла непредвиденная ошибка, пожалуйста, повторите попытку позже, либо обратитесь к разработчику приложения`});
    }
  });

module.exports = ROUTER;