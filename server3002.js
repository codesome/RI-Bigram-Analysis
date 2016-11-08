var app = require('./app');

var http = require('http');

var port = 3002;

global.ranges = [
	[17,1,20,1], // 5
	[21,1,24,1], // 6
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;