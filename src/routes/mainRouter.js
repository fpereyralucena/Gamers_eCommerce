const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/', mainController.index)
router.get('/login', mainController.login)
router.get('/recover-pass', mainController.recoverPass)
router.post('recuperar-contrasena', mainController.recoverMessage)
router.get('/register', mainController.register);
router.get('/detail/:id', mainController.detail );
router.get('/shopping-cart', mainController.shoppingCart);
router.get('/www.facebook.com', mainController.facebook);
router.get('/www.instagram.com', mainController.instagram);

module.exports = router;
  