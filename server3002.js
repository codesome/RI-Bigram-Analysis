var app = require('./app');

var http = require('http');

var port = 3002;

global.ranges = [
	[1,5,2,5], // 5
	[1,6,2,6], // 6
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;