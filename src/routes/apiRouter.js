const express = require('express');
const router = express.Router();
const userApiController = require("../controllers/API/userApiController");
const productsApiController = require('../controllers/API/productsApiController');
//http://localhost:3000/restfulservices/v1/user/{id}

router.get('/user/:id', userApiController.getUser);
router.get('/user/', userApiController.getAllUsers);

router.get("/product/", productsApiController.AllProducts)
router.get("/product/:id", productsApiController.oneProduct)

module.exports = router