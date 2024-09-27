const { Perro } = require('../models');

exports.crearPerro = async (req, res) => {
    const { nombre, raza, edad, tamaño, estado } = req.body;
    try {
        const perro = await Perro.create({ nombre, raza, edad, tamaño, estado });
        res.json(perro);
    } catch (e) {
        res.json({ mensaje: "Error al crear la informacion de el perro" });
    }
};

exports.listarPerros = async (req, res) => {
    try {
        const perros = await Perro.findAll();
        res.json(perros);
    } catch (e) {
        res.json({ mensaje: "Error al obtener la lista de los perros" });
    }
};