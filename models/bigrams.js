var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bigramsSchema = new Schema({

	first: String,

	second: String,

	frequency: Number,

	probability: { type: Number,default:0 }

});

var bigrams = mongoose.model( 'bigrams' , bigramsSchema );

module.exports = bigrams;
