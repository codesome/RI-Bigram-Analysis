var http = require('http');
var express = require('express');
var router = express.Router();
var TOI = require('./TOI');
var words = require('../models/words');

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
			// date++;
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
			function checkword()
			{
				i++;
				if(i<str.length)
				{
					console.log(str[i]);
					setImmediate(function(){
						checkword();
					});
				} 
				else
				{
					setImmediate(function(){
						checklinks();
					});
				}

			}
			

			var i=-1;
			checkword();

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



// router.get('/RI-Articles',function(req,res)
// {
// 	var i=1,j=1;
// 	var d = new Date();

// 	function Callback();
// 	{
// 		if(i<dates_in_month[j] && j<d.getMonth()-1){
// 			TOI.getArticleLinks({
// 				day:i,
// 				month:j
// 			},function(links){
// 				res.send(links.join('<br>'));

// 			})
// 			i++;
// 		}
// 		else if(j==d.getMonth() && i<d.getDate()){
// 			TOI.getArticleLinks({
// 				day:i,
// 				month:j
// 			},function(links){
// 				res.send(links.join('<br>'));

// 			})
// 			i++;
// 		}
// 		else{
// 			i=1;
// 			if(j<d.getMonth()){
// 				j++;
// 				Callback();	
// 			}
// 			else
// 				//Exit
// 		}

// 	}

// }

















// 	for(i=1,j=d.getMonth();i<=d.getDate();i++)
// 	{
// 		//fghj

// 	}


// });

// router.get('/', function(req, res) {
//   res.redirect('/toi');
// });

// router.get('/insert',function(req,res){

// 	var obj = {
// 		word: "HELLO2",
// 		frequency: 1
// 	};

// 	words(obj).save(function(err){
// 		if(!err){
// 			res.send('jkdfh ');
// 		}
// 	});

// });

// router.get('/insert',function(req,res){


// 	for(i=0;i<str.length;i++)
// 	{
// 		x=str[i];
// 		words.findOne(x,function(err,wrds){
// 			console.log(wrds);

// 			if(wrds){
// 				wrds.frequency++;
// 				// wrds.something = "dfglg";
// 				wrds.save(function(err){
// 					if(!err){
// 						res.send(wrds);
// 					} else {
// 						throw err;
// 					}
// 				});
// 			} else {
// 				//res.send("NOT PRESENT");
// 				var obj = {
// 				word: x,
// 				frequency: 1
// 				};

// 				words(obj).save(function(err){
// 				if(!err){
// 					res.send('Error');
// 				}
// 				});
				

// 			}
		
// 		});
// 	}
	
// });



// router.get('/show',function(req,res){

// 	var query = {
// 		word: "HELLO1"
// 	};
// 	words.findOne(query,function(err,wrds){
// 		console.log(wrds);

// 		if(wrds){
// 			wrds.frequency++;
// 			wrds.something = "dfglg";
// 			wrds.save(function(err){
// 				if(!err){
// 					res.send(wrds);
// 				} else {
// 					throw err;
// 				}
// 			});
// 		} else {
// 			res.send("NOT PRESENT");
// 		}
		
// 	});

// });


// router.get('/toi',function(req,res){

// 	TOI.getArticleLinks({
// 		day:1,
// 		month:1
// 	},function(links){
		
// 		// uncomment this to send the article of the 5th link in 'links' to the client
// 		TOI.getArticle(links[i],function(str){

// 			var re_1 = /[-_(),&.]/g;
// 			var re_2 = /[^A-Za-z ]/g;
// 			var re_3 = /\s\s+/g;

// 			str = str.replace(re_1,' ');
// 			str = str.replace(re_2,'');
// 			str = str.replace(re_3,' ');

// 			str = str.toUpperCase();

// 			str = str.split(' ');

// 			if(str[0]=="")
// 				str.splice(0,1);
// 			if(str[str.length-1]=='')
// 				str.pop();

// 			var i = -1;
// 			var str_length = str.length;
// 			function Callback(){

// 			if(++i != str_length) database();
// 			else endDatabase();

// 			}

// 			function database()
// 			{
// 				x=str[i];
// 				words.findOne(x,function(err,wrds){
// 					console.log(wrds);

// 					if(wrds){
// 						wrds.frequency++;
// 						// wrds.something = "dfglg";
// 						wrds.save(function(err){
// 							if(!err){
// 								res.send(wrds);
// 							} else {
// 								throw err;
// 							}
// 						});
// 					} else {
// 						//res.send("NOT PRESENT");

// 						var obj = {
// 						word: x,
// 						frequency: 1
// 						};

// 						words(obj).save(function(err){
// 						if(!err){
// 							res.send('Error');
// 						}
// 						});
// 						}

// 				});

// 				Callback();							

// 			}

// 			Callback();
// 			function endDatabase(){

// 			}

// 		});

// 	});
	
// });



// router.get('/RI',function(req,res)
// {
// 	var i,j;
// 	for(j=0;j<;j++)
// 	{
// 		for (i=1;i<dates_in_month[j];i++)
// 		{
// 			TOI.getArticleLinks({
// 				day:i,
// 				month:j
// 			},function(links){
// 				var k=0;
// 				while(k<links.length)
// 				{
// 					TOI.getArticle(links[k],function(str)
// 					{
// 						TOI.finalArticles(str);
// 					})
// 				}
				
// 			})
// 		}
// 	}


// });

module.exports = router;












