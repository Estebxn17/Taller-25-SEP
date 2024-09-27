const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/listar', clienteController.listarClientes);
router.post('/', clienteController.registrarCliente);

module.exports = router;
