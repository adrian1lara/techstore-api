const mysql = require("mysql2")
const config = require("../config")


const dbconnection  = mysql.createConnection(config.db)

module.exports = dbconnection