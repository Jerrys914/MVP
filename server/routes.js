var controller = require('./controllers');
var router = require('express').Router();
//var util = require('./lib/utilities.js');
var path = require('path');

router.get('/', function(req, res) {
  console.log('TRYING TO RENDER INDEX');
  res.sendFile(path.join(__dirname, '/../index.html')); 
});

router.get('/signin', function(req, res) {
  res.sendFile(path.join(__dirname, '/../signin.html'));
});
router.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname, '/../signup.html'));
})

// router.get('/passwords', function(req, res) {
// //     console.log('im trying')
//     res.sendFile(path.join(__dirname, '/../client/passwords/passwords.html'))
// });
router.get('/passwords', controller.passwords.get);

router.get('/enterpassword', function(req,res) {
    res.sendFile(path.join(__dirname, '/../enterpassword.html'))
})
router.post('/enterpassword', controller.passwords.post);


module.exports = router;