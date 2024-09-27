const Auto = require('../models/auto');


exports.registrarAuto = async (req, res) => {
    try {
        const { marca, modelo, año } = req.body; 

        const nuevoAuto = new Auto({ marca, modelo, año }); 
        await nuevoAuto.save(); 
        res.status(201).json(nuevoAuto); 
    } catch (err) {
        res.status(500).send(err.message); 
    }
};

exports.listarAutosDisponibles = async (req, res) => {
    try {
        const autosDisponibles = await Auto.find({ disponibilidad: true });
        res.status(200).json(autosDisponibles);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
