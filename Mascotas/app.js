const express = require('express')
const app = express();
require('dotenv').config();
const Perro = require('./routes/routesperro');
const adopcion = require('./routes/routesadopcion')
const adoptante = require ('./routes/routesadoptante')
const PORT = process.env.PORT

app.use(express.json());

app.use('/api',Perro,adopcion,adoptante);

app.listen(PORT, ()=>{
    console.log ("Servidor de Prueba Iniciado en el Puerto 7500");
})