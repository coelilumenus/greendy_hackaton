/**
 * Блок подключения модулей
 */
const express = require('express');
const CONFIG = require('config');
const MONGOOSE = require('mongoose');
const BODY_PARSER = require('body-parser');
const PATH = require('path');

/**
 * Блок определения констант
 */
const APP = express();

/**
 * Роутинг
 */
APP.use('/api/barcode', require('./routes/barcode.routes'));
APP.use('/api/addresses', require('./routes/addresses.routes'));

const PORT = CONFIG.get('port');

/**
 * Блок алгоритма работы приложения
 */

/**
 * Настройки Express
 */
APP.use(BODY_PARSER.json());

/**
 * Запуск сервера
 */
async function start() {
  try {
    await MONGOOSE.connect(CONFIG.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    APP.listen(PORT, () => {
      console.log(`App backend successful started on port ${PORT}...`);
    });
  } catch (err) {
    console.log('Server error!', err);
    process.exit(1);
  }
}

start();