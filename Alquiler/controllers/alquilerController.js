const Alquiler = require('../models/alquiler');
const Auto = require('../models/auto');


exports.realizarAlquiler = async (req, res) => {
    try {
        const { cliente, auto, fecha_inicio, fecha_fin } = req.body;
        const autoEncontrado = await Auto.findById(auto);
        if (!autoEncontrado || !autoEncontrado.disponibilidad) {
            return res.status(400).json({ error: 'Auto no disponible para alquiler.' });
        }
        const nuevoAlquiler = new Alquiler({ cliente, auto, fecha_inicio, fecha_fin });
        await nuevoAlquiler.save(); 
        await Auto.findByIdAndUpdate(auto, { disponibilidad: false });
        res.status(201).json(nuevoAlquiler); 
    } catch (err) {
        res.status(500).send(err.message); 
    }
};

exports.listarAlquileres = async (req, res) => {
    try {
        const historial = await Alquiler.find()
            .populate('cliente')
            .populate('auto');
        res.status(200).json(historial);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
