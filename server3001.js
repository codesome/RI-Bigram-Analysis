var app = require('./app');

var http = require('http');

var port = 3001;

global.ranges = [
	[1,3,2,3], // 3
	[1,4,2,4], // 4
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;