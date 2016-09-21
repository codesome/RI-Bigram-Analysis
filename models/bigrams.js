var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bigramsSchema = new Schema({

	first: String,

	second: String,

	frequency: Number,

	probability: Number

});

var bigrams = mongoose.model( 'bigrams' , bigramsSchema );

module.exports = bigrams;
