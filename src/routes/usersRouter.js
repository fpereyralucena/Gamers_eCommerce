const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/login', usersController.login);

router.get('/recover-pass', usersController.recoverPass);

router.post('/recuperar-contrasena', usersController.recoverMessage);

router.get('/register', usersController.register);

module.exports = router;