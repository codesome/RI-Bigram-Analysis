var http = require('http');
var express = require('express');
var router = express.Router();
var TOI = require('./TOI');
var words = require('../models/words');

router.get('/', function(req, res) {
  res.redirect('/toi');
});

router.get('/insert',function(req,res){

	var obj = {
		word: "HELLO2",
		frequency: 1
	};

	words(obj).save(function(err){
		if(!err){
			res.send('jkdfh ');
		}
	});

});

router.get('/show',function(req,res){

	var query = {
		word: "HELLO1"
	};
	words.findOne(query,function(err,wrds){
		console.log(wrds);

		if(wrds){
			wrds.frequency++;
			wrds.something = "dfglg";
			wrds.save(function(err){
				if(!err){
					res.send(wrds);
				} else {
					throw err;
				}
			});
		} else {
			res.send("NOT PRESENT");
		}
		
	});

});


router.get('/toi',function(req,res){

	TOI.getArticleLinks({
		day:1,
		month:1
	},function(links){
		
		// uncomment this to send the article of the 5th link in 'links' to the client
		TOI.getArticle(links[4],function(str){

			var re_1 = /[-_(),&.]/g;
			var re_2 = /[^A-Za-z ]/g;
			var re_3 = /\s\s+/g;

			str = str.replace(re_1,' ');
			str = str.replace(re_2,'');
			str = str.replace(re_3,' ');

			str = str.toUpperCase();

			str = str.split(' ');

			if(str[0]=="")
				str.splice(0,1);
			if(str[str.length-1]=='')
				str.pop();

			res.send(str);
		});

	});

});

module.exports = router;
