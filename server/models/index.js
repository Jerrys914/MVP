var db = require('../db');

module.exports = {
  password: {
    get: function(userid, callback) {
      var queryString = 'SELECT * from Passwords where userid = ?;';
      db.query(queryString,userid, function(err,results) {
        callback(err, results);
      });
    },
    post: function(params, callback) {
        console.log("PARAMS ASOIDHASOGFIHEOGIHE", params)
        var queryString = 'INSERT INTO Passwords(name, userid, password) VALUES (?, ?, ?);';
        db.query(queryString,params, function(err,results) {
          callback(err,results)
        })
    }
  },

  user: {
    post:function(params, callback) {
      var queryString = 'INSERT INTO Users (username, password) VALUES (?,?);';
      db.query(queryString, params, function(err, results) {
        callback(err, results);
      })
    },
    get:function(callback) {
        var queryString = 'SELECT * from Users';
        db.query(queryString, function(err, results) {
          callback(err,results);
        })
    }
  }
};