const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');


router.get('/',  mainController.index);
router.get("/terms-and-conditions", mainController.terms)



module.exports = router;
