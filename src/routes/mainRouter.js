const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');


router.get('/',  mainController.index);
router.get("/error404", mainController.error404)



module.exports = router;
