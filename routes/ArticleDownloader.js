var resource = require('./ArticleDownloaderResource');
var Worker = require('webworker-threads').Worker;

class ArticleDownloader	{

	constructor(startDate,endDate){

		this.startDate = startDate;
		this.endDate = endDate;

		this.inProgress = false;
		this.workerThread = null;
		this.downloader = new resource;


	}

	createThread(cb){
		if(!this.workerThread){

			var This = this;

			this.workerThread = new Worker(function() {
			    this.onmessage = function (event) {
			    	postMessage(event.data);
			    }
			});

			this.workerThread.onmessage = function (event) {
				var msg = event.data;

		    	if(msg == 'start'){
		    		This.downloader.startDownloading(
		    			This.startDate,
		    			This.endDate,
		    			cb
		    		);

		    	}
			}

		}

	}


	startDownloading(){
		if(!this.inProgress)
		{
			this.inProgress = true;
			this.workerThread.postMessage('start');

		}
	}

	terminateThread(cb) {
		this.workerThread.terminate();
		this.workerThread = null;
		this.inProgress = false;
		if(cb) cb();
	}

}

module.exports = ArticleDownloader;