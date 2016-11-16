var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var wordsSchema = new Schema({
	
	word: String,
	
	frequency: Number,

	probability: { type: Number,default:0}

});

wordsSchema.index({ word: 1 }, { unique: true });

var words = mongoose.model( 'words_India' , wordsSchema );

module.exports = words;
