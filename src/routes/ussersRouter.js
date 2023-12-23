const express = require('express');
const router = express.Router();
const ussersController = require('../controllers/ussersController.js');

router.get('/login', ussersController.login);

router.get('/recover-pass', ussersController.recoverPass);

router.post('recuperar-contrasena', ussersController.recoverMessage);

router.get('/register', ussersController.register);

module.exports = router;