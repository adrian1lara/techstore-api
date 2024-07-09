const express = require('express')
const rutaCliente = express.Router();
const servicioCliente = require("../servicios/servicioCliente");

// ruta para crear un cliente
rutaCliente.post("/agregar", servicioCliente.agregarCliente)

// obtener cliente por id
rutaCliente.get("/:id", servicioCliente.listarCliente)

// actualizar cliente por id
rutaCliente.put("/actualizar/:id", servicioCliente.actualizarCliente)

// eliminar cliente por id
rutaCliente.delete("/delete/:id", servicioCliente.eliminarCliente)

module.exports= rutaCliente;