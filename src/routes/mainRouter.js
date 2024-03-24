const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');
const userLoggedMiddleware = require ('../middlewares/userLoggedMiddleware.js')

router.get('/',userLoggedMiddleware,  mainController.index);

module.exports = router;
