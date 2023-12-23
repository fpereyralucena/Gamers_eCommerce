const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/', mainController.index);

router.get('/www.facebook.com', mainController.facebook);

router.get('/www.instagram.com', mainController.instagram);


module.exports = router;
  