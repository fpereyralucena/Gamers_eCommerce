const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const multer  = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = path.join(__dirname, '../../public/img/uploads')
      cb(null, folder)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

  const upload = multer({ storage: storage })

router.get('/login', usersController.login);
router.post('/login', usersController.loginValidation);

router.get('/recover-pass', usersController.recoverPass);

router.post('/recuperar-contrasena', usersController.recoverMessage);

router.get('/register', usersController.register);
router.post('/register', upload.single('image'),usersController.processRegistration);

module.exports = router;