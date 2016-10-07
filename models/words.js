var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var wordsSchema = new Schema({
	
	word: String,
	
	frequency: Number,

	probability: { type: Number,default:0}

});

var words = mongoose.model( 'words' , wordsSchema );

module.exports = words;
