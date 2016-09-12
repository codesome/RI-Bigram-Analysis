var http = require('http');
var express = require('express');
var router = express.Router();
var TOI = require('./TOI');

router.get('/', function(req, res) {
  res.redirect('/toi');
});

router.get('/toi',function(req,res){

	TOI.getArticleLinks({
		day:1,
		month:1
	},function(links){
		
		// uncomment this to send the article of the 5th link in 'links' to the client
		/*TOI.getArticle(links[4],function(article){
			res.send(article);
		});*/
		
		// uncomment this to send all the links on the client side
		/*res.send(links.join('<br>'));*/

	});

});

module.exports = router;
