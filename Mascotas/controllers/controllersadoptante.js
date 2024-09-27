const { Adoptante } = require('../models');

exports.crearAdoptante = async (req, res) => {
    const { nombre, correo, direccion } = req.body;
    try {
        const adoptante = await Adoptante.create({ nombre, correo, direccion });
        res.json(adoptante);
    } catch (e) {
        res.json({ mensaje: "Error al crear y declarar la informacion de el adoptante" });
    }
};

exports.listarAdoptantes = async (req, res) => {
    try {
        const adoptantes = await Adoptante.findAll();
        res.json(adoptantes);
    } catch (e) {
        res.json({ mensaje: "Error al obtener  la lista de los adoptantes" });
    }
};
