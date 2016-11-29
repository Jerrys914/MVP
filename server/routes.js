var controller = require('./controllers');
var router = require('express').Router();
//var util = require('./lib/utilities.js');
var path = require('path');

router.get('/signin', function(req, res) {
  res.sendFile(path.join(__dirname, '/../signin.html'));
});
router.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname, '/../signup.html'));
})
router.get('/api/passwords', controller.passwords.get);
router.post('/api/enterpassword', controller.passwords.post);


module.exports = router;
// router.get('/', function(req, res) {
//   console.log('TRYING TO RENDER INDEX');
//   res.sendFile(path.join(__dirname, '/../client/index.html')); 
// });
// router.get('/passwords', function(req, res) {
// //     console.log('im trying')
//     res.sendFile(path.join(__dirname, '/../client/passwords/passwords.html'))
// });


// router.get('/enterpassword', function(req,res) {
//     res.sendFile(path.join(__dirname, '/../enterpassword.html'))
// })



