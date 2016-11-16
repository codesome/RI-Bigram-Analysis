var app = require('./app');

var http = require('http');

var port = 3001;

global.categoryName = "India";
global.articleQuery = {category: "India"};
global.wordsource ="../models/words_India";
global.bigramssource = "../models/bigrams_India";


http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;