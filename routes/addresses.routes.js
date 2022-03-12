const {Router} = require('express');
const Addresses = require('../models/Addresses');
const ROUTER = Router();

ROUTER.get(
  '/',
  async (req, res) => {
    try {
      if (req.query.filter) {
        // const MATERIALS = req.query.filter.split(',');
        // const ADDRESSES = await Addresses.find();
      } else {
        const ADDRESSES = await Addresses.find();
        const RESPONSE = ADDRESSES.map((data) => {
          // const HEADER = data.name.split("\r")[0];
          return {
            _id: data._id,
            name: data.name,
            coords: data.koordinat.split(','),
            plastik: data.plastik,
            metal: data.metal,
            bymaga: data.bymaga,
            steklo: data.steklo,
            odegda: data.odegda,
            batareiki: data.batareiki,
            lampochki: data.lampochki,
            technika: data.technika,
            krishechki: data.krishechki,
            shini: data.shini,
            inoe: data.inoe,
            zubnie_shetki: data.zubnie_shetki,
            gradusniki: data.gradusniki,
            kol_vo_sectorov_diagrav: data.kol_vo_sectorov_diagrav,
            cvet: data.cvet,
            multipole: data.multipole.split(','),
          }
        });

        // return {
        //   type: "FeatureCollection",
        //   features: [{
        //     type: 'Feature',
        //     id: data._id,
        //     geometry: {
        //       type: "Point",
        //       coordinates: data.koordinat.split(','),
        //     },
        //     properties: {
        //       balloonContentHeader: HEADER,
        //       balloonContentBody: data.name.split(HEADER)[1].slice(2,),
        //     },
        //     data: {
        //       plastik: data.plastik,
        //       metal: data.metal,
        //       bymaga: data.bymaga,
        //       steklo: data.steklo,
        //       odegda: data.odegda,
        //       batareiki: data.batareiki,
        //       lampochki: data.lampochki,
        //       technika: data.technika,
        //       krishechki: data.krishechki,
        //       shini: data.shini,
        //       inoe: data.inoe,
        //       zubnie_shetki: data.zubnie_shetki,
        //       gradusniki: data.gradusniki,
        //       kol_vo_sectorov_diagrav: data.kol_vo_sectorov_diagrav,
        //       cvet: data.cvet,
        //       multipole: data.multipole.split(','),
        //     }
        //   }]
        // }
        res.status(200).json(RESPONSE);
      }
    } catch (err) {
      res.status(500).json({message: `Возникла непредвиденная ошибка, пожалуйста, повторите попытку позже, либо обратитесь к разработчику приложения`});
    }
  });

ROUTER.get(
  '/tests',
  async (req, res) => {
    try {
      const COORDS = [
        {
          id: 1,
          coords: ['44.1111111', '43.2222222']
        },
        {
          id: 2,
          coords: ['44.2222222', '41.5555555']
        },
        {
          id: 3,
          coords: ['32.7777777', '33.8888888']
        },
      ];
      const CURRENT_COORDS = ['32.6666666', '47.9999999'];
      const NEAREST_COORDS = COORDS.map((data) => {
        const X1 = data.coords[0];
        const X2 = data.coords[1];
        const Y1 = CURRENT_COORDS[0];
        const Y2 = CURRENT_COORDS[1];
        const D = Math.sqrt(Math.pow(X2 - X1, 2) + Math.pow(Y2 - Y1, 2));
      });
      res.status(200).json(NEAREST_COORDS);
    } catch (err) {
      res.status(500).json({message: `Возникла непредвиденная ошибка, пожалуйста, повторите попытку позже, либо обратитесь к разработчику приложения`});
    }
  });

module.exports = ROUTER;