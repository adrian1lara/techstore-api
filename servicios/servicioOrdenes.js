const db = require("../db/connection")

// agregar una nueva orden
const agregarOrden = async (req, res) => {
    const {cliente_id, total, cantidad_producto, producto_id} = req.body;
    const sql = "INSERT INTO ordenes (cliente_id, total, cantidad_producto, producto_id) values (?, ?, ?, ?)";

    db.query(sql, [cliente_id, total, cantidad_producto, producto_id], (err, result) => {
        if(err) throw err;
        return res.json({msg: "orden creada exitosamente"})
    })
}

// obtener detalles de una orden por id
const obtenerOrden = async (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM ordenes WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if(err) throw err;
        return res.json({orden: result})
    })
}

// actualizar orden estado
const actualizarEstadoOrden = async (req, res) => {
    const id = req.params.id;
    const {estado} = req.body
    const sql = "UPDATE ordenes SET estado = ? WHERE id = ?";

    db.query(sql, [estado, id], (err, result) => {
        if(err) throw err;
        return res.json({msg: "estado de orden exitosamente actualizado"})
    })
}

// eliminar una orden por id
const eliminarOrden = async(req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM ordenes WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if(err) throw err;
        return res.json({msg: "orden exitosamente eliminada"})
    })
}

module.exports = {
    agregarOrden,
    obtenerOrden,
    actualizarEstadoOrden,
    eliminarOrden
}