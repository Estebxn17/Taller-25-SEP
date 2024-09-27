const Cliente = require('../models/cliente');


exports.registrarCliente = async (req, res) => {
    try {
        const { nombre, correo, numero_licencia } = req.body;

        if (!correo || !numero_licencia) {
            return res.status(400).json({ error: "Los campos correo y numero_licencia son requeridos." });
        }
        const nuevoCliente = new Cliente({ nombre, correo, numero_licencia });
        await nuevoCliente.save();
        res.status(201).json(nuevoCliente);
    } catch (err) {
        res.status(500).send(err.message);
    }
};



exports.listarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find(); 
        res.status(200).json(clientes); 
    } catch (err) {
        res.status(500).send(err.message); 
    }
};

