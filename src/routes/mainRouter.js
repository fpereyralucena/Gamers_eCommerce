const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');


router.get('/',  mainController.index);
router.get("/terms-and-conditions", mainController.terms)
router.get("/stores", mainController.stores)
router.get("/about", mainController.about)
router.get('/streetfighter',mainController.streetfighter);


module.exports = router;
