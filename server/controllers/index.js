var db = require('../db');
var models = require('../models');

module.exports = {
  passwords: {
    get:function(req, res) {
      console.log('PASSWORD REQUEST: ', req.body)
      models.password.get(1, function(err, results) { //change 1 to be logged in users id
        console.log('RESULTS: ', results)
        res.json(results);
      });
    },
    post:function(req,res) {
      console.log('PASSWORD POST REQUEST: ', req.body)
      var params = [req.body.name, req.body.id_Users, req.body.password];
      models.password.post(params, function(err, results) {
        if (err) { console.log('PASSWORD POST ERROR: ', err) }
        res.sendStatus(201);
      });
    }
  },
  users: {
    get:function(req,res) {
      models.user.get(function(err, results) {
        if(err) { console.log('USER GET ERROR: ', err); }
        res.json(results);
      });
    },
    post:function(req,res) {
      console.log('REQUEST: ',req)
      console.log('TRING TO POST!!');
      var params = [req.body.username, req.body.password];
      models.user.post(params, function(err, results) {
        if(err) {console.log('USER POST ERROR: ', err);}
      });
    }
  }
};