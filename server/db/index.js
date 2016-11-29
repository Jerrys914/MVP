var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'passlock'
});
connection.connect();

module.exports = connection;