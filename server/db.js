const mysql = require ("mysql")

const pool= mysql.createPool({
    connectionLimit:10,
    user: "root",
    password: "",
    host: "localhost",
    database: "projectlist"


})

module.exports = pool;