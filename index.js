const express = require('express');
const rutaCliente = require('./routes/rutaCliente');
const dbconnection = require('./db/connection');
const app = express();

const port = 3000;

app.use(express.json())

dbconnection.connect();

app.get("/", (req, res ) => {
    return res.status(201).json({msg: "alive"})
})

app.use("/api/cliente", rutaCliente)

app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto http://localhost:${port}`)
})