var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	if(req.query.level!=undefined)
	switch(true){
		case req.query.level === '2':
			return res.render("web_hacker/level_2", {level:'2'});
		
		case req.query.level === '3'&&req.query.pass === 'ZoneTwelve':
			return res.render("web_hacker/level_3", {level:'3'});

		case req.query.level === '4'&&req.query.pass === 'i_love_log,543':
			return res.render("web_hacker/level_4", {level:'4'});

		case req.query.level === '5'&&req.query.pass === 'translate':
			return res.render("web_hacker/level_5", {level:'5'});

		case req.query.level === '6'&&req.query.pass === '太陽87':
			return res.render("web_hacker/level_6", {level:'6'});

		case req.query.level === '7'&&req.query.pass === 'plugins':
			return res.render("web_hacker/level_7", {level:'7'});

		case req.query.level === '8'&&req.query.pass === 'clickErrorIcon':
			return res.render("web_hacker/level_8", {level:'8'});

		default:return res.send("<h1>Fail</h1>");
	}else
		res.render("web_hacker/level_1", {level:'1'});
	
});
router.post('/', function(req, res){
	
});

module.exports = router;
