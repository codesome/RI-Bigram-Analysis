var app = require('./app');

var http = require('http');

var port = 3003;

global.ranges = [
	[1,7,2,7], // 7
	[1,8,2,8]  // 8
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;