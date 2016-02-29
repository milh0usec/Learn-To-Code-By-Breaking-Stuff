var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
  response.render('home');
});

router.get('/about', function(request, response){
  response.render('about');
});

module.exports = router;
