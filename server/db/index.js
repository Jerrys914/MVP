var mysql = require('mysql');

// var connection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'passkeeper'
// });  LOCAL CONNECTION
// 

var connection = mysql.createConnection({
    host: ' https://mysqlcluster11.registeredsite.com',
    user: 'passkeeperadmin',
    password: '!Qaz2wsx3edc',
    database: 'passkeeper'
})
connection.connect();

module.exports = connection;