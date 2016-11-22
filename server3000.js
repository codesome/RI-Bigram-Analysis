var app = require('./app');

var http = require('http');

var port = 3000;

global.categoryName = "Business";
global.articleQuery = {category: "Business"};
global.wordsource ="../models/words_Business";
global.bigramssource = "../models/bigrams_Business";


http.createServer(app).listen(port,function(){
    console.log('************************************');
    console.log('** RI-Word-Frequency * Port: '+port+' **');
    console.log('************************************');
});

module.exports = app;