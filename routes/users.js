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
  console.log(req.body.username);
  console.log(req.body.password);
  
   let userService = new UserService("", "", req.body.username, "", req.body.password);
   let output = userService.login();
    console.log(output);
    /*if(output == null) {
      res.end({status:"failure"})  
    }
    else {
        res.end(JSON.stringify({output, status:"success"}));  
    }*/
    
    var json = null;
    if(output != null) {
        json = JSON.stringify({
           output,
           status: "success"
        });
    }
    else {
        json = JSON.stringify({
           status: "failure"
        });
    }
  res.end(json); 
});

router.post('/register', function(req, res, next) {
    
 res.setHeader('content-type', 'application/json');
 console.log(req.body.fname);
 let userService = new UserService(req.body.fname, req.body.lname, req.body.email, req.body.mob, req.body.password);

 var output = userService.register();
    
 var json = JSON.stringify({
       output,
       status: "success"
 });
  res.end(json); 
 
});

router.get('/allusers', function(req, res) {
   res.setHeader('content-type', 'application/json');
    try{
     //   var output = {result:'output'};
     let userService = new UserService();
     var output = userService.getAllUsers();
     console.log(output);
     var json = JSON.stringify({
       output,
       status: "success"
     });
    res.end(json);
    }
    catch(e) {
        res.end("error occured.")
    }
  
});

module.exports = router;