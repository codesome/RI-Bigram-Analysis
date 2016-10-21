var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bigramsSchema = new Schema({

	first: String,

	second: String,

	frequency: Number,

	probability: { type: Number,default:0 },

	PMI: Number,

	p:Number



});

var bigrams = mongoose.model( 'bigrams' , bigramsSchema );

module.exports = bigrams;
