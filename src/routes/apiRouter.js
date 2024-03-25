const express = require('express');
const router = express.Router();
const userApiController = require("../controllers/API/userApiController")
//http://localhost:3000/restfulservices/v1/user/{id}

router.get('/user/:id', userApiController.getUser);
router.get('/user/', userApiController.getAllUsers);

module.exports = router