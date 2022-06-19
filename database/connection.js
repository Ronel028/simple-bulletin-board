
const mysql = require("mysql");
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.username,
    password:process.env.password,
    database: process.env.database,
    connectionLimit: 10
});

module.exports = pool;