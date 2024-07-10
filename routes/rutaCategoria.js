const express = require('express')
const rutaCategoria = express.Router();
const servicioCategoria = require("../servicios/servicioCategoria");

// ruta para agregar categoria
rutaCategoria.post("/agregar", servicioCategoria.agregarCategoria)

// ruta para listar categoria
rutaCategoria.get("/all", servicioCategoria.listarCategorias)

// ruta para actualizar categoria
rutaCategoria.put("/actualizar/:id", servicioCategoria.actualizarCategoria)

//ruta para eliminar categoria
rutaCategoria.delete("/delete/:id", servicioCategoria.eliminarCategoria)


module.exports = rutaCategoria