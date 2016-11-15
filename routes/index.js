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

router.post('/danger/threadStatus',function(req,res){

	var data = [];

	for(var i=0; i<threads.length ; i++) {

		data.push({
			count: 0,
			status: threadStatus[i]
		});

	}

	res.send(JSON.stringify(data));

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

router.get('/t',function(req,res){

	TOI.getArticleLinks({
		day: 19,
		month: 1
	},function(l){
		var s = '';
		for(var i=0; i<l.length ; i++) {
			s += i + ' .<a target="_blank" href="'+ l[i] +'">' + l[i] + '</a><br>';
		}
		res.send(s);
	});

});

module.exports = router;












