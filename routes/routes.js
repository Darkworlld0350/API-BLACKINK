const express = require('express');
const router = express.Router();


// Rutas para el controlador

const index = require('./index');
router.use('/', index);

const usuariosRoute = require('./usuariosRoute');
const encuestaRoute = require('./encuestaRoute');

router.use('/usuarios', usuariosRoute);
router.use('/encuesta', encuestaRoute);

module.exports = router;