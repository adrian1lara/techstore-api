const express = require("express")
const rutaProducto = express.Router();
const servicioProducto = require("../servicios/servicioProducto")

// ruta agregar producto
rutaProducto.post("/agregar", servicioProducto.agregarProducto)

// ruta obtener producto
rutaProducto.get("/:id", servicioProducto.listarProducto)

// ruta actualizar producto
rutaProducto.put("/actualizar/:id", servicioProducto.actualizarProducto)

// ruta eliminar producto
rutaProducto.delete("/delete/:id", servicioProducto.eliminarProducto)

module.exports = rutaProducto