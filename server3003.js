var app = require('./app');

var http = require('http');

var port = 3003;

global.categoryName = "World";
global.articleQuery = {category: "World"};
global.wordsource ="../models/words_World";
global.bigramssource = "../models/bigrams_World";


http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;