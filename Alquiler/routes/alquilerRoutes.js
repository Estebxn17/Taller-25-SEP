const express = require('express');
const router = express.Router();
const alquilerController = require('../controllers/alquilerController');

router.get('/historial', alquilerController.listarAlquileres);
router.post('/realizar', alquilerController.realizarAlquiler);

module.exports = router;
