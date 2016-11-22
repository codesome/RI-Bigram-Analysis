var app = require('./app');

var http = require('http');

var port = 3002;

global.categoryName = "Life";
global.articleQuery = {category: "Life "};
global.wordsource ="../models/words_Life";
global.bigramssource = "../models/bigrams_Life";


http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;