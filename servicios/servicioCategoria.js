const db = require("../db/connection")

// agregar una nueva categoria
const agregarCategoria = async (req, res) => {
    const {nombre, descripcion} = req.body;

    const sql = `INSERT INTO categorias (nombre, descripcion) values(?, ?)`;
    db.query(sql, [nombre, descripcion], (err, result) => {
        if(err) throw err;
        return res.json({msg: "Categoria exitosamente creada"})
    })
}


// obtener todas las categorias
const listarCategorias = async (req, res) => {
    const sql = 'SELECT * FROM categorias';
    db.query(sql, [], (err, result) => {
        if(err) throw err;
        return res.json({categorias: result})
    })
}


//actualizar categoria por id
const actualizarCategoria = async(req, res) => {
    const id = req.params.id;
    const {nombre, descripcion} = req.body;

    const sql = 'UPDATE categorias set nombre = ?, descripcion = ? WHERE id = ?';

    db.query(sql, [nombre, descripcion, id], (err, result) => {
        if(err) throw err;
        return res.json({msg: "categoria exitosamente actualizada", result})
    })
}

// eliminar categoria por id
const eliminarCategoria = async(req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM categorias where id = ?'
    db.query(sql, [id], (err, result) => {
        if(err) throw err;
        return res.json({msg: "categoria existosamente eliminada"})
    })
}

module.exports = {
    agregarCategoria,
    listarCategorias,
    actualizarCategoria,
    eliminarCategoria
}

