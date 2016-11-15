var app = require('./app');

var http = require('http');

var port = 3006;

global.ranges = [
	[24,1,24,1], // 6 478
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;