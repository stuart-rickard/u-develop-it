const mysql = require('mysql2');
const unpublic = require( './unpublic' );

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: unpublic(),
  database: 'election'
});

module.exports = db;
