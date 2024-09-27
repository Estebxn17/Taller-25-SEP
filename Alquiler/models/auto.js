
const mongoose = require('mongoose');
const { Schema } = mongoose;

const autoSchema = new Schema({
    marca: { type: String, required: true },               
    modelo: { type: String, required: true },             
    año: { type: Number, required: true },                
    disponibilidad: { type: Boolean, default: true }       
});

const Auto = mongoose.model('Auto', autoSchema);
module.exports = Auto;
