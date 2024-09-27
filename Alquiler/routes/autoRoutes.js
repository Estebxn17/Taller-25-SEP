const express = require('express');
const router = express.Router();
const autoController = require('../controllers/autoController');

router.get('/disponibles', autoController.listarAutosDisponibles);
router.post('/', autoController.registrarAuto);

module.exports = router;
