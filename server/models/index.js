var db = require('../db');
var bcrypt = require('bcrypt');
var Promise = require('bluebird');

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
    get:function(username, callback) {
        var queryString = 'SELECT id from Users where username = ?;';
        db.query(queryString, username, function(err, results) {
          callback(err,results);
        })
    }, 
    hashPass:function(password) {

    },
    comparePasswords:function(attemptedPassword, user,callback) {
      var queryString = 'Select password from Users where username = ?;';
      db.query(queryString, user, function(err, results) {
        console.log('USER PASSWORD RESULT: ', results);
      })
    }
  }
};