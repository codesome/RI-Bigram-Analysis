var app = require('./app');

var http = require('http');

var port = 3000;

global.ranges = [
	[1,1,2,1], // 1
	[1,2,2,2], // 2
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;