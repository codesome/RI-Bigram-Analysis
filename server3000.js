var app = require('./app');

var http = require('http');

var port = 3000;

global.ranges = [
	[1,1,4,1], // 1
	[5,1,8,1], // 2
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;