/*
	Definition: Brushing your teeth, taking out the garbage, using up pet litter

	A Definition is a declaration of some thing that you do/use a lot

*/


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DefinitionSchema = new Schema({
	name: String,
	description: String,
	startDate: { type: Date, default: Date.now },
	category: { type: String, enum: ['Chore', 'Purchase', 'Shrinking']}
})

module.exports = mongoose.model('Definition', DefinitionSchema);