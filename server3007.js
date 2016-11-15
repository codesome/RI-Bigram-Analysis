var app = require('./app');

var http = require('http');

var port = 3007;

global.ranges = [ // done
	// [30,1,31,1]  // 8
];

http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;