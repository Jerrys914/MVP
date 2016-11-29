var db = require('../db');
var models = require('../models');
var crypto = require('crypto');

var encryptAlgo = 'aes-256-ctr';
var secret = 'kcolssap';

function encrypt(text){
  var cipher = crypto.createCipher(encryptAlgo,secret)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text){
  var decipher = crypto.createDecipher(encryptAlgo,secret)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

module.exports = {
  passwords: {
    get:function(req, res) {
      models.password.get(1, function(err, results) { //change 1 to be logged in users id
        results.map(function(prop) {
          console.log('PROP.PASSWORD: ', prop.password);
          prop.password = decrypt(prop.password);
        }) 
        res.json(results);
      });
    },
    post:function(req,res) {
      console.log('PASSWORD POST REQUEST: ', req.body)
      var encryptedPass = encrypt(req.body.password);
      console.log('encrypted password:ldnjkln: ', encryptedPass); 
      var params = [req.body.name, 1, encryptedPass];
      models.password.post(params, function(err, results) {
        if (err) { console.log('PASSWORD POST ERROR: ', err) }
        res.sendStatus(201);
      });
    },
    compare:function(req, res) {

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
      console.log('REQUEST: ',req.body)
      console.log('TRING TO POST!!');
      var hashedPass = models.user.hashPass(req.body.password);
      var params = [req.body.username, hashedPass];
      models.user.post(params, function(err, results) {
        if(err) {console.log('USER POST ERROR: ', err);}
      });
    }
  }
};