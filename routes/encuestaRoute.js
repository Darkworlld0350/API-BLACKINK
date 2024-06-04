const express = require('express');
const router = express.Router();
const encuestaController = require('../controllers/encuestaController');


router.post('/createNew', encuestaController.crearEncuesta);

module.exports = router;



