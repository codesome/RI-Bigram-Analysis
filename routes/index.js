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

router.post('/danger/stop',function(req,res){

	var data = [];

	for(var i=0; i<threads.length ; i++) {

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

	for(var i=0; i<threads.length ; i++) {

		data.push({
			count: threads[i].getArticleCount(),
			status: threadStatus[i]
		});

	}

	// res.setHeaders('Access-Control-Allow-Origin','*');
	// res.setHeaders('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');

	res.send(JSON.stringify(data));

});

module.exports = router;












