var app = require('./app');

var http = require('http');

var port = 3001;

global.ranges = [
	[9,1,12,1], // 3
	[13,1,16,1], // 4
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;