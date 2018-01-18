/*
	Instance: This box of cereal, this bag of dog food

	An instance is a unique, tangible, finite resource. 
	You get it at some point, you use it some number of times, and then it's all used up, and you need a new one.


*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InstanceSchema = new Schema({
	definitionID: String, 	//Foreign key to the parent definition
	name: String,
	isUsedUp: Boolean,
	startDate: { type: Date, default: Date.now },
	endDate: Date
})

module.exports = mongoose.model('Instance', InstanceSchema);