var jsdom = require('jsdom');
var http = require('follow-redirects').http;

const base_starttime = 42370; // for: 1st Jan 2016 42370
const days_in_months = [31,29,31,30,31,30,31,31,30,31,30,31];

module.exports.getArticleLinks = function(options,callback){

	/*
	Example for options

	var options = {
		day: 3,
		month: 4
	} 

	var options = {
		day: 24,
		month: 2
	}
	*/

	// TODO: check what does '||' and '&&' do in javascript for the below use case 
	var day = options.day || 1;
	var month = options.month || 1;

	// validating data
	var d = new Date();
	if(month<1 || month>12 || month>d.getMonth()+1) month = 1;
	if(day>days_in_months[month-1] || (month==d.getMonth()+1 && day>d.getDate()) ) day = 1;

	// calculating starttime (base_starttime+ number of days since 1/1/2016)
	var starttime = base_starttime;
	for(var i=0; i<month-1 ; i++){
		starttime += days_in_months[i];
	}
	starttime += day - 1;

	// console.log(starttime);

	//starttime = 38300;

	var path = '/2016/'+month+'/'+day+'/archivelist/year-2016,month-'+month+',starttime-'+starttime+'.cms'
	console.log(path);
	http.get({
		host: 'timesofindia.indiatimes.com',
		path: path
	},function(response){

		var html = '' ;

		response.on('data',function(chunks){
			html += chunks;
		});

		response.on('end',function(){
			
			var pattern_1 = /<table[^>]*>((.|[\n\r])*)<\/table>/img;
			var tables = pattern_1.exec(html);

			var pattern_2 = /<table[^>]*>((.|[\n\r])*)<\/table>/img;
			var link_table = pattern_2.exec(tables[1])[1]; // table with all the links

			var allArticleLinks = []; // the links to articles
			var articleLink;

			var articleLinkPattern = /<a [^>]*\bhref\s*=\s*"([^"]*timesofindia\.indiatimes\.com[^"]*)/g;
			
			while(articleLink = articleLinkPattern.exec(link_table)) {
				allArticleLinks.push(articleLink[1]);
			}

			callback(allArticleLinks);
		
		});

	});

}

module.exports.getArticle = function(url,callback) {
	//console.log(url);
	var path = url.substr(34); // to remove 'http://timesofindia.indiatimes.com' from the url
	console.log('place1',path);
	http.get({
		host: 'timesofindia.indiatimes.com',
		path: path
	},function(response){

		var html = '' ;

		response.on('data',function(chunks){
			html += chunks;
		});

		response.on('end',function(){
			jsdom.env("", function(err, window) { // creating html window
			    if (err) {
			      console.error(err);
			      callback(null);
			    }

			    //console.log("html",html);

			    // loading jquery for 'window'
			    var $ = require("jquery")(window);
				
				// adding the received html from link to the 'body' of created html window
				$(html).appendTo("body"); 

				// getting html inside the <div></div> with containing class 'article_content'
				$('.article_content .articleshow_slideshow').remove();
				var category = $('.htcls').html() || "";
				var article = $('.article_content').html() || ""; 

				// removing <a ...>...</a> tags
				article = article.replace(/<a\b[^>]*>(.*?)<\/a>/g, "");

				// removing all other html tags
				article = article.replace(/<[^>]*>/g,"");

				callback({
					article:article,
					category:category
				});
			});			
		});

	});

}










				


