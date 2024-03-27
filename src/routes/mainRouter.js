const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');


router.get('/',  mainController.index);
router.get("/terms-and-conditions", mainController.terms)
router.get("/stores", mainController.stores)



module.exports = router;
