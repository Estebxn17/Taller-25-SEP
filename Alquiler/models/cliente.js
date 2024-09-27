
const mongoose = require('mongoose');
const { Schema } = mongoose;

const clienteSchema = new Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    numero_licencia: { type: String, required: true }
});

const Cliente = mongoose.model('Cliente', clienteSchema);
module.exports = Cliente;
