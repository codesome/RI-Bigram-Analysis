var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var wordsSchema = new Schema({
	
	word: String,
	
	frequency: Number,

	probability: { type: Number,default:0}

});

// wordsSchema.index({ word: 1 });

var words = mongoose.model( 'words_Business' , wordsSchema );

module.exports = words;
