var app = require('./app');

var http = require('http');

var port = 3003;

global.ranges = [
	// some problem with 25 - link position 401
	[28,1,28,1], // 7 402
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;