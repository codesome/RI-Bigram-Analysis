var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var wordsSchema = new Schema({
	
	word: String,
	
	frequency: Number,

});

var words = mongoose.model( 'words' , wordsSchema );

module.exports = words;
