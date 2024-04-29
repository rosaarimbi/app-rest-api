let mysql = require('mysql');

// buat koneksi database
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbrest_api'
});

connection.connect(function (err) {
  if (!err) {
    console.log("Database Connected!");
  }
});

module.exports = connection;
