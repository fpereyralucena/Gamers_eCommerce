const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController.js')
const multer  = require('multer')
const path = require('path')
const adminMiddleware = require("../middlewares/adminMiddleware.js")
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware.js')

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

router.get('/detail/:id', userLoggedMiddleware, productsController.detail );
router.post('/detail/:id', userLoggedMiddleware, productsController.shoppingCartAdd);
router.get('/', userLoggedMiddleware, productsController.index);

router.get('/shopping-cart',userLoggedMiddleware, productsController.shoppingCart);

router.get("/create-product",userLoggedMiddleware, adminMiddleware, productsController.create);
router.post("/create-product",userLoggedMiddleware, upload.single('image'), productsController.processCreate);

router.get("/edit-product/:id", userLoggedMiddleware, adminMiddleware, upload.single('image') , productsController.editProduct);


module.exports = router;