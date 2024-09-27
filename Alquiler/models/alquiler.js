
const mongoose = require('mongoose');
const { Schema } = mongoose;

const alquilerSchema = new Schema({
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
    auto: { type: Schema.Types.ObjectId, ref: 'Auto', required: true },
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date, required: true }
});

const Alquiler = mongoose.model('Alquiler', alquilerSchema);
module.exports = Alquiler;
