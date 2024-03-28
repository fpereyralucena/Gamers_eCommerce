const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController.js')
const multer  = require('multer')
const path = require('path')
const adminMiddleware = require("../middlewares/adminMiddleware.js")
const { get } = require('http')
const { appendFile } = require('fs')


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

router.get('/detail/:id',  productsController.detail );
router.post('/detail/:id',  productsController.shoppingCartAdd);
router.get('/',  productsController.index);

router.get('/shopping-cart', productsController.shoppingCart);


router.get("/create-product", adminMiddleware, productsController.create);
router.post("/create-product", upload.single('image'), productsController.processCreate);

router.get("/edit-product/:id",  adminMiddleware, upload.single('image') , productsController.editProduct);


router.post("/delete-product/:id", adminMiddleware, productsController.deleteProduct)

router.get("/product-list",adminMiddleware,  productsController.productList);

module.exports = router;