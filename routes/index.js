var http = require('http');
var express = require('express');
var router = express.Router();
var TOI = require('./TOI');
var words = require('../models/words');
var articles = require('../models/articles');
var bigrams = require('../models/bigrams');


router.get('/getLinks/:month/:day',function(req,res){
	var month = Number(req.params.month);
	var day = Number(req.params.day);

	TOI.getArticleLinks({
		month:month,
		day:day
	},function(links){
		res.send(links.join('<br>'));
	});

});

router.get('/getArticle/:month/:day/:number',function(req,res){
	var month = Number(req.params.month);
	var day = Number(req.params.day);
	var number = Number(req.params.number);

	TOI.getArticleLinks({
		month:month,
		day:day
	},function(links){
		TOI.getArticle(links[number],function(article){
			res.send(article);
		});
	});

});


router.get('/getWords/:month/:day/:number',function(req,res){
	var month = Number(req.params.month);
	var day = Number(req.params.day);
	var number = Number(req.params.number);

	TOI.getArticleLinks({
		month:month,
		day:day
	},function(links){
		TOI.getArticle(links[number],function(str){
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


const days_in_months = [1,29,31,30,31,30,31,31,30,31,30,31];
var month,date,d;
var response;

function checkdate()
{
	date++;
	console.log('next date' , date , month);
	if(month>=0 && month<=0){
		if(date<=days_in_months[month])
		{
			setImmediate(function(){
				getlinks(date,month);
			});
		}
		else{
			month++;
			date = 1;
			setImmediate(function(){
				checkdate();
			});
		}
	}
	else
	{
		//exit
		// function Exit()
		// {
			//callback();
			console.log("Finish");
			response.send('done');
		// }
		// Exit();
	}


}

var number;
function getlinks(date,month)
{
	TOI.getArticleLinks({
		day:date,
		month:month
	},function(links){

		function checklinks()
		{
			number++;
			console.log('next link');
			if(number<links.length-100)
			{
				
				setImmediate(function(){
					getarticle(links[number]);
				});		
			}
			else
			{
				setImmediate(function(){
					checkdate();
				});
			}
		}

		function getarticle(str)
		{
			TOI.getArticle(links[number],function(data){

				var str = data.article;


				var article = {
					text: str,
					index: number,
					url: links[number],
					ArticleId: date+"-"+month+"-2016/"+number,
					category: data.category
				}

				articles(article).save(function(err){
					if(err) throw err;
					else console.log(str);

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

					function checkword()
					{
						j++;
						if(j<str.length){

							function checkForTheWord(){
								console.log(str[j]);
								var query={
									word:str[j]
								};
								words.findOne(query,function(err,w){
									if(w)
									{
										w.frequency++;
										w.save(function(err){
											if(err) throw err;
											else console.log(str[j]);
											checkword();
										})
									}
									else{
										words({
											word:str[j],
											frequency: 1
										}).save(function(err){
											if(err) throw err;
											else console.log(str[j]);
											checkword();
										});
									}
								});
							}

							if(str[j+1]){
								bigrams.findOne({
									first: str[j],
									second: str[j+1]
								},function(err,bg){
									if(bg){
										bg.frequency++;
										bg.save(function(err){
											if(err) console.log(err);
											checkForTheWord();
										});
									} else {
										bigrams({
											first: str[j],
											second: str[j+1],
											frequency: 1,
											probability: 0
										}).save(function(err){
											if(err) console.log(err);
											checkForTheWord();
										})
									}
								});
							} else {
								checkForTheWord();
							}

						}
						else{
							setImmediate(function(){
							checklinks();
							});
						}
									
									
								

						}
						var j=-1;
						checkword();

				});


				

			});

			}
			
		
		number = -1;
		checklinks();

	});

}


router.get('/danger',function(req,res){
	d = new Date();
	month = 0;
	date = 0;
	response = res;
	checkdate();


});



module.exports = router;












