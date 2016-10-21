
var http = require('http');
var natural = require('natural');
var lemmer = require('lemmer');
var express = require('express');
var router = express.Router();
var TOI = require('./TOI');
var resource = require('./resource');
var words = require('../models/words');
var articles = require('../models/articles');
var bigrams = require('../models/bigrams');

const const_days_in_months = [31,29,31,30,31,30,31,31,30,31,30,31];
var days_in_months = [31,29,31,30,31,30,31,31,30,31,30,31];


var month,date,d;
var cb;
var limits;

//Function to check the validity of a date
function checkdate()
{
	date++;
	console.log('next date' , date , month);
	if(month>=limits.startMonth && month<=limits.endMonth){
		if(date<=days_in_months[month-1])
		{
			//if it is a valid date then get the links of that date
			setImmediate(function(){ //check the use of set immediate
				getlinks(date,month);
			});
		}
		else{
			month++;
			date = 1;

			// if it is not a valid date then go to next month and start the same procedure again by calling the same function again
			setImmediate(function(){
				checkdate();
			});
		}
	}
	else
	{

		console.log("Finish");
		cb();
		
	}


}

// Number = index of link in the array of links
var number;

//function to get the links of the articles
function getlinks(date,month)
{
	TOI.getArticleLinks({
		day:date,
		month:month
		//links is the array of links of a specified date
	},function(links){

		function checklinks()
		{
			number++;
			console.log('next link');
			// If the the index is valid then get the article
			if(number<links.length)
			{
				
				setImmediate(function(){
					getarticle(links[number]);
				});		
			}

			//Else move to the next date
			else
			{
				setImmediate(function(){
					checkdate();
				});
			}
		}


		//function to get the articles
		function getarticle(str)
		{
			var ArticleId = date+"-"+month+"-2016/"+number;

			articles.findOne({ArticleId:ArticleId},function(err,a){
				if(a){
					checklinks();
				} else {
					TOI.getArticle(links[number],function(data){


						//str1 holds the article in the form of a string
						var str1 = data.article;

						//article is a object
						var article = {
							text: str,
							index: number,
							url: links[number],
							ArticleId: ArticleId,
							category: data.category,
							date: {
								Day: date,
								Month: month, 
								Year:2016
							}
						}

						//function to save the value of the newly created/updated object
						articles(article).save(function(err){
							if(err) throw err;

							checklinks();

						});

					});
				}
			});


			}
			
		
		number = -1;
		checklinks();

	});

}

/*
{
	day:xx,
	month:xx
}
*/

module.exports.downloadAtricles = function (startDate,endDate,callback){

	limits = {
		startMonth: startDate.month,
		endMonth: endDate.month
	};

	date = startDate.day-1;
	month = startDate.month;

	days_in_months[endDate.month] = endDate.day;
	cb = callback;
	checkdate();

}

module.exports.parseArticles = function (callback){

	words.remove({},function(err){
		if(err) console.log(err);
		bigrams.remove({},function(err){
			if(err) console.log(err);

			articles.find({},function(err,a){


				var aPointer = -1;
				var len = a.length;
				var str1;

				function nextArticle() {
					if(++aPointer == len) callback();
					else parseArticle();
				}

				function parseArticle() {
					str1 = a[aPointer];
					var re_1 = /[-_(),&.]/g;
					var re_2 = /[^A-Za-z ]/g;
					var re_3 = /\s\s+/g;


					str1 = str1.replace(re_1,' ');
					str1 = str1.replace(re_2,'');
					str1 = str1.replace(re_3,' ');
					// str1 = str1.toUpperCase();

					str1 = str1.split(' ');

					if(str1[0]=="")
						str1.splice(0,1);
					if(str1[str1.length-1]=='')
						str1.pop();

					// for(var z=0;z<str.length;z++)
					// {
					// 	str[z]=natural.PorterStemmer.stem(str[z]).toUpperCase();
					// }

					lemmer.lemmatize(str1,function(err,str){

						function checkword()
						{
							j++;
							if(j<str.length){
								str[j] = str[j].toUpperCase();
								if(!stopwords[str[j]]){


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

									if(str[j+1] && !stopwords[(str[j+1]=str[j+1].toUpperCase())]){
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
												}).save(function(err){
													if(err) console.log(err);
													checkForTheWord();
												})
											}
										});
									} else {
										checkForTheWord();
									}

								} else {
									checkword();
								}
							}
							else{
								setImmediate(function(){
									nextArticle();
								});
							}
										
										
							
						}
							var j=-1;
							checkword();

					});


				}


			});

		});
	});

}