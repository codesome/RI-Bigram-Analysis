var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articlesSchema = new Schema({
	
	text: String,
	
	index: Number,

	url: String,

	category: String,

	ArticleID: String,

	date: {
	
		Day: Number,
	
		Month: Number, 
	
		Year:Number
	
	}

});

var articles = mongoose.model( 'articles' , articlesSchema );

module.exports = articles;
