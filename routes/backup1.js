// var stopwords = {"a":true,"a's":true,"able":true,"about":true,"above":true,"according":true,"accordingly":true,"across":true,"actually":true,"after":true,"afterwards":true,"again":true,"against":true,"ain't":true,"all":true,"allow":true,"allows":true,"almost":true,"alone":true,"along":true,"already":true,"also":true,"although":true,"always":true,"am":true,"among":true,"amongst":true,"an":true,"and":true,"another":true,"any":true,"anybody":true,"anyhow":true,"anyone":true,"anything":true,"anyway":true,"anyways":true,"anywhere":true,"apart":true,"appear":true,"appreciate":true,"appropriate":true,"are":true,"aren't":true,"around":true,"as":true,"aside":true,"ask":true,"asking":true,"associated":true,"at":true,"available":true,"away":true,"awfully":true,"b":true,"be":true,"became":true,"because":true,"become":true,"becomes":true,"becoming":true,"been":true,"before":true,"beforehand":true,"behind":true,"being":true,"believe":true,"below":true,"beside":true,"besides":true,"best":true,"better":true,"between":true,"beyond":true,"both":true,"brief":true,"but":true,"by":true,"c":true,"c'mon":true,"c's":true,"came":true,"can":true,"can't":true,"cannot":true,"cant":true,"cause":true,"causes":true,"certain":true,"certainly":true,"changes":true,"clearly":true,"co":true,"com":true,"come":true,"comes":true,"concerning":true,"consequently":true,"consider":true,"considering":true,"contain":true,"containing":true,"contains":true,"corresponding":true,"could":true,"couldn't":true,"course":true,"currently":true,"d":true,"definitely":true,"described":true,"despite":true,"did":true,"didn't":true,"different":true,"do":true,"does":true,"doesn't":true,"doing":true,"don't":true,"done":true,"down":true,"downwards":true,"during":true,"e":true,"each":true,"edu":true,"eg":true,"eight":true,"either":true,"else":true,"elsewhere":true,"enough":true,"entirely":true,"especially":true,"et":true,"etc":true,"even":true,"ever":true,"every":true,"everybody":true,"everyone":true,"everything":true,"everywhere":true,"ex":true,"exactly":true,"example":true,"except":true,"f":true,"far":true,"few":true,"fifth":true,"first":true,"five":true,"followed":true,"following":true,"follows":true,"for":true,"former":true,"formerly":true,"forth":true,"four":true,"from":true,"further":true,"furthermore":true,"g":true,"get":true,"gets":true,"getting":true,"given":true,"gives":true,"go":true,"goes":true,"going":true,"gone":true,"got":true,"gotten":true,"greetings":true,"h":true,"had":true,"hadn't":true,"happens":true,"hardly":true,"has":true,"hasn't":true,"have":true,"haven't":true,"having":true,"he":true,"he's":true,"hello":true,"help":true,"hence":true,"her":true,"here":true,"here's":true,"hereafter":true,"hereby":true,"herein":true,"hereupon":true,"hers":true,"herself":true,"hi":true,"him":true,"himself":true,"his":true,"hither":true,"hopefully":true,"how":true,"howbeit":true,"however":true,"i":true,"i'd":true,"i'll":true,"i'm":true,"i've":true,"ie":true,"if":true,"ignored":true,"immediate":true,"in":true,"inasmuch":true,"inc":true,"indeed":true,"indicate":true,"indicated":true,"indicates":true,"inner":true,"insofar":true,"instead":true,"into":true,"inward":true,"is":true,"isn't":true,"it":true,"it'd":true,"it'll":true,"it's":true,"its":true,"itself":true,"j":true,"just":true,"k":true,"keep":true,"keeps":true,"kept":true,"know":true,"known":true,"knows":true,"l":true,"last":true,"lately":true,"later":true,"latter":true,"latterly":true,"least":true,"less":true,"lest":true,"let":true,"let's":true,"like":true,"liked":true,"likely":true,"little":true,"look":true,"looking":true,"looks":true,"ltd":true,"m":true,"mainly":true,"many":true,"may":true,"maybe":true,"me":true,"mean":true,"meanwhile":true,"merely":true,"might":true,"more":true,"moreover":true,"most":true,"mostly":true,"much":true,"must":true,"my":true,"myself":true,"n":true,"name":true,"namely":true,"nd":true,"near":true,"nearly":true,"necessary":true,"need":true,"needs":true,"neither":true,"never":true,"nevertheless":true,"new":true,"next":true,"nine":true,"no":true,"nobody":true,"non":true,"none":true,"noone":true,"nor":true,"normally":true,"not":true,"nothing":true,"novel":true,"now":true,"nowhere":true,"o":true,"obviously":true,"of":true,"off":true,"often":true,"oh":true,"ok":true,"okay":true,"old":true,"on":true,"once":true,"one":true,"ones":true,"only":true,"onto":true,"or":true,"other":true,"others":true,"otherwise":true,"ought":true,"our":true,"ours":true,"ourselves":true,"out":true,"outside":true,"over":true,"overall":true,"own":true,"p":true,"particular":true,"particularly":true,"per":true,"perhaps":true,"placed":true,"please":true,"plus":true,"possible":true,"presumably":true,"probably":true,"provides":true,"q":true,"que":true,"quite":true,"qv":true,"r":true,"rather":true,"rd":true,"re":true,"really":true,"reasonably":true,"regarding":true,"regardless":true,"regards":true,"relatively":true,"respectively":true,"right":true,"s":true,"said":true,"same":true,"saw":true,"say":true,"saying":true,"says":true,"second":true,"secondly":true,"see":true,"seeing":true,"seem":true,"seemed":true,"seeming":true,"seems":true,"seen":true,"self":true,"selves":true,"sensible":true,"sent":true,"serious":true,"seriously":true,"seven":true,"several":true,"shall":true,"she":true,"should":true,"shouldn't":true,"since":true,"six":true,"so":true,"some":true,"somebody":true,"somehow":true,"someone":true,"something":true,"sometime":true,"sometimes":true,"somewhat":true,"somewhere":true,"soon":true,"sorry":true,"specified":true,"specify":true,"specifying":true,"still":true,"sub":true,"such":true,"sup":true,"sure":true,"t":true,"t's":true,"take":true,"taken":true,"tell":true,"tends":true,"th":true,"than":true,"thank":true,"thanks":true,"thanx":true,"that":true,"that's":true,"thats":true,"the":true,"their":true,"theirs":true,"them":true,"themselves":true,"then":true,"thence":true,"there":true,"there's":true,"thereafter":true,"thereby":true,"therefore":true,"therein":true,"theres":true,"thereupon":true,"these":true,"they":true,"they'd":true,"they'll":true,"they're":true,"they've":true,"think":true,"third":true,"this":true,"thorough":true,"thoroughly":true,"those":true,"though":true,"three":true,"through":true,"throughout":true,"thru":true,"thus":true,"to":true,"together":true,"too":true,"took":true,"toward":true,"towards":true,"tried":true,"tries":true,"truly":true,"try":true,"trying":true,"twice":true,"two":true,"u":true,"un":true,"under":true,"unfortunately":true,"unless":true,"unlikely":true,"until":true,"unto":true,"up":true,"upon":true,"us":true,"use":true,"used":true,"useful":true,"uses":true,"using":true,"usually":true,"uucp":true,"v":true,"value":true,"various":true,"very":true,"via":true,"viz":true,"vs":true,"w":true,"want":true,"wants":true,"was":true,"wasn't":true,"way":true,"we":true,"we'd":true,"we'll":true,"we're":true,"we've":true,"welcome":true,"well":true,"went":true,"were":true,"weren't":true,"what":true,"what's":true,"whatever":true,"when":true,"whence":true,"whenever":true,"where":true,"where's":true,"whereafter":true,"whereas":true,"whereby":true,"wherein":true,"whereupon":true,"wherever":true,"whether":true,"which":true,"while":true,"whither":true,"who":true,"who's":true,"whoever":true,"whole":true,"whom":true,"whose":true,"why":true,"will":true,"willing":true,"wish":true,"with":true,"within":true,"without":true,"won't":true,"wonder":true,"would":true,"wouldn't":true,"x":true,"y":true,"yes":true,"yet":true,"you":true,"you'd":true,"you'll":true,"you're":true,"you've":true,"your":true,"yours":true,"yourself":true,"yourselves":true,"z":true,"zero":true};

//Array of stop words
var stopwords = {"A":true,"A'S":true,"ABLE":true,"ABOUT":true,"ABOVE":true,"ACCORDING":true,"ACCORDINGLY":true,"ACROSS":true,"ACTUALLY":true,"AFTER":true,"AFTERWARDS":true,"AGAIN":true,"AGAINST":true,"AIN'T":true,"ALL":true,"ALLOW":true,"ALLOWS":true,"ALMOST":true,"ALONE":true,"ALONG":true,"ALREADY":true,"ALSO":true,"ALTHOUGH":true,"ALWAYS":true,"AM":true,"AMONG":true,"AMONGST":true,"AN":true,"AND":true,"ANOTHER":true,"ANY":true,"ANYBODY":true,"ANYHOW":true,"ANYONE":true,"ANYTHING":true,"ANYWAY":true,"ANYWAYS":true,"ANYWHERE":true,"APART":true,"APPEAR":true,"APPRECIATE":true,"APPROPRIATE":true,"ARE":true,"AREN'T":true,"AROUND":true,"AS":true,"ASIDE":true,"ASK":true,"ASKING":true,"ASSOCIATED":true,"AT":true,"AVAILABLE":true,"AWAY":true,"AWFULLY":true,"B":true,"BE":true,"BECAME":true,"BECAUSE":true,"BECOME":true,"BECOMES":true,"BECOMING":true,"BEEN":true,"BEFORE":true,"BEFOREHAND":true,"BEHIND":true,"BEING":true,"BELIEVE":true,"BELOW":true,"BESIDE":true,"BESIDES":true,"BEST":true,"BETTER":true,"BETWEEN":true,"BEYOND":true,"BOTH":true,"BRIEF":true,"BUT":true,"BY":true,"C":true,"C'MON":true,"C'S":true,"CAME":true,"CAN":true,"CAN'T":true,"CANNOT":true,"CANT":true,"CAUSE":true,"CAUSES":true,"CERTAIN":true,"CERTAINLY":true,"CHANGES":true,"CLEARLY":true,"CO":true,"COM":true,"COME":true,"COMES":true,"CONCERNING":true,"CONSEQUENTLY":true,"CONSIDER":true,"CONSIDERING":true,"CONTAIN":true,"CONTAINING":true,"CONTAINS":true,"CORRESPONDING":true,"COULD":true,"COULDN'T":true,"COURSE":true,"CURRENTLY":true,"D":true,"DEFINITELY":true,"DESCRIBED":true,"DESPITE":true,"DID":true,"DIDN'T":true,"DIFFERENT":true,"DO":true,"DOES":true,"DOESN'T":true,"DOING":true,"DON'T":true,"DONE":true,"DOWN":true,"DOWNWARDS":true,"DURING":true,"E":true,"EACH":true,"EDU":true,"EG":true,"EIGHT":true,"EITHER":true,"ELSE":true,"ELSEWHERE":true,"ENOUGH":true,"ENTIRELY":true,"ESPECIALLY":true,"ET":true,"ETC":true,"EVEN":true,"EVER":true,"EVERY":true,"EVERYBODY":true,"EVERYONE":true,"EVERYTHING":true,"EVERYWHERE":true,"EX":true,"EXACTLY":true,"EXAMPLE":true,"EXCEPT":true,"F":true,"FAR":true,"FEW":true,"FIFTH":true,"FIRST":true,"FIVE":true,"FOLLOWED":true,"FOLLOWING":true,"FOLLOWS":true,"FOR":true,"FORMER":true,"FORMERLY":true,"FORTH":true,"FOUR":true,"FROM":true,"FURTHER":true,"FURTHERMORE":true,"G":true,"GET":true,"GETS":true,"GETTING":true,"GIVEN":true,"GIVES":true,"GO":true,"GOES":true,"GOING":true,"GONE":true,"GOT":true,"GOTTEN":true,"GREETINGS":true,"H":true,"HAD":true,"HADN'T":true,"HAPPENS":true,"HARDLY":true,"HAS":true,"HASN'T":true,"HAVE":true,"HAVEN'T":true,"HAVING":true,"HE":true,"HE'S":true,"HELLO":true,"HELP":true,"HENCE":true,"HER":true,"HERE":true,"HERE'S":true,"HEREAFTER":true,"HEREBY":true,"HEREIN":true,"HEREUPON":true,"HERS":true,"HERSELF":true,"HI":true,"HIM":true,"HIMSELF":true,"HIS":true,"HITHER":true,"HOPEFULLY":true,"HOW":true,"HOWBEIT":true,"HOWEVER":true,"I":true,"I'D":true,"I'LL":true,"I'M":true,"I'VE":true,"IE":true,"IF":true,"IGNORED":true,"IMMEDIATE":true,"IN":true,"INASMUCH":true,"INC":true,"INDEED":true,"INDICATE":true,"INDICATED":true,"INDICATES":true,"INNER":true,"INSOFAR":true,"INSTEAD":true,"INTO":true,"INWARD":true,"IS":true,"ISN'T":true,"IT":true,"IT'D":true,"IT'LL":true,"IT'S":true,"ITS":true,"ITSELF":true,"J":true,"JUST":true,"K":true,"KEEP":true,"KEEPS":true,"KEPT":true,"KNOW":true,"KNOWN":true,"KNOWS":true,"L":true,"LAST":true,"LATELY":true,"LATER":true,"LATTER":true,"LATTERLY":true,"LEAST":true,"LESS":true,"LEST":true,"LET":true,"LET'S":true,"LIKE":true,"LIKED":true,"LIKELY":true,"LITTLE":true,"LOOK":true,"LOOKING":true,"LOOKS":true,"LTD":true,"M":true,"MAINLY":true,"MANY":true,"MAY":true,"MAYBE":true,"ME":true,"MEAN":true,"MEANWHILE":true,"MERELY":true,"MIGHT":true,"MORE":true,"MOREOVER":true,"MOST":true,"MOSTLY":true,"MUCH":true,"MUST":true,"MY":true,"MYSELF":true,"N":true,"NAME":true,"NAMELY":true,"ND":true,"NEAR":true,"NEARLY":true,"NECESSARY":true,"NEED":true,"NEEDS":true,"NEITHER":true,"NEVER":true,"NEVERTHELESS":true,"NEW":true,"NEXT":true,"NINE":true,"NO":true,"NOBODY":true,"NON":true,"NONE":true,"NOONE":true,"NOR":true,"NORMALLY":true,"NOT":true,"NOTHING":true,"NOVEL":true,"NOW":true,"NOWHERE":true,"O":true,"OBVIOUSLY":true,"OF":true,"OFF":true,"OFTEN":true,"OH":true,"OK":true,"OKAY":true,"OLD":true,"ON":true,"ONCE":true,"ONE":true,"ONES":true,"ONLY":true,"ONTO":true,"OR":true,"OTHER":true,"OTHERS":true,"OTHERWISE":true,"OUGHT":true,"OUR":true,"OURS":true,"OURSELVES":true,"OUT":true,"OUTSIDE":true,"OVER":true,"OVERALL":true,"OWN":true,"P":true,"PARTICULAR":true,"PARTICULARLY":true,"PER":true,"PERHAPS":true,"PLACED":true,"PLEASE":true,"PLUS":true,"POSSIBLE":true,"PRESUMABLY":true,"PROBABLY":true,"PROVIDES":true,"Q":true,"QUE":true,"QUITE":true,"QV":true,"R":true,"RATHER":true,"RD":true,"RE":true,"REALLY":true,"REASONABLY":true,"REGARDING":true,"REGARDLESS":true,"REGARDS":true,"RELATIVELY":true,"RESPECTIVELY":true,"RIGHT":true,"S":true,"SAID":true,"SAME":true,"SAW":true,"SAY":true,"SAYING":true,"SAYS":true,"SECOND":true,"SECONDLY":true,"SEE":true,"SEEING":true,"SEEM":true,"SEEMED":true,"SEEMING":true,"SEEMS":true,"SEEN":true,"SELF":true,"SELVES":true,"SENSIBLE":true,"SENT":true,"SERIOUS":true,"SERIOUSLY":true,"SEVEN":true,"SEVERAL":true,"SHALL":true,"SHE":true,"SHOULD":true,"SHOULDN'T":true,"SINCE":true,"SIX":true,"SO":true,"SOME":true,"SOMEBODY":true,"SOMEHOW":true,"SOMEONE":true,"SOMETHING":true,"SOMETIME":true,"SOMETIMES":true,"SOMEWHAT":true,"SOMEWHERE":true,"SOON":true,"SORRY":true,"SPECIFIED":true,"SPECIFY":true,"SPECIFYING":true,"STILL":true,"SUB":true,"SUCH":true,"SUP":true,"SURE":true,"T":true,"T'S":true,"TAKE":true,"TAKEN":true,"TELL":true,"TENDS":true,"TH":true,"THAN":true,"THANK":true,"THANKS":true,"THANX":true,"THAT":true,"THAT'S":true,"THATS":true,"THE":true,"THEIR":true,"THEIRS":true,"THEM":true,"THEMSELVES":true,"THEN":true,"THENCE":true,"THERE":true,"THERE'S":true,"THEREAFTER":true,"THEREBY":true,"THEREFORE":true,"THEREIN":true,"THERES":true,"THEREUPON":true,"THESE":true,"THEY":true,"THEY'D":true,"THEY'LL":true,"THEY'RE":true,"THEY'VE":true,"THINK":true,"THIRD":true,"THIS":true,"THOROUGH":true,"THOROUGHLY":true,"THOSE":true,"THOUGH":true,"THREE":true,"THROUGH":true,"THROUGHOUT":true,"THRU":true,"THUS":true,"TO":true,"TOGETHER":true,"TOO":true,"TOOK":true,"TOWARD":true,"TOWARDS":true,"TRIED":true,"TRIES":true,"TRULY":true,"TRY":true,"TRYING":true,"TWICE":true,"TWO":true,"U":true,"UN":true,"UNDER":true,"UNFORTUNATELY":true,"UNLESS":true,"UNLIKELY":true,"UNTIL":true,"UNTO":true,"UP":true,"UPON":true,"US":true,"USE":true,"USED":true,"USEFUL":true,"USES":true,"USING":true,"USUALLY":true,"UUCP":true,"V":true,"VALUE":true,"VARIOUS":true,"VERY":true,"VIA":true,"VIZ":true,"VS":true,"W":true,"WANT":true,"WANTS":true,"WAS":true,"WASN'T":true,"WAY":true,"WE":true,"WE'D":true,"WE'LL":true,"WE'RE":true,"WE'VE":true,"WELCOME":true,"WELL":true,"WENT":true,"WERE":true,"WEREN'T":true,"WHAT":true,"WHAT'S":true,"WHATEVER":true,"WHEN":true,"WHENCE":true,"WHENEVER":true,"WHERE":true,"WHERE'S":true,"WHEREAFTER":true,"WHEREAS":true,"WHEREBY":true,"WHEREIN":true,"WHEREUPON":true,"WHEREVER":true,"WHETHER":true,"WHICH":true,"WHILE":true,"WHITHER":true,"WHO":true,"WHO'S":true,"WHOEVER":true,"WHOLE":true,"WHOM":true,"WHOSE":true,"WHY":true,"WILL":true,"WILLING":true,"WISH":true,"WITH":true,"WITHIN":true,"WITHOUT":true,"WON'T":true,"WONDER":true,"WOULD":true,"WOULDN'T":true,"X":true,"Y":true,"YES":true,"YET":true,"YOU":true,"YOU'D":true,"YOU'LL":true,"YOU'RE":true,"YOU'VE":true,"YOUR":true,"YOURS":true,"YOURSELF":true,"YOURSELVES":true,"Z":true,"ZERO":true,};

//modules included
var http = require('http');
var natural = require('natural');
var lemmer = require('lemmer');
var express = require('express');
var router = express.Router();
var TOI = require('./TOI');
var resource = require('./resource');
var resource1 = require('./r2');
var words = require('../models/words');
var articles = require('../models/articles');
var bigrams = require('../models/bigrams');

router.get('/',function(req,res){

	res.render('index');

});

var ArticleDownloader = require('./ArticleDownloader');
var threads = [];

var ranges = [
	[1,1,2,1], // 1
	[1,2,2,2], // 2
	[1,3,2,3], // 3
	[1,4,2,4], // 4
	[1,5,2,5], // 5
	[1,6,2,6], // 6
	[1,7,2,7], // 7
	[1,8,2,8]  // 8
];

var threadStatus = [];

function destroyThreads() {
	for(var i=0; i<threads.length ; i++) {
	console.log('destroyThreads');
		threads[i].terminateThread();
	}
	threads = [];
}

router.post('/danger/start',function(req,res){

	destroyThreads();

	threadStatus = [];

	for(var i=0; i<8 ; i++){

		threads.push(new ArticleDownloader(
			{
				day:ranges[i][0],
				month:ranges[i][1]
			},
			{
				day:ranges[i][2],
				month:ranges[i][3]
			}
		));

		threadStatus.push(true);

		threads[i].createThread(function(){
			threadStatus[i] = false;
		});


	}

	for(var i=0; i < 8 ; i++){
		threads[i].startDownloading();
	}

});

router.post('/danger/stop',function(req,res){

	var data = [];

	for(var i=0; i<8 ; i++) {

		data.push({
			count: threads[i].getArticleCount(),
			status: threadStatus[i]
		});

	}

	destroyThreads();

	res.send(JSON.stringify(data));

});

router.post('/danger/threadStatus',function(req,res){

	var data = [];

	for(var i=0; i<8 ; i++) {

		data.push({
			count: threads[i].getArticleCount(),
			status: threadStatus[i]
		});

	}

	console.log(data);

	res.send(JSON.stringify(data));

});

//get request to get the article links on any specified day and month
router.get('/getLinks/:month/:day',function(req,res){

	//month =  the value of month entered in the url
	var month = Number(req.params.month);

	//day =  the value of day entered in the url
	var day = Number(req.params.day);


	//Function call to get the article links
	TOI.getArticleLinks({

		//sets the arguments
		month:month,
		day:day
	},function(links){
		//Displays all the links present in any given day separated by newline
		res.send(links.join('<br>'));
	});

});


//get request to get the article of any specified day and month
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



router.get('/probability/words',function(req,res){

	var totalFrequency = 0;
	words.find({},function(err,w){

		var len = w.length;
		for(var i=0 ; i<len ; i++) totalFrequency += w[i].frequency;

		var wordPointer;
		function nextWord() {
			if(++wordPointer >= len)
				res.send('Process done!');
			else{
				calcprobability()
			}
		}

		function calcprobability(argument) {
			w[wordPointer].probability = (w[wordPointer].frequency * 1.0) / totalFrequency;
			w[wordPointer].save(function(err){
				if(err) console.log(err);
				console.log(w[wordPointer].probability);
				nextWord();
			});
		}

		wordPointer = -1;
		nextWord();

	});

});

router.get('/probability/bigrams',function(req,res){

	var totalFrequency = 0;
	bigrams.find({},function(err,b){

		var len = b.length;
		for(var i=0 ; i<len ; i++) totalFrequency += b[i].frequency;

		var bigramPointer;
		function nextBigram() {
			if(++bigramPointer == len)
				res.send('Process done!');
			else
				calcprobability()
		}

		function calcprobability(argument) {
			b[bigramPointer].probability = b[bigramPointer].frequency / totalFrequency;
			b[bigramPointer].save(function(err){
				if(err) console.log(err);
				nextBigram();
			});
		}

		bigramPointer = -1;
		nextBigram();

	});

});

router.get('/PMI',function(req,res){

	bigrams.find({},function(err,b){

		var len = b.length;

		var bigramPointer;
		function nextBigram() {
			if(++bigramPointer == len)
				res.send('Process done!');
			else
				calcprobability()
		}

		function calcprobability(argument) {
			//console.log(b[bigramPointer].first,b[bigramPointer].second);
			words.findOne({word:b[bigramPointer].first},function(err,first){
				words.findOne({word:b[bigramPointer].second},function(err,second){
					if(first && second) {						
						b[bigramPointer].p = b[bigramPointer].frequency/ (first.frequency * second.frequency);

						b[bigramPointer].PMI = Math.log(b[bigramPointer].probability / (first.probability * second.probability));
							//console.log(b[bigramPointer].PMI);
						b[bigramPointer].save(function(err){
							if(err) console.log(err);
							nextBigram();
						});
					} else {
						nextBigram();
					}
				});
			});
		}

		bigramPointer = -1;
		nextBigram();

	});

});
router.get('/P',function(req,res){

	bigrams.find({}).sort({PMI:-1}).exec(function(err,b){

		for(var i=0;i<b.length;i++){
			// if(b[i].PMI<){
				console.log(b[i].PMI,b[i].first,b[i].second,b[i].p);

			//}
		}
		res.send("YAY!");
	});

});

// day starts from 1
// month starts from 1


router.get('/test',function(req,res){
	var dw = require('./ArticleDownloaderResource');
	var obj = new dw;
	var obj2 = new dw;
	obj.startDownloading(

		{
			day:1,
			month:1
		},
		{
			day:2,
			month:1
		},
		function(){
			res.send("its done");
		}

		);

	obj2.startDownloading(

		{
			day:1,
			month:2
		},
		{
			day:2,
			month:2
		},
		function(){
			res.send("its done");
		}

		);
	// dw.startDownloading(
	// 	{
	// 		day:1,
	// 		month:1
	// 	},
	// 	{
	// 		day:2,
	// 		month:1
	// 	},
	// 	function(){
	// 		res.send("its done");
	// 	}
	// 	);
	// resource.downloadAtricles(
	// 	{
	// 		day:1,
	// 		month:1
	// 	},
	// 	{
	// 		day:2,
	// 		month:1
	// 	},
	// 	function(){
	// 		res.send("its done");
	// 	});

	// resource1.downloadAtricles(
	// 	{
	// 		day:1,
	// 		month:2
	// 	},
	// 	{
	// 		day:2,
	// 		month:2
	// 	},
	// 	function(){
	// 		res.send("its done");
	// 	});


});

router.get('/test2',function(req,res){
	resource.parseArticles(function(){
		res.send("its done");
	});
});

router.get('/test3',function(req,res){

	var ArticleDownloader = require('./ArticleDownloader');

	var ar1 = new ArticleDownloader(
		{
			day:1,
			month:1
		},
		{
			day:2,
			month:1
		}
	);

	var ar2 = new ArticleDownloader(
		{
			day:1,
			month:2
		},
		{
			day:2,
			month:2
		}
	);

	var ar3 = new ArticleDownloader(
		{
			day:1,
			month:3
		},
		{
			day:2,
			month:3
		}
	);

	var ar4 = new ArticleDownloader(
		{
			day:1,
			month:4
		},
		{
			day:2,
			month:4
		}
	);

	var ar5 = new ArticleDownloader(
		{
			day:1,
			month:5
		},
		{
			day:2,
			month:5
		}
	);

	var ar6 = new ArticleDownloader(
		{
			day:1,
			month:6
		},
		{
			day:2,
			month:6
		}
	);

	var ar7 = new ArticleDownloader(
		{
			day:1,
			month:7
		},
		{
			day:2,
			month:7
		}
	);

	var ar8 = new ArticleDownloader(
		{
			day:1,
			month:8
		},
		{
			day:2,
			month:8
		}
	);

	ar1.createThread(function(){
		res.send("DONE");
	});

	ar2.createThread(function(){
		res.send("DONE");
	});

	ar3.createThread(function(){
		res.send("DONE");
	});

	ar4.createThread(function(){
		res.send("DONE");
	});

	ar5.createThread(function(){
		res.send("DONE");
	});

	ar6.createThread(function(){
		res.send("DONE");
	});

	ar7.createThread(function(){
		res.send("DONE");
	});

	ar8.createThread(function(){
		res.send("DONE");
	});

	ar1.startDownloading();
	ar2.startDownloading();
	ar3.startDownloading();
	ar4.startDownloading();
	ar5.startDownloading();
	ar6.startDownloading();
	ar7.startDownloading();
	ar8.startDownloading();

	// setTimeout(function(){
	// 	ar1.terminateThread(function(){
	// 		ar2.terminateThread(function(){
	// 			console.log(ar1.getArticleCount(),ar2.getArticleCount());
	// 		});
	// 	});
	// },30000);

});

router.get('/test4',function(req,res){
	var Worker = require('webworker-threads').Worker;
	var t1 = new Worker(function() {
	    this.onmessage = function (event) {
	      postMessage(event.data);
	    }
	});
	
	t1.onmessage = function (event) {
	    	console.log('t1');
	    	resource.downloadAtricles(
			{
				day:1,
				month:1
			},
			{
				day:2,
				month:1
			},
			function(){
				res.send("its done");
			});
	};


	var t2 = new Worker(function() {
	    this.onmessage = function (event) {
	      postMessage(event.data);
	    }
	});
	
	t2.onmessage = function (event) {
	    	console.log('t2');
	    	resource1.downloadAtricles(
			{
				day:1,
				month:2
			},
			{
				day:2,
				month:2
			},
			function(){
				res.send("its done");
			});
	};

	t1.postMessage(40);
	t2.postMessage(40);
	
});


module.exports = router;












