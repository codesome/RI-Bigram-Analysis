var app = require('./app');

var http = require('http');

var port = 3004;

global.ranges = [ // done
	// [7,1,8,1], // 2 320
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;