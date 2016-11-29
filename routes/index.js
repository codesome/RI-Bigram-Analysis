//modules included
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

router.get('/',function(req,res){

	res.render('index');

});

var ArticleDownloader = require('./ArticleDownloader');
var threads = [];

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

	for(var i=0; i<ranges.length ; i++){

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

	for(var i=0; i < threads.length ; i++){
		threads[i].startDownloading();
	}

});

router.post('/danger/parse',function(){
	resource.parseArticles(require(wordsource),require(bigramssource),articleQuery,categoryName,function(){
		console.log("Done",categoryName);
	})

});

router.post('/backup',function(req,res){
	console.log('came');
	articles.find({},function(err,a){
	console.log('articles fetched');

		var fs = require('fs');

		var d = new Date();

		var fileName = 'backup/backup-' + d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + '-' + d.getHours() + '-' + d.getMinutes() + '.json';

		fs.writeFile(fileName, JSON.stringify(a), function(err){
		  if (err) throw err;
		  console.log('It\'s saved!');
		  res.send('saved');
		});

	});


});

router.get('/probability/words',function(req,res){

	var words = require(wordsource);
	var totalFrequency = 0;
	words.find({},function(err,w){

		var len = w.length;
		for(var i=0 ; i<len ; i++) totalFrequency += w[i].frequency;

		var wordPointer;
		function nextWord() {
			if(++wordPointer >= len)
				console.log(categoryName," done");
			else{
				calcprobability()
			}
		}

		function calcprobability(argument) {
			w[wordPointer].probability = (w[wordPointer].frequency * 1.0) / totalFrequency;
			w[wordPointer].save(function(err){
				if(err) console.log(err);
				nextWord();
			});
		}

		wordPointer = -1;
		nextWord();

	});

});

router.get('/probability/bigrams',function(req,res){

	var bigrams = require(bigramssource);
	var totalFrequency = 0;
	bigrams.find({}).skip(skip).limit(50000).exec(function(err,b){

		var len = b.length;
		for(var i=0 ; i<len ; i++) totalFrequency += b[i].frequency;

		var bigramPointer;
		function nextBigram() {
			if(++bigramPointer == len)
				console.log('Process done!',categoryName);
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

	console.log('Starting',categoryName);
	var words = require(wordsource);
	var bigrams = require(bigramssource);
	bigrams.find({},function(err,b){

		var len = b.length;

		var bigramPointer;
		function nextBigram() {
			if(++bigramPointer == len)
				console.log('Process done!',categoryName);
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

module.exports = router;












