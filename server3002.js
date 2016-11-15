var app = require('./app');

var http = require('http');

var port = 3002;

global.ranges = [
	// [18,1,20,1], // 5 427
	[27,1,27,1], // 7 402

];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;