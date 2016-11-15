var app = require('./app');

var http = require('http');

var port = 3005;

global.ranges = [
	[16,1,16,1], // 4 327
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;