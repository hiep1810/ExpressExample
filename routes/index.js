var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Main' });
});
router.get('/about.html', function(req, res) {
  res.render('about', { title: 'About' });
});

router.get('/index.html', function(req, res) {
  res.render('index', { title: 'Main' });
});


module.exports = router;
