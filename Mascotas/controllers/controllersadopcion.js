const { Adopcion, Perro, Adoptante } = require('../models');

exports.crearAdopcion = async (req, res) => {
    const { perro_id, adoptante_id, fecha_adopcion } = req.body;
    try {
        const adopcion = await Adopcion.create({ perro_id, adoptante_id, fecha_adopcion });
        res.json(adopcion);
    } catch (e) {
        res.json({ mensaje: "Error al crear la informacion correspondiente a la adopcion" });
    }
};

exports.listarAdopciones = async (req, res) => {
    try {
        const adopciones = await Adopcion.findAll({
            include: [{ model: Perro }, { model: Adoptante }]
        });
        res.json(adopciones);
    } catch (e) {
        res.json({ mensaje: "Error al obtener la lista de adopciones" });
    }
};
