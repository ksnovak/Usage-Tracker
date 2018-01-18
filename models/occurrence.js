/*
	Occurrence: Used some oil today, took out the trash today

*/


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OccurrenceSchema = new Schema({
	instanceID: String,		//Foreign key to the parent instance
	triggerDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Occurrence', OccurrenceSchema);