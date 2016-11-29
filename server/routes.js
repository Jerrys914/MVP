var controller = require('./controllers');
var router = require('express').Router();
var util = require('./lib/utilities.js');
var path = require('path');

router.get('/api/signin', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/auth/signin.html'));
});
// router.get('/api/signin', controller.users.post);
router.get('/api/signup', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/auth/signup.html'));
})
router.get('/api/passwords', controller.passwords.get);
router.post('/api/enterpassword', controller.passwords.post);

// router.get('/', function(req, res) {
//   console.log('TRYING TO RENDER INDEX');
//   res.sendFile(path.join(__dirname, '/../client/index.html')); 
// });


router.get('/', function(req, res) {
  console.log('TRYING TO RENDER INDEX');
  res.sendFile(path.join(__dirname, '/../client/index.html')); 
});
// router.get('/passwords', function(req, res) {
// //     console.log('im trying')
//     res.sendFile(path.join(__dirname, '/../client/passwords/passwords.html'))
// });


// router.get('/enterpassword', function(req,res) {
//     res.sendFile(path.join(__dirname, '/../enterpassword.html'))
// })


module.exports = router;
