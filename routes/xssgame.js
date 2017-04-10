var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if(req.query.level != undefined){
		
	}else
		res.render("xss/level_1");
});

router.post('/', function(){
	if(req.body.level != undefined){
		switch(true){
			default:return res.send("Fail");
		}
	}else
		res.render("xss/level_1");
})

module.exports = router;
