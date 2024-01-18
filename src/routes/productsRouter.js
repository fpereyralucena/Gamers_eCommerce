const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

router.get('/detail/:id', productsController.detail );

router.get('/shopping-cart',productsController.shoppingCart);

router.get("/create-product", productsController.create);

router.post("/create-product", productsController.processCreate);

router.get("/edit-product", productsController.editProduct);

module.exports = router;