var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home.html', {title:'THis is title'});
});

router.post('/sendPasscode', function(req, res, next) {
   res.setHeader('content-type', 'application/json');
  // res.setHeader('Access-Control-Allow-Origin', '*');
    var json = JSON.stringify({
       status : "Success"
    });
    
  res.end(json); 
});

module.exports = router;
