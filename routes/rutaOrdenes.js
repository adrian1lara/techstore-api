const express = require("express")
const rutaOrden = express.Router()
const servicioOrden = require("../servicios/servicioOrdenes")

// ruta agregar una nueva orden
rutaOrden.post("/agregar", servicioOrden.agregarOrden)

// ruta obtener orden
rutaOrden.get("/:id", servicioOrden.obtenerOrden)

// ruta actualizar estado orden
rutaOrden.put("/actualizar/estado/:id", servicioOrden.actualizarEstadoOrden)

// ruta eliminar orden
rutaOrden.delete("/delete/:id")

module.exports = rutaOrden