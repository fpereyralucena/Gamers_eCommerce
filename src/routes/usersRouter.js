const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const multer  = require('multer');
const path = require('path');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const {body} = require('express-validator');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const validations = [
  body('first_name').notEmpty().withMessage("Ingrese un nombre"),
  body('last_name').notEmpty().withMessage("Ingrese un apellido"),
  body('email').notEmpty().withMessage("Ingrese un correo válido"),
  body('password').notEmpty().withMessage("Ingrese una contraseña"),
];

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = path.join(__dirname, '../../public/img/uploads/users/')
      cb(null, folder)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

  const upload = multer({ storage: storage })

router.get('/login',guestMiddleware, userLoggedMiddleware, usersController.login);
router.post('/login', userLoggedMiddleware, usersController.loginValidation);

router.get('/recover-pass',guestMiddleware, userLoggedMiddleware,usersController.recoverPass);
router.post('/recuperar-contrasena', userLoggedMiddleware, usersController.recoverMessage);

router.get('/register',guestMiddleware, userLoggedMiddleware, usersController.register);
router.post('/register', upload.single('image'),validations, usersController.processRegistration);

router.get('/profile',authMiddleware, userLoggedMiddleware, usersController.profile);
router.get('/logout', usersController.logout)

module.exports = router;