router.get('/getArticle/:month/:day/:number',function(req,res){
	var month = Number(req.params.month);
	var day = Number(req.params.day);
	var number = Number(req.params.number);

	//Function call to get all the article links
	TOI.getArticleLinks({
		month:month,
		day:day
	},function(links){
		TOI.getArticle(links[number],function(article){
			res.send(article);
		});
	});

});