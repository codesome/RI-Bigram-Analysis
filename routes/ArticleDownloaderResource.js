
class ArticleDownloaderResource {

	constructor() {

		this.stopwords = {"A":true,"ABOUT":true,"ABOVE":true,"ACROSS":true,"AFTER":true,"AFTERWARDS":true,"AGAIN":true,"AGAINST":true,"ALL":true,"ALMOST":true,"ALONE":true,"ALONG":true,"ALREADY":true,"ALSO":true,"ALTHOUGH":true,"ALWAYS":true,"AM":true,"AMONG":true,"AMONGST":true,"AMOUNGST":true,"AMOUNT":true,"AN":true,"AND":true,"ANOTHER":true,"ANY":true,"ANYHOW":true,"ANYONE":true,"ANYTHING":true,"ANYWAY":true,"ANYWHERE":true,"ARE":true,"AROUND":true,"AS":true,"AT":true,"BACK":true,"BE":true,"BECAME":true,"BECAUSE":true,"BECOME":true,"BECOMES":true,"BECOMING":true,"BEEN":true,"BEFORE":true,"BEFOREHAND":true,"BEHIND":true,"BEING":true,"BELOW":true,"BESIDE":true,"BESIDES":true,"BETWEEN":true,"BEYOND":true,"BILL":true,"BOTH":true,"BOTTOM":true,"BUT":true,"BY":true,"CALL":true,"CAN":true,"CANNOT":true,"CANT":true,"CO":true,"CON":true,"COULD":true,"COULDNT":true,"CRY":true,"DE":true,"DESCRIBE":true,"DETAIL":true,"DO":true,"DONE":true,"DOWN":true,"DUE":true,"DURING":true,"EACH":true,"EG":true,"EIGHT":true,"EITHER":true,"ELEVEN":true,"ELSE":true,"ELSEWHERE":true,"EMPTY":true,"ENOUGH":true,"ETC":true,"EVEN":true,"EVER":true,"EVERY":true,"EVERYONE":true,"EVERYTHING":true,"EVERYWHERE":true,"EXCEPT":true,"FEW":true,"FIFTEEN":true,"FIFY":true,"FILL":true,"FIND":true,"FIRE":true,"FIRST":true,"FIVE":true,"FOR":true,"FORMER":true,"FORMERLY":true,"FORTY":true,"FOUND":true,"FOUR":true,"FROM":true,"FRONT":true,"FULL":true,"FURTHER":true,"GET":true,"GIVE":true,"GO":true,"HAD":true,"HAS":true,"HASNT":true,"HAVE":true,"HE":true,"HENCE":true,"HER":true,"HERE":true,"HEREAFTER":true,"HEREBY":true,"HEREIN":true,"HEREUPON":true,"HERS":true,"HERSELF":true,"HIM":true,"HIMSELF":true,"HIS":true,"HOW":true,"HOWEVER":true,"HUNDRED":true,"IE":true,"IF":true,"IN":true,"INC":true,"INDEED":true,"INTEREST":true,"INTO":true,"IS":true,"IT":true,"ITS":true,"ITSELF":true,"KEEP":true,"LAST":true,"LATTER":true,"LATTERLY":true,"LEAST":true,"LESS":true,"LTD":true,"MADE":true,"MANY":true,"MAY":true,"ME":true,"MEANWHILE":true,"MIGHT":true,"MILL":true,"MINE":true,"MORE":true,"MOREOVER":true,"MOST":true,"MOSTLY":true,"MOVE":true,"MUCH":true,"MUST":true,"MY":true,"MYSELF":true,"NAME":true,"NAMELY":true,"NEITHER":true,"NEVER":true,"NEVERTHELESS":true,"NEXT":true,"NINE":true,"NO":true,"NOBODY":true,"NONE":true,"NOONE":true,"NOR":true,"NOT":true,"NOTHING":true,"NOW":true,"NOWHERE":true,"OF":true,"OFF":true,"OFTEN":true,"ON":true,"ONCE":true,"ONE":true,"ONLY":true,"ONTO":true,"OR":true,"OTHER":true,"OTHERS":true,"OTHERWISE":true,"OUR":true,"OURS":true,"OURSELVES":true,"OUT":true,"OVER":true,"OWN":true,"PART":true,"PER":true,"PERHAPS":true,"PLEASE":true,"PUT":true,"RATHER":true,"RE":true,"SAME":true,"SEE":true,"SEEM":true,"SEEMED":true,"SEEMING":true,"SEEMS":true,"SERIOUS":true,"SEVERAL":true,"SHE":true,"SHOULD":true,"SHOW":true,"SIDE":true,"SINCE":true,"SINCERE":true,"SIX":true,"SIXTY":true,"SO":true,"SOME":true,"SOMEHOW":true,"SOMEONE":true,"SOMETHING":true,"SOMETIME":true,"SOMETIMES":true,"SOMEWHERE":true,"STILL":true,"SUCH":true,"SYSTEM":true,"TAKE":true,"TEN":true,"THAN":true,"THAT":true,"THE":true,"THEIR":true,"THEM":true,"THEMSELVES":true,"THEN":true,"THENCE":true,"THERE":true,"THEREAFTER":true,"THEREBY":true,"THEREFORE":true,"THEREIN":true,"THEREUPON":true,"THESE":true,"THEY":true,"THICKV":true,"THIN":true,"THIRD":true,"THIS":true,"THOSE":true,"THOUGH":true,"THREE":true,"THROUGH":true,"THROUGHOUT":true,"THRU":true,"THUS":true,"TO":true,"TOGETHER":true,"TOO":true,"TOP":true,"TOWARD":true,"TOWARDS":true,"TWELVE":true,"TWENTY":true,"TWO":true,"UN":true,"UNDER":true,"UNTIL":true,"UP":true,"UPON":true,"US":true,"VERY":true,"VIA":true,"WAS":true,"WE":true,"WELL":true,"WERE":true,"WHAT":true,"WHATEVER":true,"WHEN":true,"WHENCE":true,"WHENEVER":true,"WHERE":true,"WHEREAFTER":true,"WHEREAS":true,"WHEREBY":true,"WHEREIN":true,"WHEREUPON":true,"WHEREVER":true,"WHETHER":true,"WHICH":true,"WHILE":true,"WHITHER":true,"WHO":true,"WHOEVER":true,"WHOLE":true,"WHOM":true,"WHOSE":true,"WHY":true,"WILL":true,"WITH":true,"WITHIN":true,"WITHOUT":true,"WOULD":true,"YET":true,"YOU":true,"YOUR":true,"YOURS":true,"YOURSELF":true,"YOURSELVES":true,"I":true};		
		this.http = require('http');
		this.natural = require('natural');
		this.lemmer = require('lemmer');
		this.TOI = require('./TOI');
		this.resource = require('./resource');
		this.words = require('../models/words');
		this.articles = require('../models/articles');
		this.bigrams = require('../models/bigrams');
		this.const_days_in_months = [31,29,31,30,31,30,31,31,30,31,30,31];
		this.days_in_months = [31,29,31,30,31,30,31,31,30,31,30,31];
		this.month;
		this.date;
		this.d;
		this.cb;
		this.limits;
		this.number;
	}

	checkdate()
	{
			var This = this;
			this.date++;
			console.log('next date' , this.date , this.month);
			if(this.month>=this.limits.startMonth && this.month<=this.limits.endMonth){
				if(this.date<=this.days_in_months[this.month-1])
				{
					//if it is a valid date then get the links of that date
					setImmediate(function(){ //check the use of set immediate
						This.getlinks(This.date,This.month);
					});
				}
				else{
					this.month++;
					this.date = 0;

					// if it is not a valid date then go to next month and start the same procedure again by calling the same function again
					setImmediate(function(){
						This.checkdate();
					});
				}
			}
			else
			{

				console.log("Finish");
				This.cb();
				
			}


	}

	getlinks(date,month)
	{

			var This = this;
			this.TOI.getArticleLinks({
				day:date,
				month:month
				//links is the array of links of a specified date
			},function(links){

				function checklinks()
				{
						This.number++;
						// If the the index is valid then get the article
						if(This.number<links.length)
						{
							
							setImmediate(function(){
								getarticle();
							});		
						}

						//Else move to the next date
						else
						{
							setImmediate(function(){
								This.checkdate();
							});
						}
				}


				//function to get the articles
				function getarticle()
				{

						var ArticleID = date+"-"+month+"-2016/"+This.number;
						This.articles.findOne({ArticleID:ArticleID},function(err,a){
							if(a){
								checklinks();
							} else {
								This.TOI.getArticle(links[This.number],function(data){

									if(data.article != ""){
										//str1 holds the article in the form of a string
										var str1 = data.article;
										//article is a object
										var article = {
											text: str1,
											index: This.number,
											url: links[This.number],
											ArticleID: ArticleID,
											category: data.category,
											date: {
												Day: date,
												Month: month, 
												Year:2016
											}
										}

										//function to save the value of the newly created/updated object
										This.articles(article).save(function(err){
											if(err) throw err;
											console.log(ArticleID);
											checklinks();

										});	
									} else {
										checklinks();
									}
									

								});
							}
						});

				}
					
				if(date == 20) This.number = 610;
				else This.number = -1;
				checklinks();

			});

	}

	startDownloading (startDate,endDate,callback){

		this.limits = {
			startMonth: startDate.month,
			endMonth: endDate.month
		};

		this.date = startDate.day-1;
		this.month = startDate.month;

		this.days_in_months = this.const_days_in_months.slice();

		this.days_in_months[endDate.month-1] = endDate.day;
		this.cb = callback;
		this.checkdate();

	}


}

module.exports = ArticleDownloaderResource;
