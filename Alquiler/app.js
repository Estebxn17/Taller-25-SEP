const express = require('express')
const app = express()
const clienteRoutes = require('./routes/clienteRoutes');
const autoRoutes = require('./routes/autoRoutes');
const alquilerRoutes = require('./routes/alquilerRoutes');
const conexionDb = require("./config/db.js")
const dotenv = require('dotenv').config();

app.use(express.json())
conexionDb();
app.use('/clientes', clienteRoutes);
app.use('/autos', autoRoutes);
app.use('/alquileres', alquilerRoutes);

app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});


 const port = process.env.PORT
    app.listen(port, () => {
        console.log("Servidor listo En El Puerto 9000")
    })


// Alquileres Routes

// GET http://localhost:9000/alquileres/historial
// POST http://localhost:9000/alquileres/realizar


// Auto Routes 

// GET http://localhost:9000/autos/disponibles
// POST http://localhost:9000/autos

// Cliente Routes

// http://localhost:9000/clientes/listar
// POST http://localhost:9000/clientes