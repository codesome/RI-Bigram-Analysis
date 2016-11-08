var app = require('./app');

var http = require('http');

var port = 3003;

global.ranges = [
	[25,1,28,1], // 7
	[29,1,31,1]  // 8
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;