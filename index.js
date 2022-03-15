/**
 * Блок подключения модулей
 */
const express = require('express');
const CONFIG = require('config');
const MONGOOSE = require('mongoose');
const BODY_PARSER = require('body-parser');
const cors = require('cors');
const PATH = require("path");

/**
 * Блок определения констант
 */
const APP = express();
const PORT = CONFIG.get('port') || 5000

/**
 * Настройки приложения
 */
/**
 * Общее
 */
APP.use(BODY_PARSER.json());
APP.use(cors({
  origin: [
    /localhost\:[0-9]+$/,
    /wsl\.local\:[0-9]+$/
  ],
  credentials: true
}));
APP.disable('x-powered-by');
APP.disable('etag');

/**
 * Роутинг
 */
APP.use('/api/barcodes', require('./routes/barcodes.routes'));
APP.use('/api/addresses', require('./routes/addresses.routes'));

if (process.env.NODE_ENV === 'production') {
  APP.use('/', express.static(PATH.join(__dirname, 'web')));
  APP.get('*', (req, res) => {
    res.sendFile(PATH.resolve(__dirname, 'web', 'index.html'));
  });
}

/**
 * Блок алгоритма работы приложения
 */
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