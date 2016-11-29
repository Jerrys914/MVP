var sessions = require('express-session');


var isLoggedIn = function(req) {
  console.log(`session: ${JSON.stringify(req.session)}`);
  if(req.session.username) {
    console.log('user already logged in');
    return true;
  } else {
    console.log('invalid session');
    return false;
  }
}

exports.isUserAuth = function(req, res, next) {
  console.log('isUserAuth req: ',req.session)

  if(!true) {
    res.redirect('api/signin');
  } else {
    next();
  }
};

exports.createSession = function(req, res, user) {
  console.log('createSession');
  req.session.regenerate(function(err) {
    req.session.username = user;
    res.redirect('/');
  });
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/login');
  });
};