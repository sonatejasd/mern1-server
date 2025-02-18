var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  var {username, password} = req.body.data;
  if(username === 'admin' && password === 'admin') {
    res.send({status: 200, message: 'Login success'});
  }
  else
    res.send({status: 401, message: 'Login failed'});
})

module.exports = router;
