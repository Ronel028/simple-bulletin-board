
const mysql = require("mysql");
require('dotenv').config();

const connectionPool = mysql.createPool(process.env.DATABASE_URL);

connectionPool.getConnection((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

module.exports = connectionPool;