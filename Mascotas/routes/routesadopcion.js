const adopcontroller = require('../controllers/controllersadopcion')
const express= require('express')
const router = express.Router()

router.post('/adopcion',adopcontroller.crearAdopcion)
router.get('/adopcion',adopcontroller.listarAdopciones)

module.exports = router