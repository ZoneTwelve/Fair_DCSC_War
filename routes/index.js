var express = require('express');
var router = express.Router();
// var helmet = require('helmet');
// express().use(helmet());

router.get('/', function(req, res, next) {
	res.render('index', {title:'太陽87 - 遊戲清單'});
});

module.exports = router;
