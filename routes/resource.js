
var stopwords = {"A":true,"ABOUT":true,"ABOVE":true,"ACROSS":true,"AFTER":true,"AFTERWARDS":true,"AGAIN":true,"AGAINST":true,"ALL":true,"ALMOST":true,"ALONE":true,"ALONG":true,"ALREADY":true,"ALSO":true,"ALTHOUGH":true,"ALWAYS":true,"AM":true,"AMONG":true,"AMONGST":true,"AMOUNGST":true,"AMOUNT":true,"AN":true,"AND":true,"ANOTHER":true,"ANY":true,"ANYHOW":true,"ANYONE":true,"ANYTHING":true,"ANYWAY":true,"ANYWHERE":true,"ARE":true,"AROUND":true,"AS":true,"AT":true,"BACK":true,"BE":true,"BECAME":true,"BECAUSE":true,"BECOME":true,"BECOMES":true,"BECOMING":true,"BEEN":true,"BEFORE":true,"BEFOREHAND":true,"BEHIND":true,"BEING":true,"BELOW":true,"BESIDE":true,"BESIDES":true,"BETWEEN":true,"BEYOND":true,"BILL":true,"BOTH":true,"BOTTOM":true,"BUT":true,"BY":true,"CALL":true,"CAN":true,"CANNOT":true,"CANT":true,"CO":true,"CON":true,"COULD":true,"COULDNT":true,"CRY":true,"DE":true,"DESCRIBE":true,"DETAIL":true,"DO":true,"DONE":true,"DOWN":true,"DUE":true,"DURING":true,"EACH":true,"EG":true,"EIGHT":true,"EITHER":true,"ELEVEN":true,"ELSE":true,"ELSEWHERE":true,"EMPTY":true,"ENOUGH":true,"ETC":true,"EVEN":true,"EVER":true,"EVERY":true,"EVERYONE":true,"EVERYTHING":true,"EVERYWHERE":true,"EXCEPT":true,"FEW":true,"FIFTEEN":true,"FIFY":true,"FILL":true,"FIND":true,"FIRE":true,"FIRST":true,"FIVE":true,"FOR":true,"FORMER":true,"FORMERLY":true,"FORTY":true,"FOUND":true,"FOUR":true,"FROM":true,"FRONT":true,"FULL":true,"FURTHER":true,"GET":true,"GIVE":true,"GO":true,"HAD":true,"HAS":true,"HASNT":true,"HAVE":true,"HE":true,"HENCE":true,"HER":true,"HERE":true,"HEREAFTER":true,"HEREBY":true,"HEREIN":true,"HEREUPON":true,"HERS":true,"HERSELF":true,"HIM":true,"HIMSELF":true,"HIS":true,"HOW":true,"HOWEVER":true,"HUNDRED":true,"IE":true,"IF":true,"IN":true,"INC":true,"INDEED":true,"INTEREST":true,"INTO":true,"IS":true,"IT":true,"ITS":true,"ITSELF":true,"KEEP":true,"LAST":true,"LATTER":true,"LATTERLY":true,"LEAST":true,"LESS":true,"LTD":true,"MADE":true,"MANY":true,"MAY":true,"ME":true,"MEANWHILE":true,"MIGHT":true,"MILL":true,"MINE":true,"MORE":true,"MOREOVER":true,"MOST":true,"MOSTLY":true,"MOVE":true,"MUCH":true,"MUST":true,"MY":true,"MYSELF":true,"NAME":true,"NAMELY":true,"NEITHER":true,"NEVER":true,"NEVERTHELESS":true,"NEXT":true,"NINE":true,"NO":true,"NOBODY":true,"NONE":true,"NOONE":true,"NOR":true,"NOT":true,"NOTHING":true,"NOW":true,"NOWHERE":true,"OF":true,"OFF":true,"OFTEN":true,"ON":true,"ONCE":true,"ONE":true,"ONLY":true,"ONTO":true,"OR":true,"OTHER":true,"OTHERS":true,"OTHERWISE":true,"OUR":true,"OURS":true,"OURSELVES":true,"OUT":true,"OVER":true,"OWN":true,"PART":true,"PER":true,"PERHAPS":true,"PLEASE":true,"PUT":true,"RATHER":true,"RE":true,"SAME":true,"SEE":true,"SEEM":true,"SEEMED":true,"SEEMING":true,"SEEMS":true,"SERIOUS":true,"SEVERAL":true,"SHE":true,"SHOULD":true,"SHOW":true,"SIDE":true,"SINCE":true,"SINCERE":true,"SIX":true,"SIXTY":true,"SO":true,"SOME":true,"SOMEHOW":true,"SOMEONE":true,"SOMETHING":true,"SOMETIME":true,"SOMETIMES":true,"SOMEWHERE":true,"STILL":true,"SUCH":true,"SYSTEM":true,"TAKE":true,"TEN":true,"THAN":true,"THAT":true,"THE":true,"THEIR":true,"THEM":true,"THEMSELVES":true,"THEN":true,"THENCE":true,"THERE":true,"THEREAFTER":true,"THEREBY":true,"THEREFORE":true,"THEREIN":true,"THEREUPON":true,"THESE":true,"THEY":true,"THICKV":true,"THIN":true,"THIRD":true,"THIS":true,"THOSE":true,"THOUGH":true,"THREE":true,"THROUGH":true,"THROUGHOUT":true,"THRU":true,"THUS":true,"TO":true,"TOGETHER":true,"TOO":true,"TOP":true,"TOWARD":true,"TOWARDS":true,"TWELVE":true,"TWENTY":true,"TWO":true,"UN":true,"UNDER":true,"UNTIL":true,"UP":true,"UPON":true,"US":true,"VERY":true,"VIA":true,"WAS":true,"WE":true,"WELL":true,"WERE":true,"WHAT":true,"WHATEVER":true,"WHEN":true,"WHENCE":true,"WHENEVER":true,"WHERE":true,"WHEREAFTER":true,"WHEREAS":true,"WHEREBY":true,"WHEREIN":true,"WHEREUPON":true,"WHEREVER":true,"WHETHER":true,"WHICH":true,"WHILE":true,"WHITHER":true,"WHO":true,"WHOEVER":true,"WHOLE":true,"WHOM":true,"WHOSE":true,"WHY":true,"WILL":true,"WITH":true,"WITHIN":true,"WITHOUT":true,"WOULD":true,"YET":true,"YOU":true,"YOUR":true,"YOURS":true,"YOURSELF":true,"YOURSELVES":true,"I":true};

var http = require('http');
var natural = require('natural');
var lemmer = require('lemmer');
var express = require('express');
var router = express.Router();
var TOI = require('./TOI');
var resource = require('./resource');
// var words = require(wordsource);
var articles = require('../models/articles');
// var bigrams = require(bigramssource);

const const_days_in_months = [31,29,31,30,31,30,31,31,30,31,30,31];
var days_in_months = [31,29,31,30,31,30,31,31,30,31,30,31];

module.exports.parseArticles = function (words,bigrams,articleQuery,categoryName,callback){

	articles.find(articleQuery,function(err,a){

		var aPointer = -1;
		var len = a.length;
		var str1;

		nextArticle();
		function nextArticle() {
			if(++aPointer >= len) callback();
			else{
				if(a[aPointer].parsed){
					setImmediate(function(){
						nextArticle();
					});
				}
				else parseArticle();
			}
		}

		function parseArticle() {
			str1 = a[aPointer].text;

			str1 = str1.replace(/[-_(),&.]/g,' ');
			str1 = str1.replace(/[^A-Za-z ]/g,'');
			str1 = str1.replace(/\s\s+/g,' ');
			// str1 = str1.toUpperCase();

			str1 = str1.split(' ');

			if(str1[0]=="")
				str1.splice(0,1);
			if(str1[str1.length-1]=='')
				str1.pop();


			if(str1.length<150)
			{
				nextArticle();
			}
			else{

				lemmer.lemmatize(str1,function(err,str){

						var j=-1;
						checkword();
						if(str[0]) str[0] = str[0].toUpperCase();
						function checkword()
						{
							j++;
							if(j<str.length){
								// str[j] = str[j].toUpperCase();
								if(!stopwords[str[j]]){


									function checkForTheWord(){
										words.findOne({ word:str[j] },function(err,w){
											if(w)
											{
												w.frequency++;
												w.save(function(err){
													if(err) throw err;
													checkword();
												})
											}
											else{
												words({
													word:str[j],
													frequency: 1
												}).save(function(err){
													if(err) throw err;
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
													if(err){
														console.log(err);
													} 
													checkForTheWord();
												})
											}
										});
									} else {
										checkForTheWord();
									}

								} else {
									if(str[j+1]) str[j+1]=str[j+1].toUpperCase();
									checkword();
								}
							}
							else{
								setImmediate(function(){
									a[aPointer].parsed = true;
									a[aPointer].save(function(err){
										if(err) console.log(err);
										console.log(categoryName,aPointer);
										nextArticle();
									});
								});
							}
										
										
							
						}

					});

					}


				}


			});


}