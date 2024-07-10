const db = require("../db/connection")

// agregar un producto
const agregarProducto = async(req, res) => {
    const {nombre, precio, descripcion, categoria_id, cantidad_en_stock} = req.body;
    const sql = "INSERT INTO productos (nombre, precio, descripcion, categoria_id, cantidad_en_stock) values (?, ?, ?, ?, ?)";
    db.query(sql, [nombre, precio, descripcion, categoria_id, cantidad_en_stock], (err, result) => {
        if(err) throw err;
        return res.json({msg: "producto exitosamente agregado"})
    })
}

// obtener informacion detallada de un producto por su id
const listarProducto = async(req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM productos WHERE id = ?"
    db.query(sql, [id], (err, result) => {
        if(err) throw err;
        return res.json({producto : result})
    })
}

// actualizaer producto
const actualizarProducto = async(req, res) => {
    const id = req.params.id;
    const {nombre, precio, descripcion, categoria_id, cantidad_en_stock} = req.body;

    const sql = "UPDATE  productos SET nombre = ?, precio = ?, descripcion = ?, categoria_id = ?, cantidad_en_stock = ? WHERE id = ?";

    db.query(sql, [nombre, precio, descripcion, categoria_id, cantidad_en_stock, id], (err, result) => {
        if(err) throw err;
        return res.json({msg: "producto exitosamente actualizado"})
    })
}

// eliminar un producto
const eliminarProducto = async( req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM productos WHERE id = ?"
    db.query(sql, [id], (err, result) => {
        if(err) throw err;
        return res.json({msg: "producto exitosamente eliminado"})
    })
}

module.exports = {
    agregarProducto,
    listarProducto,
    actualizarProducto,
    eliminarProducto
}