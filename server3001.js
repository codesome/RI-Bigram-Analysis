var app = require('./app');

var http = require('http');

var port = 3001;

global.ranges = [
	[20,1,20,1], // 3
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;