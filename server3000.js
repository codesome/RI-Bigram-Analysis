var app = require('./app');

var http = require('http');

var port = 3000;

global.categoryName = "City";
global.articleQuery = {category: "City"};
global.wordsource ="../models/words_City";
global.bigramssource = "../models/bigrams_City";


http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;