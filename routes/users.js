var express = require('express');
var router = express.Router();
var UserService = require('../services/UserService').UserService;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/api', function(req, res) {
    res.send('responded with another route');
});

router.post('/login', function(req, res, next) {
  res.setHeader('content-type', 'application/json');
  console.log(req.body);
  var output = req.body;
   var json = JSON.stringify({
       output,
       status: "success"
    });
    
});

router.post('/register', function(req, res, next) {
  res.setHeader('content-type', 'application/json');
  console.log(req.body.fname);
  var output = req.body;
   var json = JSON.stringify({
       output,
       status: "success"
    });
    
 var userService = new UserService(req.body.fname, req.body.lname, req.body.email, req.body.mob, req.body.password);

userService.ping();
    
  res.end(json); 
 
});

module.exports = router;