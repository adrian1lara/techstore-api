
const db = require("../db/connection")


// agregar cliente
const agregarCliente = async (req, res) => {
    const {nombre, email, telefono, direccion_envio} = req.body;
    const sql = 'Insert INTO clientes (nombre, email, telefono, direccion_envio) values (?, ?, ?, ?)';
    db.query(sql, [nombre, email, telefono, direccion_envio], (err, result) => {
        if(err) throw err;
        return res.json({msg: "Cliente exitosamente registrado", result: result});
    })
}


// listar cliente por id
const listarCliente = async (req, res) => {
    const id = req.params.id;
    const sql = "Select * from clientes where id = ?"
    db.query(sql, [id], (err, result) => {
        if(err) throw err;
        return res.json({cliente: result})
    })
}

// actualizar cliente por id
const actualizarCliente = async(req, res) => {
    const id = req.params.id
    const {nombre, email, telefono, direccion_envio} = req.body;
    const sql = 'UPDATE clientes SET nombre = ?, email = ?, telefono = ?, direccion_envio = ? WHERE id = ?'
    db.query(sql, [nombre, email, telefono, direccion_envio, id], (err, result) => {
        if(err) throw err;
        return res.json({msg: 'Cliente exitosamente actualizado'})
    })
}


const eliminarCliente = async (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM clientes WHERE ID = ?'
    db.query(sql,[id], (err, result) => {
        if(err) throw err;
        return res.json({msg: "Cliente exitosamente eliminado"})
    })
}

module.exports = {
    agregarCliente,
    listarCliente,
    actualizarCliente,
    eliminarCliente
}