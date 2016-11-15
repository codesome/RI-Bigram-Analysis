var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articlesSchema = new Schema({
	
	text: String,
	
	index: Number,

	url: String,

	category: String,

	ArticleID: String,

	parsed: {type: Boolean, default: false},

	date: {
	
		Day: Number,
	
		Month: Number, 
	
		Year:Number
	
	}

});

articlesSchema.index({ ArticleID:1 }, { unique: true });

var articles = mongoose.model( 'articles' , articlesSchema );

module.exports = articles;
